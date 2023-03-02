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
let bigStarY = 220;
let scaleStar = 0.15;

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
  fill(0, 255, 0);
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
let moonS = 2;

function moon(x, y) {
  fill(252, 238, 167);
  ellipse(x, y + 230 * moonS, 170 * moonS);
  fill(231, 207, 138);
  ellipse(x - 35 * moonS, y + 185 * moonS, 40 * moonS, 35 * moonS);
  ellipse(x + 35 * moonS, y + 190 * moonS, 30 * moonS, 35 * moonS);
  ellipse(x + 5 * moonS, y + 240 * moonS, 25 * moonS);
  ellipse(x - 53 * moonS, y + 250 * moonS, 37 * moonS, 40 * moonS);
  ellipse(x + 32 * moonS, y + 280 * moonS, 42 * moonS, 37 * moonS);
  ellipse(x + 60 * moonS, y + 230 * moonS, 20 * moonS, 24 * moonS);
  ellipse(x + 8 * moonS, y + 160 * moonS, 24 * moonS, 18 * moonS);
}

let moonX = 100;
let ufoY = 100;
let ufoX = 100;
let velocity = 1;
let acceleration = 0.2;
let speed = 0;
let isGameActive = false;

function startScreen() {
  background(0, 0, 0);
  fill(255, 255, 0);
  rect(120, 150, 350, 200);
  fill(255, 0, 255);
  text("Press space to start game", 230, 245);
  text("Use arrowkeys to land on the moon, watch out for the stars", 140, 270);

  if (keyIsDown(32)) {
    state = "game";
  }
}

function gameScreen() {
  noStroke();
  background(0, 0, 0);

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.02;
  }

  yellowStar(bigStarX, bigStarY);
  moon(moonX + 200, 85);
  ufo(ufoX, ufoY);

  if (isGameActive) {
    ufoY = ufoY + velocity;
    velocity = velocity + acceleration;
    x = x + speed;

    if (keyIsDown(32)) {
      isGameActive = true;
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
  }
  /*     if (ufoY > 390 && ufoX < 160 && ufoX > 440) {
      
    }
  }

  if (ufoY > 390 && ufoX > 160 && ufoX < 410) {
    winScreen();
  } */
}

function gameOverScreen() {
  background(0, 0, 0);
  fill(255, 0, 0);
  rect(120, 150, 350, 200);
  fill(0, 0, 0);
  text("GAME OVER", 260, 240);
  text("Press space to try again", 230, 270);
}

function winScreen() {
  background(0, 0, 0);
  fill(0, 255, 0);
  rect(120, 130, 350, 200);
  fill(0, 0, 0);
  text("YOU WIN", 260, 220);
  text("Press space to try again", 225, 250);
}

let state = "start";

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "result") {
    gameOverScreen();
  }
}
