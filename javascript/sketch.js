//fix speed

let cellSize;
let a;
let b;
let A;
let B;
let number;
let letter;
let goUp = (cellSize/28);
let goDown = (cellSize/28);
let goRight = (cellSize/28);
let goLeft = (cellSize/28);
let currColumn = [];
let currRow = [];
let showParrotToken = true;
let showPigToken = true;
let showAntToken = true;
let showLegToken = true;
let error = false;
let errorButton;
let windowshape;
let x = 220;

function setup() {

createCanvas(windowWidth, windowHeight);

  maze = loadImage("images/maze.jpg");
  arrowUP = loadImage("images/arrowUP.png");
  arrowRIGHT = loadImage("images/arrowRIGHT.png");
  arrowDOWN = loadImage("images/arrowDOWN.png");
  arrowLEFT = loadImage("images/arrowLEFT.png");
  character = loadImage("images/character.png");
  bAnt = loadImage("images/blurry ant.png");
  bLeg = loadImage("images/blurry leg.png");
  bParrot = loadImage("images/blurry parrot.png");
  bPig = loadImage("images/blurry pig.png");
  heart = loadImage("images/hear.png");
  parrotToken = loadImage("images/parrot.png");
  legToken = loadImage("images/leg.png");
  pigToken = loadImage("images/pig 1.png");
  antToken = loadImage("images/ant.png");
  parrot = loadImage("images/parrot.png");
  leg = loadImage("images/leg.png");
  pig = loadImage("images/pig 1.png");
  ant = loadImage("images/ant.png");
  question = loadImage("images/question mark.png");

if (windowHeight>windowWidth){
  cellSize = windowWidth/12;
  windowshape = 1;
} else if(windowWidth>windowHeight){
  cellSize = windowHeight/24;
  windowshape = 2;
}

console.log(cellSize);

a = (windowWidth/2)-(cellSize*5.5);
b = (windowHeight/2)-(cellSize*7);

number = ((windowWidth/2)-(cellSize*5.375));
letter = ((windowHeight/2)-(cellSize*6.875));

currColumn = "1";
currRow = "a";

hereIsErrorButton();


}

function draw() {

  background(x);

  image(maze, (a-(cellSize*0.3)), (b-(cellSize*0.3)), (cellSize*11.7), (cellSize*11.7));

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
  

if(showLegToken == false){


  noFill();
  strokeWeight(1);
  for(let i = 0; i <=255; i+=1){
    stroke(0, i);
    circle((number+(cellSize*0.35)), (letter+cellSize*0.35), i);
  }

  strokeWeight(100);

  for(let p = 320; p<= 850; p+=100){
    stroke(0);
    circle((number+(cellSize*0.35)), (letter+cellSize*0.35), p);
  }

  x = 0;

}

  images();
  myCharacter();

}

