var meData= [
  {
    content: "hi front-end",
    style: {
      color: "blue",
      background: "gray"
    }
  },
  ,
  {
    content: "hey ux",
    style: {
      color: "red",
      background: "black"
    }
  }
];

//console.log(data);
//función para jalar data.
function pastComments () {
for (var i=0; i< meData.length; i++){
    var pastcomment = meData[i].content;
    var pastcommentCreate = createElement("div");
      pastcommentCreate.innerHTML =pastcomment;
      var textContainer = document.getElementById("all-ready-comment");
    textContainer.appendChild(pastcommentCreate);
    return pastcommentCreate;

  }
}

function print(){
var sendText =document.getElementById("sending");//botón para enviar el texto para imprimirlo
sendText.addEventListener("click", insertcomment);

  function insertcomment(){
    var textPreviwer = document.getElementById("text-real-time");
    var newText1 = textPreviwer.innerHTML;
    var newText={conten:null, style: null };
    newText.content=newText1;
    newText.style.fontSize = textPreviwer.style.fontSize;
    newText.style.color = textPreviwer.style.color;
    newText.style.background = textPreviwer.style.background;
    newText.style = textPreviwer.style;
    Object.assign(newText.style,)
    data.unshift(newText);
    print();
  }
}
