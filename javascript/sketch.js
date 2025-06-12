let cellSize;
let a;
let b;
let A;
let B;
let number;
let letter;
let goUp;
let goDown;
let goRight;
let goLeft;
let currColumn = [];
let currRow = [];
let showParrotToken = true;
let showPigToken = true;
let showAntToken = true;
let showLegToken = true;
let error = false;
let errorButton;
let skipButton;
let tryagainButton;
let successButton;
let windowshape;
let x = 200;
let antx;
let anty;
let ant2x;
let ant2y;
let speed;
let character;
let WHATKINDAANT;
let WHATKINDAANT2;
let ANT;
let PIG;
let PARROT;
let LEG;
let capture = false;
let life = 0;
let HEART1;
let HEART2;
let HEART3;

function setup() {

//  willReadFrequently = true;

createCanvas(windowWidth, windowHeight);

  console.log("ive updated");

  maze = loadImage("images/maze.jpg");
  antsup = loadImage("images/antaup.gif");
  antsright = loadImage("images/antsright.gif");
  antsdown = loadImage("images/antsdown.gif");
  antsleft = loadImage("images/antsleft.gif");
  arrowUP = loadImage("images/arrowUP.png");
  arrowRIGHT = loadImage("images/arrowRIGHT.png");
  arrowDOWN = loadImage("images/arrowDOWN.png");
  arrowLEFT = loadImage("images/arrowLEFT.png");
  character = loadImage("images/character.png");
  bAnt = loadImage("images/blurry ant.png");
  bLeg = loadImage("images/blurry leg.png");
  bParrot = loadImage("images/blurry parrot.png");
  bPig = loadImage("images/blurry pig.png");
  heart = loadImage("images/heart.png");
  deadheart = loadImage("images/deadheart.png");
  deadheart = loadImage("images/deadheart.png");
  parrotToken = loadImage("images/littleparrot.png");
  legToken = loadImage("images/littleleg.png");
  pigToken = loadImage("images/littlepig.png");
  antToken = loadImage("images/littleant.png");
  parrot = loadImage("images/parrot.png");
  leg = loadImage("images/leg.png");
  pig = loadImage("images/pig.png");
  ant = loadImage("images/ant.png");
  question = loadImage("images/question.png");
  trapdoor = loadImage("images/trap.jpg");


ANT = bAnt;
PIG = bPig;
PARROT = bParrot;
LEG = bLeg;

if (windowHeight>windowWidth){
  if(windowHeight/24 > windowWidth/12){
    cellSize = windowWidth/12;
      windowshape = 1;
  }
  if(windowHeight/24 < windowWidth/12){
  cellSize = windowHeight/24;
  windowshape = 1;
  }

} else if(windowWidth>windowHeight){
  cellSize = windowHeight/24;
  windowshape = 2;
}

goUp = (cellSize/28);
goDown = (cellSize/28);
goRight = (cellSize/28);
goLeft = (cellSize/28);
  
console.log(cellSize);
console.log(windowshape);

a = (windowWidth/2)-(cellSize*5.5);
b = (windowHeight/2)-(cellSize*7);

number = a;
letter = b;

currColumn = "1";
currRow = "a";

anty = (b+(cellSize * 5));
antx = (a+(cellSize * 5));

ant2y = (b);
ant2x = (a);

hereIsErrorButton();
losethegame();
  success();

speed = cellSize/28;
}

function draw() {

  background(x);

if(mouseIsPressed){
  if(mouseX > ((windowWidth/2)-(cellSize*3.5)) && mouseX < ((windowWidth/2)-(cellSize*2)) && mouseY > ((windowHeight/2)+(cellSize*5)) && mouseY < ((windowHeight/2)+(cellSize*6.5))){
    letter = letter - goUp;
   // console.log("up");
  }
  if(mouseX > ((windowWidth/2)-(cellSize*3.5)) && mouseX < ((windowWidth/2)-(cellSize*2)) && mouseY > ((windowHeight/2)+(cellSize*9)) && mouseY < ((windowHeight/2)+(cellSize*10.5))){
    letter = letter + goDown;
   // console.log("down");
  } 
  if(mouseX > ((windowWidth/2)-(cellSize*5.5)) && mouseX < ((windowWidth/2)-(cellSize*4)) && mouseY > ((windowHeight/2)+(cellSize*7)) && mouseY < ((windowHeight/2)+(cellSize*8.5))){
  //  console.log("left");
    number = number - goLeft;
  }
 if(mouseX > ((windowWidth/2)-(cellSize*1.5)) && mouseX < ((windowWidth/2)-(cellSize*0)) && mouseY > ((windowHeight/2)+(cellSize*7)) && mouseY < ((windowHeight/2)+(cellSize*8.5))){
   number = number + goRight;
  }}

  image(maze, (a-(cellSize*0.3)), (b-(cellSize*0.3)), (cellSize*11.7), (cellSize*11.7));
  
  //if(showAntToken == false){
    if(mouseIsPressed){
      capture = true;
    redant1();
    redant2();
    }

imagestohide();

if(showLegToken == false){
  noFill();
  strokeWeight(7);
  for(let i = 0; i <=255; i+=7){
    stroke(0, i);
    circle((number+(cellSize*0.35)), (letter+cellSize*0.35), i);
  }
  strokeWeight(100);
  for(let p = 320; p<= 950; p+=100){
    stroke(0);
    circle((number+(cellSize*0.35)), (letter+cellSize*0.35), p);
  }
  x = 0;
}

  images();
  myCharacter();
  
//drawCells();

}

