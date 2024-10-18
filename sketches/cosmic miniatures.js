let s, dS, f;
let loading = false;
let seed = Math.floor(fxrand() * 1e9);
console.log("Cosmic Miniatures");
let palettes = [
  [
    "#fff",
    "#ff0000",
    "#00a2ff",
    "#00fcff",
    "#eee",
    "#00ff96",
    "#b4ff00",
    "#fff600",
    "#ffb400",
  ],
  ["#ff0000", "#890000", "#ff0000"],

  [
    "#6a040f",
    "#9d0208",
    "#d00000",
    "#dc2f02",
    "#e85d04",
    "#f48c06",
    "#faa307",
    "#ffba08",
  ],
  [
    "#f2efea",
    "#4bb5c3",
    "#cb3e13",
    "#5d2220",
    "#820263",
    "#d90368",
    "#eadeda",
    "#2e294e",
    "#ffd400",
    "#f2efea",
    "#fc7753",
    "#66d7d1",
    "#403d58",
    "#dbd56e",
  ],

  [
    "#a4161a",
    "#fee440",
    "#ffffff",
    "#123f77",
    "#0f86b6",
    "#f5db37",
    "#772c12",
    "#123f77",
    "#0f86b6",
    "#37cae5",
    "#f5db37",
    "#b8ecf6",
    "#e10913",
    "#941b0c",
    "#bc3908",
    "#f6aa1c",
    "#fbe3b7",
    "#225560",
    "#edf060",
    "#f0803c",
  ],

  ["#083d77", "#ebebd3", "#f4d35e", "#ee964b", "#f95738", "#ab3d28"],

  [
    "#03045e",
    "#0077b6",
    "#00b4d8",
    "#90e0ef",
    "#caf0f8",
    "#fee440 ",
    "#f94144",
  ],
];

let texture = [
  [
    "#03045e",
    "#023e8a",
    "#0077b6",
    "#0096c7",
    "#00b4d8",
    "#48cae4",
    "#90e0ef",
    "#ade8f4",
    "#caf0f8",
  ],
  ["#edede9", "#d6ccc2", "#f5ebe0", "#e3d5ca", "#d5bdaf"],
  ["#f08080", "#f4978e", "#f8ad9d", "#fbc4ab", "#ffdab9"],
  ["#231942", "#5e548e", "#9f86c0", "#be95c4", "#e0b1cb"],
  [
    "#ff7b00",
    "#ff8800",
    "#ff9500",
    "#ffa200",
    "#ffaa00",
    "#ffb700",
    "#ffc300",
    "#ffd000",
    "#ffdd00",
    "#ffea00",
  ],
  [
    "#7400b8",
    "#6930c3",
    "#5e60ce",
    "#5390d9",
    "#4ea8de",
    "#48bfe3",
    "#56cfe1",
    "#64dfdf",
    "#72efdd",
    "#80ffdb",
  ],
  ["#ddd5d0", "#cfc0bd", "#b8b8aa", "#7f9183", "#586f6b"],
  ["#8c1c13", "#bf4342", "#e7d7c1", "#a78a7f", "#735751"],
  ["#ff6b35", "#f7c59f", "#efefd0", "#004e89", "#1a659e"],
  ["#ccd5ae", "#e9edc9", "#fefae0", "#faedcd", "#d4a373"],
];

let rndColors = palettes[Math.floor(fxrand() * palettes.length)];
let textureColor = texture[Math.floor(fxrand() * texture.length)];
//Variation params
//rnds < .0.1
let transVl = [420, 460, 560];
let transRND = transVl[Math.floor(fxrand() * transVl.length)];
let plRND = parseInt(fxrand() * 2) ? 2 : 3;
//rnds < 0.2
let invertNoiseFrameArray = [1.2, 5.8, 2.03];
let iNFArand =
  invertNoiseFrameArray[Math.floor(fxrand() * invertNoiseFrameArray.length)];
//rnds < 0.3
let frameNoiseRandomArray = [
  [70, 220],
  [150, 110],
];
let grabArr =
  frameNoiseRandomArray[Math.floor(fxrand() * frameNoiseRandomArray.length)];
let trRArr = [5, 6, 7, 8, 9, 10, 11, 12];
let trRND = trRArr[Math.floor(fxrand() * trRArr.length)];

//rnds < 0.7

let inductArr = [1, 2, 3];
let induct = inductArr[Math.floor(fxrand() * inductArr.length)];
let twoValPI = parseInt(fxrand() * 2) ? 3.14 : -3.14;
let twoValTWO_PI = parseInt(fxrand() * 2) ? 6.28 : -6.28;

//rnds < 0.8 && rnds < 0.9

