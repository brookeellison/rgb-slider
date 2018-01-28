var red,green,blue;
function setup(){
    createCanvas(600,400);
    background(0);

    red = createSlider(0, 255, 125);
    red.position(20,20);
    
    green = createSlider(0, 255, 255);
    green.position(20,50); 
    
    blue = createSlider(0,255,10);
    blue.position(20, 80);
}


function draw(){
rv=red.value();
gv=green.value();
  bv=blue.value();
    background(rv, gv, bv);
    
    textSize(30);
    textAlign(CENTER, CENTER);
    message= rv + "," + gv + "," + bv;
    text(message, width/2, height/2);
}