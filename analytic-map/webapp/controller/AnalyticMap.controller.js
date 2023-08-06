sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("analyticmap.controller.AnalyticMap", {
      onInit: function () {},
      onRegionClick: function (e) {
        MessageToast.show("onRegionClick " + e.getParameter("code"));
      },

      onRegionContextMenu: function (e) {
        MessageToast.show("onRegionContextMenu " + e.getParameter("code"));
      },
    });
  }
);
