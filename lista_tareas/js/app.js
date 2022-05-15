let counter = document.getElementById('contador');
let contenedorTarjetas = document.getElementById('contenedor');

let tareas = JSON.parse (localStorage.getItem("tareas")) || [];
//JSON.parse tomar la informacion del localStorage y lo tranforma en un array de js, en caso de ser objeto lo tranforma en objeto de js

//Guardar en localStorage

// localStorage.setItem('cositas',JSON.stringify( 'tareas')) //OJO, como la informacion se debe almacenar en formato JSON en el local Storage, debemos mandarlo como esta en la linea de codigo

//NO SE PUEDEN MANDAR FUNCIONES AL LOCAL STORAGE

//Traer informacion de localStorage

// let pruebita = JSON.parse(localStorage.getItem('tareas')) //Como esta en formato JSON, con esto primero convertimos a un arreglo manipulable para js y lo almacenamos en pruebita

const handleSubmit=function(e){
    e.preventDefault();//prevenimos que se realice el refresco de la pantalla al precionar enter
    let tarea = document.getElementById('textTarea');
    tareas.push(tarea.value);//guardamos directamente el valor del elemento en el array
    // console.log(tareas);
    localStorage.setItem('tareas',JSON.stringify(tareas))
    tarea.value='';//limpiamos el input
    tarea.select();//regresa el foco al campo
    agregarTarjeta(); //CADA VEZ QUE AGREGAMOS ALGO SE RENDERIZA LA TARJETA 
    //RENDERIZAR: Mostrar por pantalla.

};

const agregarTarjeta = function(){
    contenedorTarjetas.innerHTML=''; //limpiamos el contenedor de tarjeta
   tareas.forEach(function(tarea, index) {
       let tarjeta = document.createElement('div')
       tarjeta.classList='card mb-1'
       let contenidoTarjeta =`<div class="card-body d-flex justify-content-between align-items-center">
       <span>${tarea}</span>
       <button class="btn btn-danger btn-sm" onclick="borrarTarea(${index})">x</button>
    </div>`;
    tarjeta.innerHTML=contenidoTarjeta;
    contenedorTarjetas.appendChild(tarjeta);
   }); 
   counter.innerText = tareas.length;
}

function borrarTarea(index){
    tareas.splice(index,1);
    localStorage.setItem('tareas', JSON.stringify(tareas));
    agregarTarjeta();

}

document.querySelector('#formulario').addEventListener('submit', handleSubmit);//si lo dejamos con los parentesis se va a llamar a al funcion sin apretar enter, por eso no van

/*Local storage almacena informacion en la direccion en donde estoy, esta permanece hasta que nosotros lo borramos.
En cambio session Storage almacena informacion y se borra cuando salimos del sitio o cerramos el navegador.
Dentro del localStorage debemos guardar la informacion en formato JSON*/

agregarTarjeta();