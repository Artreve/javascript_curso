//Funciones
//Son procesimientos encapsulados

// function </nombre> (<parametros>){
//     //instrucciones que hará
// }

//Funciones declarativas
// sintaxis

let nombre = 'Santiago'
function saludarPersona(parametro){
    console.log("Hola Persona")
    console.log(`Hola ${parametro}`)
}
saludarPersona(nombre);

//Parematro: Son como "variables" que va a tener el valor que definimos en la llamada

let num1 =35;
let num2 = 78;

function sumarValores(valor1, valor2){
    if(isNaN(valor1) || isNaN(valor2)){
        console.warn('Alguno de los valores no son corrector');
    }else{
        console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`);
    }
   
}
sumarValores(num1,num2);

//Funciones anónimas o de expresion

const multiplicacion = function(){
    console.log(num1*num2);
}
//las funciones declarativa tienen nombre y las anonimas se les debe asignar un valor a las constantes 

//calculadora

//podemos llamar una funcion dentro de otra
function cubo(num){
 return Math.pow(num,3)
}
 let numeros = [23,45,2,79];
 let numerosAlCubo = [];
 function convertirACubo(arreglo, funcion){
     for (let i=0; i< arreglo.length; i++){
         let numeroAlCubo = funcion(arreglo[i]);
         numerosAlCubo.push(numeroAlCubo);
     }
     return numerosAlCubo; //el return termina el ejecucion de la funcion, si no se cumple, entonces sigue
 }
 console.log(convertirACubo(numeros,cubo))

 //scope de una funcion
 let heroe ='superman'
 function presentarHeroe(){
     let heroe ='Batman';
     return `Bienvenido ${heroe}`
 }
console.log(presentarHeroe());

//Funcion declarativa
function calcularDescuento(precio, descuento){
    let descuentoCalculado = 100 - descuento;
    let montoConDescuento = (precio*descuentoCalculado/100);
    return `El importe a abonar es de ${montoConDescuento}`
}
console.log(calcularDescuento(2500,15));
 //funcion anónima
 const calcularDescuento2 = function (precio, descuento){
    let descuentoCalculado = 100 - descuento;
    let montoConDescuento = (precio*descuentoCalculado/100);
    return `El importe a abonar es de ${montoConDescuento}`
}
console.log(calcularDescuento(2500,15));
//Lo más recomendable es es utilizar esto, por cuestiones de seguridad, ya que en las declarativas se pueden cambiar los valores y romper la funcion.

//Tarea
//1- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 const examinarCadena =function(cadena){
     if(cadena === cadena.toUpperCase()){
         return 'El texto está en mayúsculas';
     }
     if(cadena === cadena.toLowercaCase()){
        return 'El texto está en minúsculas';
    }
    return 'El texto es tiene mayúculas y minúsculas';
 }
 console.log(examinarCadena('HOLA A TODOS'));

 //2- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

//La fórmula del perímetro  es p = 2*(a +b)
let ladoA=Number(prompt('Ingrese el Alto del rectángulo'));
let ladoB=Number(prompt('Ingrese la Base del rectángulo'));

const perimetroDelRectangulo = function(alto,base){
    return 2*(alto+ancho);
}
document.write(`El perimetro del rectángulo es de ${perimetroDelRectangulo(ladoA,ladoB)}`);