function images(){

image(arrowUP, (windowWidth/2)-(cellSize*3.7), (windowHeight/2)+(cellSize*5.2), cellSize*1.9, cellSize*1.9);
image(arrowDOWN, (windowWidth/2)-(cellSize*3.7), (windowHeight/2)+(cellSize*9.2), cellSize*1.9, cellSize*1.9);
image(arrowLEFT, (windowWidth/2)-(cellSize*5.7), (windowHeight/2)+(cellSize*7.2), cellSize*1.9, cellSize*1.9);
image(arrowRIGHT, (windowWidth/2)-(cellSize*1.7), (windowHeight/2)+(cellSize*7.2), cellSize*1.9, cellSize*1.9);

image(bAnt, windowWidth/2, (windowHeight/2)+(cellSize*5.5), (cellSize*2.75), (cellSize*2.75));
image(bParrot, (windowWidth/2)+(cellSize*3), (windowHeight/2)+(cellSize*5.5), (cellSize*2.75), (cellSize*2.75));
image(bPig, windowWidth/2, (windowHeight/2)+(cellSize*8.5), (cellSize*2.75), (cellSize*2.75));
image(bLeg, (windowWidth/2)+(cellSize*3), (windowHeight/2)+(cellSize*8.5), (cellSize*2.75), (cellSize*2.75));

image(heart, (windowWidth/2-(cellSize*1.75)), (windowHeight/2)-(cellSize*11), (cellSize*3.5), (cellSize*3.5));
image(heart, (windowWidth/2-(cellSize*5.75)), (windowHeight/2)-(cellSize*11), (cellSize*3.5), (cellSize*3.5));
image(heart, (windowWidth/2+(cellSize*2.25)), (windowHeight/2)-(cellSize*11), (cellSize*3.5), (cellSize*3.5));

if(showParrotToken == true){
  image(parrotToken, (a+(cellSize * 3)), (b+(cellSize *2)), (cellSize*0.7), (cellSize*0.7));
} else {
  image(parrot, (windowWidth/2)+(cellSize*3), (windowHeight/2)+(cellSize*5.5), (cellSize*2.75), (cellSize*2.75));
}

if(showAntToken == true){
  image(antToken, (a+(cellSize * 9)), (b+cellSize), (cellSize*0.7), (cellSize*0.7));
} else {
  image(ant, windowWidth/2, (windowHeight/2)+(cellSize*5.5), (cellSize*2.75), (cellSize*2.75));
}

if(showLegToken == true){
  image(legToken, a, (b+(cellSize * 10)), (cellSize*0.7), (cellSize*0.7));
} else {
  image(leg, (windowWidth/2)+(cellSize*3), (windowHeight/2)+(cellSize*8.5), (cellSize*2.75), (cellSize*2.75));
}

if(showPigToken == true){
  image(pigToken, (a+(cellSize * 7)), (b+(cellSize * 8)), (cellSize*0.7), (cellSize*0.7));
} else {
  image(pig, windowWidth/2, (windowHeight/2)+(cellSize*8.5), (cellSize*2.75), (cellSize*2.75));
}

image(question, (a+(cellSize * 5)), (b+(cellSize *5)), cellSize, cellSize);

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

image(character, number, letter, (cellSize*0.7), (cellSize*0.7));

//number is x coord (left and right)
//letter is y coord (up and down)

//A is rightmost boundary of current cell (right and left)
//B is bottommost boundary of the current cell (up and down)

determineCurrentCell();

currCell = currRow + currColumn;

goRight = (cellSize/28);
goUp = (cellSize/28);
goLeft = (cellSize/28);
goDown = (cellSize/28);


if (number > (A - (cellSize * 0.72))){
  goUp = 0;
  goDown = 0;
}

if (letter > (B - (cellSize * 0.72))){
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
  }

}

}

function rightRules(){

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

if(currCell == "a2" || currCell == "a3"){
  if((letter+(cellSize*0.75)) >= B){
goDown = 0;
}
}

if(currCell == "b5" || currCell == "b6" || currCell == "b7" || currCell == "b8"){
if((letter+(cellSize*0.75)) >= B){
goDown = 0;
}
}

if(currCell == "c3" || currCell == "c4" || currCell == "c9"){
if((letter+(cellSize*0.75)) >= B){
goDown = 0;
}
}

if(currCell == "d2" || currCell == "d3" || currCell == "d6" || currCell == "d7" || currCell == "d8" || currCell == "d9" || currCell == "d10"){
if((letter+(cellSize*0.75)) >= B){
goDown = 0;
}
}

if(currCell == "e3" || currCell == "e8" || currCell == "e9" || currCell == "e10"){
if((letter+(cellSize*0.75)) >= B){
goDown = 0;
}
}

if(currCell == "f6" || currCell == "f9"){
if((letter+(cellSize*0.75)) >= B){
goDown = 0;
}
}

if(currCell == "g2" || currCell == "g3" || currCell == "g4" || currCell == "g5" || currCell == "g6" || currCell == "g7" || currCell == "g8"){
if((letter+(cellSize*0.75)) >= B){
goDown = 0;
}
}

if(currCell == "h3" || currCell == "h4" || currCell == "h7" || currCell == "h8"){
if((letter+(cellSize*0.75)) >= B){
goDown = 0;
}
}

if(currCell == "i4" || currCell == "i7" || currCell == "i9"){
if((letter+(cellSize*0.75)) >= B){
goDown = 0;
}
}

if(currCell == "j6" || currCell == "j7" || currCell == "j10"){
if((letter+(cellSize*0.75)) >= B){
goDown = 0;
}
}

if(currRow == "k"){
if((letter+(cellSize*0.75)) >= B){
  goDown = 0;
  }
}

}

function leftRules(){

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

    errorButton = createImg("/images/hey!.png", "error button");
    errorButton.position(a, b+(cellSize*2.3)); 
    errorButton.size((cellSize * 11), (cellSize * 9));
    errorButton.mousePressed(errorMessage);
    errorButton.hide();

}

function errorMessage(){

console.log("here is error");
errorButton.hide();

 }

 function success(){
  console.log("you win the game");
 }
