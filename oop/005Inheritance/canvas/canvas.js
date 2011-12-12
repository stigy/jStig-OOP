function Point(x,y){
	this.x = x;
	this.y = y;
}

function Line(p1,p2){
	this.p1 = p1;
	this.p2 = p2;
	this.length = Math.sqrt(Math.pow(p1.x-p2.x,2)+Math.pow(p1.y-p2.y,2));
}