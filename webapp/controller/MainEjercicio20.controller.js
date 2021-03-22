sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "Ejercicio20/Ejercicio20/util/Services",
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, JSONModel, Services) {
		"use strict";

		return Controller.extend("Ejercicio20.Ejercicio20.controller.MainEjercicio20", {
			onInit: function () {
                sap.ui.getCore().getConfiguration().setLanguage("EN");
                this.loadModelProduct();
                
            },
            loadModelProduct: async function(){
                const oResponse = await Services.getProductos();
                const oDataProduct = oResponse[0];

                var oModelProduct = new JSONModel();
                oModelProduct.setData(oDataProduct);
                this.getOwnerComponent().setModel(oModelProduct, "ProductosJSON");
                console.log(oModelProduct);

            },
            elementOnFocus: async function(oEvent){
                var oItem = oEvent.getSource();
                var oBindingContext = oItem.getBindingContext("ProductosJSON");
                var oModel = this.getOwnerComponent().getModel("ProductosJSON");
                var oProductoSeleccionado = oModel.getProperty(oBindingContext.getPath());

                let orderID = oProductoSeleccionado.OrderID;
                let productID = oProductoSeleccionado.ProductID;
                

                const oResponse = await Services.getProductoSeleccionado(orderID, productID);

                const oDataProduct = oResponse[0];
                var oModelProduct = new JSONModel();
                oModelProduct.setData(oDataProduct);

                this.getOwnerComponent().setModel(oModelProduct, "ProductoSeleccionadoJSON");
                console.log(oModelProduct);

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteVista2");
            }
		});
	});