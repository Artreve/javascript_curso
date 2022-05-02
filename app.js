//BOM
//Browser Objet Model

//window
//Obtener nuestra posicion
const obtenerUbicacion=function(){
  navigator.geolocation.getCurrentPosition(function(posicion){
    console.log(posicion.coords.latitude, posicion.coords.longitude);
  })
}

//Location

Location.reload()//Recargamos la pagina
Location.href="https://google.com"; //redireccion de pagina
Location.replace("https://google.com")//reemplazamos la pagina anterir, por la establecida en el link
Location.replace("https://google.com");

//history
history.go(1)//Esto nos lleva a la página siguiente en el historial, podemos modificar el valor en negativo para retroceder

//Funciones de tiempo

//setTimeout
//Nos permite ejecutar acciones despues de transcurrido un cierto tiempo.
const redireccionar=function(){
  setTimeout(function(){
    Location.href="www.google.com";
  },3000);
}
//Este recibe una funcion y despues de la , el tiempo en milisegundos

//setInterval
//Nos permite ejecutar acciones cada cierto tiempo.
//debemos tener cuidado porque nos puede consumir mucha memoria

function contador(){
  let num=0;
  setInterval(function() {
    console.log(num++);
  }, 1000);
}
function segundero(){
  repetir=setInterval(function(){
    console.log(new Date().getSeconds);
  },1000);
}

//clearInterval
//Detener intervalo
const detenerIntervalo = function(){
  clearInterval(repetir);
}



