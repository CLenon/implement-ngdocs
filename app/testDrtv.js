/**
 * @ngdoc directive
 * @name  directives.testDrtv
 * @description
 * This is the main app directive  for the jlweddingplaner comingsoon page.
 */
(function(){
	'use strict';

	function testDrtv(){
		return {
			restrict: 'A'
		}
	}

	angular
		.module('app')
		.directive('testDrtv', testDrtv);
})();