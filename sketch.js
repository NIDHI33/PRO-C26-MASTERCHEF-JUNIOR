var background;
var  background_image;

  function preload(){

    background_image=loadImage("velvet cake.jpg");

  }
function setup() {
  createCanvas(600, 600);

}

function draw() {
  background( background_image);

  fill("red");
  textSize(60);
   text("red velvet cake",50,70);

   
  
   
   
  


}