let arr = [4, 5, 6, 7];
let opt = arr[Math.floor(fxrand() * arr.length)];

let xW = [300, 400, 600];
let rndWidth = xW[Math.floor(fxrand() * xW.length)];

let gaus = [180, 230, 250, 280];
let gausArr = gaus[Math.floor(fxrand() * gaus.length)];

function setup() {
  s = Math.min(windowWidth, windowHeight);
  createCanvas(s, s);
  pixelDensity(1);
  let img = createSketch(s);
  image(img, 0, 0);
  noLoop();
  fxpreview();
  dS = windowHeight / 1000;
}

function fxrandRange(a, b) {
  return a + fxrand() * (b - a);
}
function windowResized() {
  let s = min(windowWidth, windowHeight);
  resizeCanvas(s, s);
  let sketch = createSketch(s);
  image(sketch, 0, 0);
  fxpreview();
}

function keyPressed() {
  if (key === "a" || key === "A") {
    let sk = createSketch(1000);
    sk.save("Cosmic Miniatures (" + fxhash + ").png");
  }
  if (key === "s" || key === "S") {
    let sk = createSketch(2000);
    sk.save("Cosmic Miniatures (" + fxhash + ").png");
  }
  if (key === "d" || key === "D") {
    let sk = createSketch(3000);
    sk.save("Cosmic Miniatures (" + fxhash + ").png");
  }
  if (key === "f" || key === "F") {
    let sk = createSketch(4000);
    sk.save("Cosmic Miniatures (" + fxhash + ").png");
  }
}

