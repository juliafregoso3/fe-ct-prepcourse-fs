/*var listaDeCompras = [];
listaDeCompras[3] = 'Tomates';
console.log(listaDeCompras.length);
listaDeCompras[1] = 'Lechuga';
console.log(listaDeCompras);
var elementoDelArray = listaDeCompras[3];
console.log(elementoDelArray)*/

/*var numeros = ['1', '3', '4', '8'];
var cumpleCondicion = numeros.every((num) => {
    return num > 5;
});
console.log(cumpleCondicion); */

//Método split: convierte strings el arreglos:
/*
var palabra = "Henri";
var palabraSeparada = palabra.split('');
console.log(palabraSeparada);
palabraSeparada.pop();
console.log(palabraSeparada);
palabraSeparada.push('y');
console.log(palabraSeparada);
var palabraJunta = palabraSeparada.join('');
console.log(palabraJunta);*/

var numeros = [1, 2, 3, 4];
numeros.forEach((num) => {console.log.num}) //no harà ningun cambio

var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);

// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

// WHILE
var arr = [];
while (arr.length < 5) {
   arr.push('Camilo');
}
console.log(arr);