function sum(a,b){
	var c = a+b;
	return c;
}
console.log(' ');
var result = sum(1,2);
console.log('Funcion basica: '+result);

console.log(' ');
var result = sum(1);
console.log('Calling function without parameters set to undefined implicit: '+result);

console.log(' ');
var result = sum(1,2,3,4,5);
console.log('Pasing extra parameters from expected, this are ignored: '+result);

console.log(' ');
function args(){
	return arguments;
}
var result = args(1,2,3,4,'ninja','undefined');
console.log('Implicit array arguments: '+result);

console.log(' ');
function sum2(){
	var total = 0, i, res = 0;
	res = arguments.length;
	for(i=0; i<res; i++){
		total += arguments[i];
	}
	return total;
}
var result = sum2(1,2,3,4);
console.log('Calling function with variable arguments and handle it: '+result);

console.log(' ');
console.log('Uso de parseInt: '+parseInt('12345'));
console.log('Uso de parseInt: '+parseInt('ab34d'));
console.log('Uso de parseInt: '+parseInt('2b34d'));
console.log('Uso de parseInt no aplica como parse float: '+parseInt('1e10'));
console.log('Uso de parseInt con radix: '+parseInt('234',10));
console.log('Uso de parseInt con radix: '+parseInt('FF',16));
console.log('Uso de parseInt con radix: '+parseInt('0377',8));

console.log(' ');
console.log('Uso de parseFloat: '+parseFloat('12345'));
console.log('Uso de parseFloat: '+parseFloat('1.3'));
console.log('Uso de parseFloat: '+parseFloat('1.23l'));
console.log('Uso de parseFloat: '+parseFloat('a.1.23l'));
console.log('Uso de parseFloat: '+parseFloat('123e-3'));
console.log('Uso de parseFloat: '+parseFloat('123e3'));

console.log(' ');
console.log('Uso de isNaN: '+isNaN('NaN'));
console.log('Uso de isNaN: '+isNaN('12'));
console.log('Uso de isNaN: '+isNaN('1.2'));
console.log('Uso de isNaN: '+isNaN(parseFloat('abscd')));

console.log(' ');
console.log('Uso de isFinite: '+isFinite('NaN'));
console.log('Uso de isFinite: '+isFinite(Infinity));
console.log('Uso de isFinite: '+isFinite('12'));
console.log('Uso de isFinite: '+isFinite('1.2'));
console.log('Uso de isFinite: '+isFinite(parseFloat('abscd')));

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

console.log(' ');
console.log('Inner (private) Functions');
console.log((function a(param){
	function b(param){
		return param*2;
	}
	return 'The return is: '+b(param);
})(1));

console.log(' ');
console.log('Functions that returns Functions');
function frf(){
	console.log('dengtro de la funcion');
	return function(){
		console.log('funcion que se regreso como dato');
	}
}
var newFunc = frf();
newFunc();
console.log('Llamando una función retornada por otra de forma anonima');
frf()();

console.log(' ');
console.log('Funciones que se reescriben a si mismas.');
function frf2(){
	console.log('Funcion que se va a reescribir');
	frf2 = function(){
		console.log('funcion sobreescrita');
	}
}
console.log('Primer llamado a funcion antes de que se reescriba');
frf2();
console.log('Segundo llamado a funcion despues de que se reescriba');
frf2();

console.log(' ');
console.log('Beautiful.');
var a = function(){
	function someSetup(){
		console.log('done');
	}
	function actualWork(){
		console.log('Worky-worky');
		return function peroQEPLV(){
			console.log('here we go baby');
		}
	}
	someSetup();
	return actualWork;
}()();
a();

console.log(' ');
console.log('/***************************CLOSURES********************************/');
console.log(' ');

console.log(' ');
console.log('Scope.');
var a = 1;
function x(){
	console.log('Dentro de la funcion: '+a);
	var bx = 2;
	console.log('Dentro de la funcion: '+bx);
}
console.log('Fuera de la funcion: '+a);
//console.log('Fuera de la funcion: '+bx); undefined

console.log(' ');
console.log('Scope chain');

