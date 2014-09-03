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



+++Tutorial 3+++
