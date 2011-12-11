console.log(' ');
console.log('/************************OBJETOS******************************/');

console.log(' ');
console.log('Simple object');
var fob = {
	name: 'Simple',
	surname: 'Object',
	'prueba': 'Hellow',
	"hellow": 'Bye'
}
console.log(fob);

console.log(' ');
console.log('Simple object with key names forced to use quotes');
var sob = {
	name: 'Simple',
	surname: 'Object',
	'yes or no': 'yes',
	'@2323%$%/&': 'no'
}
console.log(sob);

console.log(' ');
console.log('Properties and methods');
var tob = {
	name: 'Simple',
	getName: function(){
		return this.name;
	}
}
console.log(tob);
console.log(tob.getName());

console.log(' ');
console.log('Elements');
var aob = ['Simple',function(){
		return this[0];
	}
];
console.log(aob);
console.log(aob[1](0));

console.log(' ');
console.log('Hashes and asociative arrays');
console.log('If you want asociative arrays in Javascript use objects.');

console.log(' ');
console.log('Accesing objects properties');
console.log('There are two ways to access an object element trogth brackets and trougth point');
console.log('Examples: man["gender"] and man.gender is the same');
var hero = {
	breed: 'turtle',
	ocupation: 'ninja'
}
console.log(hero['breed']);
console.log(hero.ocupation);
console.log(' ');
console.log('Accesing a non defined elment '+hero.age);

console.log(' ');
console.log('Objects can contain any data including other objects');
var book = {
	title: 'Emmanuell',
	pages: '120',
	author: {
		name: 'Emmanuell',
		surname: 'Alvarez',
		age: 25
	}
}
console.log(book);
console.log(book.author.name);
console.log(book.author['name']);
console.log(book['author']['name']);
console.log(book['author'].name);

console.log(' ');
console.log('Objects key name prestroed in a variable.');
var key = 'author';
var skey = 'name';
console.log(book[key][skey]);

console.log(' ');
console.log('Calling methods from objects with functions');
var bookwf = {
	title: 'Emmanuell',
	pages: '120',
	outer: function(x){
		console.log(x+this.author.name);
	},
	author: {
		name: 'Emmanuell',
		surname: 'Alvarez',
		age: 25,
		iner: function(y){
			console.log(y+bookwf.pages);
		}
	}
}
console.log(bookwf);
bookwf.outer(1);
bookwf.author.iner(2);
bookwf.author['iner'](1);
bookwf['author']['iner'](2);
bookwf['author'].iner(1);

console.log(' ');
console.log('Objects key name prestroed in a variable with functions.');
var key = 'author';
var skey = 'iner';
bookwf[key][skey](2);

console.log(' ');
console.log('Ading properties and methods.');
var heroProp = {};
console.log(typeof heroProp.breed);
heroProp.breed = 'Turtle';
heroProp.name = 'Leonardo';
heroProp.sayName = function(){console.log(heroProp.name)}
heroProp.sayName();

console.log(' ');
console.log('Using "this".');
var heroXe = {
	name: 'Rafaelo',
	sayName: function(){
		console.log(this.name);
	}
}
heroXe.sayName();

console.log(' ');
console.log('Global object.');
function Hero3(){
	this.name = 'Emmanuell';
}
var h = Hero3();
console.log(typeof h);
//console.log(h.name); //Error
console.log(name);
console.log(window.name);

console.log(' ');
console.log(parseInt('101 dalmates'));
console.log(window.parseInt('101 dalmates'));

console.log(' ');
console.log('Constructors.');
function Hero(){
	this.ocupation = 'Ninja';
}
var hero3 = new Hero();
console.log(hero3.ocupation);

console.log(' ');
console.log('Constructors with params.');
function Hero2(name){
	this.name = name;
	this.ocupation = 'Ninja';
	this.sayName = function(){
		console.log('Im: '+this.name+' and ocupation: '+this.ocupation);
	}
}
var hero4 = new Hero2('Emmanuell');
var hero5 = new Hero2('LMFAO');
hero4.sayName();
hero5.sayName();

console.log(' ');
console.log('Constructor property.');
console.log(hero4.constructor);
var hero6 = new hero4.constructor('La llamada');
hero6.sayName();
var o = {};
console.log(o.constructor);

console.log(' ');
console.log('Instance of');
function Heromix(){};
var hm1 = new Heromix();
var oo = {};
console.log(hm1 instanceof Heromix);
console.log(hm1 instanceof Object);
console.log(oo  instanceof Object);

console.log(' ');
console.log('Functions that returns objects');
function factory(name){
	return {
		name: name
	}
}
var ofac = factory('Hello');
console.log(ofac.name);
console.log(ofac.constructor);

console.log(' ');
console.log('Constructors that returns objects');
function C2(){
	this.a = 'AAA';
	return {
		b:'BBBBBBB'
	}
}
var cc2 = new C2();
console.log(cc2.b);
console.log(cc2.a);

console.log(' ');
console.log('Passing objects');
var original = {prueba:'Aqyu'}
var copy = original;
console.log(original.prueba);
console.log(copy.prueba);
copy.prueba = 'Alla';
console.log(original.prueba);
console.log(copy.prueba);

var original1 = {otra:'primero'}
var copier = function copy1(o){
	o.otra = 'segundo0';
}
console.log(original1.otra);
copier(original1);
console.log(original1.otra);