const createSketch = (s) => {
  randomSeed(seed);
  noiseSeed(seed);
  let sk = createGraphics(s, s);
  sk.colorMode(HSB, 360, 100, 100, 100);
  sk.background(0);
  let rnds = +random(1.2).toFixed(1);
  dS = s / 5500;

  //Variations
  if (rnds < 0.1) {
    rndWidth === 300
      ? (() => {
          sk.push();
          sk.scale(s / 750);
          sk.stroke(40);
          spaceParticles(sk);
          sk.pop();
          sk.push();
          sk.scale(s / 850);
          texture_2(sk, 1.6);
          sk.pop();
          sk.push();
          sk.angleMode(DEGREES);
          sk.translate(s / 2, s / 2);
          sk.scale(s / 1800);
          for (let i = 0; i < 8; i += plRND) {
            sk.push();
            sk.rotate((360 * i) / 8);
            sk.translate(transRND, 0);
            fakeSun(sk, 100, 100, 100, 100);
            sk.pop();
          }
          sk.pop();
          sk.push();
          sk.translate(s / 2, s / 2);
          sk.scale(s / 750);
          frame(sk, 130, 220, TWO_PI, random(0.002, 0.005), 0.06);
          sk.pop();
          sk.push();
          sk.colorMode(HSB, 360, 100, 100, 100);
          sk.translate(s / 3.4, s / 3.4);
          sk.scale(s / 850);
          oblik(
            sk,
            hue(random(rndColors)),
            saturation(random(rndColors)),
            brightness(random(rndColors)),
            40,
            random(2500, 3000),
            150,
            200
          );
          sk.pop();
          sk.push();
          sk.translate(s / 4, s / 4);
          sk.scale(s / 1850);
          noiseGame(sk, 1, 0.02, 0, 0, 0);
          sk.pop();
        })()
      : rndWidth === 400
      ? (() => {
          sk.push();
          sk.scale(s / 750);
          sk.stroke(40);
          spaceParticles(sk);
          sk.pop();
          sk.push();
          sk.translate(s / 2, s / 2);
          sk.scale(s / 750);
          for (let i = 0; i < 100; i++) {
            sk.push();
            sk.rotate(i / trRND);
            sk.scale(i / random(10, 20));
            sk.noFill();
            sk.colorMode(HSB, 360, 100, 100, 100);
            sk.strokeWeight(0.09);
            sk.stroke(
              hue(random(rndColors)),
              saturation(random(rndColors)),
              brightness(random(rndColors)),
              random(20, 30)
            );
            sk.triangle(0, -100, -10, 1000, 0, 0);
            sk.pop();
          }
          sk.pop();
          sk.push();
          sk.angleMode(DEGREES);
          sk.translate(s / 2, s / 2);
          sk.scale(s / 1800);
          for (let i = 0; i < 8; i += plRND) {
            if (induct === 1) {
              sk.push();
              sk.rotate((360 * i) / 8);
              sk.translate(transRND, 0);
              frame(
                sk,
                random(20, 110),
                random(170, 180),
                TWO_PI,
                random(0.002, 0.005)
              );
              sk.pop();
            } else if (induct === 2) {
              sk.push();
              sk.rotate((360 * i) / 8);
              sk.translate(transRND, 0);
              frame(
                sk,
                random(20, 110),
                random(170, 180),
                random(PI, TWO_PI),
                random(0.002, 0.005)
              );
              sk.pop();
            } else if (induct === 3) {
              sk.push();
              sk.shearX(random(twoValPI, twoValTWO_PI));
              sk.rotate((360 * i) / 8);
              sk.translate(80, 0);
              frame(
                sk,
                random(105, 110),
                random(20, 30),
                random(PI, TWO_PI),
                random(0.008, 0.009)
              );
              sk.pop();
            }
          }
          sk.pop();
          sk.push();
          sk.colorMode(HSB, 360, 100, 100, 1);
          sk.translate(s / 2, s / 2);
          sk.scale(s / 750);
          frame(sk, 130, 220, TWO_PI, random(0.001, 0.002));
          sk.pop();
          sk.push();
          sk.scale(s / 850);
          texture_2(sk, 1.5);
          sk.pop();
        })()
      : (() => {
          sk.push();
          sk.scale(s / 750);
          sk.stroke(40);
          spaceParticles(sk);
          sk.pop();
          sk.push();
          sk.translate(s / 2, s / 2);
          sk.scale(s / 750);
          frame(
            sk,
            130,
            220,
            TWO_PI,

            random(0.001, 0.002)
          );
          sk.pop();

          sk.push();
          sk.translate(s / 2, s / 2);
          sk.scale(s / 850);
          sk.beginShape();
          for (let i = 0; i < 860; i++) {
            sk.noFill();
            sk.strokeWeight(0.4);
            sk.stroke(
              hue(random(rndColors)),
              saturation(random(rndColors)),
              brightness(random(rndColors)),
              25
            );
            let x = 500 * cos(i);
            let y = 500 * sin(i * 1.2);
            vertex(x, y);
          }
          sk.endShape(CLOSE);
          sk.pop();

          sk.push();
          sk.angleMode(DEGREES);
          sk.translate(s / 2, s / 2);
          sk.scale(s / 1800);

          for (let i = 0; i < 8; i += plRND) {
            sk.push();
            sk.rotate((360 * i) / 8);
            sk.translate(transRND, 0);
            frame(
              sk,
              random(20, 110),
              random(170, 180),
              random(PI, TWO_PI),

              random(0.002, 0.005)
            );
            sk.pop();
          }
          sk.pop();
          sk.push();
          sk.scale(s / 950);
          texture_2(sk, 1.7);
          sk.pop();
        })();
  } else if (rnds < 0.2) {
    sk.push();
    sk.scale(s / 750);
    sk.stroke(40);
    spaceParticles(sk);
    sk.pop();
    sk.push();
    sk.translate(s / iNFArand, s / iNFArand);
    sk.scale(s / 750);
    frame(sk, 70, -500, TWO_PI, random(0.002, 0.005));
    sk.pop();
    sk.push();
    sk.scale(s / 850);
    texture_2(sk, 1.6);
    sk.pop();

    for (let j = 0; j < 2; j++) {
      sk.push();
      sk.scale(s / 850);
      sk.translate(random(10, 600), random(10, 600));
      fakeSun(sk, 100, 100, 100, 100);
      sk.pop();
    }

    for (let i = 0; i < 20; i++) {
      sk.push();
      sk.scale(s / 850);
      sk.translate(random(10, 600), random(10, 600));
      sk.colorMode(HSB, 360, 100, 100, 100);
      oblik(
        sk,
        hue(random(rndColors)),
        saturation(random(rndColors)),
        brightness(random(rndColors)),
        5,
        random(2500, 3000),
        150,
        200
      );
      sk.pop();
    }
  } else if (rnds < 0.3) {
    sk.push();
    sk.scale(s / 750);
    sk.stroke(40);
    spaceParticles(sk);
    sk.pop();
    sk.push();
    sk.colorMode(HSB, 360, 100, 100, 100);
    sk.translate(s / 3.8, s / 3.8);
    sk.scale(s / 750);
    oblik(
      sk,
      hue(random(rndColors)),
      saturation(random(rndColors)),
      brightness(random(rndColors)),
      random(15, 30),
      random(2500, 3000),
      150,
      200
    );
    sk.pop();
    sk.push();
    sk.translate(s / 3.75, s / 3.75);
    sk.scale(s / 1900);
    noiseGame(sk, 1, 0.02, 255, random(0, 255), 0);
    sk.pop();
    sk.push();
    sk.translate(s / 2, s / 2);
    sk.scale(s / 750);
    frame(sk, grabArr[0], grabArr[1], TWO_PI, random(0.002, 0.005));
    sk.pop();
    sk.push();
    sk.scale(s / 850);
    texture_2(sk, 1.6);
    sk.pop();
  } else if (rnds < 0.4) {
    sk.push();
    sk.scale(s / 3000);
    for (let i = 0; i < random(20, 60); i++) {
      let xP = random(100, 600);
      let yP = random(-100, 900);
      composeElement(sk)[1].star();
      sk.translate(xP, yP);
    }
    sk.pop();
    sk.push();
    sk.scale(s / 850);
    texture_2(sk, 3);
    sk.pop();
    sk.push();
    sk.scale(s / 750);
    sk.stroke(40);
    spaceParticles(sk);
    sk.pop();
  } else if (rnds < 0.5) {
    sk.push();
    sk.scale(s / 750);
    sk.stroke(40);
    spaceParticles(sk);
    sk.pop();
    // ------------------------
    sk.push();
    sk.colorMode(HSB, 360, 100, 100, 100);
    sk.translate(s / 4.5, s / 4.5);
    sk.scale(s / 1600);
    noiseGame(
      sk,
      1,
      0.0001,
      hue(random(textureColor)),
      saturation(random(textureColor)),
      brightness(random(textureColor))
    );
    sk.pop();
    sk.push();
    sk.translate(s / 2, s / 2);
    sk.scale(s / 750);
    sk.colorMode(HSB, 360, 100, 100, 100);
    sk.stroke(
      hue(random(rndColors)),
      saturation(random(rndColors)),
      brightness(random(rndColors)),
      60
    );
    for (let i = 0; i < 100; i++) {
      sk.push();
      sk.rotate(i / trRND);
      sk.scale(i / 40);
      sk.noFill();
      sk.strokeWeight(0.4);
      sk.triangle(0, -100, -10, 100, 0, 0);
      sk.pop();
    }
    sk.pop();
    sk.push();
    sk.translate(s / 2, s / 2);
    sk.scale(s / 750);
    frame(sk, +random(10, 119).toFixed(), 120, TWO_PI, random(0.002, 0.005));
    sk.pop();
    sk.push();
    sk.scale(s / 850);
    texture_2(sk, 1.6);
    sk.pop();
  } else if (rnds < 0.6) {
    induct === 1
      ? (() => {
          sk.push();
          sk.scale(s / 750);
          sk.stroke(40);
          spaceParticles(sk);
          sk.pop();
          sk.push();
          sk.translate(s / 2, s / 2);
          sk.scale(s / 750);
          sk.colorMode(HSB, 360, 100, 100, 100);
          sk.stroke(
            hue(random(rndColors)),
            saturation(random(rndColors)),
            brightness(random(rndColors)),
            60
          );
          for (let i = 0; i < 100; i++) {
            sk.push();
            sk.rotate(i / trRND);
            sk.scale(i / 40);
            sk.noFill();
            sk.strokeWeight(0.4);
            sk.triangle(0, -100, -10, 100, 0, 0);
            sk.pop();
          }

          sk.pop();
          sk.push();
          sk.translate(s / 2, s / 2);
          sk.scale(s / 750);
          frame(
            sk,
            +random(10, 210).toFixed(),
            120,
            TWO_PI,
            random(0.002, 0.005)
          );
          sk.pop();

          sk.push();
          sk.scale(s / 850);
          texture_2(sk, 1.53);
          sk.pop();
        })()
      : induct === 2
      ? (() => {
          sk.push();
          sk.scale(s / 750);
          sk.stroke(20);
          spaceParticles(sk);
          sk.pop();
          sk.push();
          sk.scale(s / 850);
          texture_2(sk, 1.4);
          sk.pop();

          sk.push();
          sk.translate(s / 2, s / 2);
          sk.scale(s / 650);
          sk.colorMode(HSB, 360, 100, 100, 100);
          sk.stroke(
            hue(random(rndColors)),
            saturation(random(rndColors)),
            brightness(random(rndColors)),
            2
          );
          for (let i = 0; i < 100; i++) {
            sk.push();
            sk.rotate(i / trRND);
            sk.scale(i / 1);
            sk.noFill();
            sk.triangle(0, -100, -10, 100, 50, 250);
            sk.pop();
          }
          sk.pop();
          sk.push();
          sk.translate(s / random(2, 4), s / random(2, 6));
          sk.scale(s / 750);
          vertigo(sk, 110);
          sk.pop();
        })()
      : (() => {
          sk.push();
          sk.scale(s / 750);
          sk.stroke(20);
          spaceParticles(sk);
          sk.pop();
          sk.push();
          sk.scale(s / 850);
          texture_2(sk, 1.4);
          sk.pop();

          sk.push();
          sk.translate(s / 2, s / 2);
          sk.scale(s / 650);
          sk.colorMode(HSB, 360, 100, 100, 100);
          sk.stroke(
            hue(random(rndColors)),
            saturation(random(rndColors)),
            brightness(random(rndColors)),
            2
          );
          for (let i = 0; i < 100; i++) {
            sk.push();
            sk.rotate(i / trRND);
            sk.scale(i / 1);
            sk.noFill();
            sk.triangle(0, -100, -10, 100, 50, 250);
            sk.pop();
          }
          sk.pop();
          sk.push();
          sk.translate(s / random(2, 4), s / random(2, 6));
          sk.scale(s / 750);
          vertigo(sk, 10);
          sk.pop();
        })();
  } else if (rnds < 0.7) {
    sk.push();
    sk.scale(s / 750);
    sk.stroke(40);
    spaceParticles(sk);
    sk.pop();
    sk.push();
    sk.translate(s / 2, s / 2);
    sk.scale(s / 750);
    sk.colorMode(HSB, 360, 100, 100, 100);
    sk.stroke(
      hue(random(rndColors)),
      saturation(random(rndColors)),
      brightness(random(rndColors)),
      10
    );
    for (let i = 0; i < 100; i++) {
      sk.push();
      sk.rotate(i / trRND);
      sk.scale(i / random(10, 20));
      sk.noFill();
      sk.strokeWeight(0.2);
      sk.triangle(0, -100, -10, 1000, 0, 0);
      sk.pop();
    }
    sk.pop();
    sk.push();
    sk.translate(s / 2, s / 2);
    sk.scale(s / 1050);
    for (let i = 0; i < +random(40, 150).toFixed(); i++) {
      sk.push();
      sk.shearX(twoValPI / 4);
      let t = random(10, 200);
      sk.scale(i / t);
      frame(sk, 110, random(105, 110), 20, random(0.002, 0.005));
      sk.pop();
    }
    sk.pop();
    sk.push();
    sk.scale(s / 850);
    texture_2(sk, 1.6);
    sk.pop();
  } else if (rnds < 0.8) {
    sk.push();
    sk.scale(s / 750);
    sk.stroke(40);
    spaceParticles(sk);
    sk.pop();
    //---------------------------------------
    sk.push();
    sk.translate(s / 2, s / 2);
    sk.scale(s / 750);
    frame(sk, 150, 110, TWO_PI, random(0.002, 0.005));
    sk.pop();
    sk.push();
    sk.translate(s / 2, s / 2);
    sk.scale(s / 750);
    for (let i = 0; i < 5; i++) {
      if (opt === 4) {
        sk.push();
        sk.scale(i / 50, i / 4);
        frame(sk, 90, 110, TWO_PI, random(0.002, 0.005));
        sk.pop();
      } else if (opt === 5) {
        sk.push();
        sk.scale(i / 4, (i / 80) * random(30, 70));
        frame(sk, random(20, 60), 110, TWO_PI, random(0.002, 0.005));
        sk.pop();
      } else if (opt === 6) {
        sk.push();
        sk.scale(i / random(10, 30), i / 4);
        frame(sk, 10, 110, TWO_PI, random(0.002, 0.005));
        sk.pop();
      } else {
        sk.push();
        sk.scale(i / 5, i / 10);
        frame(sk, 10, 110, random(3.14, 4), random(0.002, 0.005));
        sk.pop();
      }
    }
    sk.pop();
    sk.push();
    sk.translate(s / 2.27, s / 2.27);
    sk.scale(s / 1700);
    fakeSun(sk, 100, 100, 100, 100);
    sk.pop();
    sk.push();
    sk.scale(s / 850);
    texture_2(sk, 1.7);
    sk.pop();
  } else if (rnds < 0.9) {
    sk.push();
    sk.scale(s / 850);
    texture_2(sk, 1.478);
    sk.pop();
    sk.push();
    sk.stroke(40);
    sk.scale(s / 750);
    spaceParticles(sk);
    sk.pop();
    sk.push();
    for (let i = 0; i < 25; i++) {
      sk.push();
      sk.translate(s / random(1.5, 1), s / random(8, 2.5));
      sk.scale(s / 950);
      sk.fill(40);
      sk.noStroke();
      sk.circle(0, 0, random(3, 4));
      sk.pop();
    }
    sk.pop();

    sk.push();
    for (let i = 0; i < 25; i++) {
      sk.push();
      sk.translate(s / random(10, 2.5), s / random(2.7, 2));
      sk.scale(s / 950);
      sk.fill(40);
      sk.noStroke();
      sk.circle(0, 0, random(2, 4));
      sk.pop();
    }
    sk.pop();
    for (let i = 0; i < 5; i++) {
      sk.push();
      sk.translate(s / 6, s / 1.5);
      sk.scale(s / 750);
      oblik(
        sk,
        hue(random(rndColors)),
        saturation(random(rndColors)) - random(50),
        brightness(random(rndColors)),
        50,
        random(2500, 3000),
        500,
        700
      );
      sk.pop();
    }
    twoValPI === 3.14
      ? (() => {
          sk.push();
          sk.translate(s / 30, s / 30);
          sk.scale(s / 750);
          planets(sk, 100, 100, 100, 100);
          sk.scale(0.4);
          sk.translate(580, 130);
          planets(sk, 100, 100, 100, 100);

          sk.scale(0.4);
          sk.translate(650, 130);
          planets(sk, 100, 100, 100, 100);
          sk.pop();
        })()
      : (() => {
          sk.push();
          sk.translate(s / 30, s / 30);
          sk.scale(s / 750);
          planetBulb(sk, 100, 100, 100, 100);
          sk.scale(0.4);
          sk.translate(580, 130);
          planetBulb(sk, 100, 100, 100, 100);

          sk.scale(0.4);
          sk.translate(650, 130);
          planetBulb(sk, 100, 100, 100, 100);
          sk.pop();
        })();
    sk.push();
    sk.translate(s / 2.7, s / 2.5);
    sk.scale(s / 1000);
    noiseGame(sk, 1, random(0.0008, 0.0009), 0, 0, 0);
    sk.pop();
  } else if (rnds < 1) {
    sk.push();
    sk.scale(s / 750);
    sk.stroke(40);
    spaceParticles(sk);
    sk.pop();
    sk.push();
    sk.colorMode(HSB, 360, 100, 100, 100);
    sk.scale(s / 3000);
    for (let i = 0; i < random(20, 30); i++) {
      composeElement(sk)[0].ball();
      sk.translate(random(100, 600), random(-100, 900));
    }
    sk.pop();
    sk.push();
    sk.scale(s / 850);
    texture_2(sk, 3);
    sk.pop();
  } else if (rnds < 1.1) {
    sk.push();
    sk.scale(s / 750);
    sk.stroke(40);
    spaceParticles(sk);
    sk.pop();
    for (let j = 0; j < 2; j++) {
      sk.push();
      sk.scale(s / 850);
      sk.translate(random(10, 400), random(10, 300));
      fakeSun(sk, 100, 100, 100, 100);
      sk.pop();
    }

    for (let i = 0; i < 10; i++) {
      sk.push();
      sk.scale(s / 850);
      sk.translate(random(10, 600), random(10, 600));
      sk.colorMode(HSB, 360, 100, 100, 100);
      oblik(
        sk,
        hue(random(rndColors)),
        saturation(random(rndColors)),
        brightness(random(rndColors)),
        5,
        random(2500, 3000),
        150,
        200
      );
      sk.pop();
    }
  } else {
    sk.push();
    sk.scale(s / 750);
    sk.stroke(40);
    spaceParticles(sk);
    sk.pop();
    for (let j = 0; j < 2; j++) {
      sk.push();
      sk.scale(s / 850);
      sk.translate(random(10, 400), random(10, 300));
      planetBulb(sk, 100, 100, 100, 100);
      sk.pop();
    }

    for (let i = 0; i < 10; i++) {
      sk.push();
      sk.scale(s / 850);
      sk.translate(random(10, 600), random(10, 600));
      sk.colorMode(HSB, 360, 100, 100, 100);
      oblik(
        sk,
        hue(random(rndColors)),
        saturation(random(rndColors)),
        brightness(random(rndColors)),
        5,
        random(2500, 3000),
        150,
        200
      );
      sk.pop();
    }
  }
  noiseFilter(sk, s, 0.5);
  return sk;
};

