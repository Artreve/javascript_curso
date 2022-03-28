// condicionales 

//if else
if (condition){
    //tareas
}
let numero =parseInt(prompt('Ingrese un número'));
//numero par
if(isNaN(numero)){
    console.log('El npumero ingresado no es un numero')
}else{
    if(numero %2 === 0){
    console.log("El número es par");
    }else{
    console.error("El número no es par");
    }
}
