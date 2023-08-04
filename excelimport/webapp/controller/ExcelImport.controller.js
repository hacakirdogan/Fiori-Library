sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("excelimport.controller.ExcelImport", {
      onInit: function () {
        var oTableModel = new JSONModel();
        this.getView().setModel(oTableModel, "tableData");
      },

      uploadButtonPress(oEvent) {
        const model = this.getView().getModel("tableData");
        model.setData(oEvent.getParameter("payload"));
      },
    });
  }
);
