/*global QUnit*/

sap.ui.define([
	"exceldownload/controller/ExcelDownload.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ExcelDownload Controller");

	QUnit.test("I should test the ExcelDownload controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
