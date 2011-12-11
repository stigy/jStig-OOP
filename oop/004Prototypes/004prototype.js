console.log(' ');
console.log('/************************PROTOTYPE******************************/');

console.log(' ');
function foo(a,b){return a*b;}
console.log(foo.length);
console.log(foo.constructor);
console.log(typeof foo.prototype);
console.log(foo.prototype);
foo.prototype = {};
console.log(foo.prototype);

function Gadget(name, color){
	this.name = name;
	this.color = color;
	this.whatAreYou =function(){
		return "I'm a '" + this.color + ' ' + this.name;
	}
}
Gadget.prototype.price = 100;
Gadget.prototype.raiting = 3;
Gadget.prototype.getInfo = function(){
	return 'Raiting: ' + this.raiting + ', price: ' + this.price;
};

Gadget.prototype = {
	price: 100,
	raiting: 3,
	getInfo: function(){
		return 'Raiting: ' + this.raiting + ', price: ' + this.price;
	}
};

var newtoy = new Gadget('webcam','black');
console.log(newtoy);
console.log(newtoy.name);
console.log(newtoy.color);
console.log(newtoy.whatAreYou());
console.log(newtoy.price);
console.log(newtoy.raiting);
console.log(newtoy.getInfo());

Gadget.prototype.get = function(what){
	return this[what];
}

console.log(newtoy.get('name'));
console.log(newtoy.get('color'));
console.log(newtoy.get('price'));
console.log(newtoy.get('raiting'));

Gadget.prototype.getInfo = function(){
		return 'Raiting: ' + Gadget.prototype.raiting + ', price: ' + Gadget.prototype.price;
}
console.log(newtoy.getInfo());
console.log(newtoy);
console.log(newtoy.constructor);
console.log(newtoy.raiting);
console.log(newtoy.constructor.prototype.raiting);
console.log(newtoy.constructor.prototype.constructor);
console.log(newtoy.constructor.prototype.constructor.prototype);
var o = {};
console.log(o);