var emmanuell = 1;
console.log(emmanuell);
var e = emmanuell++;
console.log('Valor antes de incremento de e '+e);
console.log('Tipos primitivosTipo de e '+typeof(e));
e = 1.2345;
console.log('Tipos primitivos Tipo de e con decimales '+typeof(e));

console.log(' ');
var n3 = 0377;
console.log('Octal Tipo de n3 '+typeof(n3));
console.log(n3);

console.log(' ');
var n4 = 0xfe;
console.log('Hexadecimal Tipo de n4 '+typeof(n4));
console.log(n4);


console.log(' ');
var n5 = 1e1;
console.log('Exponente Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = 1e+2;
console.log('Exponente Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = 1E+3;
console.log('Exponente Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = 1.654E-3;
console.log('Exponente  negativo Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = Infinity;
console.log('Infinity Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = 1e308;
console.log('Valor maximo perimitido antes de infinity Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = 1e309;
console.log('Valor que retorna infinity Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = Infinity - Infinity;
console.log('Operaciones con infinity Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = Infinity - 1e307;
console.log('Operaciones con infinityTipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = NaN;
console.log('NaN tipo Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = 10*'f';
console.log('Operaciones que generan NaN Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = 1+2+3+4+5+6+7+8+9+NaN;
console.log('Operaciones que generan NaN Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = 'Oop';
console.log('Cadenas Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = '';
console.log('Cadnas vacias Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = 'Oop' + 'js' + 'emmanuell';
console.log('Concatenacion de cadenas Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = '1' * 3;
console.log('Conversiones implicitas de tipo Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = '1'; n5++;
console.log('Operadores ++ Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = 'I dont\' know man';
console.log('Caracteres de escape Tipo de n5 '+typeof(n5));
console.log(n5);
var n5 = "I dont' know man";
console.log('Caracteres de escape Tipo de n5 '+typeof(n5));
console.log(n5);
var n5 = "I dont'\r know man";
console.log('Caracteres de escape Tipo de n5 '+typeof(n5));
console.log(n5);
var n5 = "I dont'\n know man";
console.log('Caracteres de escape Tipo de n5 '+typeof(n5));
console.log(n5);
var n5 = "I dont' \t know man";
console.log('Caracteres de escape Tipo de n5 '+typeof(n5));
console.log(n5);
var n5 = "\u0466";
console.log('Caracteres de escape Tipo de n5 '+typeof(n5));
console.log(n5);
var n5 = "I dont'\b know man";
console.log('Caracteres de escape Tipo de n5 '+typeof(n5));
console.log(n5);
var n5 = "I dont'\v know man";
console.log('Tipo de n5 '+typeof(n5));
console.log(n5);
var n5 = "I dont'\f know man";
console.log('Caracteres de escape Tipo de n5 '+typeof(n5));
console.log(n5);

var output = null;
output = "Special Characters";
output += "\n";
output += "===============";
output += "\n";
output += "\\t - tab";
output += "\n";
output += "\\b - backspace/delete";
output += "\n";
output += "\\r - carriage return";
output += "\n";
output += "\\n - newline";
output += "\n";
output += "\\f - form feed";
output += "\n";
//alert(output);

console.log(' ');
var n5 = true;
console.log('Boleanos Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = false;
console.log('Boleanos Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = 'true';
console.log('Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = !true;
console.log('Operadores sobre boleanos Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = !!true;
console.log('Lazy obtencion de valor boleano Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = !'one';
console.log('Boleano de los diverentes tipos Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = !!'one';
console.log('Lazy obtencion de valor boleano de diferentes tipos Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = !!'';
console.log('Lazy obtencion de valor boleano de diferentes tipos Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = !!null;
console.log('Lazy obtencion de valor boleano de null Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = !!0;
console.log('Lazy obtencion de valor boleano de 0 Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = !!NaN;
console.log('Lazy obtencion de valor boleano de NaN Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = !!false;
console.log('Lazy obtencion de valor boleano de false Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
var n5 = false;
var n6 = true;
console.log('Operadores and y or');
console.log(n5 && n6 );
console.log(n5 || n6 );

console.log(' ');
var n5 = 1+2*3;
console.log('Precedencia de operaciones Tipo de n5 '+typeof(n5));
console.log(n5);

console.log(' ');
console.log('Orden de precedencia * + ! && || ');

console.log(' ');
var n5 = 5;
var n6 = true || (n5 = 6);
console.log('Lazy evalutation ' + n5);

console.log(' ');
var n5 = 5;
var n6 = true && (n5 = 6);
console.log('Lazy evalutation ' + n5);

console.log(' ');
var n5 = true || "something";
console.log('Lazy evalutation ' + n5);

console.log(' ');
var n5 = true && "something";
console.log('Lazy evalutation ' + n5);

console.log(' ');
var n5 = n5 || 10;
console.log('Lazy evalutation ' + n5);

console.log(' ');
var n5 = 10 == 10;
console.log('Comparation ' + n5);

console.log(' ');
var n5 = 10 == 5;
console.log('Comparation ' + n5);

console.log(' ');
var n5 = 10 == '10';
console.log('Comparation ' + n5);

console.log(' ');
var n5 = 10 === 10;
console.log('Comparation ' + n5);

console.log(' ');
var n5 = 10 === '10';
console.log('Comparation ' + n5);

console.log(' ');
var n5 = 10 != 10;
console.log('Comparation ' + n5);

console.log(' ');
var n5 = 10 != 5;
console.log('Comparation ' + n5);

console.log(' ');
var n5 = 10 != '10';
console.log('Comparation ' + n5);

console.log(' ');
var n5 = 10 !== 10;
console.log('Comparation ' + n5);

console.log(' ');
var n5 = 10 !== '10';
console.log('Comparation ' + n5);

console.log(' ');
var n5 = 10 > '10';
console.log('Mayor ' + n5);

console.log(' ');
var n5 = 10 >= '10';
console.log('Mayor and equal ' + n5);

console.log(' ');
var n5 = 10 < '10';
console.log('Mayor and equal ' + n5);

console.log(' ');
var n5 = NaN == NaN;
console.log('Nan comparition ' + n5);

console.log(' ');
var n5 = NaN === NaN;
console.log('Nan comparition ' + n5);

console.log(' ');
var foo;
var n5 = foo;
console.log('Undefined ' + n5);
console.log('Undefined ' + typeof(n5));

console.log(' ');
var n5 = null;
console.log('Null ' + n5);
console.log('Null ' + typeof(n5));

console.log(' ');
var n5 = 1 + undefined;
console.log('Operaciones con undefined ' + n5);
console.log(typeof(n5));

console.log(' ');
var n5 = 1 + null;
console.log('Operaciones con null ' + n5);
console.log(typeof(n5));


console.log(' ');
var n5 =!!undefined;
console.log('Boolean de undefined ' + n5);
console.log(typeof(n5));

console.log(' ');
var n5 =!!null;
console.log('Boolean de null ' + n5);
console.log(typeof(n5));

console.log(' ');
var n5 =""+undefined;
console.log('String de undefined ' + n5);
console.log(typeof(n5));

console.log(' ');
var n5 =""+null;
console.log('String de null ' + n5);
console.log(typeof(n5));

console.log(' ');
var n5 =[];
console.log('Creacion de array ' + n5);
console.log(typeof(n5));

console.log(' ');
var n5 =[1,2,3];
console.log('Creacion de array ' + n5);
console.log(typeof(n5));

console.log(' ');
var n5 =[1,2,3];
console.log('Accediendo a elementos de array ' + n5[0]);
console.log('Accediendo a elementos de array ' + n5[1]);
console.log('Accediendo a elementos de array ' + n5[2]);
console.log(typeof(n5));

console.log(' ');
var n5 =[1,2,3];
console.log('Accediendo a elementos de array ' + n5);
n5[2] = "three";
console.log('Actualizando elementos de array ' + n5);
n5[3] = "four";
console.log('Agregando  elementos de array ' + n5);
n5[6] = "seven";
console.log('Huevos en elementos de array ' + n5);
delete(n5[2]);
console.log('Eliminando elementos de array ' + n5);
n5[2]=[1,2,3];
console.log('Arrays como elementos de array ' + n5);
console.log('Accediendo a elementos de array que es elemento de array ' + n5[2][0]);
console.log('Accediendo a elementos de array que es elemento de array una cadena es un array' + n5[3][0]);
console.log(typeof(n5));

{
	console.log(' ');
	{
		console.log('Nested semicolons');
	}

}

console.log(' ');
var a = 1;
if(a>1){
	console.log('Es mayor a 1');
}else{
	console.log('no es mayor a 1');
}

console.log(' ');
var a = 1;
if(a>1){
	console.log('Es mayor a 1');
}else if(a>3){
	console.log('Es mayor a 3');
}else{
	console.log('No es mayor ni a 1 ni a 3');
}

console.log(' ');
var a = 1;
if(a>1){
	console.log('Nested Es mayor a 1');
		if(a>3){
			console.log('Nested Es mayor a 3');
		}else{
			console.log('Nested No es mayor ni a 1 ni a 3');
	}
}else{
	console.log('Nested Algo tiene que mostrar');
}

console.log(' ');
var result = '';
if(result){
	console.log('Si existe la variable');
}else{
	console.log('No existe la variable');
}

console.log(' ');
var result2;
if(typeof(result2)=="undefined"){
	console.log('No existe la variable');
}else{
	console.log('Si existe la variable');
}

console.log(' ');
var a = 1;
var result = a === 1 ? 'a es uno' : 'a es diferente de uno';
console.log('Operador ternario '+result);

console.log(' ');
var a = 2;
var result = '';
switch(a){
	case 1:
		result = 'Es uno numero';
	break;
	case 2:
		result = 'Es 2 numero';
	break;
	case '2':
		result = 'Es 2 cadena';
	break;
	default:
		result = 'Yo no se nada';
	break;
}
console.log('Switch '+result);

console.log(' ');
var a = 1;
while(a<3){
	console.log(a);
	a++;
}
console.log('The simplest loop while ');

console.log(' ');
var a = 1;
do{
	console.log(a);
	a++;
}while(a<3)
console.log('The do-while loop');

console.log(' ');
for(var a = 1; a<3; a++){
	console.log(a);
}
console.log('The for loop');

console.log(' ');
for(var a = 1, result = ''; a<3; a++){
	result += a+'\n';
}
console.log(result);
console.log('Another way to for loop');

console.log(' ');
for(var a = 1, result = ''; a<3; a++, result += a+'\n'){}
console.log(result);
console.log('Third way to for loop');

console.log(' ');
var a = 0;
var result = '';
for(;;){
	if(++a>2){
		break;
	}else{
		result += a+'\n';
	}
}
console.log(result);
console.log('Fouth way to for loop');

console.log(' ');
var a = 0;
var result = '';
for(var y = 0;y<=10;y++){
	result = '';
	for(var x = 0; x<=10; x++){
		result += '* ';
	}
	console.log(result);
}
console.log(result);
console.log('Nested for loop');

console.log(' ');
var a = 0;
var result = '';
var prueba = '';
for(var y = 1;y<=7;y++){
	result = '';
	for(var x = 1; x<=15; x++){
		result += (y*x)%8?' ':'*';
		console.log((prueba = (y*x)%8?' ':'*')=='*'?y*8:'no');
	}
	console.log(result);
}
console.log(result);
console.log('Nested for loop snow flake');

console.log(' ');
var a = ['a','b','c'];
var result = '';
for(var y in a){
	console.log(a[y]);
}
console.log('For in loop');

console.log(' ');
//COMENTARIO SIMPLE
/*COMENTARIO
MULTIPLE*/
console.log('Comentarios utilizar JSDoc');

console.log('Fin principios basicos de javascript');