//Elements

const elip = (sk, pS) => {
  let particleCount = 120;
  let edges = 50;
  f = 0;
  sk.colorMode(HSB, 360, 100, 100, 100);
  sk.stroke(
    hue(random(rndColors)),
    saturation(random(rndColors)),
    brightness(random(rndColors)),
    60
  );
  for (var i = 0; i <= particleCount; i++) {
    if (twoValPI === 3.14) {
      sk.push();
      sk.rotate(i);
      sk.shearX(twoValPI / 2.6);
      for (var j = -120; j < 80; j++) {
        x = sk.randomGaussian(15, i * j);
        sk.ellipse(x, sk.randomGaussian(gausArr, x / particleCount), 0.04, pS);
      }
      sk.pop();
      f = (TAU / edges) * random(x);
    } else {
      sk.push();
      // sk.shearX(twoValPI / 2.6);
      sk.rotate(i);
      for (var j = random(-120, 20); j < 80; j++) {
        x = sk.randomGaussian(1, i * j);
        sk.ellipse(
          x,
          sk.randomGaussian(170, x / particleCount),
          0.04,
          random(50, 110)
        );
      }
      sk.pop();
      f = (TAU / edges) * random(x);
    }
  }
};


const gaussianHelp = (sk, particleCount, hole, particleSpace, particleSize) => {
  let f = 0;
  let edges = 100;
  for (var i = 0; i <= particleCount; i++) {
    sk.push();
    sk.rotate(f);
    for (var j = -120; j < 80; j++) {
      x = randomGaussian(15, j);
      sk.ellipse(
        x,
        randomGaussian(hole, x / particleCount),
        particleSpace,
        particleSize
      );
    }
    f = (TAU / edges) * random(x);
    sk.pop();
  }
};

