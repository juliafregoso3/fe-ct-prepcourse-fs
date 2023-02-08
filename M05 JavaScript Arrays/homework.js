/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.shift();
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   //return array.pop()

   return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var elementoMasUno = array.map(function(elemento) {
      return elemento + 1;
   });
   return elementoMasUno;

   /*
   var nuevoArray = [];
   for(var i = 0 ; i < array.length ; i++) {
      nuevoArray.push(array[i] + 1)
   }
   return nuevoArray;*/
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ');
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   //return array.includes(elemento);

   //Con for
   for(var i = 0 ; i < array.length ; i++) {
      if (array[i] === elemento) {
         return true;
      }
   }
   return false;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   /*var nuevoArray = 0;
   for (var i = 0 ; i < arrayOfNums.length ; i++) {
      nuevoArray = nuevoArray + arrayOfNums[i]
   }
   return nuevoArray;*/

  // return arrayOfNums.reduce((a + b) => a + b, 0); //función flecha

  //return arrayOfNums.reduce((a , b) => a + b, 0); //función flecha

   return arrayOfNums.reduce(function(acumulador, valorActual) {
      return acumulador + valorActual;
   }, 0) // 0 porque se inicializa en 0, podemos quitarlo pero lo ponemos si queremos que se inicie en otro punto
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   //return resultadosTest.reduce((a , b) => a + b / resultadosTest.length, 0); //función flecha

   var nuevoArrayPromedio = 0;
   for (var i = 0; i < resultadosTest.length ; i++ ) {
      nuevoArrayPromedio = nuevoArrayPromedio + resultadosTest[i]
   }
   return nuevoArrayPromedio / resultadosTest.length;

   //reutilizando la funciòn de arriba:
   //return agregarNumeros(resultadosTest / resultadosTest.length);
   
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let numeroMasGrande = arrayOfNums[0];
   for(var i = 0 ; i < arrayOfNums.length ; i++) {
      if (arrayOfNums[i] > numeroMasGrande) {
         numeroMasGrande = arrayOfNums[i];
      }
   }
   return numeroMasGrande;

   /*var nuevoArray = 0;
   for (var i = 0 ; i < arrayOfNums.length ; i++) {
      nuevoArray = nuevoArray + arrayOfNums[i]
   }
   return nuevoArray;*/
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length < 1) {
      return 0;
   }
   var nuevoArray = 1;
   for (var i = 0 ; i < arguments.length ; i++) {
      nuevoArray = nuevoArray * arguments[i]
   }
   return nuevoArray;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let contador = 0;
   for(var i = 0; i < array.length; i++) {
      if(array[i] > 18) {
         contador = contador + 1 //contador ++
      }
   }
   return contador;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia === 1 || numeroDeDia === 7) {
      return "Es fin de semana";
   }
   else {
      return 'Es dia laboral';}
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let numero = num.toString()
   if (numero.charAt(0) === "9") {
      return true;
   }
   else return false;
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

   for(var i = 0 ; i < array.length ; i++) {
      if (array[i] === array[i+1]) {
         return true;
      }
   }
   return false;

}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var nuevoArray = [];
   for(var i = 0; i < array.length; i++) {
      if(array[i] === "Enero") {
         nuevoArray.push(array[i]);
      }
      else if(array[i] === "Marzo") {
         nuevoArray.push(array[i]);
      }
      else if(array[i] === "Noviembre") {
         nuevoArray.push(array[i]);
      }
   }
      if(nuevoArray.length < 3) {
         return 'No se encontraron los meses pedidos';
      }
      else {
         return nuevoArray;
}
}


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var nuevoArray = [];
   for(var i = 0; i < 11; i ++) {
      nuevoArray.push(i * 6);
   }
   return nuevoArray;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   var nuevoArray = [];
   for(var i = 0; i < array.length ; i++) {
      if(array[i] > 100) {
         nuevoArray.push(array[i]);
      }
   }
   return nuevoArray;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
