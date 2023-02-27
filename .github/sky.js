let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0; i < 1100; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}

let bigStarX = 100;
let bigStarY = 200;
let scaleStar = 0.4;

function yellowStar() {
  noStroke();
  fill(250, 253, 15);
  triangle(
    bigStarX + 100 * scaleStar,
    bigStarY - 60 * scaleStar,
    bigStarX + 200 * scaleStar,
    bigStarY + 100 * scaleStar,
    bigStarX,
    bigStarY + 100 * scaleStar
  );
  triangle(
    bigStarX + 5 * scaleStar,
    bigStarY - 5 * scaleStar,
    bigStarX + 195 * scaleStar,
    bigStarY - 10 * scaleStar,
    bigStarX + 100 * scaleStar,
    bigStarY + 150 * scaleStar
  );
}

function ufo(x, y) {
  //spaceship;
  stroke(0, 0, 0);
  fill(0, 255, 0, 130);
  ellipse(x, y, 100 * s, 40 * s);

  fill(135, 206, 235);
  arc(x, y, 60 * s, 70 * s, 3.15, 0);

  noStroke();
  fill(135, 206, 25, 50);
  arc(x, y, 50 * s, 60 * s, 3.15, 0);

  fill(255, 255, 255, 40);
  arc(x, y, 40 * s, 50 * s, 3.15, 0);

  ellipse(100, 100, 50);

  // gula ringarna
  stroke(0, 0, 0);
  fill(255, 255, 0);
  ellipse(x - 35 * s, y - 8 * s, 6 * s);
  ellipse(x - 41 * s, y - 1 * s, 6 * s);
  ellipse(x - 34 * s, y + 5 * s, 6 * s);
  ellipse(x - 24 * s, y + 8 * s, 6 * s);
  ellipse(x - 13 * s, y + 10 * s, 6 * s);
  ellipse(x - 2 * s, y + 11 * s, 6 * s);
  ellipse(x + 9 * s, y + 11 * s, 6 * s);
  ellipse(x + 20 * s, y + 9 * s, 6 * s);
  ellipse(x + 30 * s, y + 6 * s, 6 * s);
  ellipse(x + 39 * s, y, 6 * s);
  ellipse(x + 35 * s, y - 8 * s, 6 * s);

  //alien
  fill(80, 255, 60);
  arc(x - 1 * s, y + 1, 19 * s, 24 * s, 3.15, 0);

  fill(80, 255, 60);
  ellipse(x - 1 * s, y - 20 * s, 16 * s);
  arc(x - 1 * s, y - 20 * s, 16 * s, 24 * s, 0, PI);
  fill(0, 0, 0);
  ellipse(x - 4 * s, y - 20 * s, 5 * s, 6 * s);
  ellipse(x + 2 * s, y - 20 * s, 5 * s, 6 * s);
  fill(80, 255, 60);
}

let x = 100;
let y = 100;
let s = 1;

function moon(x, y) {
  // stroke(231,207,138);
  fill(252, 238, 167);
  ellipse(x, y + 230 * s, 170 * s);
  fill(231, 207, 138);
  ellipse(x - 35 * s, y + 185 * s, 40 * s, 35 * s);
  ellipse(x + 35 * s, y + 190 * s, 30 * s, 35 * s);
  ellipse(x + 5 * s, y + 240 * s, 25 * s);
  ellipse(x - 53 * s, y + 250 * s, 37 * s, 40 * s);
  ellipse(x + 32 * s, y + 280 * s, 42 * s, 37 * s);
  ellipse(x + 60 * s, y + 230 * s, 20 * s, 24 * s);
}

let moonX = 700;
let ufoY = 100;
let velocity = 1;
let acceleration = 0.2;
let speed = 0;
let isGameActive = false;

function draw() {
  noStroke();
  background(0, 0, 0);

  if (keyIsDown(32)) {
    isGameActive = true;
  }

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.02;
  }

  yellowStar(bigStarX, bigStarY);
  moon(moonX, 100);
  ufo(x, ufoY);

  if (isGameActive) {
    bigStarX = bigStarX - 4;
    ufoY = ufoY + velocity;
    velocity = velocity + acceleration;
    x = x + speed;

    if (bigStarX < -100) {
      bigStarX = width + 100;
    }

    if (keyIsDown(38)) {
      velocity = velocity - 0.5;
    }

    if (keyIsDown(39)) {
      speed = 5;
    } else if (keyIsDown(37)) {
      speed = -5;
    } else {
      speed = 0;
    }

    if (ufoY > 280) {
      isGameActive = false;
    }
  }
}
