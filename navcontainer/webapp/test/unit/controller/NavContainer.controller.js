/*global QUnit*/

sap.ui.define([
	"navcontainer/controller/NavContainer.controller"
], function (Controller) {
	"use strict";

	QUnit.module("NavContainer Controller");

	QUnit.test("I should test the NavContainer controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
