let tareas = []
let counter = document.getElementById('contador');
let contenedorTarjetas = document.getElementById('contenedor')


const handleSubmit=function(e){
    e.preventDefault();//prevenimos que se realice el refresco de la pantalla al precionar enter
    let tarea = document.getElementById('textTarea');
    tareas.push(tarea.value);//guardamos directamente el valor del elemento en el array
    console.log(tareas);
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
    agregarTarjeta();
}

document.querySelector('#formulario').addEventListener('submit', handleSubmit);//si lo dejamos con los parentesis se va a llamar a al funcion sin apretar enter, por eso no van