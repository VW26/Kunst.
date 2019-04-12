var xp= -90%50 // de xpositie voor links 
var xs=10    //  de ruimte tussen de bolletjes
var yp= -90%10 //  de ypositie voor links
var ys= 10   // de ruimte tussen de bolletjes
var xpr= -90%10 // de xpositie voor rechts 
var ypr= -90%50 // de ypositie voor links

function setup() {
  createCanvas(550, 550);
}

function draw() {

  if ((mouseIsPressed) || (mouseX < height/2)) {
   background(15);
   stroke(255);
   translate(275,275);
   fill(0,0,255,100); // doorzichtig rood
   cirkelvierkant();  // bewegende cirkels in een vierkant
   fill(255,0,0,100); // doorzichtig blauw
   rondje(); // bewegende cirkels in een vierkant 
  }
  
  else{
   background(255);
   stroke(0);
   translate(275,275);
   fill(0,255,0,100); // doorzichtig groen
   cirkelvierkant();  // bewegende cirkels in een vierkant
   fill(255,255,0,100); // doorzichtig geel
   rondje(); // bewegende cirkels in een vierkant  
  
}
  
  









function cirkelvierkant(){ //cirkelvierkant linksom draaiend 
  // bewegend cirkel vierhoek maken met loop
  for (var j = 0; j < 5; j++) { // breedte 
    for (var i = 0; i < 5; i++) { // lengte 
      //beweging in de cirkels hier 
      ellipse( (xp+(xs*i)) * sin(frameCount/75) * 5, 
               (yp+(ys*j)) * sin(frameCount/75) * 5,20,20); } 
  }
}
  function rondje(){ // cirkelvierkant rechtsomdraaiend 
  // bewegend cirkel vierhoek maken met loop
  for (var j = 0; j < 5; j++) { // breedte 
    for (var i = 0; i < 5; i++) { // lengte 
      //beweging in de cirkels hier 
      ellipse( (xpr+(xs*i)) * sin(frameCount/75) * 5, 
               (ypr+(ys*j)) * sin(frameCount/75) * 5,20,20); 
     } 
    }
  }
}