console.log(' ');
console.log('Comparing objects');
var fido = {breed: 'dog'};
var benj = {breed: 'dog'};
console.log(fido==benj);
console.log(fido===benj);
var mydog = fido;
console.log(fido==mydog);
console.log(fido===mydog);
console.log(benj==mydog);
console.log(benj===mydog);

console.log(' ');
console.log('Object');
var xsd = {};
var xsd = new Object();
console.log(o.constructor);
console.log(o.toString());
console.log(o);
console.log(o.valueOf());

console.log(' ');
console.log('Array');
var a = new Array();
var a = [];
a[0]=1;
a[1]=2;
console.log(a);
var a = new Array(1,2,3,4,5,'hellow');
console.log(a);
var a2 = new Array(5);
console.log(a2.valueOf());
console.log(typeof a);
console.log(a.toString());
console.log(a.valueOf());
console.log(a.constructor);

console.log(' ');
console.log('Compare Object Array');
var a = [];
var o = {};
console.log(a.length);
console.log(typeof o.lenngth);
a[0] = 1;
o[0] = 1;
a.prop = 2;
o.prop = 2;
console.log(a[0]);
console.log(o[0]);
console.log(a.prop);
console.log(o.prop);
console.log('Length automatic updated except for the non numeric indexes: '+a.length);
a.length = 20;
console.log(a.valueOf());
a.length = 0;
console.log(a);

console.log(' ');
console.log('Interesting array methods');
var aim = [9,4,5,6,8,'prueba'];
console.log(aim);
aim.push('push');
console.log(aim);
aim.pop();
console.log(aim);
aim.sort();
console.log(aim);
console.log(aim.join(' Emmanuell '));
console.log(aim.slice(1,3));
console.log(aim.slice(0,4));
console.log(aim);
console.log(aim.splice(1,3,100,101,102));
console.log(aim);

console.log(' ');
console.log('Functions');
function sum(a,b){return a+b;}
console.log(sum(1,2));
var sum = function(a,b){return a-b;}
console.log(sum(2,1));
var sum = new Function('a','b','return a*b;');
console.log(sum(4,6));
var first = new Function('a,b,c,d,e','return arguments;');
console.log(first(1,2,3,4,5));
var second = new Function('a,b,c,d','e','return arguments;');
console.log(second(1,2,3,4,5));
var third = new Function('a','b,c,d','e','return arguments;');
console.log(third(1,2,3,4,5));

console.log(' ');
console.log('Properties of the Function object');
function myfunc(a,b,c){return true;}
console.log(myfunc.constructor);
console.log(myfunc.length);
function myfunc2(){return myfunc2.caller;}
function callerfun(){return myfunc2();}
console.log(callerfun());

console.log(' ');
console.log('Prototype');
var some_obj = {
	name: 'Ninja',
	say: function(){
		return 'I\'m the supervisor';
	}
}
function F(){}
console.log(typeof F.prototype);
F.prototype = some_obj;
var obj = new F();
console.log(obj.name);
console.log(obj.say());

console.log(' ');
console.log('Methods of the Function object');
function otrafunc(a,b,c){return arguments;}
console.log(otrafunc.toString());


/***************************REGEEXP PENDIENTE***************************************/
var s = 'HelloJavaScriptWorld';
function replaceCallback(match){
	return "_"+match.toLowerCase();
}
console.log(s.replace(/[A-Z]/g,replaceCallback));

var glob;
var re = /(.*)@(.*)\.(.*)/g;
var callback = function(){
	glob = arguments;
	return arguments[1] + ' at ' + arguments[2] + ' dot ' + arguments[3];
}
console.log('eislas@reduno.com.mx'.replace(re,callback));
console.log(glob);

var cvs = '0ne, two , three,four ';
console.log(cvs.split(','));
console.log(cvs.split(/\s*,\s*/));
console.log('text'.replace('t','r'));
console.log('text'.replace(new RegExp('t'),'r'));

/******************************ERRORS*************************/
try{
	iDontExists();
}catch(e){
	console.log(e.name + ' - ' + e.message);
}finally{
	console.log('Siempre me ejecuto error o no');
}
try{
	var total = maybeExists();
	if(total === 0){
		throw new Error('Division by zero!');
	}else{
		console.log(50/total);
	}
}catch(e){
	console.log(e.name + ' - ' + e.message);
}finally{
	console.log('Siempre me ejecuto error o no');
}

var maybeExists = function(){
	return 0;
}
try{
	var total = maybeExists();
	if(total === 0){
		throw new Error('Division by zero!');
	}else{
		console.log(50/total);
	}
}catch(e){
	console.log(e.name + ' - ' + e.message);
}finally{
	console.log('Siempre me ejecuto error o no');
}
var maybeExists = function(){
	return 2;
}
try{
	var total = maybeExists();
	if(total === 0){
		throw new Error('Division by zero!');
	}else{
		console.log(50/total);
	}
}catch(e){
	console.log(e.name + ' - ' + e.message);
}finally{
	console.log('Siempre me ejecuto error o no');
}
var maybeExists = function(){
	return 0;
}
try{
	var total = maybeExists();
	if(total === 0){
		throw new RangeError('Division by zero!');
	}else{
		console.log(50/total);
	}
}catch(e){
	console.log(e.name + ' - ' + e.message);
}finally{
	console.log('Siempre me ejecuto error o no');
}
try{
	throw{
		name: 'MyError',
		message: 'OMG! Something terrible has happened'
	}
}catch(e){
	console.log(e.name + ' - ' + e.message);
}