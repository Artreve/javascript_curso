//Bucles 
 //While

 while(condition){
     //tareas o acciones que se deben ejecutar
 }

 let vecesSumar =10;
 let totalSuma = 0;
  while(vecesSumar>0){
    totalSuma+=1;
    vecesSumar-=1 ; 
    console.log(`Total de la suma: ${totalSuma} | veces que se sumó: ${vecesSumar}`)
  }
  console.log(`Total: ${totalSuma}`);

  //Tarea crear un script que calcule la tabla del 2
  let tabla = 2;
  let valor = 1;
  while(valor<=10){
      console.log(`${tabla} x ${valor} = ${valor * tabla}`);
      valor++;
  }

  //do while
//   do{

//   }while(condition)

let vueltas = 3;
let respuesta = "";
 do{
     respuesta = prompt('Ingrese un nombre');
     console.log(`Hola ${respuesta}! Bienvenidx 🎉`);
     vueltas--;
 }while(vueltas>0);

 /*
Crear un script tipo trivia que pregunte al usuario la capital de un pais. El usuario tendrá tres intentos, si falla pierde.
*/
let respuestaCorrecta ="HELSINKI";
let acierto = false;
let contandor = 0;
while(contandor<3 && acierto == false){
    let respuestaUsuario = prompt("Capital de Finlandia");
    if(respuestaUsuario.toUpperCase() === respuestaCorrecta){
        acierto = true;
        console.log ("MUY BIEN ACERTASTE!! 😁🎉");
    }
    contandor++
}
if(acierto === false){
console.error("LO SIENTO, PERDISTE... LOSER!!")
}

//for

for(let index = 0; index < 10; index++){
    //tareas o acciones
}
 //Tarea ingresar la tabla que queremos calcular mostrar por consola

 let tabla = parseInt(prompt("Ingresa la tabla a calcular"));
 for(let index = 1; index<=10;index++){
    console.log(`${tabla} x ${index} = ${index * tabla}`);
 }
while(tabla){
    console.log(`Tabla del ${tabla}`);
    for(let index = 1; index<=10;index++){
            console.log(`${tabla} x ${index} = ${index * tabla}`);
    }
    tabla = parseInt(prompt("Ingresa la tabla a calcular"));
}

//Tarea según la cantidad de alumnos ingresada cargar los nombres
let cantidadDeAlumnos = parseInt("Ingrese la cantindad de alumnos")
let lista ="";
let nombre = "";

if(!isNaN(cantidadDeAlumnos)){
   for (let i= 0; i <cantidadDeAlumnos; i++){
       
       nombre =prompt("Ingrese el nombre del alumno");
       if(!nombre && parseInt(nombre)){
           console.warn("Uno de los datos no fue valido");
       }else{
           lista+=`${nombre}`;
       }
   }
   console.log(lista);
}else{
    console.log("La cantidad ingresada no es valida");
}