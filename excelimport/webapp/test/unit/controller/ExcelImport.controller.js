/*global QUnit*/

sap.ui.define([
	"excelimport/controller/ExcelImport.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ExcelImport Controller");

	QUnit.test("I should test the ExcelImport controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