function redant2(){

//going down
  if(ant2x == a && ant2y < b+(cellSize * 10) && ant2y >= b){
      WHATKINDAANT2 = antsdown;
     ant2y += speed;
  }
//going right
  if(ant2y == b+(cellSize * 10) && ant2x < a+(cellSize * 1) && ant2x >= a+(cellSize * 0)){
      WHATKINDAANT2 = antsright;
     ant2x += speed;
  }
//going up
if(ant2x == a+(cellSize * 1) && ant2y > b+(cellSize * 7) && ant2y <= b+(cellSize * 10)){
   WHATKINDAANT2 = antsup;
    ant2y -= speed;
  }
  //right
if(ant2y == b+(cellSize * 7) && ant2x < a+(cellSize * 4) && ant2x >= a+(cellSize * 1)){
  WHATKINDAANT2 = antsright;
     ant2x += speed;
  }
  //down
if(ant2x == a+(cellSize * 4) && ant2y >= b+(cellSize * 7) && ant2y < b+(cellSize * 10)){
  WHATKINDAANT2 = antsdown;
  ant2y += speed;
}
  //right
if(ant2y == b+(cellSize * 10) && ant2x < a+(cellSize * 7) && ant2x >= a+(cellSize * 4)){
  WHATKINDAANT2 = antsright;
     ant2x += speed;
  }
//going up
if(ant2x == a+(cellSize * 7) && ant2y > b+(cellSize * 8) && ant2y <= b+(cellSize * 10)){
  WHATKINDAANT2 = antsup;
    ant2y -= speed;
  }
//right
if(ant2y == b+(cellSize * 8) && ant2x < a+(cellSize * 8) && ant2x >= a+(cellSize * 7)){
  WHATKINDAANT2 = antsright;
     ant2x += speed;
}
//going up
if(ant2x == a+(cellSize * 8) && ant2y > b+(cellSize * 6) && ant2y <= b+(cellSize * 8)){
  WHATKINDAANT2 = antsup;
    ant2y -= speed;
  }
//going left
  if(ant2y == b+(cellSize * 6) && ant2x > a+(cellSize * 7) && ant2x <= a+(cellSize * 8)){
       WHATKINDAANT2 = antsleft;
     ant2x -= speed;
  }
//up
if(ant2x == a+(cellSize * 7) && ant2y > b+(cellSize * 5) && ant2y <= b+(cellSize * 6)){
  WHATKINDAANT2 = antsup;
    ant2y -= speed;
  }
//going left
  if(ant2y == b+(cellSize * 5) && ant2x > a+(cellSize * 6) && ant2x <= a+(cellSize * 7)){
    WHATKINDAANT2 = antsleft;
     ant2x -= speed;
  }
  //down
if(ant2x == a+(cellSize * 6) && ant2y >= b+(cellSize * 5) && ant2y < b+(cellSize * 6)){
        WHATKINDAANT2 = antsdown;
  ant2y += speed;
}
//going left
  if(ant2y == b+(cellSize * 6) && ant2x > a+(cellSize * 4) && ant2x <= a+(cellSize * 6)){
    WHATKINDAANT2 = antsleft;
     ant2x -= speed;
  }
//up
if(ant2x == a+(cellSize * 4) && ant2y > b+(cellSize * 2) && ant2y <= b+(cellSize * 6)){
  WHATKINDAANT2 = antsup;
    ant2y -= speed;
  }
//going left
  if(ant2y == b+(cellSize * 2) && ant2x > a+(cellSize * 3) && ant2x <= a+(cellSize * 4)){
    WHATKINDAANT2 = antsleft;
     ant2x -= speed;
  }
//up
if(ant2x == a+(cellSize * 3) && ant2y > b+(cellSize * 0) && ant2y <= b+(cellSize * 2)){
  WHATKINDAANT2 = antsup;
    ant2y -= speed;
  }
//going left
  if(ant2y == b+(cellSize * 0) && ant2x > a+(cellSize * 0) && ant2x <= a+(cellSize * 3)){
    WHATKINDAANT2 = antsleft;
     ant2x -= speed;
  }

  image(WHATKINDAANT2, ant2x + (cellSize*0.2), ant2y+ (cellSize*0.2), cellSize*0.6, cellSize*0.7); 

}

