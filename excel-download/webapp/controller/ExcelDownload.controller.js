sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/export/library",
    "sap/ui/export/Spreadsheet",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, exportLibrary, Spreadsheet) {
    "use strict";

    var EdmType = exportLibrary.EdmType;

    return Controller.extend("exceldownload.controller.ExcelDownload", {
      onInit: function () {},
      createColumnConfig: function () {
        var aCols = [];

        aCols.push({
          property: "vehicle",
          type: EdmType.String,
        });

        aCols.push({
          property: "latitude",
          type: EdmType.String,
        });

        aCols.push({
          property: "longitude",
          type: EdmType.String,
        });

        aCols.push({
          property: "start",
          type: EdmType.Time,
        });

        aCols.push({
          property: "end",
          type: EdmType.Time,
        });

        return aCols;
      },
      onExport: function () {
        var aCols, oRowBinding, oSettings, oSheet, oTable;

        if (!this._oTable) {
          this._oTable = this.byId("vehicles_tab");
        }

        oTable = this._oTable;
        oRowBinding = oTable.getBinding("items");
        aCols = this.createColumnConfig();

        oSettings = {
          workbook: {
            columns: aCols,
            hierarchyLevel: "Level",
          },
          dataSource: oRowBinding,
          fileName: "vehicles_tab.xlsx",
        };

        oSheet = new Spreadsheet(oSettings);
        oSheet.build().finally(function () {
          oSheet.destroy();
        });
      },
    });
  }
);
