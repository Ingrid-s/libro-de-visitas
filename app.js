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
textingArea.addEventListener("keyup",preView);
colorText.addEventListener("click", colorFont);
backgroundColor.addEventListener("click", colorBackground);
largeSize.addEventListener("click", largeFont);
midSize.addEventListener("click", mediumFont);
smallSize.addEventListener("click", smallFont);
leftAlign.addEventListener("click",alignLeft);
sendText.addEventListener("click", print);
/*//textRealTime.addEventListener("click", );


centreAlign.addEventListener("click", perritos);
rigthAlign.addEventListener("click", perritos);*/

//funciones

function preView(){
  textRealTime.textContent=textingArea.value;
};

function colorFont(){
  var color= prompt("Elige un color");
  textRealTime.style.color=color;
};

function colorBackground(){
  var color= prompt("Elige un color de fondo");
  textRealTime.style.backgroundColor=color;
};

function largeFont(){
 textRealTime.style.fontSize="4rem";
};

function mediumFont(){
 textRealTime.style.fontSize="2rem";
};

function smallFont(){
 textRealTime.style.fontSize="1rem";
};

function alignLeft(){
 textRealTime.style.textAlign="left";
};

//TIENES FOTO DE LA DATA, CRÉALA en otro archivo a partir de aquí



//función para jalar data.
function pastComments () {
  //console.log(VARIALBLE QUE CONTIENE A LA DATA)
  for (var i=0; i<data.length; i++){
    var
  }

pastComments();



function print(){
  textRealTime.
}
