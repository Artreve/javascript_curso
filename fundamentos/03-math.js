//math


//Redondeando números
console.log(Math.floor(45.89)); //redondeo hacia abajo
console.log(Math.ceil(360.52));// redondeo hacia arriba
console.log(Math.round(125.89)); //redondea bien

//obtener el valor maximo de una lista de números
console.log(`El numero maximo de la lista es ${Math.max(56,23,-802,1000,2356,100000,25478931)}`);
//Obtener el valor minimo de una lista de números
console.log(Math.min(56,23,-802,1000,2356,100000,25478931));

//convertir a numero entero
let numero =67.854569;
console.log(parseInt(numero));
//convertir numero a decimal
let numero2 = 452.6973;
console.log(parseFloat(numero2));

//Elevar un número a una potencia
let base = 12;
let exponente = 2;
console.log(`El número ${base} elevado a la potencia ${exponente} es de ${Math.pow(base,exponente)}`)

//raiz cuadrada
console.log(`La raiz cuadrada de 64 es ${Math.sqrt(64)}`);

//Números aleatorios
console.log(Math.ceil(Math.random() *50+1));

//Devolver 2 decimales
console.log(Math.round(numero*100)/100);
console.log(parseFloat(numero.toFixed(2)));