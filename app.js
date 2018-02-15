//identificando los elementos
var textRealTime = document.getElementById("text-real-time");//donde se pinta el texto en tiempo real
var textingArea = document.getElementById("areaText");//donde el usuario escribe el texto a pintar
var sendText =document.getElementById("sending");//botón para enviar el texto para imprimirlo
//botones que cambiaran el texto en tiempo real
var largeSize= document.getElementById("large");//botón para que la fuente sea grande
var midSize= document.getElementById("medium");//botón para que la fuente sea mediana
var smallSize= document.getElementById("small");//botón para que la fuente sea chica
var colorText =document.getElementById("text-color");
var backgroundColor =document.getElementById("bakg-color");
var leftAlign= document.getElementById("left");
var centreAlign= document.getElementById("centre");
var rigthAlign= document.getElementById("rigth");

//asignando eventos
textRealTime.addEventListener("keyup",perritos);
textingArea.addEventListener("click", perritos);
sendText.addEventListener("click", perritos);
largeSize.addEventListener("click", perritos);
midSize.addEventListener("click", perritos);
smallSize.addEventListener("click", perritos);
colorText.addEventListener("click", perritos);
backgroundColor.addEventListener("click", perritos);
leftAlign.addEventListener("click",perritos);
centreAlign.addEventListener("click", perritos);
rigthAlign.addEventListener("click", perritos);
