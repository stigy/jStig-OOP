console.log(' ');
console.log('/************************HERENCIA******************************/');

function Shape(){
	this.name = 'Shape';
	this.toString = function(){return this.name;}
}

function TwoDShape(){
	this.name = '2D shape';
}

function Triangle(side,height){
	this.name = 'Triangle creado';
	this.side = side;
	this.height = height;
	this.getArea = function(){return this.side*this.height / 2;}
}

TwoDShape.prototype = new Shape();
Triangle.prototype = new TwoDShape();

TwoDShape.prototype.constructor = TwoDShape;
Triangle.prototype.constructor = Triangle;

var my = new Triangle(5,10);
console.log(my.getArea());
console.log(my.toString());
console.log(my.constructor);
console.log(my instanceof Shape);
console.log(my instanceof TwoDShape);
console.log(my instanceof Triangle);
console.log(my instanceof Array);
console.log(Shape.prototype.isPrototypeOf(my));
console.log(TwoDShape.prototype.isPrototypeOf(my));
console.log(Triangle.prototype.isPrototypeOf(my));
console.log(String.prototype.isPrototypeOf(my));
var td = new TwoDShape();
console.log(td.constructor);
console.log(td.toString());
var s = new Shape();
console.log(s.constructor);
console.log(s.toString());

console.log(' ');
console.log('Moving Shared properties to the Prototype');
function Shape2(){}
Shape2.prototype.name = 'shape';
Shape2.prototype.toString = function(){return this.name}
function TwoDShape2(){}
TwoDShape2.prototype = new Shape();
TwoDShape2.prototype.constructor = TwoDShape2;
TwoDShape2.prototype.name = '2D Shape';
console.log(TwoDShape2.prototype);
console.log(TwoDShape2.name);
function Triangle2(side,height){
	this.side = side;
	this.heigth = height;
}

Triangle2.prototype = new TwoDShape2();
Triangle2.prototype.constructor = Triangle2;
Triangle2.prototype.name = 'Triangle construido';
Triangle2.prototype.getArea = function(){return this.side * this.heigth / 2;}
var my2 = new Triangle2(20,40);
console.log(my2.name);
console.log(my2.getArea());
console.log(my2.toString());
console.log(my2.hasOwnProperty('side'));
console.log(my2.hasOwnProperty('name'));
console.log(TwoDShape2.prototype.isPrototypeOf(my2));
console.log(my2 instanceof Shape);

console.log(' ');
console.log('Inheriting the prototype only.');
function Shape3(){}
Shape3.prototype.name = 'Shape';
Shape3.prototype.toString = function(){return this.name;}
function TwoDShape3(){}
TwoDShape3.prototype = Shape3.prototype;
TwoDShape3.prototype.constructor = TwoDShape3;
TwoDShape3.prototype.name = '2D Shape';
function Triangle3(side,height){
	this.side = side;
	this.height = height;
}
Triangle3.prototype = TwoDShape3.prototype;
Triangle3.prototype.constructor = Triangle3;
Triangle3.prototype.name = 'Triangle';
Triangle3.prototype.getArea = function(){return this.side * this.height / 2;}
var my3 = new Triangle3(40,30);
console.log(my3.getArea());
console.log(my3.name);
console.log(my3.toString());
var s2 = new Shape3();
console.log(s2.toString());

console.log(' ');
console.log('A Temporary constructor new F()');
function Shape4(){}
Shape4.prototype.name = 'Shape';
Shape4.prototype.toString = function(){return this.name;}
function TwoDShape4(){}
var F = function(){};
F.prototype = Shape4.prototype;
TwoDShape4.prototype = new F();
TwoDShape4.constructor = TwoDShape4;
TwoDShape4.prototype.name = '2D Shape';
function Triangle4(side, height){
	this.side = side;
	this.height = height;
}
var F = function(){}
F.prototype = TwoDShape4.prototype;
Triangle4.prototype = new F();
Triangle4.constructor = Triangle4;
Triangle4.prototype.name = 'Triangle 4 construido';
Triangle4.prototype.getArea = function(){return this.side*this.height/2;}
var my4 = new Triangle4(30,46);
console.log(my4.getArea());
console.log(my4.name);
console.log('aaaaaaaaa'+my4.toString());
var s4 = new Shape4();
var td4 = new TwoDShape4();
console.log(s4.name);
console.log(s4.toString());
console.log(td4.name);
console.log(td4.toString());
console.log(my4.__proto__.__proto__.__proto__.constructor);

