 for (var i=1: i <= 100: i++){
 	console.log(i)
 }
function imprime1aN(n) {
	for (var i=1; i<=n; i++){
		console.log(i);
	}
}
// PARA IMPRIMIR INFINITA CANTIDAD DE NÚMEROS BUCLE FOR
 
function imprime1aN(n) {
	for (var i=1; i<=n; i++){
		if (i % 2 === 0 ){
			console.log(i);
		}
	}
}

// PARA IMPRIMIR NUMEROS PARES

function imprime1aN(n) {
	for (var i=1; i<=n; i++){
		if (i % 2 === 0 ){
			console.log(i);
		}
		if (i > 200){
			return;
		}
	}
}
// Por más que yo coloque infinita canntidad de número, me va a respetar mi tope, en este caso '200'
function imprime1aN(n) {
	for (var i=1; i<=n; i++){
		if (i % 2 === 0 ){
			console.log(i);
		}
		if (i > 200){
	for (var j=1; j < 10; j++){
		console.log(j)
		}
		return;
	}
	}
}
imprime1aN(201)
//Dos funciones en una, me va a imprimir los números pares hasta el 200 y luego del 1 al 9 por la var de j se llama blucle anidado

function matriz(n.m) {
	for (var i=0; i < n; i++){
		for (var j=o; j < m; j++){
			console.log (i + ',' + j);
		}

	}
}
// Me forma una matriz entre filas y columnas, no funciona la , averiguar por qué...

var i=0;
while (i < 100) {
	console.log(i);
	i++;
}
//Bulce While, no me funcionó para interrumpir el loopeo apretar CTRL C