function redant1(){

  //going up
  if(antx == a+(cellSize * 5) && anty > b+(cellSize * 4) && anty <= b+(cellSize * 5)){
   WHATKINDAANT = antsup;
    anty -= speed;
  }
  //joint
  if(antx == a+(cellSize * 5) && anty ==  b+(cellSize * 4){
  anty -= 0;
    antx += speed;
  }
  
//going right
  if(anty == b+(cellSize * 4) && antx < a+(cellSize * 6) && antx >= a+(cellSize * 5)){
      WHATKINDAANT = antsright;
     antx += speed;
  }
//going down
  if(antx == a+(cellSize * 6) && anty >= b+(cellSize * 4) && anty < b+(cellSize * 6)){
     anty += speed;
     WHATKINDAANT = antsdown;
     if(antx == a+(cellSize * 6) && anty == b+(cellSize * 5)){
      anty+=speed;
     // console.log("here");
    }
  }
//going left
  if(anty == b+(cellSize * 6) && antx > a+(cellSize * 4) && antx <= a+(cellSize * 6)){
       WHATKINDAANT = antsleft;
     antx -= speed;
  }
//up
  if(antx == a+(cellSize * 4) && anty > b+(cellSize * 2) && anty <= b+(cellSize * 6)){
    WHATKINDAANT = antsup;
     anty -= speed;
     if(antx == a+(cellSize * 4) && anty == b+(cellSize * 4)){
      anty -= speed;
    }
    if(anty == b+(cellSize * 3) && antx == a+(cellSize * 4)){
      anty-=speed;
    }
  }
if(anty == b+(cellSize * 2) && antx < a+(cellSize * 5) && antx >= b+(cellSize * 4)){
    antx += speed;
   // WHATKINDAANT = antsright;
 }
//down
 if(antx == a+(cellSize * 5) && anty >= b+(cellSize * 2) && anty < b+(cellSize * 3)){
  anty += speed;
  WHATKINDAANT = antsdown;
}
//right
if(anty == b+(cellSize * 3) && antx < a+(cellSize * 6) && antx >= b+(cellSize * 5)){
  antx += speed;
  WHATKINDAANT = antsright;
}
//up
if(antx == a+(cellSize * 6) && anty > b+(cellSize * 2) && anty <= b+(cellSize * 3)){
  anty -= speed;
  WHATKINDAANT = antsup;
}
//right
if(anty == b+(cellSize * 2) && antx < a+(cellSize * 7) && antx >= b+(cellSize * 6)){
  antx += speed;
  WHATKINDAANT = antsright;
}
//down
if(antx == a+(cellSize * 7) && anty >= b+(cellSize * 2) && anty < b+(cellSize * 3)){
  anty += speed;
  WHATKINDAANT = antsdown;
}
//right
if(anty == b+(cellSize * 3) && antx < a+(cellSize * 9) && antx >= b+(cellSize * 7)){
  antx += speed;
  WHATKINDAANT = antsright;
}
//up
if(antx == a+(cellSize * 9) && anty > b && anty <= b+(cellSize * 3)){
  anty -= speed;
  WHATKINDAANT = antsup;
}
//right
if(anty == b && antx < a+(cellSize * 10) && antx >= b+(cellSize * 9)){
  antx += speed;
  WHATKINDAANT = antsright;
}
//down
if(antx == a+(cellSize * 10) && anty >= b && anty < b+(cellSize * 10)){
  anty += speed;
  WHATKINDAANT = antsdown;
}
if(anty == b+(cellSize * 10) && antx > a+(cellSize * 8) && antx <= a+(cellSize * 10)){
  antx -= speed;
  WHATKINDAANT = antsleft;
}
//up
if(antx == a+(cellSize * 8) && anty > b+(cellSize * 9) && anty <= b+(cellSize * 10)){
  anty -= speed;
  WHATKINDAANT = antsup;
}
//right
if(anty == b+(cellSize * 9) && antx < a+(cellSize * 9) && antx >= b+(cellSize * 8)){
  antx += speed;
  WHATKINDAANT = antsright;
}
//up
if(antx == a+(cellSize * 9) && anty > b+(cellSize * 5) && anty <= b+(cellSize * 9)){
  anty -= speed;
  WHATKINDAANT = antsup;
}
//left
if(anty == b+(cellSize * 5) && antx > a+(cellSize * 8) && antx <= a+(cellSize * 9)){
  antx -= speed;
  WHATKINDAANT = antsleft;
}

if(anty == b+(cellSize * 5) && antx == a+(cellSize * 8)){
  antx = a+(cellSize * 5);
  anty = b+(cellSize * 5);
}

 image(WHATKINDAANT, antx + (cellSize*0.2), anty+ (cellSize*0.2), cellSize*0.6, cellSize*0.7); 

  console.log(anty);
  console.log(b+(cellSize * 4));

}

function imagestohide(){
  image(trapdoor, a + (cellSize*2.1), b + (cellSize*4.15), cellSize* 0.6, cellSize*0.6);
  image(trapdoor, a + (cellSize*7.1), b + (cellSize*4.15), cellSize* 0.6, cellSize*0.6);

image(question, (a+(cellSize * 5.05)), (b+(cellSize *5)), cellSize * 0.8, cellSize * 0.8);
}

function images(){

image(arrowUP, (windowWidth/2)-(cellSize*3.7), (windowHeight/2)+(cellSize*5.2), cellSize*1.9, cellSize*1.9);
image(arrowDOWN, (windowWidth/2)-(cellSize*3.7), (windowHeight/2)+(cellSize*9.2), cellSize*1.9, cellSize*1.9);
image(arrowLEFT, (windowWidth/2)-(cellSize*5.7), (windowHeight/2)+(cellSize*7.2), cellSize*1.9, cellSize*1.9);
image(arrowRIGHT, (windowWidth/2)-(cellSize*1.7), (windowHeight/2)+(cellSize*7.2), cellSize*1.9, cellSize*1.9);

image(ANT, windowWidth/2, (windowHeight/2)+(cellSize*5.5), (cellSize*2.75), (cellSize*2.75));
image(PARROT, (windowWidth/2)+(cellSize*3), (windowHeight/2)+(cellSize*5.5), (cellSize*2.75), (cellSize*2.75));
image(PIG, windowWidth/2, (windowHeight/2)+(cellSize*8.5), (cellSize*2.75), (cellSize*2.75));
image(LEG, (windowWidth/2)+(cellSize*3), (windowHeight/2)+(cellSize*8.5), (cellSize*2.75), (cellSize*2.75));

HEART1 = heart;
HEART2 = heart;
HEART3 = heart;

if(life == 1){
HEART1 = deadheart;
}
if(life == 2){
  HEART1 = deadheart;
  HEART2 = deadheart;
  }
  if(life == 3){
    HEART1 = deadheart;
    HEART2 = deadheart;
    HEART3 = deadheart;
    losethegame();
    tryagainButton.show();
    skipButton.show();
    }

image(HEART2, (windowWidth/2-(cellSize*1.75)), (windowHeight/2)-(cellSize*11), (cellSize*3.5), (cellSize*3.5));
image(HEART1, (windowWidth/2-(cellSize*5.75)), (windowHeight/2)-(cellSize*11), (cellSize*3.5), (cellSize*3.5));
image(HEART3, (windowWidth/2+(cellSize*2.25)), (windowHeight/2)-(cellSize*11), (cellSize*3.5), (cellSize*3.5));


if(showParrotToken == true){
  image(parrotToken, (a+(cellSize * 2.9)), (b+(cellSize *1.9)), (cellSize), (cellSize));
} else {
 PARROT = parrot;
}

if(showAntToken == true){
  image(antToken, (a+(cellSize * 9)), (b+cellSize), (cellSize), (cellSize));
} else {
 ANT = ant;
}

if(showLegToken == true){
  image(legToken, a-(cellSize*0), (b+(cellSize * 10)), (cellSize), (cellSize));
} else {
 LEG = leg;
}

if(showPigToken == true){
  image(pigToken, (a+(cellSize * 7)), (b+(cellSize * 8)), (cellSize), (cellSize));
} else {
 PIG = pig;
}

}

function drawCells(){
stroke(300, 0, 0);
strokeWeight(3);
line(a, b, a, b+(cellSize*11));
line(a + cellSize, b, a + cellSize, b+(cellSize*11));
line(a + (cellSize*2), b, a + (cellSize*2), b+(cellSize*11));
line(a + (cellSize*10), b, a + (cellSize*10), b+(cellSize*11));
line(a + (cellSize*11), b, a + (cellSize*11), b+(cellSize*11));
line(a, b, a + (cellSize*11), b);
line(a, b+(cellSize), a + (cellSize*11), b+(cellSize));
line(a, b+(cellSize*10), a + (cellSize*11), b+(cellSize*10));
line(a, b+(cellSize*11), a + (cellSize*11), b+(cellSize*11));
}

function determineCurrentCell(){
  if(letter>=b && letter< (b+cellSize)){
    currRow = "a";
    B = (b + cellSize);
  }
  if(letter>=(b+cellSize) && letter< (b+(cellSize*2))){
    currRow = "b";
    B = (b+(cellSize*2));
  }
  if(letter>=(b+(cellSize*2)) && letter< (b+(cellSize*3))){
    currRow = "c";
    B = (b+(cellSize*3));
  }
  if(letter>=(b+(cellSize*3)) && letter< (b+(cellSize*4))){
    currRow = "d";
    B = (b+(cellSize*4));
  }
  if(letter>=(b+(cellSize*4)) && letter< (b+(cellSize*5))){
    currRow = "e";
    B = (b+(cellSize*5));
  }
  if(letter>=(b+(cellSize*5)) && letter< (b+(cellSize*6))){
    currRow = "f";
    B = (b+(cellSize*6));
  }
  if(letter>=(b+(cellSize*6)) && letter< (b+(cellSize*7))){
    currRow = "g";
    B = (b+(cellSize*7));
  }
  if(letter>=(b+(cellSize*7)) && letter< (b+(cellSize*8))){
    currRow = "h";
    B = (b+(cellSize*8));
  }
  if(letter>=(b+(cellSize*8)) && letter< (b+(cellSize*9))){
    currRow = "i";
    B = (b+(cellSize*9));
  }
  if(letter>=(b+(cellSize*9)) && letter< (b+(cellSize*10))){
    currRow = "j";
    B = (b+(cellSize*10));
  }
  if(letter>=(b+(cellSize*10)) && letter< (b+(cellSize*11))){
    currRow = "k";
    B = (b+(cellSize*11));
  }
  
  if(number>=a && number< (a+cellSize)){
    currColumn = "1";
    A = (a+cellSize);
  }
  if(number>=(a+cellSize) && number< (a+(cellSize*2))){
    currColumn = "2";
    A = (a+(cellSize*2));
  }
  if(number>=(a+(cellSize*2)) && number< (a+(cellSize*3))){
    currColumn = "3";
    A = (a+(cellSize*3));
  }
  if(number>=(a+(cellSize*3)) && number< (a+(cellSize*4))){
    currColumn = "4";
    A = (a+(cellSize*4));
  }
  if(number>=(a+(cellSize*4)) && number< (a+(cellSize*5))){
    currColumn = "5";
    A = (a+(cellSize*5));
  }
  if(number>=(a+(cellSize*5)) && number< (a+(cellSize*6))){
    currColumn = "6";
    A = (a+(cellSize*6));
  }
  if(number>=(a+(cellSize*6)) && number< (a+(cellSize*7))){
    currColumn = "7";
    A = (a+(cellSize*7));
  }
  if(number>=(a+(cellSize*7)) && number< (a+(cellSize*8))){
    currColumn = "8";
    A = (a+(cellSize*8));
  }
  if(number>=(a+(cellSize*8)) && number< (a+(cellSize*9))){
    currColumn = "9";
        A = (a+(cellSize*9));
  }
  if(number>=(a+(cellSize*9)) && number< (a+(cellSize*10))){
    currColumn = "10";
    A = (a+(cellSize*10));
  }
  if(number>=(a+(cellSize*10)) && number< (a+(cellSize*11))){
    currColumn = "11";
    A = (a+(cellSize*11));
  }
}

function myCharacter(){

image(character, number + (cellSize*0.25), letter+ (cellSize*0.25), (cellSize*0.5), (cellSize*0.5));

//number is x coord (left and right)
//letter is y coord (up and down)
//a-k is up to down
//1-11 is left to right

//A is rightmost boundary of current cell (right and left)
//B is bottommost boundary of the current cell (up and down)

determineCurrentCell();

currCell = currRow + currColumn;

//trapdoors
if(currCell == "e3"){
  number = a+(cellSize * 7.4);
  letter  = b+(cellSize * 4);
}

if(currCell == "e8" && number < (A - (cellSize * 0.7))){
  number = a+(cellSize * 1.9);
  letter  = b+(cellSize * 4);
}

//console.log(number);
//console.log(currCell);

goRight = (cellSize/28);
goUp = (cellSize/28);
goLeft = (cellSize/28);
goDown = (cellSize/28);


if (number > (A )){
  goUp = 0;
  goDown = 0;
}

if (letter > (B )){
  goRight = 0;
  goLeft = 0;
}

rightRules();
downRules();
leftRules();
upRules();

if((currCell == "c4" && number < (A - (cellSize * 0.3)))|| (currCell == "b4" && (letter + (cellSize * 0.7) > B))){
  showParrotToken = false;
}

if((currCell == "k1" && number < (A - (cellSize * 0.3)))|| (currCell == "j1" && (letter + (cellSize * 0.7) > B))){
  showLegToken = false;
}

if((currCell == "b10" && letter < (B - (cellSize * 0.3)))|| (currCell == "a10" && (letter + (cellSize * 0.7) > B))){
  showAntToken = false;
}

if((currCell == "i8" && letter < (B - (cellSize * 0.3)))|| (currCell == "i8" && number < (A - (cellSize * 0.3)))){
  showPigToken = false;
}

if (currCell == "e6" && (letter + (cellSize * 0.7) >= B)){
  //error
goDown = 0;
error = true;
errorButton.show();
letter = letter -1 ;

  if(showPigToken == false && showAntToken == false && showLegToken == false && showParrotToken == false){
    error = false;
    goDown = (cellSize/28);
    success();
    errorButton.hide();
    letter = letter -1 ;
  }

}

//letter is up and down
if(capture == true){
//down or up:
if(anty + (cellSize*0.7) >= letter && anty - (cellSize*0.7)<= letter){
  if(antx + (cellSize*0.3) >= number && antx - (cellSize*0.3) <= number){
 //   console.log("got");
 number = a;
letter = b;
life += 1;
  }
}
//left or right
if(antx + (cellSize*0.7) >= number && antx - (cellSize*0.7)<= number){
  if(anty + (cellSize*0.3) >= letter && anty - (cellSize*0.3) <= letter){
//    console.log("got");
number = a;
letter = b;
life += 1;
  }
}

if(ant2y + (cellSize*0.7) >= letter && ant2y - (cellSize*0.7)<= letter){
  if(ant2x + (cellSize*0.3) >= number && ant2x - (cellSize*0.3) <= number){
 //   console.log("got");
 number = a;
letter = b;
life += 1;
  }
}

if(ant2x + (cellSize*0.7) >= number && ant2x - (cellSize*0.7)<= number){
  if(ant2y + (cellSize*0.3) >= letter && ant2y - (cellSize*0.3) <= letter){
 //   console.log("got");
 number = a;
letter = b;
life += 1;
  }
}
}

}

function rightRules(){

  if((letter + cellSize) > (B + (cellSize*0.15)) || (letter + cellSize) < (B - (cellSize*0.15))){
    goRight = 0;
  }

  if(currColumn == "11"){
    if((number + cellSize) >= A){
      goRight = 0;
    }
  }
  
  if(currCell == "a5" || currCell == "a7" || currCell == "a9"){
   if((number + cellSize) >= A){
      goRight = 0;
    }
  }
  
  if(currCell == "b1" || currCell == "b3" || currCell == "b4" || currCell == "b6" || currCell == "b8" || currCell == "b9" || currCell == "b10"){
    if((number + cellSize) >= A){
       goRight = 0;
     }
   }
  
   if(currCell == "c1" || currCell == "c2" || currCell == "c6" || currCell == "c8" || currCell == "c9" || currCell == "c10"){
    if((number + cellSize) >= A){
       goRight = 0;
     }
   }
  
   if(currCell == "d1" || currCell == "d4" || currCell == "d5" || currCell == "d7" || currCell == "d10"){
    if((number + cellSize) >= A){
       goRight = 0;
     }
   }
  
   if(currCell == "e1" || currCell == "e3" || currCell == "e4" || currCell == "e5" || currCell == "e7"){
    if((number + cellSize) >= A){
       goRight = 0;
     }
   }
  
   if(currCell == "f1" || currCell == "f2" || currCell == "f3" || currCell == "f4" || currCell == "f5" || currCell == "f6" || currCell == "f8" || currCell == "f10"){
    if((number + cellSize) >= A){
       goRight = 0;
     }
   }
  
   if(currCell == "g2" || currCell == "g4" || currCell == "g7" || currCell == "g9" || currCell == "g10"){
    if((number + cellSize) >= A){
       goRight = 0;
     }
   }
  
   if(currCell == "h1" || currCell == "h5" || currCell == "h8" || currCell == "h9" || currCell == "h10"){
    if((number + cellSize) >= A){
       goRight = 0;
     }
   }
  
   if(currCell == "i1" || currCell == "i2" || currCell == "i5" || currCell == "i7" || currCell == "i9" || currCell == "i10"){
    if((number + cellSize) >= A){
       goRight = 0;
     }
   }
  
   if(currCell == "j1" || currCell == "j2" || currCell == "j3" || currCell == "j4" || currCell == "j7" || currCell == "j8" || currCell == "j10"){
    if((number + cellSize) >= A){
       goRight = 0;
     }
   }
  
   if(currCell == "k2" || currCell == "k4" || currCell == "k8"){
   if((number + cellSize) >= A){
      goRight = 0;
    }
  }
}

function downRules(){

if((number + cellSize) > (A + (cellSize*0.15)) || (number + cellSize) < (A - (cellSize*0.15))){
  goDown = 0;
}

if(currCell == "a2" || currCell == "a3"){
  if((letter+(cellSize)) >= B){
goDown = 0;
}
}

if(currCell == "b5" || currCell == "b6" || currCell == "b7" || currCell == "b8"){
if((letter+(cellSize)) >= B){
goDown = 0;
}
}

if(currCell == "c3" || currCell == "c4" || currCell == "c9"){
if((letter+(cellSize)) >= B){
goDown = 0;
}
}

if(currCell == "d2" || currCell == "d3" || currCell == "d6" || currCell == "d7" || currCell == "d8" || currCell == "d9" || currCell == "d10"){
if((letter+(cellSize)) >= B){
goDown = 0;
}
}

if(currCell == "e3" || currCell == "e8" || currCell == "e9" || currCell == "e10"){
if((letter+(cellSize)) >= B){
goDown = 0;
}
}

if(currCell == "f6" || currCell == "f9"){
if((letter+(cellSize)) >= B){
goDown = 0;
}
}

if(currCell == "g2" || currCell == "g3" || currCell == "g4" || currCell == "g5" || currCell == "g6" || currCell == "g7" || currCell == "g8"){
if((letter+(cellSize)) >= B){
goDown = 0;
}
}

if(currCell == "h3" || currCell == "h4" || currCell == "h7" || currCell == "h8"){
if((letter+(cellSize)) >= B){
goDown = 0;
}
}

if(currCell == "i4" || currCell == "i7" || currCell == "i9"){
if((letter+(cellSize)) >= B){
goDown = 0;
}
}

if(currCell == "j6" || currCell == "j7" || currCell == "j10"){
if((letter+(cellSize)) >= B){
goDown = 0;
}
}

if(currRow == "k"){
if((letter+(cellSize)) >= B){
  goDown = 0;
  }
}

}

function leftRules(){

  if((letter + cellSize) > (B + (cellSize*0.15)) || (letter + cellSize) < (B - (cellSize*0.15))){
    goLeft = 0;
  }

if(currColumn == "1"){
  if(number < (A-cellSize)+1){
goLeft = 0;
}
}

if(currCell == "a6" || currCell == "a8" || currCell == "a10"){
if(number < (A-cellSize)+1){
  goLeft = 0;
 }
}

if(currCell == "b2" || currCell == "b4" || currCell == "b5" || currCell == "b7" || currCell == "b9" || currCell == "b10" || currCell == "b11"){
if(number < (A-cellSize)+1){
  goLeft = 0;
 }
}

if(currCell == "c2" || currCell == "c3" || currCell == "c7" || currCell == "c9" || currCell == "c10" || currCell == "c11"){
if(number < (A-cellSize)+1){
  goLeft = 0;
 }
}

if(currCell == "d2" || currCell == "d5" || currCell == "d6" || currCell == "d8" || currCell == "d11"){
if(number < (A-cellSize)+1){
  goLeft = 0;
 }
}

if(currCell == "e2" || currCell == "e4" || currCell == "e5" || currCell == "e6" || currCell == "e8"){
if(number < (A-cellSize)+1){
  goLeft = 0;
 }
}

if(currCell == "f2" || currCell == "f3" || currCell == "f4" || currCell == "f5" || currCell == "f6" || currCell == "f7" || currCell == "f9" || currCell == "f11"){
if(number < (A-cellSize)+1){
  goLeft = 0;
 }
}

if(currCell == "g3" || currCell == "g5" || currCell == "g8" || currCell == "g10" || currCell == "g11"){
if(number < (A-cellSize)+1){
  goLeft = 0;
 }
}

if(currCell == "h2" || currCell == "h6" || currCell == "h9" || currCell == "h10" || currCell == "h11"){
if(number < (A-cellSize)+1){
  goLeft = 0;
 }
}

if(currCell == "i2" || currCell == "i3" || currCell == "i6" || currCell == "i8" || currCell == "i10" || currCell == "i11"){
if(number < (A-cellSize)+1){
  goLeft = 0;
 }
}

if(currCell == "j2" || currCell == "j3" || currCell == "j4" || currCell == "j5" || currCell == "j8" || currCell == "j9" || currCell == "j11"){
if(number < (A-cellSize)+1){
  goLeft = 0;
 }
}

if(currCell == "k1" || currCell == "k3" || currCell == "k5" || currCell == "k9"){
if(number < (A-cellSize)+1){
  goLeft = 0;
 }
}
}

function upRules(){

  if((number + cellSize) > (A + (cellSize*0.15)) || (number + cellSize) < (A - (cellSize*0.15))){
    goUp = 0;
  }

if(currRow == "a"){
  if(letter < (B-cellSize)+1){
      goUp = 0;
      }
}

if(currCell == "b2" || currCell == "b3"){
  if(letter < (B-cellSize)+1){
    goUp = 0;
    }
}

if(currCell == "c5" || currCell == "c6" || currCell == "c7"|| currCell == "c8"){
  if(letter < (B-cellSize)+1){
    goUp = 0;
    }
}

if(currCell == "d3" || currCell == "d4" || currCell == "d9"){
  if(letter < (B-cellSize)+1){
    goUp = 0;
    }
}

if(currCell == "e2" || currCell == "e3" || currCell == "e6" || currCell == "e7" || currCell == "e8" || currCell == "e9" || currCell == "e10"){
  if(letter < (B-cellSize)+1){
    goUp = 0;
    }
}

if(currCell == "f3" || currCell == "f8" || currCell == "f9" || currCell == "f10"){
  if(letter < (B-cellSize)+1){
    goUp = 0;
    }
}

if(currCell == "g6" || currCell == "g9"){
  if(letter < (B-cellSize)+1){
    goUp = 0;
    }
}

if(currCell == "h2" || currCell == "h3" || currCell == "h4" || currCell == "h5" || currCell == "h6" || currCell == "h7" || currCell == "h8"){
  if(letter < (B-cellSize)+1){
    goUp = 0;
    }
}

if(currCell == "i3" || currCell == "i4" || currCell == "i7"|| currCell == "i8"){
  if(letter < (B-cellSize)+1){
    goUp = 0;
    }
}

if(currCell == "j4" || currCell == "j6" || currCell == "j9"){
  if(letter < (B-cellSize)+1){
    goUp = 0;
    }
}

if(currCell == "k6" || currCell == "k7" || currCell == "k10"){
  if(letter < (B-cellSize)+1){
    goUp = 0;
    }
}
}

function hereIsErrorButton(){

    errorButton = createImg("images/hey!.png", "error button");
    errorButton.position(a-(cellSize*2.7), b+(cellSize*1)); 
    errorButton.size((cellSize * 16.5), (cellSize * 13));
    errorButton.mousePressed(errorMessage);
    errorButton.hide();

}

function errorMessage(){

console.log("here is error");
errorButton.hide();

 }

function losethegame(){
  console.log("you lose the game");
  
  tryagainButton = createImg("images/tryagain.jpg", "try again button");
  skipButton = createImg("images/skip.jpg", "skip button");
 
  tryagainButton.position(a+(cellSize*0.5), b+(cellSize*4)); 
  tryagainButton.size((cellSize * 5), (cellSize * 3));
  tryagainButton.mousePressed(tryagain);
  tryagainButton.hide();

  skipButton.position(a+(cellSize*5.5), b+(cellSize*4)); 
  skipButton.size((cellSize * 5), (cellSize * 3));
  skipButton.mousePressed(success);
  skipButton.hide();

}

function tryagain(){
  tryagainButton.hide();
  skipButton.hide();
  life = 0;
showParrotToken = true;
showPigToken = true;
showAntToken = true;
showLegToken = true;
error = false;
capture = false;
x = 200;

}


 function success(){
  console.log("you win the game");
  successButton = createImg("images/success.jpg", "success button");
  successButton.position(a, b+(cellSize*1.5)); 
  successButton.size((cellSize * 11), (cellSize * 8));
  successButton.mousePressed(successMessage);
   successButton.hide();
 }

 function successMessage(){
  console.log("this will do something");
  successButton.hide();
   tryagainButton.hide();
   skipButton.hide();
 }
