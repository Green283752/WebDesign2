var header = document.getElementById("docHeader");
var hColorChangeBtn = document.getElementById("headerColorControl");

var quokkaImage = document.getElementById("quokkaImg");
var quokkaButton= document.getElementById("quokkaImgChange");

var headerColorChange = function(){
   var redComp = Math.random() * 255;
   console.log(redComp);
   var greenComp = Math.random() * 255;
   var blueComp = Math.random() * 255;

   header.style.backgroundColor = "rgb(" + redComp + "," + greenComp + ", " + blueComp + ")";
}

var swapQuokkaImage = function(){
    console.log(quokkaImage.alt);

    if(quokkaImage.alt == "First image of qute quokka"){
         quokkaImage.src = "quokka2.jpg";
         quokkaImage.alt = "Second image of qute quokka";
         quokkaButton.innerText = "Show the first one!";
    }
    else {
        quokkaImage.src = "quokka1.jpg";
        quokkaImage.alt = "First image of qute quokka";
        quokkaButton.innerText = "Show the second one!";

    }
   
}

headerColorChange();

hColorChangeBtn.addEventListener("click", headerColorChange);

quokkaButton.addEventListener("click", swapQuokkaImage);