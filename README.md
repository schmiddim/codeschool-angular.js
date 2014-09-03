JS tut javascript road trip Codeschool


http://campus.codeschool.com/courses/shaping-up-with-angular-js/level/1/section/2/our-first-controllerd

////////////////////////////////
Hier hab ich aufgehört http://campus.codeschool.com/courses/shaping-up-with-angular-js/level/2/section/2/video/1

+++Tutorial 1+++
directives - marker on tag

<body ng-controller="StoreContoller"> -> wird auf function StoreController(){} gemapped


-----------------------------------------
1. Download library angularjs.org

2. Bootstrap.min.css

beide reintun ins html


und das app.js (selber machen reintun)
-------------



Modules - logik 

var app= angualar.module('store',[]);
						   ^
						app name  ^ 
								dependencies

Operations : {{"hello" + "you"}} mehr unter docs.angular.js/guide/expression
Directive -> <div ng-dosomething="">

+++Tutorial 2+++
In controllern wird das verhalten definiert
Immer in Closures (LERNEN) wrappen

(function(){
	app.controller('StoreController', function(){
		this.product = gem;
	});
	var gem= {
		name: 'fucki'
		,price: 2.94
		,description:'...'

	}

})();

+++2.1+++
			<div ng-repeat="product in store.products| orderBy:'-price'">
															^
														foreach order by Minus DESC ohne minus aufsteigend

	<img src="{{image.thumbail}}"   funktioniert nicht,weil der browser das bild parallel lädt. 
		->ng-src directive verwenden           <img ng-src="{{product.images[0]}}" />
+++2.6++++


2 way databindung
ng-click directive
<section ng-init="tab = 1">
	<ul class="nav nav-pills">
	<!-- wird ative gesetzt wenn tab =1-->
		<li ng-class="{ active:tab === 1}"> <a href ng-click="tab = 1">description</a></li>
		<li> <a href ng-click="tab = 2">specs</a></li>
		<li> <a href ng-click="tab = 3">reviews</a></li>
	</ul>
	{{tab}}<!--wert von tab wird geupdet und ausgegeben -->
</section>


====================
Panel controller - logik aus dme html ziehen
Panel Controller

-> ng-controller="PanelController as panel"
	app.controller('PanelController', function(){
		this.tab=1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		}

	});

im tab -> ng-click="panel.selectTab(1)"



+++Tutorial 3+++
Form an model binden  2waybinding

<select ng-model="review.stars">
<option value="1">1 star</option>
</select>
<textarea ng-model="review.body"></textarea>


+++3.5+++
reviewForm controller - variablen definieren
immer Ctrl suffix

++++3.8 Validation++++
Html validierung ausschalten: novalidate

benötigtes: required reintun

{{reviewForm.$valid}}


+++4++++
ng-include - html templats einbinden  ng-include="'product-title.html'"

directive schreiben für template

-> die directive
<product-title></product-title>
wird so angelegt

app.directive('proudctTitle', function(){
	return {
		/********/
		restrict: 'E', 	//new Html Element
		templateUrl: 'product-title.html'
	};	

})

keine self-closing tags - gibt ab und an probleme
Attribute Directive <h3 product-title></h3>
app.directive('proudctTitle', function(){
	return {
		/********/
		restrict: 'A', 	//new Html Attribute
		templateUrl: 'product-title.html'
	};	

})

+++4.5 directive mit  controller
app.directive('proudctTitle', function(){
	return {
		/********/
		restrict: 'E', 	//new Html Element
		templateUrl: 'product-title.html'
		controller:function(){
				
				/**********/
			}, 
			controllerAs: 'panels'
	};

	};	

})
 
####5.1 dependencies

directives rausziehen - alles mit products nach products.js

neues module store-products
var app = angular.module('store',[]);
module store hängt app von store-products:
<script src="products.js"></script>

var app = angular.module('store', ['store-products']);

+5.3 Services+
Filter fängt immer mit einem $ an - built-in

$http({method: 'GET', url: '/products.json'});

$http.get('/products.json',{}}); // return Promise - jQuery Tutorial gucken

dependency injection

app.controller('SomeController', ['$http', function($http){

	}]);
	mehrere services
app.controller('SomeController', ['$http','$log', function($http, $log){

	var store=this;

	store.products = [];	//sollte initialisiert werden, weil die seite ohne request rendert
	$http.get('/products.json').success(function(data)){
	//callback hat service context
	store.products = data;
}
	}]);


++outro
links

docs.angular.org -> developer guide

egghead.io  angular screencasts
thinkster.io 

kapeli.com/dash (reference guide) ?mac

meetup.com -> search angualar

