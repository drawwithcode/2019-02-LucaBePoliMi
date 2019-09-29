function preload() {

}

var iterator = 0;
var arcWdt = noise(iterator);
var arcHgt = noise(iterator);

function setup() {

  createCanvas(windowWidth, windowHeight);

  background(0, 0, 100);


}

function draw() {


  iterator++;

  background(0, 0, 100);


  push(); //CIRCLE

  noStroke();
  fill(25, 25, 255);



  for (var g = -12.5; g < windowWidth; g += 125) {
    for (var h = 17.5; h < windowHeight; h += 125) {
      circle(g, h, noise(iterator / 250) * 150);


    }
  }


  pop();

  push();

  noStroke();


  for (var g = -12.5; g < windowWidth; g += 125) {
    for (var h = 17.5; h < windowHeight; h += 125) {
      circle(g, h, noise(iterator / 250) * 70);

      if (mouseY > height / 2) {
        fill(255, 120, 0)
      } else {
        noFill();
      }
    }
  }

  pop();




  push(); //INNER CIRCLE

  noStroke();


  for (var g = -12.5; g < windowWidth; g += 125) {
    for (var h = 17.5; h < windowHeight; h += 125) {
      circle(g, h, noise(iterator / 200) * 50);

      if (random() < 0.85) {


        fill(80, 152, 192);



      } else if (random() >= 0.85) {

        fill(0, 255, 234);



      } else {

      }

    }
  }



  pop();


  var b = 25;
  var c = 50;
  var d = 75;

  arcWdt = 50;
  arcHgt = 50;

  var increase = 125

  var sinYellow = sin(frameCount / 50) * 25;
  var cosYellow = cos(frameCount / 50) * 25;

  var sinOrange = sin(frameCount / 50 + HALF_PI) * 25;
  var cosOrange = cos(frameCount / 50 + HALF_PI) * 25;

  var sinRed = sin(frameCount / 50 + PI) * 25;
  var cosRed = cos(frameCount / 50 + PI) * 25;

  var sinAqua = sin(frameCount / 50 + PI + HALF_PI) * 25;
  var cosAqua = cos(frameCount / 50 + PI + HALF_PI) * 25;

  for (var a = 50; a < windowWidth; a += 125) {

    for (var e = 80; e < windowHeight; e += 125) {

      for (var f = 0; f < windowWidth; f += 125)


        push();

      noStroke();

      push();
      fill(255, 200, 30); //giallo
      arc(a + cosYellow, e + sinYellow, arcWdt, arcHgt, 0, TWO_PI, OPEN);
      pop();

      push();
      fill(255, 100, 0); //arancione
      arc(a + cosOrange, e + sinOrange, arcWdt, arcHgt, 0, TWO_PI, OPEN);
      pop();

      push();
      fill(200, 20, 0); //rosso
      arc(a + cosRed, e + sinRed, arcWdt, arcHgt, 0, TWO_PI, OPEN);
      pop();

      push();
      fill(20, 180, 126); //verde acqua
      arc(a + cosAqua, e + sinAqua, arcWdt, arcHgt, 0, TWO_PI, OPEN);
      pop();

      // Half a circle which overlaps the aquamarine one
      push();
      fill(255, 200, 30); //giallo
      arc(a + cosYellow, e + sinYellow, arcWdt, arcHgt, PI + frameCount / 50, frameCount / 50, OPEN);
      pop();

      pop();



    }
  }


}