const vertigo = (sk, tt) => {
  sk.push();
  sk.translate(200, 200);
  elip(sk, tt);
  sk.pop();
  sk.push();
  sk.translate(100, 100);
  sk.scale(1);
  planets(sk, 100, 100, 100, 100);
  sk.pop();
};

const frame = (sk, fsRND, scRND, index, strokeDensity) => {
  sk.colorMode(HSB, 360, 100, 100, 100);
  sk.stroke(
    hue(random(rndColors)),
    saturation(random(rndColors)),
    brightness(random(rndColors)),
    100
  );
  sk.noFill();
  sk.beginShape();
  for (let i = 0; i < index; i += strokeDensity) {
    let x, y;
    let r = random(fsRND, scRND);
    x = r * cos(i);
    y = r * sin(i);
    sk.strokeWeight(0.2);
    sk.vertex(x, y);
  }
  sk.scale(2.5);
  sk.endShape();
};

const noiseGame = (sk, weight, nsIncrement, R, G, B) => {
  let x, y;
  sk.beginShape();
  sk.noFill();
  let xt = random(100, 200);
  let yt = random(100, 150);
  for (let i = 0; i < 100; i += nsIncrement) {
    x = cos(i) * xt;
    let nx = map(noise(x), 0, 1, 0, 1000);
    y = sin(i) * yt;
    let ny = map(noise(y), 0, 1, 0, 1000);
    sk.stroke(R, G, B);
    sk.strokeWeight((weight * s) / 1000);
    sk.vertex(nx, ny);
  }
  sk.endShape();
};

