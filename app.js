//das ist ein closure - schau dir dás an!
(function(){
	var app = angular.module('store', []);
	app.controller('StoreController', function(){
		this.product = gem;
		this.products = gems;


	});
	var gem= {
		name: 'fucki'
		,price: 2.94
		,description:'...'
		, canPurchase: false
		, soldOut :false
	}

	var gems= [
		{
			name: 'fucki'
			,price: 2.94
			,description: 'description'
			, canPurchase: false
			, soldOut :false
		}
		,{
		name: 'Stein 2 '
		,price: 10
		,description: ' bar'
		, canPurchase: true
		, soldOut :false
		}

		,{
		name: 'Stein 3 '
		,price: 45
		,description: ' fick dich'
		, canPurchase: true
		, soldOut :false
		}




	]

})();