var sch = 0;
function schf(){
	var sch1 = 1;
	function schf1(){
		var sch2 = 2;
		function schf2(){
			var sch3 = 3;
			console.log('All scopes chained: '+sch+' '+sch1+' '+sch2+' '+sch3);
		}
		schf2();
	}
	schf1();
}
schf();

console.log(' ');
console.log('Lexical scope');

var lexi1 = function(){var alexi = 12; lexi2()};
var lexi2 = function(){
	//console.log(alexi);//Undefined
}
lexi2();

console.log(' ');
console.log('Memory scope');
var lexi12 = function(){var alexi2 = 12; lexi22()};
var lexi22 = function(){
	console.log(alexi2);//Undefined
}
var alexi2 = 15;
lexi22();


console.log(' ');
console.log('Breaking the chain with a closure');
console.log('Closure #1');
/*Clousure por return*/
/*El scope de b es privado sin embargo dentro del mismo scope se define de forma lexica la funcion de retorno*/
/*Al devolverla a una variable que se encuentra en el global scope se genera el closure*/
function clou1(){
	var b = 'b';
	return function(){
		return b;
	}
}
var clou1 = clou1();
console.log(clou1());

console.log(' ');
console.log('Closure #2');
/*Clousure por definición global*/
/*Al crear la función y asignarla a una variable global automaticamente se genera el closure, esta función recuerda su scope inicial*/
/*Y a la vez tiene acceso al scope local*/
var n;
(function clou2(){
	var z = 'z';
	n = function clou2In(){
		console.log(z);
	}
})();
n();

console.log(' ');
console.log('Closure #3');
/*Clousure por argumentos*/
/*Al pasar un valor por argumento ese puede ser accedido por nuestra función de closure*/
/*Si hay un cambio posterior en la variable el cambio se verá reflejado al invocar nuestra función demostrando que los closures se evaluan por scope*/
/*Y no por el valor de la variable al momento de la definicion*/
function fclos3(arg){
	var n = function(){
		return arg;
	}
	arg++;
	return n;
}

fclos3i = fclos3(123);
console.log(fclos3i());

console.log(' ');
console.log('Closure in Loop');
/*Clousure en un Loop*/
/*Como vimos en el ejemplo anterior los closures acceden a través del scope es por eso que siempre el valor es 3*/
function fClosLopp(){
	var a = [];
	var i;
	for(i=0; i<3; i++){
		a[i] = function(){
			return i;
		}
	}
	return a;
}
var aClosLoop = fClosLopp();
console.log(aClosLoop[0]());
console.log(aClosLoop[1]());
console.log(aClosLoop[2]());

console.log(' ');
console.log('Closure in Loop SOLVED');
/*Clousure en un Loop SOLVED*/
/*A manera de ejercicio la siguiente definición nos ayudaría a resolver el problema que se muestra en el ejemplo anterior.*/
function fClosLopp2(){
	var a = [];
	var i;
	for(i=0; i<3; i++){
		a[i] = (function(x){
			return function(){
					return x;
			}
		})(i);
	}
	return a;
}
var aClosLoop = fClosLopp2();
console.log(aClosLoop[0]());
console.log(aClosLoop[1]());
console.log(aClosLoop[2]());

console.log(' ');
console.log('Closure in Loop SOLVED 2');
/*Clousure en un Loop SOLVED*/
/*Otra solución a lo anterior sería*/
function fClosLopp3(){
	function makeClosure(x){
		return function(){
			return x;
		}
	}
	var a = [];
	var i;
	for(i=0; i<3; i++){
		a[i] = makeClosure(i);
	}
	return a;
}
var aClosLoop = fClosLopp3();
console.log(aClosLoop[0]());
console.log(aClosLoop[1]());
console.log(aClosLoop[2]());

console.log(' ');
console.log('Getters & Setters');
/*Getters and Setters*/
var getValue, setValue;
(function(){
	var secret = 0;
	getValue = function(){
		return secret;
	};
	setValue = function(x){
		secret = x;
	}
})();
console.log(getValue());
console.log(setValue(12));
console.log(getValue());

console.log(' ');
console.log('Iterador');
/*Iterator*/
function iteSetup(x){
	var i = 0;
	return function(){
			return x[i++];
	};
}
var next = iteSetup(['a','b','c']);
console.log(next());
console.log(next());
console.log(next());