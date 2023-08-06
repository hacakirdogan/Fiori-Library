/*global QUnit*/

sap.ui.define([
	"analytic-map/controller/AnalyticMap.controller"
], function (Controller) {
	"use strict";

	QUnit.module("AnalyticMap Controller");

	QUnit.test("I should test the AnalyticMap controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
