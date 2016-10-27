/**
 * @ngdoc controller
 * @name  controller.fooCtrl
 * @description 
 * 
 * This is the main controller for the jlweddingplaner comingsoon page.
 * <pre>
 * 		<div data-ng-controller="fooController as vm"></div>
 * </pre>
 * @author clenon <clendvs@gmail.com>
 */
(function(){
	'use strict';

	function fooController(){
		var vm = this;

		/**
		 * @ngdoc function
		 * @name functions.foo		 
		 * @param  {string} _name - the foo name
		 * @returns {array}			the list of information
		 * @description 
		 * Return the list of information
		 */
		function foo(_name){
		}
	}

	angular
		.module('app')
		.controller('fooController', fooController);
})();