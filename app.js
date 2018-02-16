//identificando los elementos
var textRealTime = document.getElementById("text-real-time");//donde se pinta el texto en tiempo real
var textingArea = document.getElementById("areaText");//donde el usuario escribe el texto a pintar
//botones que cambiaran el texto en tiempo real
var largeSize= document.getElementById("large");//botón para que la fuente sea grande
var midSize= document.getElementById("medium");//botón para que la fuente sea mediana
var smallSize= document.getElementById("small");//botón para que la fuente sea chica
var colorText =document.getElementById("text-color");
var backgroundColor =document.getElementById("bakg-color");
var leftAlign= document.getElementById("left-text");
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
centreAlign.addEventListener("click", alignCentre);
rigthAlign.addEventListener("click", aligRigth);


//funciones para cambiar estilos
//función para mostrar previsualización
function preView(){
  textRealTime.textContent =textingArea.value;
};

//función para cambiar el color de fuente
function colorFont(){
  var color= prompt("Elige un color");
  textRealTime.style.color =color;
};

//función para cambiar el color de fondo
function colorBackground(){
  var color= prompt("Elige un color de fondo");
  textRealTime.style.backgroundColor =color;
};

//función para cambiar a grande el tamaño de letra
function largeFont(){
 textRealTime.style.fontSize ="4rem";
};

//función para cambiar a mediano el tamaño de letra
function mediumFont(){
 textRealTime.style.fontSize ="2rem";
};

//función para cambiar a chico el tamaño de letra
function smallFont(){
 textRealTime.style.fontSize ="1rem";
};

//función para cambiar aliniación izquierda el texto
function alignLeft(){
 textRealTime.style.textAlign= "left";
};
//función para cambiar aliniación centrada al texto
function alignCentre(){
  textRealTime.style.textAlign= "center";
};

function aligRigth(){
  textRealTime.style.textAlign= "right";
}
