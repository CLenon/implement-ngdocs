/**
 * @ngdoc controller
 * @name  Opportunity.controller:OpportunityListCtrl
 * @description
 * This is the main controller for the jlweddingplaner comingsoon page.
 * <pre>
 * 		<div data-ng-controller="OpportunityListCtrl as vm"></div>
 * </pre>
 * @author clenon <clendvs@gmail.com>
 */
(function(){
	'use strict';

	function fooController(){
		var vm = this;

		/**		 		 
		 * @ngdoc function
		 * @name Opportunity.controller:getList		 
		 * @param  {string} _name - the foo name
		 * @param  {string} _title - the foo title
		 * @returns {array}			the list of information
		 * @description 
		 * Return the list of information
		 */
		function getList(_name, _title){
		}
	}

	angular
		.module('app')
		.controller('fooController', fooController);
})();