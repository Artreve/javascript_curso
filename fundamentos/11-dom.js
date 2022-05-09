//DOM
//DOCUMENT OBJET MODEL

//Obtener elemento por su etiqueta

let titulo1=document.getElementsByTagName('h1');
//cuando lo vemos en la consola, lo veremos como una coleccion de h1, y podemos acceder a ellas mediante la posicion del elemento en el array[valor]

//Obtener elemento por su id

let titulo2=document.getElementById('title');

//obtener elemento pot su clase

let titulo3=document.getElementsByClassName('titulo_bonito');

//obtener el primer nodo del codigo html;
let parrafo1 = document.querySelector('h3');

//obtener todos los nodos del codigo html
let parrafo2 = document.querySelectorAll('h3');

//obtener el nodo con su id
let parrafo3 = document.querySelector('#title');

//obtener el nodo a partir del nombre de la clase
let parrafo4 = document.querySelector('.titulo_bonito');

//NODO: elementos estructurales de html.

//Cambiar el valor a un nodo sin modificar el html
titulo2.innerText='Bienvenidos al DOM';
parrafo1.innerText = 'Clase de practica de javascript';

//NOTA: se recomienda utilizar el id para obtener elementos especificos.

//Agregar elementos al DOM
let nuevoParrafo= document.createElement('p'); //creamos el nodo
nuevoParrafo.innerText='Esto es un parrafo creado con js';//cargamos el nodo
document.body.appendChild(nuevoParrafo);


let imagen = document.createElement('img');
imagen.src='https://imagenes.razon.com.mx/files/image_940 47e/uploads/2020/06/e3/5ed7fc823c5e8.jpeg'
imagen.alt='Imagen bonita';
imagen.classList="img_dom"; //aplicamos clases a la img

document.body.appendChild(imagen);

//Insertar un nodo antes que otro

//Reemplezar un nodo
let span=document.createElement('span');
span.innerText='Esto es una etiqueta span';
document.body.replaceChild(span,parrafo1);

//quitar un nodo
document.body.removeChild(imagen);

//Clonar un elemento
document.body.appendChild(imagen.cloneNode(true));

//------------------------------------------------------------------

let lista =document.getElementById('lista');
let item =document.createElement('li');
item.innerText='Hacer la tarea de Gaby';
let ul = document.querySelector('ul');

ul.appendChild(item)

//-------------EVENTOS------------------------
function mostrarMensaje(){
    alert('Esto es un mensaje importante!!');
}
function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

function cambiarColor(){
    document.querySelector('#campo').classList='fondo';
}
function quitarColor() {
    document.querySelector("#campo").classList = "";
  }
  
  function cambioInput(e) {
    console.log(e.target.value);
    console.log(e.target.name);
  }
  
  let nombre = "";
  
  function obtenerNombre(e) {
    nombre = e.target.value;
  }
  
  function inputSaludar() {
    alert(`Bienvenido ${nombre}`);
  }
  
  let darkmode = false;
  
  function modoOscuro() {
    if (!darkmode) {
      document.body.classList = "dark-mode";
      darkmode = true;
    } else {
      document.body.classList = "";
      darkmode = false;
    }
  }
  
  document
    .getElementById("text_nombre")
    .addEventListener("change", obtenerNombre);
  
  document.getElementById("toggle").addEventListener("click", modoOscuro);