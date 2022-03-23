// //código de js
// alert('Bienvenidos a JS');
// //mensaje de consola
// console.log(5+3);
// //mostrar en el navegador
// document.write("bienvenidos a js");

//Varialbles
//Variables  son espacios en memoria que usamos para guardar datos
//declara: se las crea
//inicializa: asignar un valor

var nombre; //ya no se usa

let apellido = 'Gonzalez';
const pi = 3.14;

//tipos de datos
//String
let cliente ='Fabrizio'
let mensaje ="Hola Mundo"
//Number
let numero1 = 34
let numero2 = -52
let numero3 = 56.3
//Booleanos
let comprar = true
let comer = false

//Null
let billetera = null
//Undefine
let caja;

//Array
let arreglo = ['Pablo', 45, false]
let alumnos = ['José','Alberto','Florinda']

//Objet u Objetos
let persona = {
    nombre:'Josefina',
    apellido: 'Mandarino',
    edad:33
}
 let num1= 20;

//Operadores
 let suma = numero1 + numero2;
 let resta = numero1 - numero2;
 let producto = numero1 * numero3;
 let divicion = numero1 / numero2;
 let resto = numero1 % numero2;

 //Unitarios
 ++num1
 --num1

 //relacionales
  console.log(numero1==numero2) //igual valor
  num1 =22;
  num2 ="22";
  console.log(num1 === num2) //igual tipo y valor 
  console.log(numero1 >= numero2)
  console.log(numero1 <= numero2)
  console.log(numero1 != numero2)

  //concatenacion 
  console.log ("el resultado de la suma es "+ suma)
  console.log ("el resultado de la suma es ", resta)

  //Negacion
  let activado = true
  console.log(!activado)