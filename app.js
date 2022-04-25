//POO
//usuarios modelos

class Usuario{ //el nombre de la clase comienza con mayúscula y en singular.
  constructor(nombre,username,passwrod,estado){
    this.nombre = nombre;
    this.pass = passwrod;
    this.username = username;
    this.estado = estado;
  }
  presentacion(){
    console.log('--------Tarjeta de presentacion--------');
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Nombre de usuario: ${this.username}`);
  }
}
let usuario1 = new Usuario('Pepito','pepe','1234',true);



