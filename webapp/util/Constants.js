sap.ui.define([],
    
    function() {
    "use strict";
    return {
        model: {
            I18N: "i18n",
        },
        properties: {
            TOOLS_MODE: {
                name: "/name"
            }
    
        },
        Services:{
            ORDERS_CALL:{
                link: "V3/Northwind/Northwind.svc/Order_Details"
            }
        },
        routes: {
            main: "MainEjercicio20", //se coloca el nombre de la vista en la ruta
            //secondary: "Secondary" <-- INDICA UNA VISTA NUEVA
            secondary: "Vista2"
        }

    };
}, true)