/*global QUnit*/

sap.ui.define([
	"csv-upload/controller/CSVUpload.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CSVUpload Controller");

	QUnit.test("I should test the CSVUpload controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
