let data = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  },
];
//Crear funciones que realicen las siguientes tareas:

//1- Mostrar una lista con los nombres completos en orden alfabético
const listarUsuarios = function(){
  let usuariosOrdenados =data.map(function(alumno){
    return `${alumno.last_name} ${alumno.first_name}`
  });
  // usuariosOrdenados.sort;
  console.log(usuariosOrdenados.sort);
  usuariosOrdenados.sort().forEach(function(alumno,index){
    console.log(`${index + 1} - ${alumno}`)
  })

}

//2- Crear tarjetas de presentación con los datos de los usuarios
function tarjetasPresentacion(){
  data.forEach(function(user){
    document.write('------TARJETA DE PRESENTACIÓN------<br />');
    document.write(`<b>Nombre:</b> ${user.last_name} ${
      user.first_name}<br />`);
    document.write(`<b>Correo:</b> ${user.email}`)
  })
}

//3- Agregar un usuario más al final de la lista
function agregarUsuario(){
  let idNuevo =[data.length-1].id+1; //generamos un nuevo id.
  let nombre = prompt('Ingresa tu nombre');
  let apellido = prompt('Ingresa el apellido');
  let correo = prompt('Ingresa el correo');
  let avatar = prompt('Ingresa la direccion de su avatar');

  //evaluar los datos para que puedan cargarse 
  

  data.push[{
    id: idNuevo,
    email: correo,
    first_name: nombre,
    last_name: apellido,
    avatar: avatar,
  }];
}
//4- Actualizar el nombre de un usuario
//la funcion necesita saber cual es el usuario (id)
//usar el id par identificar al usuario
//pedir el nombre
// guardar esa informacion
const actualizarNombre = function(id){
  let indice = validarId(id);
  if(index<0){
    return 'El id ingresado no existe'
  }
}

//5- Eliminar un usuario en particular

const eliminarUsuario =function(id){
  let indice = validarId(id);
  if(index<0){
    return 'El id ingresado no existe'
  }
  let validar = confirm ('¿Está seguro que desea eliminar al usuario?')
  if (validar){
    data.splice(indice,1);
    alert(`El usuario con el id: ${id}, fue eliminado`);
  }
  

}

function validarId(){
  let index = data.findIndex(function(user){
    return user.id === id;
  })//el finIndex va a recorrer cada elemento y dara su posicion 
  return index;
}

//6- Realizar búsqueda de usuarios cuyo apellido coincida con el termino a buscar

//CRUD (CREATE,READ,UPDATE, DELETE)