const spaceParticles = (sk) => {
  for (let i = 0; i < 800; i++) {
    let xP = random(-100, 800);
    let yP = random(-100, 800);
    sk.fill(255);
    sk.circle(xP, yP, random(1.5));
  }
};

const planets = (sk, x1, y1, x2, y2) => {
  sk.colorMode(HSB, 360, 100, 100, 1);
  sk.stroke(
    hue(random(rndColors)),
    saturation(random(rndColors)),
    brightness(random(rndColors)),
    0.08
  );
  sk.push();
  sk.translate(100, 100);
  gaussianHelp(sk, 600, 100, 0.2, 0.004);
  sk.pop();
  let angle1, xpos1, ypos1, angle2, xpos2, ypos2;
  for (let i = 0; i < 2500; i++) {
    angle1 = random(0, 2 * PI);
    xpos1 = x1 + 100 * cos(angle1);
    ypos1 = y1 + 100 * sin(angle1);
    angle2 = random(0, 2 * PI);
    xpos2 = x2 + 100 * cos(angle2);
    ypos2 = y2 + 100 * sin(angle2);
    sk.line(xpos1, ypos1, xpos2, ypos2);
  }
};

const fakeSun = (sk, x1, y1, x2, y2) => {
  sk.colorMode(HSB, 360, 100, 100, 1);
  sk.stroke(
    hue(random(rndColors)),
    saturation(random(rndColors)),
    brightness(random(rndColors)),
    0.08
  );
  let angle1, xpos1, ypos1, angle2, xpos2, ypos2;
  for (let i = 0; i < 2500; i++) {
    angle1 = random(0, 2 * PI);
    xpos1 = x1 + 100 * cos(angle1);
    ypos1 = y1 + 100 * sin(angle1);
    angle2 = random(0, 2 * PI);
    xpos2 = x2 + 100 * cos(angle2);
    ypos2 = y2 + 100 * sin(angle2);
    sk.line(xpos1, ypos1, xpos2, ypos2);
  }
};

