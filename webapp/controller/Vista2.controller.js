sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("Ejercicio20.Ejercicio20.controller.Vista2", {
			onInit: function () {
                sap.ui.getCore().getConfiguration().setLanguage("EN");
                this.getOwnerComponent().getModel("ProductoSeleccionadoJSON");
            }
            
		});
	});