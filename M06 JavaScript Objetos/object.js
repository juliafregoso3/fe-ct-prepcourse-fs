var persona = {nombre : "Daniela", edad : 36 , hijos : true};
console.log(persona.hijos);

persona.hijos = false;

console.log(persona.hijos)

persona.mascota = "Gato";

console.log(persona.mascota);

delete persona.edad;

console.log(persona);

//MÉTODOS

var tienePropiedad = persona.hasOwnProperty('edad'); 

console.log(tienePropiedad);

var todasLasPropiedades = Object.keys(persona);
console.log(todasLasPropiedades);

var mundo = {continentes : 7, paises : 195, oceanos: 5};
for (var prop in mundo) {
    console.log('Esta es la propiedad: ' + prop);
    console.log('Este es el valor: '+ mundo[prop]);
}