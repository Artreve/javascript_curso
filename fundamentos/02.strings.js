//String
let nombre = 'Eugenio'
let apellido = "Perez"

let frase = "Bienvenidos de a la clase                "

//cuantos caracteres tiene un string
console.log('el nombre tiene',nombre.length,'caractares');
console.log('el nombre tiene',apellido.length,'caractares');
console.log('el nombre tiene',frase.length,'caractares');

//como quitar los espacios en blanco por delante y detras
console.log(frase.trim().length);

//convertir todo a mayusculas
console.log(apellido.toUpperCase());

//convertir en minusculas
console.log(nombre.toLowerCase());

//extraer una letra VER BIEN
console.log(frase.charAt(10));
console.log(frase.substring(0, 2));
console.log(frase.substring(2));

//separar letras
console.log(apellido.split(""));
console.log(frase.split(" "));

let texto = "Hola-que-así";
let arregloText = texto.split("-");
//unir arreglos de palabras
console.log(arregloText.join(" "));

//obtener la ultima letra de una palabra o frase
apellido = "lara"; 
console.log(apellido.charAt(apellido.length-1));

//tarea
let palabra ="marmota";
 //pasar a mayusculas
// pasar a minisculas
// capitalizar la palabra (la primera letra esta en mayusculas)

console.log(palabra.toUpperCase());
console.log(palabra.toLowerCase());

let primeraLetra = palabra.charAt(0);
let primeraLetraMayus = primeraLetra.toUpperCase();
let restoPalabra = palabra.substring(1);
let capitalizar = primeraLetraMayus + restoPalabra;
console.log(capitalizar);

//template string
// console.log('Binvenido nombre apellido, gracias por tu visita');
console.log(`Binvenido ${nombre} ${apellido}, gracias por tu visita`);