const planetBulb = (sk, x1, y1, x2, y2) => {
  sk.colorMode(HSB, 360, 100, 100, 1);
  sk.stroke(
    hue(random(rndColors)),
    saturation(random(rndColors)),
    brightness(random(rndColors)),
    0.08
  );
  if (twoValPI === 3.14) {
    sk.push();
    sk.translate(100, 100);
    gaussianHelp(sk, 600, 100, 0.2, random(0.004, 5.004));
    sk.pop();
  } else {
    sk.push();
    sk.translate(100, 100);
    gaussianHelp(sk, 600, 100, random(0.2, 10.2), 0.004);
    sk.pop();
  }
  let angle1, xpos1, ypos1, angle2, xpos2, ypos2;
  for (let i = 0; i < 2500; i++) {
    angle1 = random(0, 2 * PI);
    xpos1 = x1 + 100 * cos(angle1);
    ypos1 = y1 + 100 * sin(angle1);
    angle2 = random(0, 2 * PI);
    xpos2 = x2 + 100 * cos(angle2);
    ypos2 = y2 + 100 * sin(angle2);
    sk.line(xpos1, ypos1, xpos2, ypos2);
  }
};

const oblik = (sk, R, G, B, A, numLines, rndVal1, rndVal2) => {
  sk.stroke(R, G, B, A);
  let rndLines = numLines;
  for (let i = 0; i < rndLines; i++) {
    let angle1 = random(0, 2 * PI);
    let firstN = random(rndVal1, rndVal2);
    let firstM = random(rndVal1, rndVal2);
    let xpos1 = firstN + firstM * cos(angle1);
    let ypos1 = firstN + firstM * sin(angle1);

    let angle2 = random(0, 2 * PI);
    let xpos2 = firstN + firstM * cos(angle2);
    let ypos2 = firstN + firstM * sin(angle2);
    sk.line(xpos1, ypos1, xpos2, ypos2);
  }
  return sk;
};

