let images = ["img/1loteria.jpg", "img/2loteria.jpg", "img/3loteria.jpg","img/4loteria.jpg", "img/5loteria.jpg","img/6loteria.jpg", "img/7loteria.jpg", "img/8loteria.jpg"
,"img/9loteria.jpg", "img/10loteria.jpg","img/11loteria.jpg", "img/12loteria.jpg", "img/13loteria.jpg","img/14loteria.jpg", "img/15loteria.jpg", "img/16loteria.jpg", "img/17loteria.jpg", "img/18loteria.jpg"
, "img/19loteria.jpg", "img/20loteria.jpg", "img/21loteria.jpg", "img/22loteria.jpg", "img/23loteria.jpg"
, "img/24loteria.jpg", "img/25loteria.jpg", "img/26loteria.jpg", "img/27loteria.jpg", "img/28loteria.jpg"
, "img/29loteria.jpg", "img/30loteria.jpg", "img/31loteria.jpg", "img/32loteria.jpg", "img/33loteria.jpg", "img/34loteria.jpg"
, "img/35loteria.jpg", "img/36loteria.jpg", "img/37loteria.jpg", "img/38loteria.jpg", "img/39loteria.jpg", "img/40loteria.jpg"
, "img/41loteria.jpg", "img/42loteria.jpg", "img/43loteria.jpg", "img/44loteria.jpg", "img/45loteria.jpg", "img/46loteria.jpg", "img/47loteria.jpg"
, "img/48loteria.jpg", "img/49loteria.jpg", "img/50loteria.jpg", "img/51loteria.jpg", "img/52loteria.jpg", "img/53loteria.jpg"
, "img/54loteria.jpg"]; // Array de imágenes
let currentIndex = 0; // Índice de la imagen actual
// Variables de estado
var intervalId;
var activo = false;

// Función que se ejecuta cada 5 segundos
function hacerFuncion() {
  // Aquí va la función que quieres que haga el botón 
  showRandomImage();
}
// Función que inicia o detiene el intervalo
function cambiarEstado() {
  if (!activo) {
    intervalId = setInterval(hacerFuncion, 5000); // Iniciar el intervalo
    activo = true;
    document.getElementById("pause").innerHTML = "Detener"; // Cambiar el texto del botón
  } else {
    clearInterval(intervalId); // Detener el intervalo
    activo = false;
    document.getElementById("pause").innerHTML = "Reanudar"; // Cambiar el texto del botón
  }
}
// Evento de clic para el botón
  document.getElementById("pause").addEventListener("click", cambiarEstado);
// Función para mostrar una imagen al azar al presionar el botón
function showRandomImage() {
  let img = document.getElementById("image"); // Obtener el elemento de imagen
  let randomIndex = Math.floor(Math.random() * images.length); // Generar un índice aleatorio
  while (randomIndex === currentIndex) { // Verificar que no se repita la imagen anterior
    randomIndex = Math.floor(Math.random() * images.length);
  }
  img.src = images[randomIndex]; // Asignar la fuente de la imagen aleatoria
  currentIndex = randomIndex; // Actualizar el índice de la imagen actual
}
function historial(){
hacerFuncion();
}