console.log(' ');
console.log('Access to the parent from a child object');

function Ushape(){}
Ushape.prototype.name = 'Uber Shape';
Ushape.prototype.toString = function(){
	var result = [];
	if(this.constructor.uber){
		result[result.length] = this.constructor.uber.toString();
	}
	result[result.length] = this.name;
	return result.join(',');
}
function UtwoDShape(){}
var F = function(){}
F.prototype = Ushape.prototype;
UtwoDShape.prototype = new F();
UtwoDShape.prototype.constructor = UtwoDShape;
UtwoDShape.uber = Ushape.prototype;
UtwoDShape.prototype.name = 'Uber 2D Shape';
function Utriangle(side,height){
	this.side = side;
	this.height = height;
}
var F = function(){}
F.prototype = UtwoDShape.prototype;
Utriangle.prototype = new F();
Utriangle.prototype.constructor = Utriangle;
Utriangle.uber = UtwoDShape.prototype;
Utriangle.prototype.name = 'Uber triangle';
Utriangle.prototype.getArea = function(){return this.side*this.height/2;}
var myUber = new Utriangle(5,6);
console.log(myUber.toString());

console.log(' ');
console.log('Isolating the inheritance Part into a Function.');

function extend(Child,Parent){
	var F = function(){}
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
	Child.uber = Parent.prototype;
}

ExtShape = function(){};
ExtShape.prototype.name = 'Shape Extended';
ExtShape.prototype.toString = function(){
	var result = [];
	if(this.constructor.uber){
		result[result.length] = this.constructor.uber.toString();
	}
	result[result.length] = this.name;
	return result.join(',');
}
ExtTwoDShape = function(){}
extend(ExtTwoDShape,ExtShape);
ExtTwoDShape.prototype.name = 'Extended 2d shape';
ExtTriangle = function(){};
extend(ExtTriangle,ExtTwoDShape);
ExtTriangle.prototype.name = 'Uber triangle';
ExtTriangle.prototype.getArea = function(){return this.side*this.height/2;}
var myExtended = new ExtTriangle(50,63);
console.log(myExtended.toString());

console.log(' ');
console.log('Copying Properties.');
function copier(Child,Parent){
	var p = Parent.prototype;
	var c = Child.prototype;
	for(var i in p){
		console.log(i);
		c[i] = p[i];
	}
	c.uber = p;
}

var CShape = function(){}
var CTwoDShape = function(){}
CShape.prototype.name = 'Shape copier';
CShape.prototype.toString = function(){return this.name;};
copier(CTwoDShape,CShape);
var td = new TwoDShape();
console.log(td.__proto__.hasOwnProperty('name'));
console.log(td.__proto__.hasOwnProperty('toString'));
console.log(td.__proto__.toString);
console.log(CShape.prototype.toString);
console.log(typeof td.__proto__.toString);
console.log(typeof CShape.__proto__.toString);
console.log(td.__proto__.toString !== CShape.__proto__.toString);//the book marks at equal but it is not, now a function is enumerable.

console.log(' ');
console.log('Heads up Whe copying by reference.');
var A = function(){}, B = function(){};
A.prototype.stuff = [1,2,3];
A.prototype.name = 'a';
copier(B,A);
console.log(B.prototype.hasOwnProperty('name'));
console.log(B.prototype.hasOwnProperty('stuff'));
console.log(B.prototype.stuff === A.prototype.stuff);
B.prototype.name += 'e';
console.log(B.prototype.name);
console.log(A.prototype.name);
B.prototype.stuff.push(4,5,6);
console.log(B.prototype.stuff);
console.log(A.prototype.stuff);
B.prototype.stuff = [4,5,6];
console.log(B.prototype.stuff);
console.log(A.prototype.stuff);

