'use strict';
var app = angular.module('store', []);

app.directive('productTitle', function(){

	return {
	
		restrict: 'E',
		templateUrl: 'product-title.html'
	
	};

});

app.controller('StoreController', ['$scope', function($scope){

	var products = [
	{
	
		name: 'Mouse and Keyboard Wireless',
		price: '150,00',
		description: 'Nice product',
		images: [],
		reviews: [
		{
			stars: 5,
			body: 'I love this product',
			author: 'Cristiano ronaldo',
		},
		{
			stars: 1,
			body: 'This product sucks',
			author: 'Lionel Messi',
		}
		]
	}
	];
	
	$scope.products = products;

}]);