const composeElement = (sk) => {
  let composeArr = [
    {
      ball: () => {
        sk.push();
        sk.translate(360, 360);
        frame(sk, 70, 120, TWO_PI, random(0.002, 0.005));
        sk.pop();
        sk.push();
        sk.translate(150, 150);
        sk.scale(1.2);
        sk.colorMode(HSB, 360, 100, 100, 100);
        oblik(
          sk,
          hue(random(rndColors)),
          saturation(random(rndColors)),
          brightness(random(rndColors)),
          15,
          random(2500, 3000),
          150,
          200
        );
        sk.pop();
        sk.push();
        sk.translate(240, 270);
        fakeSun(sk, 100, 100, 100, 100);
        sk.pop();
      },
    },
    {
      star: () => {
        sk.push();
        sk.translate(360, 360);
        frame(sk, 70, 120, TWO_PI, random(0.002, 0.005));
        sk.pop();
        sk.push();
        sk.translate(150, 150);
        sk.scale(1.2);
        sk.colorMode(HSB, 360, 100, 100, 100);
        oblik(
          sk,
          hue(random(rndColors)),
          saturation(random(rndColors)),
          brightness(random(rndColors)),
          5,
          random(2500, 3000),
          150,
          200
        );
        sk.pop();

        sk.push();
        sk.translate(370, 370);
        sk.scale(1.1);
        sk.colorMode(HSB, 360, 100, 100, 100);
        sk.stroke(
          hue(random(rndColors)),
          saturation(random(rndColors)),
          brightness(random(rndColors)),
          100
        );
        for (let i = 0; i < 100; i++) {
          sk.push();
          sk.rotate(i / trRND);
          sk.scale(i / 47);
          sk.noFill();
          sk.strokeWeight(0.4);
          sk.triangle(0, -100, -10, 100, 0, 0);
          sk.pop();
        }
        sk.pop();
      },
    },
  ];
  return composeArr;
};

const texture_2 = (sk, strokeW) => {
  sk.colorMode(HSB, 360, 100, 100, 250);
  for (let i = 0; i < 40; i++) {
    sk.push();
    let xP = random(-100, 1200);
    let yP = random(-100, 1000);
    sk.translate(xP, yP);
    oblik(
      sk,
      hue(random(rndColors)),
      saturation(random(rndColors)),
      brightness(random(rndColors)),
      strokeW,
      random(4000, 4500),
      150,
      200
    );
    sk.pop();
  }
};

const noiseFilter = (sk, s, amount) => {
  sk.loadPixels();
  let change = amount * sqrt(s);
  let size =
    4 * (sk.width / sk.pixelDensity()) * (sk.height / sk.pixelDensity());
  let pixels = sk.pixels;
  for (let i = 0; i < size; i += 4) {
    var n = -change + random() * change * 2;
    pixels[i] += n;
    pixels[i + 1] += n;
    pixels[i + 2] += n;
  }
  sk.updatePixels();
};
