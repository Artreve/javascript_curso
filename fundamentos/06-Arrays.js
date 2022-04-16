
// let frase=prompt('Ingrese una frase');
// let vocales ="";

// for(let i = 0; i < frase.length;i++){
//     let letra =frase.charAt(i).toLocaleLowerCase();
//     if(letra === 'a' || letra === 'e' ||letra === 'i' ||letra === 'o' || letra === 'u'){
//         vocales += letra;
//     }
// }
// console.log(vocales);
// console.log(`La cantidad de vocales en la frase ${frase} es de ${vocales.length}`);

//Arrays o Arreglos
//Lista de elementos

let alumnos = ['Pablo','Fabrizio', 'Gabriela', 'Lucas']
//mostrar elemento
alumnos[2] //Gabriela

//mostrar el ultimo elemento
alumnos[alumnos.length - 1] //pones -1 porque muestra la cantidad de elementos, pero no asi la posicion de los mismos
 //concatenar elementos en 1 string
 console.log(alumnos.join(","))

 //Iterar los elementos de un arreglo
 for(let i = 0; i < alumnos.length; i++){
     console.log(`hola soy ${alumnos[i]}`)
 }

 //forof recorre todo el contenido del arreglo y realiza la accion que deseamos en iterator ponemos la variable donde se cargara el elemento y en objet el array
 for (const alumno of alumnos) {
    console.log(`hola soy ${alumno}`) 
 } 

 //Agregar elementos al final de la lista
 alumno.push("Daniel", "Nayru")

 //Agregar elementos al principio de la lista
 alumnos.unshift("Joaquin")

 //Eliminar elemento al final de la lista solo 1
  alumnos.pop();

 //Eliminar elemento al principio de la lista
 alumnos.shift();

 //saber la posicion del elemento cargado en el array
 console.log(alumnos.indexOf('Daniel')); //si el elemento no existe devuelve un -1
 
//Saber si existen un elemento en el array
console.log(alumnos.includes('Daniel')); //nos regresa un valor bolleano

//Eliminar un elemento por su posicion
let pos = alumnos.indexOf('Lucas');
alumnos.splice(pos,1); //se desplaza a la posicion establecida y desde esa posicion elimina la cantidad de elementos que establecimos en el segundo parametro pj: si ponemos 3 borrará desde Lucas y los 2 siguietes de él.

//Eliminar varios elementos del arreglo
alumnos.splice(0,3);

//Agregar elementos desde una ubicacion en particular
alumnos.push('José','Alberto','Juan','Joaquin');
alumnos.splice(2,0,'Franco','Pablo'); //Nos posicionamos en 2, ponemos 0 para no borrar nada, agregamos una coma e ingresamos los valores que deseamos cargar.

//Reemplazar elementos desde una ubicacion en particular
alumnos.splice(5,1,'Marcos');

//nuevo arreglo
let alumnas = ["Gabriela", "Rosita", "Nayru", "Rocio", "Dami", "Agostina"];

//concatenar arreglos
let comision = alumnos.concat(alumnas);

//Ordenar arreglo a-z
console.log(comision.sort());

//Ordene de la z-a
console.log(comision.reverse()); //NOTA: el reverse solo invertira el orden de los elementos del array, en este caso primero ordenamos la lista con sort y despues la invertimos

//Extraer en un nuevo arreglo
let ausentes = comision.slice(3, 7); //extraigo los valores desde ese posicion para abajo del array y lo guarda en un nuevo array, el segundo valor determina la cantidad de elemtnos que queremos tomar (opcional)

//ENIGMA UNIVERSAL
console.log(["🥚", "🐔"].sort());

//TAREAS

/* Tarea 1: 
Leer una cadena de texto y generar un array con la función split(). Posteriormente, mostrar la siguiente información: 
- Número de palabras *
- primera palabra *
- última palabra *
- las palabras colocadas en orden inverso *
- las palabras ordenadas de la a la z  *
- las palabras ordenadas de la z a la a. *
- Sacar toda esta información en consola
*/

let frase = "La sonrisa es la mejor respuesta para una mirada";

let palabras = frase.toLowerCase().split(" ");

console.log(`La cantidad de palabras es de ${palabras.length}`);
console.log(`La primera palabra es "${palabras[0]}"`);
console.log(`La última palabra es "${palabras[palabras.length - 1]}"`);
console.log(palabras.reverse());
console.log(palabras.sort());

console.log(palabras.sort().reverse());

/* Tarea 2:
Tenemos una lista de números, el usuario ingresará un número y le diremos si ese número se encuentra en la lista o no
*/

let lista = [23, 45, 78, 96, 145, 745];
let numero = parseInt(prompt("ingrese un número"));

if (lista.includes(numero)) {
  console.log(`El número ${numero} se encuentra en la lista 🙂`);
} else {
  console.log(`El número ingresado no está en la lista 😞`);
}

/*Tarea 3:
Declara un array que vamos a llamar “clasificaciones” con los siguientes valores:
Ana, Oswaldo, Raúl, Celia, María, Antonio
(vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)

- Imprime la clasificación actual
El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array:

- Celia adelanta a Raúl
- Antonio es descalificado y se elimina del concurso
- Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
- Hay una nueva participante que pasa a encabezar la clasificación: Marta
- Imprime la clasificación actualizada y comprueba que se ha hecho correctamente
*/

let clasificaciónes = [];
clasificaciónes.push('Ana','Osvaldo','Raúl','Celia','María','Antonio');
//Celia adelante de Raúl
clasificaciónes[2] = 'Celia';
clasificaciónes[3] = 'Raúl';
// clasificaciónes.splice(2,2, 'Celia', 'Raúl');

//Antonio es descalificado y se elimina del concurso
clasificaciónes.pop();

//Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
 clasificaciónes.splice(1,0,'Roberto', 'Amaya');

 //Hay una nueva participante que pasa a encabezar la clasificación: Marta
 clasificaciónes.unshift('Marta');
 
 //Imprime la clasificación actualizada y comprueba que se ha hecho correctamente
 console.log(clasificaciónes);

 /*Tarea 4: 
- Pedir por pantalla el nombre de 5 alumnos de la comisión. Usar ciclo while
- Guardarlos en un arreglo llamado rollingCoders
- Usando el arreglo mostrar en consola por cada uno un mensaje de bienvenida al mundo del desarrollo web.
*/

let rollingCoders=[];
while(rollingCoders.length < 5){
    rollingCoders.push(prompt('Ingrese el nombre del alumno'));
}

for(let i=0;i<rollingCoders.length;i++){
    console.log(`Hola ${rollingCoders[i]} bienvenidx al mundo del desarrollo web. `);
}