console.log(' ');
console.log('Objects inherit from objects. Shallow copy.');
function extendCopy(p){
	var c = {};
	for(var i in p){
		c[i] = p[i];
	}
	c.uber = p;
	return c;
}
var CoShape = {
	name: 'shape',
	toString: function(){
		return this.name;
	}
};
var twoDee = extendCopy(CoShape);
twoDee.name = '2D Shape';
twoDee.toString = function(){return this.uber.toString()+' , '+this.name;}
var triangle = extendCopy(twoDee);
triangle.name = 'Hellow';
triangle.getArea = function(){return this.side*this.height/2;};
triangle.side = 5;
triangle.height = 10;
console.log(triangle.getArea());
console.log(triangle.toString());

console.log(' ');
console.log('Deep copy.');
function deepCopy(p,c){
	var c = c||{};
	for(var i in p){
		if(typeof p[i] === 'object'){
			c[i] = (p[i].constructor === Array)?[]:{};
			deepCopy(p[i],c[i]);
		}else{
			c[i] = p[i];
		}
	}
	return c;
}

var parent = {
	numbers: [1,2,3],
	letters: ['a','b','c'],
	obj:{
		prop: 1,
		arrayed: ['Emm','anuell']
	},
	bool: true
};

var myDeep = deepCopy(parent);
var myShallow = extendCopy(parent);
myDeep.numbers.push(4,5,6);
console.log(typeof myDeep.numbers);
console.log(myDeep.numbers);
console.log(parent.numbers);
myDeep.obj.arrayed.push(' ','Islas');
console.log(myDeep.obj.arrayed);
myShallow.numbers.push(4,5,6,7,8);
console.log(myShallow.numbers);
console.log(parent.numbers);

console.log(' ');
console.log('object().');
function object(o){
	function F(){}
	F.prototype = o;
	var n = new F();
	n.uber = o;
	return n;
}

console.log(' ');
console.log('Using a mix of prototypal inheritance and copying properties.');
function objectPlus(o,stuff){
	var n;
	function F(){}
	F.prototype = o;
	n = new F();
	n.uber = o;
	for(var i in stuff){
		n[i] = stuff[i];
	}
	return n;
}
var ShapePlus = {
	name: 'shape',
	toString: function(){return this.name;}
}

var twoDee1 = objectPlus(ShapePlus,{
	name: '2D Shape',
	toString: function(){return this.uber.toString()+' , '+this.name;}
});

var triangle = objectPlus(twoDee1,{
	name: 'Triangle',
	getArea: function(){return this.side*this.height/2;},
	side:0,
	height: 0
});

var myPlus = objectPlus(triangle,{side:4,height:4});
console.log(myPlus.getArea());
console.log(myPlus.toString());

console.log(' ');
console.log('Multiple inheritance.');
function multi(){
	var n = {},
		stuff,
		j = 0,
		len = arguments.length;
	for(j=0;j<len;j++){
		stuff = arguments[j];
		for(var i in stuff){
			n[i] = stuff[i];
		}
	}
	return n;
}
var MultiShape = {
	name: 'shape multi',
	toString: function(){return this.name;}
};
var MultiTwoD = {
	name: '2D Shape',
	dimensions: 2
};
var triangleMulti = multi(MultiShape,MultiTwoD,{
	name: 'Triangle multi',
	getArea: function(){triangleMulti
		return this.side*this.height/2;
	},
	side: 5,
	height: 10
});
console.log(triangleMulti.getArea());
console.log(triangleMulti.dimensions);
console.log(triangleMulti.toString());
console.log('This was a mixin');
