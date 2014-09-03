JS tut javascript road trip Codeschool


http://campus.codeschool.com/courses/shaping-up-with-angular-js/level/1/section/2/our-first-controllerd

////////////////////////////////
Hier hab ich aufgehört http://campus.codeschool.com/courses/shaping-up-with-angular-js/level/2/section/1/video/1

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
+++Tutorial 3+++
