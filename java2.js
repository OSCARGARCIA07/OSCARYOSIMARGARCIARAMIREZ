/*
CODIGO TABLA
*/
let filas = document.querySelectorAll('.fila');//array

filas[0].addEventListener('mouseover', function(){ cambiar('img/imagenes/bade1.jpg','BLADE')});
filas[1].addEventListener('mouseover', function(){ cambiar('img/imagenes/toy.jpeg','TOY STORY')});
filas[2].addEventListener('mouseover', function(){ cambiar('img/imagenes/reyjpg.jpg','REY LEON')});
filas[3].addEventListener('mouseover', function(){ cambiar('img/imagenes/batman.jpg','BATMAN')});
filas[4].addEventListener('mouseover', function(){ cambiar('img/imagenes/joker.jpg','JOKER')});
function cambiar(ruta,titulo) {
    let contenedorImg = document.querySelector('.contenedorImagen img');
    contenedorImg.src = ruta;

    let contenedorTexto = document.querySelector('.contenedorImagen h4');
    contenedorTexto.textContent = titulo;

}
////////////////////////////////////////////////////
let btnAgregar = document.querySelector('.botonAgregar');
let btnEliminar = document.querySelector('.botonSoltar');

btnAgregar.addEventListener('click',agregar);
btnEliminar.addEventListener('click',eliminar);

function agregar (){


    //pedir los datos
    let pelicula = prompt('cual pelicula te gusta');
    let calificacion = prompt('cual es tu calificacion');
    let ruta = prompt ('URL de la imagen=');
    let top = 1;
    
    
    

    let filaNueva = document.createElement('tr'); //se crea una fila
    filaNueva.innerHTML = ` <td>${top}</td><td>${pelicula}</td><td>${calificacion}</td>`;

    let tabla = document.querySelector('.tabla tbody');
    tabla.appendChild(filaNueva);

    filaNueva.addEventListener('mouseover',function(){cambiar(ruta,pelicula)});

}

function eliminar(){
    let tabla = document.querySelector('.tabla tbody');//array
    let ultimafila = tabla.lastChild;
    ultimafila.remove();

}