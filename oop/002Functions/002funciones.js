console.log(' ');
var url = 'http://wwww.localhost.com/src/hellow kitty.php?id=23&wer=hellow kitty';
console.log('Codificar URLS');
console.log(encodeURI(url));
console.log(encodeURIComponent(url));
console.log(decodeURI(url));
console.log(decodeURIComponent(url));

console.log(' ');
console.log('Function eval() ');
console.log(eval('var i = 2; console.log(i);'));

console.log(' ');
var gobal = 1;
function f(){
	var local = gobal+1;
	console.log(local);
}
console.log(gobal);
//console.log(local); undefined
console.log('Scope de funciones');

console.log(' ');
var gobal = 1;
function f(){
	local = gobal+1;
	console.log(local);
}
console.log(gobal);
f();
console.log('Al no utlizar var esta variable se define en el global scope'+local); undefined
console.log('Scope de funciones');

console.log(' ');
var a = 123;
function f2(){
	console.log(a);
	var a = 1;
	console.log(a);
}
f2();
console.log(a);
console.log('Scope de funciones');

console.log(' ');
var a = function(){ console.log('Asignacion de funciones como datos');}
console.log(typeof(a));
a();

console.log(' ');
var a = function(){ console.log('Asignacion de funciones como datos 2');}
var b = a;
delete a;
console.log(typeof(b));
b();

console.log(' ');
function invoke(a,b){
	return a() + b();
}
function one(){
	return 1;
}
function two(){
	return 2;
}
console.log('functions as parameters: '+invoke(one,two));

console.log(' ');
function invoke2(a,b){
	return a() + b();
}
console.log('anonymous functions as parameters: '+invoke(function(){return 1;},function(){return 2;}));

console.log(' ');
function multi(a,b,c){
	var i, arr = [];
	for(i=0; i<3; i++){
		arr[i] = arguments[i]*2;
	}
	return arr;
}
function addOne(a){
	return a+1;
}
console.log(multi(1,2,3));
console.log(addOne(100));
function multi2(a,b,c,callback){
	var i, arr = [];
	for(i=0;i<3;i++){
		arr[i]=callback(arguments[i]*2);
	}
	return arr;
}
console.log(multi2(1,2,3,addOne));
console.log('Funciones callback');

(function(name){
	console.log(' ');
	console.log('Autoexectubal anonymous function '+name)
})('dude')