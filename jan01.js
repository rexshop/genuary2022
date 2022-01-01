/*
Genuary 2022
JAN.1 "Draw 10,000 of something."

By Ryan Rechkemmer
https://ronikaufman.github.io
*/

function setup() {
  createCanvas(500, 500);
  noLoop();
  noStroke();
}

function draw() {
for (let i = 1; i<=10000; i++) {
  r = random(255); // r is a random number between 0 - 255
  g = random(0,200); // g is a random number betwen 0 - 200
  b = random(200); // b is a random number between 0 - 200
  a = random(255); // a is a random number between 200 - 255
  
  noStroke();
  fill(r, g, b, a);
circle(random(1, 500), random(1, 500), random(5, 20));
 }
}
