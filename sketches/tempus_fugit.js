let s, saveSkecth;
const seed = Math.floor(fxrand() * 1e9);
let sketchWidth = 500;
let sketchHeight = 600;
let caseArr = [1, 2, 3, 4, 5, 6, 7];
let cases = caseArr[Math.floor(fxrand() * caseArr.length)];
let skyVarieArr = ["firstComposition", "gearOnly", "firstPerspective"];
let skyVarie = skyVarieArr[Math.floor(fxrand() * skyVarieArr.length)];
let cityTwoShuffleArr = [1, 2, 3];
let cityTwoShuffler =
  cityTwoShuffleArr[Math.floor(fxrand() * cityTwoShuffleArr.length)];
let cityTwoWindowShuffleArr = [1, 2, 3, 4, 5, 6, 7];
let cityTwoWindowShuffler =
  cityTwoWindowShuffleArr[
    Math.floor(fxrand() * cityTwoWindowShuffleArr.length)
  ];
let threeValGearComposerArr = [1, 2, 3];
let threeValGearComposer =
  threeValGearComposerArr[
    Math.floor(fxrand() * threeValGearComposerArr.length)
  ];

let twoValStress = parseInt(fxrand() * 2) ? 1 : 2;
let gearScaler = parseInt(fxrand() * 2) ? 1 : 2;
let case4FirstPerspectiveRandom = +fxrand().toFixed(2);
let case6GearsArr = [1, 2, 3, 4];
let case6Gears = case6GearsArr[Math.floor(fxrand() * case6GearsArr.length)];
let case6FirstPerspectiveRandom = +fxrand().toFixed(2);
let cityThreeColorsArr = [
  ["#edede9", "#d6ccc2", "#f5ebe0", "#e3d5ca", "#d5bdaf"],
  ["#edf2fb", "#e2eafc", "#d7e3fc", "#ccdbfd", "#c1d3fe", "#b6ccfe", "#abc4ff"],
  ["#d6ccc2", "#ded6ce", "#e5ded8", "#eeeae6", "#e3d5ca", "#f5ebe0"],
  [
    "#fdf3ea",
    "#ffeee4",
    "#feece0",
    "#fee9d6",
    "#fde1cb",
    "#fbd9bf",
    "#fad1b4",
    "#f8c9a8",
    "#fac096",
    "#fbbb8d",
  ],
  [
    "#e8a598",
    "#ffb5a7",
    "#fec5bb",
    "#fcd5ce",
    "#fae1dd",
    "#f8edeb",
    "#f9e5d8",
    "#f9dcc4",
    "#fcd2af",
    "#fec89a",
  ],
];
let cityThreeColor =
  cityThreeColorsArr[Math.floor(fxrand() * cityThreeColorsArr.length)];

let sepiaSky = [
  "#ECC081",
  "#896022",
  "#C89C5B",
  "#EBDABB",
  "#EDD2A7",
  "#FEFED7",
];

let palettes = [
  [
    "#ECC081",
    "#C89C5B",
    "#896022",
    "#FEEBAF",
    "#AA7E3F",
    "#FFFFC9",
    "#FEFFD5",
    "#FED698",
    "#F6CD8F",
    "#E1B878",
    "#ECC081",
    "#896022",
    "#C89C5B",
    "#EBDABB",
    "#EDD2A7",
    "#FEFED7",
  ], // Sepia
  ["#cb997e", "#ddbea9", "#ffe8d6", "#b7b7a4", "#a5a58d"],
  ["#ffcdb2", "#ffb4a2", "#e5989b", "#b5838d"],
  ["#00b4d8", "#48cae4", "#90e0ef", "#ade8f4", "#caf0f8"],
  [
    "#ffadad",
    "#ffd6a5",
    "#fdffb6",
    "#caffbf",
    "#9bf6ff",
    "#a0c4ff",
    "#bdb2ff",
    "#ffc6ff",
  ],
  ["#b98b73", "#cb997e", "#ddbea9", "#ffe8d6", "#d4c7b0"],
  ["#64a6bd", "#90a8c3", "#ada7c9", "#d7b9d5", "#f4cae0"],
  ["#f7b267", "#f79d65", "#f4845f", "#f27059", "#f25c54"],
  ["#ff7b00", "#ffa200", "#ffc300", "#ffea00"],
  [
    "#264653",
    "#287271",
    "#2a9d8f",
    "#8ab17d",
    "#e9c46a",
    "#efb366",
    "#f4a261",
    "#ee8959",
    "#e76f51",
    "#e97c61",
  ],
  ["#cb997e", "#ddbea9", "#ffe8d6", "#b7b7a4", "#a5a58d", "#6b705c"],
];

let palette = palettes[Math.floor(fxrand() * palettes.length)];

let cityTwoPaletteArray = [
  ["#ede0d4", "#e6ccb2", "#ddb892", "#b08968", "#7f5539", "#9c6644"],
  [
    "#f94144",
    "#f3722c",
    "#f8961e",
    "#f9844a",
    "#f9c74f",
    "#90be6d",
    "#43aa8b",
    "#4d908e",
    "#577590",
    "#277da1",
  ],
  ["#f08080", "#f4978e", "#f8ad9d", "#fbc4ab", "#ffdab9"],
  ["#0081a7", "#00afb9", "#fdfcdc", "#fed9b7", "#f07167"],
  ["#64a6bd", "#90a8c3", "#ada7c9", "#d7b9d5", "#f4cae0"],
];

let cityTwoC =
  cityTwoPaletteArray[Math.floor(fxrand() * cityTwoPaletteArray.length)];

function setup() {
  let scale = min(windowWidth / sketchWidth, windowHeight / sketchHeight);
  let width = +(sketchWidth * scale);
  let height = +(sketchHeight * scale);
  createCanvas(width, height);
  pixelDensity(1);
  let sketch = createSketch(width, height);
  image(sketch, 0, 0);
  fxpreview();
  noLoop();
}

function fxrandRange(a, b) {
  return a + fxrand() * (b - a);
}

function windowResized() {
  let scale = min(windowWidth / sketchWidth, windowHeight / sketchHeight);
  let width = +(sketchWidth * scale);
  let height = +(sketchHeight * scale);
  resizeCanvas(width, height);
  let sketch = createSketch(width, height);
  image(sketch, 0, 0);
  fxpreview();
}

function keyPressed() {
  if (key === "a" || key === "A") {
    let sk = createSketch(width * 2, height * 2);
    sk.save(`Tempus Fugit (${fxhash}).png`);
  }
  if (key === "s" || key === "S") {
    let sk = createSketch(width * 3, height * 3);
    sk.save(`Tempus Fugit (${fxhash}).png`);
  }
  if (key === "d" || key === "D") {
    let sk = createSketch(width * 4, height * 4);
    sk.save(`Tempus Fugit (${fxhash}).png`);
  }
  if (key === "f" || key === "F") {
    let sk = createSketch(width * 6, height * 6);
    sk.save(`Tempus Fugit (${fxhash}).png`);
  }
}

const createSketch = (width, height) => {
  let minSize = min(sketchWidth, sketchHeight);
  let sk = createGraphics(width, height);
  noiseSeed(seed);
  randomSeed(seed);
  let scale = min(width / sketchWidth, height / sketchHeight);

  sk.scale(scale);
  // sk.colorMode(HSB, 360, 100, 100, 100);
  sk.background(255);
  sk.push();
  skyGradient(sk);
  clouds(sk);
  if (cases === 1) {
    mist(sk, 100, 530, 0.02);
  }
  if (cases === 2) {
    sk.push();
    mist(sk, 700, 530, 0.02);
    sk.pop();
    sk.push();
    mist(sk, 300, 0, 0.02);
    sk.pop();
  }
  if (cases === 3) {
    sk.push();
    mist(sk, 1000, 530, 0.02);
    sk.pop();
    sk.push();
    mist(sk, 1000, 0, 0.02);
    sk.pop();
  }
  if (cases === 4) {
    sk.push();
    mist(sk, 1400, 530, 0.02);
    sk.pop();
    sk.push();
    mist(sk, 1300, 0, 0.02);
    sk.pop();
  }
  if (cases === 5) {
    sk.push();
    mist(sk, 1400, 580, 0.02);
    sk.pop();
    sk.push();
    mist(sk, 3800, 0, 0.02);
    sk.pop();
  }
  if (cases === 6) {
    sk.push();
    mist(sk, 400, 580, 0.02);
    sk.pop();
    sk.push();
    mist(sk, 4800, 0, 0.02);
    sk.pop();
  }
  if (cases === 7) {
    sk.push();
    mist(sk, 400, 580, 0.02);
    sk.pop();
    sk.push();
    mist(sk, 4800, 0, 0.02);
    sk.pop();
  }
  sk.pop();
  sk.push();
  shadowTexture(
    sk,
    0.1,
    0.001,
    hue(random(palette)),
    saturation(random(palette)),
    brightness(random(palette)),
    100
  );
  sk.pop();

  sk.push();

  sk.translate(-3, 310);
  sk.scale(0.319);
  // sk.translate(-515, 130);
  // sk.scale(0.65);

  sk.push();
  if (cases === 1 && skyVarie === "firstComposition") {
    cityOne(sk);
  }
  if (cases === 2 && skyVarie === "firstComposition") {
    sk.translate(-3, 50);
    cityOne(sk);
  }
  if (cases === 3 && skyVarie === "firstComposition") {
    sk.translate(-3, 70);
    cityOne(sk);
  }
  if (cases === 4 && skyVarie === "firstComposition") {
    sk.translate(-3, 70);
    cityOne(sk);
  }
  if (cases === 5 && skyVarie === "firstComposition") {
    sk.translate(-3, 280);
    cityOne(sk);
  }
  if (cases === 6 && skyVarie === "firstComposition") {
    sk.translate(-3, 500);
    cityOne(sk);
  }

  if (cases === 1 && skyVarie === "gearOnly") {
    sk.scale(0.8);
    sk.translate(0, 285);
    cityTwo(sk);
  }
  if (cases === 2 && skyVarie === "gearOnly") {
    sk.push();
    sk.scale(0.8);
    sk.translate(0, 350);
    cityTwo(sk);
    sk.pop();

    sk.push();
    sk.scale(1.5);
    mist(sk, 700, 530, 0.02);
    sk.pop();

    sk.push();
    sk.scale(1.5);
    sk.translate(550, 0);
    mist(sk, 700, 530, 0.02);
    sk.pop();
  }
  if (cases === 3 && skyVarie === "gearOnly") {
    sk.push();
    sk.scale(0.8);
    sk.translate(0, 480);
    cityTwo(sk);
    sk.pop();
    sk.push();
    sk.scale(1.5);
    mist(sk, 800, 430, 0.02);
    sk.pop();

    sk.push();
    sk.scale(1.5);
    sk.translate(550, 0);
    mist(sk, 800, 430, 0.02);
    sk.pop();
  }
  if (cases === 4 && skyVarie === "gearOnly") {
    sk.push();
    sk.scale(0.8);
    sk.translate(0, 580);
    cityTwo(sk);
    sk.pop();

    sk.push();
    sk.scale(1.5);
    mist(sk, 800, 430, 0.02);
    sk.pop();

    sk.push();
    sk.scale(1.5);
    sk.translate(550, 0);
    mist(sk, 800, 430, 0.02);
    sk.pop();
  }
  if (cases === 5 && skyVarie === "gearOnly") {
    sk.push();
    sk.scale(0.8);
    sk.translate(0, 685);
    cityTwo(sk);
    sk.pop();

    sk.push();
    sk.scale(1.5);
    mist(sk, 1200, 350, 0.02);
    sk.pop();

    sk.push();
    sk.scale(1.5);
    sk.translate(550, 0);
    mist(sk, 1200, 350, 0.02);
    sk.pop();
  }
  if (cases === 6 && skyVarie === "gearOnly") {
    sk.push();
    sk.scale(0.8);
    sk.translate(0, 955);
    cityTwo(sk);
    sk.pop();

    sk.push();
    sk.scale(1.5);
    mist(sk, 1200, 350, 0.02);
    sk.pop();

    sk.push();
    sk.scale(1.5);
    sk.translate(550, 0);
    mist(sk, 1200, 350, 0.02);
    sk.pop();
  }

  if (cases === 1 && skyVarie === "firstPerspective") {
    if (threeValGearComposer === 1) {
      sk.push();
      sk.scale(0.8);
      sk.translate(-330, random(-250, 500));
      gear(sk, 0, 0, 0.1);
      sk.pop();
    }
    if (threeValGearComposer === 2) {
      sk.push();
      sk.translate(random(-630, -310), random(0, 200));
      gear(sk, 0, 0, 0.1);
      sk.pop();
    }
    if (threeValGearComposer === 3) {
      sk.push();
      sk.translate(random(-130, 710), random(-600, 0));
      sk.scale(0.6);
      mreza(sk);
      sk.pop();
    }

    sk.push();
    sk.angleMode(RADIANS);
    cityThree(sk);
    sk.pop();
  }
  if (cases === 2 && skyVarie === "firstPerspective") {
    if (twoValStress === 1) {
      sk.push();
      sk.translate(random(-630, -310), random(0, 100));
      gear(sk, 0, 0, 0.1);
      sk.pop();
    }
    if (twoValStress === 2) {
      sk.push();
      sk.translate(random(-130, 710), random(-600, -200));
      sk.scale(0.6);
      mreza(sk);
      sk.pop();
    }

    sk.push();
    sk.angleMode(RADIANS);
    cityThree(sk);
    sk.pop();

    sk.push();
    sk.scale(1.5);
    mist(sk, 800, 430, 0.02);
    sk.pop();

    sk.push();
    sk.scale(1.5);
    sk.translate(530, 0);
    mist(sk, 900, 430, 0.02);
    sk.pop();
  }

  if (cases === 3 && skyVarie === "firstPerspective") {
    if (twoValStress === 1) {
      sk.push();
      sk.translate(random(-830, -410), random(350, 450));
      sk.scale(1.2);
      gear(sk, 0, 0, 0.1);
      sk.pop();
    }
    if (twoValStress === 2) {
      sk.push();
      sk.translate(random(-130, 710), random(-600, -200));
      sk.scale(0.6);
      mreza(sk);
      sk.pop();
    }

    sk.push();
    sk.angleMode(RADIANS);
    sk.translate(0, 200);
    cityThree(sk);
    sk.pop();

    sk.push();
    sk.scale(1.5);
    mist(sk, 1000, 400, 0.03);
    sk.pop();

    sk.push();
    sk.scale(1.5);
    sk.translate(530, 0);
    mist(sk, 1000, 400, 0.03);
    sk.pop();
  }

  if (cases === 4 && skyVarie === "firstPerspective") {
    sk.push();
    gearCableMrezaComposer(sk);
    sk.pop();

    sk.push();
    sk.angleMode(RADIANS);
    sk.translate(0, 400);
    cityThree(sk);
    sk.pop();

    sk.push();
    sk.scale(1.5);
    mist(sk, 1000, 400, 0.03);
    sk.pop();

    sk.push();
    sk.scale(1.5);
    sk.translate(530, 0);
    mist(sk, 1000, 400, 0.03);
    sk.pop();
  }

  if (cases === 5 && skyVarie === "firstPerspective") {
    sk.push();
    gearCableMrezaComposer(sk);
    sk.pop();

    sk.push();
    sk.angleMode(RADIANS);
    sk.translate(0, 540);
    cityThree(sk);
    sk.pop();

    sk.push();
    sk.scale(1.5);
    mist(sk, 1000, 400, 0.03);
    sk.pop();

    sk.push();
    sk.scale(1.5);
    sk.translate(530, 0);
    mist(sk, 1000, 400, 0.03);
    sk.pop();
  }
  // -------------------------------------------------------------------Ovde zavrsit----------------------------------------------------

  if (cases === 6 && skyVarie === "firstPerspective") {
    sk.push();
    case6explosion(sk);
    sk.pop();
  }

  sk.pop();

  if (cases === 1) {
    if (skyVarie === "firstComposition") {
      sk.push();
      gear(sk, 0, 0, 0.1);
      sk.pop();
    }
    if (skyVarie === "gearOnly") {
      sk.push();
      sk.translate(random(-900, 0), random(-50, 10));
      gear(sk, 0, 0, 0.1);
      sk.pop();
    }
  } else if (cases === 2) {
    if (skyVarie === "firstComposition") {
      sk.push();
      gear(sk, 0, 0, 0.1);
      sk.pop();
    }
    if (skyVarie === "gearOnly") {
      if (twoValStress === 1) {
        sk.push();
        sk.translate(random(-900, 0), random(-50, 10));
        gear(sk, 0, 0, 0.1);
        sk.pop();
      }
      if (twoValStress === 2) {
        sk.push();
        sk.translate(random(0, 700), random(-400, -600));
        sk.scale(0.6);
        mreza(sk);
        sk.pop();
      }
    }
  } else if (cases === 3) {
    if (skyVarie === "firstComposition") {
      sk.push();
      gear(sk, 0, 0, 0.1);
      sk.pop();
    }
    if (skyVarie === "gearOnly") {
      if (twoValStress === 1) {
        sk.push();
        sk.translate(random(-900, 0), random(-50, 10));
        gear(sk, 0, 0, 0.1);
        sk.pop();
      }
      if (twoValStress === 2) {
        sk.push();
        sk.translate(random(0, 700), random(-400, -600));
        sk.scale(0.6);
        mreza(sk);
        sk.pop();
      }
    }
  } else if (cases === 4) {
    if (skyVarie === "firstComposition") {
      sk.push();
      gear(sk, 0, -1, 0.1);
      sk.pop();
    }
    if (skyVarie === "gearOnly") {
      if (twoValStress === 1) {
        sk.push();
        sk.translate(random(-900, 0), random(-50, 10));
        gear(sk, 0, 0, 0.1);
        sk.pop();
      }
      if (twoValStress === 2) {
        sk.push();
        sk.translate(random(0, 700), random(-400, -600));
        sk.scale(0.6);
        mreza(sk);
        sk.pop();
      }
    }
  } else if (cases === 5) {
    if (skyVarie === "firstComposition") {
      sk.push();
      sk.translate(0, 80);
      gear(sk, 0, -2, 0.1);
      sk.pop();
    }
    if (skyVarie === "gearOnly") {
      if (twoValStress === 1) {
        sk.push();
        sk.translate(random(-500, 0), random(0, 500));
        gear(sk, 0, random(-2, -5), 0.1);
        sk.pop();
      }
      if (twoValStress === 2) {
        sk.push();
        sk.translate(random(-900, -400), random(0, 450));
        gear(sk, 0, random(2, 5), 0.1);
        sk.pop();
      }
    }
  } else if (cases === 6) {
    if (skyVarie === "firstComposition") {
      if (twoValStress === 1) {
        if (gearScaler === 1) {
          sk.push();
          sk.rotate(random(-25, -15));
          sk.translate(random(-500, -300), 850);
          gear(sk, random(-30, -2), 0, 0.01);
          sk.pop();
        }
        if (gearScaler === 2) {
          sk.push();
          sk.rotate(random(50, 60));
          sk.translate(-700, -100);
          gear(sk, random(-30, -2), 0, 0.01);
          sk.pop();
        }
      }
      if (twoValStress === 2) {
        if (gearScaler === 1) {
          sk.push();
          sk.translate(random(-500, -300), 450);
          gear(sk, 0, random(-15, -3), 0.05);
          sk.pop();
        }

        if (gearScaler === 2) {
          sk.push();
          sk.translate(random(-700, -500), 450);
          gear(sk, 0, random(3, 15), 0.05);
          sk.pop();
        }
      }
    }
    if (skyVarie === "gearOnly") {
      if (twoValStress === 1) {
        sk.push();
        sk.rotate(-23);
        sk.translate(-1800, -100);
        gear(sk, random(-8, -3), 0, 0.01);
        sk.pop();
      }
      if (twoValStress === 2) {
        sk.push();
        sk.translate(random(-600, -100), random(450, 900));
        gear(sk, 0, random(-15, -3), 0.05);
        sk.pop();
      }
    }
  } else if (cases === 7) {
    if (threeValGearComposer === 1) {
      sk.push();
      sk.scale(0.7);
      sk.stroke(hexToRgba(random(palette), 0.4));
      sk.translate(random(0, 800), random(-900, 200));
      mreza(sk);
      sk.pop();
    }

    if (threeValGearComposer === 2) {
      sk.push();
      sk.scale(0.4);
      sk.stroke(hexToRgba(random(palette), 0.4));
      sk.translate(400, -1300);
      mreza(sk);
      sk.pop();

      sk.push();
      sk.scale(0.4);

      sk.stroke(hexToRgba(random(palette), 0.4));
      sk.translate(400, 200);
      mreza(sk);
      sk.pop();

      sk.push();
      sk.scale(0.4);

      sk.stroke(hexToRgba(random(palette), 0.4));
      sk.translate(2000, -1300);
      mreza(sk);
      sk.pop();

      sk.push();
      sk.scale(0.4);
      sk.stroke(hexToRgba(random(palette), 0.4));
      sk.translate(2000, 200);
      mreza(sk);
      sk.pop();
    }

    if (threeValGearComposer === 3) {
      sk.push();
      sk.scale(0.3);
      sk.stroke(hexToRgba(random(palette), 0.4));
      sk.translate(400, -1800);
      mreza(sk);
      sk.pop();

      sk.push();
      sk.scale(0.4);
      sk.stroke(hexToRgba(random(palette), 0.4));
      sk.translate(200, random(600, 800));
      mreza(sk);
      sk.pop();

      sk.push();
      sk.scale(0.3);
      sk.stroke(hexToRgba(random(palette), 0.4));
      sk.translate(3000, -1800);
      mreza(sk);
      sk.pop();

      sk.push();
      sk.scale(0.4);
      sk.stroke(hexToRgba(random(palette), 0.4));
      sk.translate(1500, 0);
      mreza(sk);
      sk.pop();
    }

    sk.push();
    sk.scale(0.5);
    sk.translate(400, 2000);
    gear(sk, random(-10, -9), 0, 0.01);
    sk.pop();
    sk.push();
    sk.scale(0.5);
    sk.translate(400, 2000);
    gear(sk, random(-10, -9), 0, 0.01);
    sk.pop();

    sk.push();
    sk.scale(0.5);
    sk.translate(500, 2000);
    gear(sk, random(-10, -9), 0, 0.01);
    sk.pop();

    sk.push();
    sk.scale(0.5);
    sk.translate(500, 2000);
    gear(sk, random(-10, -9), 0, 0.01);
    sk.pop();

    sk.push();
    sk.scale(0.5);
    sk.translate(500, 2000);
    gear(sk, random(-10, -9), 0, 0.01);
    sk.pop();

    sk.push();
    sk.scale(0.5);
    sk.translate(500, 2000);
    gear(sk, 0, random(-25, 35), 0.01);
    sk.pop();
  }
  // ------------------------------------------------------------------Sutra ubacit mrezu kao varijaciju umjesto zupcanika case 6
  // -----------------------------Napravit olupinu od zupcanika mozda sastavit tri----------------------
  sk.pop();
  sk.push();
  sk.translate(150, 200);
  sk.rotate(10);
  sk.shearX(20);
  sk.shearY(5);
  //-------------------------------------------------------Sredit Pticurine za svaku kompoziciju----------------
  for (let i = 0; i < 3; i++) {
    if (cases === 1) {
      if (skyVarie === "firstComposition") {
        sk.translate(random(0, 50), random(-20, 0));
        sk.translate((i * 2) / 1.5);
        birds(sk);
      }
      if (skyVarie === "gearOnly") {
        sk.push();
        sk.translate(random(-100, 0), random(100, 150));
        birds(sk);
        sk.pop();
      }
    }
    if (cases === 2) {
      if (skyVarie === "firstComposition") {
        sk.translate(random(0, 50), random(-20, 0));
        sk.translate((i * 2) / 1.5);
        birds(sk);
      }
      if (skyVarie === "gearOnly") {
        sk.push();
        sk.translate(random(-100, 0), random(100, 150));
        birds(sk);
        sk.pop();
      }
    }
  }
  sk.pop();
  if (cases === 1) {
    if (skyVarie === "firstComposition") {
      sk.push();
      circleCompose(sk);
      sk.pop();
    }
  }
  if (cases === 2) {
    if (skyVarie === "firstComposition") {
      sk.push();
      circleCompose(sk);
      sk.pop();
    }
  }
  if (cases === 3) {
    if (skyVarie === "firstComposition") {
      sk.push();
      circleCompose(sk);
      sk.pop();
    }
  }
  if (cases === 4) {
    if (skyVarie === "firstComposition") {
      sk.push();
      circleCompose(sk);
      sk.pop();
    }
  }
  if (cases === 5) {
    if (skyVarie === "firstComposition") {
      sk.push();
      circleCompose(sk);
      sk.pop();
    }
  }

  if (threeValGearComposer === 2 && skyVarie === "firstComposition") {
    sk.push();
    gearComposer(sk);
    sk.pop();
  }
  if (threeValGearComposer === 3 && skyVarie === "firstComposition") {
    sk.push();
    mrezaComposer(sk);
    sk.pop();
  }

  //   kraj----------------------
  frame(sk);
  noiseFilter(sk, scale, 15);
  return sk;
};
const frame = (sk) => {
  rectMode(CORNER);
  sk.noFill();
  sk.stroke(50);
  sk.strokeWeight(sketchWidth / 30, sketchHeight / 30);
  sk.rect(0, 0, sketchWidth, sketchHeight);
};

const hexToRgba = (hex, opacity) => {
  return (
    "rgba(" +
    (hex = hex.replace("#", ""))
      .match(new RegExp("(.{" + hex.length / 3 + "})", "g"))
      .map(function (l) {
        return parseInt(hex.length % 2 ? l + l : l, 16);
      })
      .concat(isFinite(opacity) ? opacity : 1)
      .join(",") +
    ")"
  );
};

// -----------------------Ovo je boja od skyGradient prva varijanta sepia---------------------
// grad.addColorStop(1, hexToRgba("#fff")); //Donji dio canvasa boja
// grad.addColorStop(0.6, hexToRgba(sepiaSky[3])); //Srednji dio canvasa boja
// grad.addColorStop(0, hexToRgba(sepiaSky[1])); // Gornji dio canvasa boja

const skyGradient = (sk) => {
  let grad = drawingContext.createLinearGradient(0, 0, 0, 500); //zadnji parametar za pomicanje neba
  grad.addColorStop(1, hexToRgba("#fff")); //Donji dio canvasa boja
  grad.addColorStop(0.6, hexToRgba(sepiaSky[3])); //Srednji dio canvasa boja
  grad.addColorStop(0, hexToRgba(random(palette))); // Gornji dio canvasa boja
  sk.drawingContext.fillStyle = grad;
  sk.noStroke();
  sk.rect(0, 0, sketchWidth, sketchHeight);
};

const clouds = (sk) => {
  sk.fill(0, 0, 0, 5);
  for (i = 0; i < 350; i++) {
    sk.push();
    sk.translate(random(0, sketchWidth), random(0, sketchHeight));
    // sk.rotate(random(PI * 2));
    sk.beginShape();
    // sk.shearY(-20);
    for (m = 0; m < PI * 2; m += 1) {
      r = random(20, 50);
      let x = cos(m) * r;
      let y = sin(m) * r;
      sk.vertex(x, y);
    }
    sk.endShape(CLOSE);
    sk.pop();
  }
};

// ----------------Prva varijanta--------------//
// sk.fill(hexToRgba("#000", 0.02));

const mist = (sk, mistAmount, y, trans) => {
  // sk.fill(hexToRgba(random(palette), 0.02));
  sk.noStroke();
  sk.fill(hexToRgba("000", trans));
  for (i = 0; i < mistAmount; i++) {
    sk.push();
    sk.translate(random(0, sketchWidth), random(y, 595));
    // sk.rotate(random(PI * 2));
    sk.beginShape();
    // sk.shearY(20);
    for (m = 0; m < PI * 2; m += 1) {
      r = random(20, 50);
      let x = cos(m) * r;
      let y = sin(m) * r;
      sk.vertex(x, y);
    }
    sk.endShape(CLOSE);
    sk.pop();
  }
};

const breaker = (sk, amount, x, y) => {
  sk.fill(hexToRgba("000", 0.02));
  for (i = 0; i < amount; i++) {
    sk.push();
    sk.translate(random(0, x), random(0, y));
    // sk.rotate(random(PI * 2));
    sk.beginShape();
    // sk.shearY(20);
    for (m = 0; m < PI * 2; m += 1) {
      r = random(20, 50);
      let x = cos(m) * r;
      let y = sin(m) * r;
      sk.vertex(x, y);
    }
    sk.endShape(CLOSE);
    sk.pop();
  }
};

const noiseFilter = (sk, scale, amount) => {
  sk.loadPixels();
  let change = amount * sqrt(scale);
  let size =
    4 * (sk.width / sk.pixelDensity()) * (sk.height / sk.pixelDensity());
  let pixels = sk.pixels;
  for (let i = 0; i < size; i += 4) {
    let n = -change + random() * change * 2;
    pixels[i] += n;
    pixels[i + 1] += n;
    pixels[i + 2] += n;
  }
  sk.updatePixels();
};

//Elements

const gearComposer = (sk) => {
  if (cases === 1) {
    sk.push();
    sk.translate(82, 100);
    sk.scale(0.05);
    gear(sk, 0, 0, 0.1);
    sk.pop();

    sk.push();
    sk.translate(99, 200);
    sk.scale(0.05);
    gear(sk, 0, 0, 0.1);
    sk.pop();

    sk.push();
    sk.translate(150, 290);
    sk.scale(0.05);
    gear(sk, 0, 0, 0.1);
    sk.pop();

    sk.push();
    sk.translate(230, 360);
    sk.scale(0.05);
    gear(sk, 0, 0, 0.1);
    sk.pop();

    sk.push();
    sk.translate(330, 395);
    sk.scale(0.05);
    gear(sk, 0, 0, 0.1);
    sk.pop();
  }
  if (cases === 2) {
    sk.push();
    sk.translate(82, 100);
    sk.scale(0.05);
    gear(sk, 0, 0, 0.1);
    sk.pop();

    sk.push();
    sk.translate(99, 200);
    sk.scale(0.05);
    gear(sk, 0, 0, 0.1);
    sk.pop();

    sk.push();
    sk.translate(150, 290);
    sk.scale(0.05);
    gear(sk, 0, 0, 0.1);
    sk.pop();

    sk.push();
    sk.translate(230, 360);
    sk.scale(0.05);
    gear(sk, 0, 0, 0.1);
    sk.pop();
  }
  if (cases === 3) {
    sk.push();
    sk.translate(82, 100);
    sk.scale(0.05);
    gear(sk, 0, 0, 0.1);
    sk.pop();

    sk.push();
    sk.translate(99, 200);
    sk.scale(0.05);
    gear(sk, 0, 0, 0.1);
    sk.pop();

    sk.push();
    sk.translate(150, 290);
    sk.scale(0.05);
    gear(sk, 0, 0, 0.1);
    sk.pop();
  }

  if (cases === 4) {
    sk.push();
    sk.translate(82, 100);
    sk.scale(0.05);
    gear(sk, 0, 0, 0.1);
    sk.pop();

    sk.push();
    sk.translate(99, 200);
    sk.scale(0.05);
    gear(sk, 0, 0, 0.1);
    sk.pop();
  }

  if (cases === 5) {
    sk.push();
    sk.translate(82, 100);
    sk.scale(0.05);
    gear(sk, 0, 0, 0.1);
    sk.pop();
  }
};

const mrezaComposer = (sk) => {
  if (cases === 1) {
    sk.push();
    sk.translate(115, 80);
    sk.scale(0.04);
    mreza(sk);
    sk.pop();

    sk.push();
    sk.translate(137, 170);
    sk.scale(0.04);
    sk.rotate(15);
    mreza(sk);
    sk.pop();

    sk.push();
    sk.translate(185, 260);
    sk.scale(0.04);
    mreza(sk);
    sk.pop();

    sk.push();
    sk.translate(265, 327);
    sk.scale(0.04);
    mreza(sk);
    sk.pop();

    sk.push();
    sk.translate(370, 365);
    sk.scale(0.04);
    mreza(sk);
    sk.pop();
  }
  if (cases === 2) {
    sk.push();
    sk.translate(115, 80);
    sk.scale(0.04);
    mreza(sk);
    sk.pop();

    sk.push();
    sk.translate(137, 170);
    sk.scale(0.04);
    sk.rotate(15);
    mreza(sk);
    sk.pop();

    sk.push();
    sk.translate(185, 260);
    sk.scale(0.04);
    mreza(sk);
    sk.pop();

    sk.push();
    sk.translate(265, 327);
    sk.scale(0.04);
    mreza(sk);
    sk.pop();
  }
  if (cases === 3) {
    sk.push();
    sk.translate(115, 80);
    sk.scale(0.04);
    mreza(sk);
    sk.pop();

    sk.push();
    sk.translate(137, 170);
    sk.scale(0.04);
    sk.rotate(15);
    mreza(sk);
    sk.pop();

    sk.push();
    sk.translate(185, 260);
    sk.scale(0.04);
    mreza(sk);
    sk.pop();
  }

  if (cases === 4) {
    sk.push();
    sk.translate(115, 80);
    sk.scale(0.04);
    mreza(sk);
    sk.pop();

    sk.push();
    sk.translate(137, 170);
    sk.scale(0.04);
    sk.rotate(15);
    mreza(sk);
    sk.pop();
  }

  if (cases === 5) {
    sk.push();
    sk.translate(115, 80);
    sk.scale(0.04);
    mreza(sk);
    sk.pop();
  }
};

const cityOne = (sk) => {
  if (cases === 1) {
    sk.push();
    cityOnefirstBuilding(sk);
    sk.pop();

    sk.push();
    cityOnesecondBuilding(sk);
    sk.pop();

    sk.push();
    cityOnesmallRoad(sk);
    sk.pop();

    sk.push();
    smallCityBlock(sk);
    sk.pop();

    sk.push();
    cityOnethirdBuilding(sk);
    sk.pop();

    sk.push();
    buildingBlockcityOne(sk);
    sk.pop();

    sk.push();
    cityOnefourthBuilding(sk);
    sk.pop();

    sk.push();
    cityOnefifthBuilding(sk);
    sk.pop();

    sk.push();
    cityOnesixthBuilding(sk);
    sk.pop();

    sk.push();
    pyramid(sk);
    sk.pop();
  }

  if (cases === 2) {
    sk.push();
    cityOnefirstBuilding(sk);
    sk.pop();

    sk.push();
    cityOnesecondBuilding(sk);
    sk.pop();

    sk.push();
    cityOnesmallRoad(sk);
    sk.pop();

    sk.push();
    smallCityBlock(sk);
    sk.pop();
    if (twoValStress === 1) {
      sk.push();
      sk.translate(random(50, 100), random(10, 50));
      sk.rotate(random(5, 10));
      cityOnethirdBuilding(sk);
      sk.pop();
    }

    if (twoValStress === 2) {
      sk.push();
      sk.translate(100, 100);
      sk.rotate(-5);
      cityOnethirdBuilding(sk);
      sk.pop();
    }

    sk.push();
    buildingBlockcityOne(sk);
    sk.pop();

    if (twoValStress === 1) {
      sk.push();
      sk.translate(0, 100);
      sk.rotate(-5);
      cityOnefourthBuilding(sk);
      sk.pop();
    }

    if (twoValStress === 2) {
      sk.push();
      sk.translate(100, -50);
      sk.rotate(5);
      cityOnefourthBuilding(sk);
      sk.pop();
    }

    sk.push();
    cityOnefifthBuilding(sk);
    sk.pop();

    sk.push();
    cityOnesixthBuilding(sk);
    sk.pop();

    sk.push();
    pyramid(sk);
    sk.pop();
  }

  if (cases === 3) {
    if (twoValStress === 1) {
      sk.push();
      sk.rotate(0.1);
      sk.translate(60, 20);
      cityOnefirstBuilding(sk);
      sk.pop();

      sk.push();
      sk.rotate(-5);
      sk.translate(-15, 50);
      cityOnesecondBuilding(sk);
      sk.pop();

      sk.push();
      cityOnesmallRoad(sk);
      sk.pop();

      sk.push();
      smallCityBlock(sk);
      sk.pop();
      sk.push();
      sk.translate(random(100, 120), random(10, 20));
      sk.rotate(10);
      cityOnethirdBuilding(sk);
      sk.pop();
      sk.push();
      sk.translate(0, 100);
      sk.rotate(-5);
      cityOnefourthBuilding(sk);
      sk.pop();

      sk.push();
      cityOnefifthBuilding(sk);
      sk.pop();

      sk.push();
      cityOnesixthBuilding(sk);
      sk.pop();

      sk.push();
      sk.translate(0, 100);
      pyramid(sk);
      sk.pop();
    }

    if (twoValStress === 2) {
      sk.push();
      sk.rotate(0.1);
      sk.translate(60, 20);
      cityOnefirstBuilding(sk);
      sk.pop();

      sk.push();
      sk.rotate(-5);
      sk.translate(-15, 50);
      cityOnesecondBuilding(sk);
      sk.pop();

      sk.push();
      cityOnesmallRoad(sk);
      sk.pop();

      sk.push();
      smallCityBlock(sk);
      sk.pop();
      sk.push();
      sk.rotate(-10);
      sk.translate(-50, 200);
      cityOnethirdBuilding(sk);
      sk.pop();
      sk.push();
      buildingBlockcityOne(sk);
      sk.pop();
      sk.push();
      sk.translate(100, -50);
      sk.rotate(5);
      cityOnefourthBuilding(sk);
      sk.pop();

      sk.push();
      sk.rotate(-5);
      sk.translate(-80, 100);
      cityOnefifthBuilding(sk);
      sk.pop();

      sk.push();
      sk.translate(-10, 50);
      cityOnesixthBuilding(sk);
      sk.pop();

      sk.push();
      sk.translate(0, 100);
      pyramid(sk);
      sk.pop();
    }
  }

  if (cases === 4) {
    if (twoValStress === 1) {
      sk.push();
      sk.rotate(0.1);
      sk.translate(60, 180);
      cityOnefirstBuilding(sk);
      sk.pop();

      sk.push();
      sk.rotate(-5);
      sk.translate(-15, 120);
      cityOnesecondBuilding(sk);
      sk.pop();

      sk.push();
      cityOnesmallRoad(sk);
      sk.pop();

      sk.push();
      smallCityBlock(sk);
      sk.pop();
      sk.push();
      sk.translate(random(100, 120), 160);
      sk.rotate(10);
      cityOnethirdBuilding(sk);
      sk.pop();
      sk.push();
      sk.translate(-10, 300);
      sk.rotate(-10);
      cityOnefourthBuilding(sk);
      sk.pop();

      sk.push();
      sk.translate(50, 50);
      cityOnefifthBuilding(sk);
      sk.pop();

      sk.push();
      sk.translate(0, 50);
      cityOnesixthBuilding(sk);
      sk.pop();
    }

    if (twoValStress === 2) {
      sk.push();
      sk.rotate(0.1);
      sk.translate(60, 180);
      cityOnefirstBuilding(sk);
      sk.pop();

      sk.push();
      sk.rotate(5);
      sk.translate(0, 120);
      cityOnesecondBuilding(sk);
      sk.pop();

      sk.push();
      cityOnesmallRoad(sk);
      sk.pop();

      sk.push();
      smallCityBlock(sk);
      sk.pop();
      sk.push();
      sk.translate(-50, 400);
      sk.rotate(-10);
      cityOnethirdBuilding(sk);
      sk.pop();
      sk.push();
      sk.translate(120, 100);
      sk.rotate(10);
      cityOnefourthBuilding(sk);
      sk.pop();

      sk.push();
      sk.translate(50, 50);
      cityOnefifthBuilding(sk);
      sk.pop();

      sk.push();
      sk.translate(0, 50);
      cityOnesixthBuilding(sk);
      sk.pop();
    }
  }

  if (cases === 5) {
    if (twoValStress === 1) {
      sk.push();
      sk.rotate(0.1);
      sk.translate(60, 180);
      cityOnefirstBuilding(sk);
      sk.pop();

      sk.push();
      sk.rotate(-5);
      sk.translate(-15, 120);
      cityOnesecondBuilding(sk);
      sk.pop();

      sk.push();
      cityOnesmallRoad(sk);
      sk.pop();

      sk.push();
      smallCityBlock(sk);
      sk.pop();
      sk.push();
      sk.translate(random(100, 120), 160);
      sk.rotate(10);
      cityOnethirdBuilding(sk);
      sk.pop();
      sk.push();
      sk.translate(-10, 300);
      sk.rotate(-10);
      cityOnefourthBuilding(sk);
      sk.pop();

      sk.push();
      sk.translate(50, 50);
      cityOnefifthBuilding(sk);
      sk.pop();

      sk.push();
      sk.translate(0, 50);
      cityOnesixthBuilding(sk);
      sk.pop();
    }

    if (twoValStress === 2) {
      sk.push();
      sk.rotate(0.1);
      sk.translate(60, 180);
      cityOnefirstBuilding(sk);
      sk.pop();

      sk.push();
      sk.rotate(5);
      sk.translate(0, 120);
      cityOnesecondBuilding(sk);
      sk.pop();

      sk.push();
      cityOnesmallRoad(sk);
      sk.pop();

      sk.push();
      smallCityBlock(sk);
      sk.pop();
      sk.push();
      sk.translate(-50, 400);
      sk.rotate(-10);
      cityOnethirdBuilding(sk);
      sk.pop();
      sk.push();
      sk.translate(120, 100);
      sk.rotate(10);
      cityOnefourthBuilding(sk);
      sk.pop();

      sk.push();
      sk.translate(50, 50);
      cityOnefifthBuilding(sk);
      sk.pop();

      sk.push();
      sk.translate(0, 50);
      cityOnesixthBuilding(sk);
      sk.pop();
    }
  }

  if (cases === 6) {
    if (twoValStress === 1) {
      sk.push();
      sk.rotate(0.1);
      sk.translate(60, 180);
      cityOnefirstBuilding(sk);
      sk.pop();

      sk.push();
      sk.rotate(-5);
      sk.translate(-15, 120);
      cityOnesecondBuilding(sk);
      sk.pop();

      sk.push();
      cityOnesmallRoad(sk);
      sk.pop();

      sk.push();
      smallCityBlock(sk);
      sk.pop();
      sk.push();
      sk.translate(random(100, 120), 160);
      sk.rotate(10);
      cityOnethirdBuilding(sk);
      sk.pop();
      sk.push();
      sk.translate(-10, 300);
      sk.rotate(-10);
      cityOnefourthBuilding(sk);
      sk.pop();

      sk.push();
      sk.translate(50, 50);
      cityOnefifthBuilding(sk);
      sk.pop();

      sk.push();
      sk.translate(0, 50);
      cityOnesixthBuilding(sk);
      sk.pop();
    }

    if (twoValStress === 2) {
      sk.push();
      sk.rotate(0.1);
      sk.translate(60, 180);
      cityOnefirstBuilding(sk);
      sk.pop();

      sk.push();
      sk.rotate(5);
      sk.translate(0, 120);
      cityOnesecondBuilding(sk);
      sk.pop();

      sk.push();
      cityOnesmallRoad(sk);
      sk.pop();

      sk.push();
      smallCityBlock(sk);
      sk.pop();
      sk.push();
      sk.translate(-50, 400);
      sk.rotate(-10);
      cityOnethirdBuilding(sk);
      sk.pop();
      sk.push();
      sk.translate(120, 100);
      sk.rotate(10);
      cityOnefourthBuilding(sk);
      sk.pop();

      sk.push();
      sk.translate(50, 50);
      cityOnefifthBuilding(sk);
      sk.pop();

      sk.push();
      sk.translate(0, 50);
      cityOnesixthBuilding(sk);
      sk.pop();
    }
  }
};

const cityTwo = (sk) => {
  if (cityTwoShuffler === 1) {
    sk.push();
    sk.fill(hexToRgba(random(palette)));
    cityTwoLeftPart(sk);
    sk.pop();
    sk.push();
    sk.fill(hexToRgba(random(palette)));
    cityTwoMiddlePart(sk);
    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(palette)));
    cityTwoRightPart(sk);
    sk.pop();
  }

  if (cityTwoShuffler === 2) {
    sk.push();
    sk.fill(hexToRgba(random(palette)));
    cityTwoLeftPart(sk);
    sk.pop();
    sk.push();
    sk.fill(hexToRgba(random(palette)));
    sk.translate(350, 0);
    cityTwoMiddlePart(sk);
    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(palette)));
    sk.translate(-780, 0);
    cityTwoRightPart(sk);
    sk.pop();
  }

  if (cityTwoShuffler === 3) {
    sk.push();
    sk.fill(hexToRgba(random(palette)));
    sk.translate(1105, 0);
    cityTwoLeftPart(sk);
    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(palette)));
    sk.translate(-370, 0);
    cityTwoMiddlePart(sk);
    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(palette)));
    sk.translate(-1520, 0);
    cityTwoRightPart(sk);
    sk.pop();
  }
};

const cityTwoMiddlePart = (sk) => {
  if (cases === 1) {
    sk.push();
    cityTwoMiddleSecondBuilding(sk);
    sk.pop();

    sk.push();
    sk.translate(1440, 40);
    sk.scale(0.8);
    cityTwoFirstBuilding(sk);
    sk.pop();

    sk.push();
    cityTwoMiddleThirdBuilding(sk);
    sk.pop();

    sk.push();
    sk.translate(-480, 0);
    cityTwoMiddleTurm(sk);
    sk.pop();
    sk.push();
    sk.translate(130, 5);
    cityTwoMiddleFirstBuilding(sk);
    sk.pop();
  } else if (cases === 2) {
    sk.push();
    sk.rotate(0.05);
    cityTwoMiddleSecondBuilding(sk);
    sk.pop();

    sk.push();
    sk.translate(1440, 40);
    sk.scale(0.8);
    sk.rotate(-0.05);
    cityTwoFirstBuilding(sk);
    sk.pop();

    sk.push();
    sk.rotate(0.05);
    cityTwoMiddleThirdBuilding(sk);
    sk.pop();

    sk.push();
    sk.translate(-480, 80);
    cityTwoMiddleTurm(sk);
    sk.pop();
    sk.push();
    sk.translate(130, 5);
    cityTwoMiddleFirstBuilding(sk);
    sk.pop();
  } else {
    sk.push();
    sk.rotate(0.05);
    cityTwoMiddleSecondBuilding(sk);
    sk.pop();

    sk.push();
    sk.translate(1440, 40);
    sk.scale(0.8);
    sk.rotate(-0.05);
    cityTwoFirstBuilding(sk);
    sk.pop();

    sk.push();
    sk.rotate(0.05);
    cityTwoMiddleThirdBuilding(sk);
    sk.pop();

    sk.push();
    sk.translate(-480, 80);
    cityTwoMiddleTurm(sk);
    sk.pop();
    sk.push();
    sk.translate(130, 5);
    cityTwoMiddleFirstBuilding(sk);
    sk.pop();
  }
};

const cityTwoMiddleFirstBuilding = (sk) => {
  //Prednja Stranica
  sk.push();
  sk.rect(770, 660, 325, 160);
  sk.pop();

  //Prozori Left
  sk.push();
  sk.fill(80);
  sk.translate(780, 660);
  for (let i = 0; i < 8; i++) {
    sk.translate(0, i + 14);
    sk.rect(0, 0, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.fill(80);
  sk.translate(800, 660);
  for (let i = 0; i < 8; i++) {
    sk.translate(0, i + 14);
    sk.rect(0, 0, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.fill(80);
  sk.translate(820, 660);
  for (let i = 0; i < 8; i++) {
    sk.translate(0, i + 14);
    sk.rect(0, 0, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.fill(80);
  sk.translate(840, 660);
  for (let i = 0; i < 8; i++) {
    sk.translate(0, i + 14);
    sk.rect(0, 0, 10, 10);
  }

  sk.pop();
  //Prozori Middle
  sk.push();
  sk.fill(80);
  sk.translate(860, 660);
  for (let i = 0; i < 8; i++) {
    sk.translate(0, i + 14);
    sk.rect(0, 0, 50, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(920, 675);
  sk.strokeWeight(3);
  for (let i = 0; i < 4; i++) {
    sk.translate(i + 10, 0);
    sk.line(0, 0, 0, 135);
  }
  sk.pop();

  sk.push();
  sk.fill(80);
  sk.translate(985, 660);
  for (let i = 0; i < 8; i++) {
    sk.translate(0, i + 14);
    sk.rect(0, 0, 50, 10);
  }
  sk.pop();

  //Prozori Right

  sk.push();
  sk.fill(80);
  sk.translate(1050, 660);
  for (let i = 0; i < 8; i++) {
    sk.translate(0, i + 14);
    sk.rect(0, 0, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.fill(80);
  sk.translate(1070, 660);
  for (let i = 0; i < 8; i++) {
    sk.translate(0, i + 14);
    sk.rect(0, 0, 10, 10);
  }
  sk.pop();
};
// sk.quad(x1, y1, x2, y2, x3, y3, x4, y4)

const cityTwoMiddleSecondBuilding = (sk) => {
  //Prednje stranice START-------------------------
  sk.push();
  sk.rect(820, 200, 150, 620);
  sk.pop();

  //Prozori na prvoj stranici START-------------------------

  sk.push();
  sk.fill(0);
  sk.translate(720, -250);
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 20);
    sk.rect(110, 450, 15, 5);
  }
  sk.pop();

  sk.push();
  sk.fill(0);
  sk.translate(750, -250);
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 20);
    sk.rect(110, 450, 15, 5);
  }
  sk.pop();

  sk.push();
  sk.fill(0);
  sk.translate(780, -250);
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 20);
    sk.rect(110, 450, 5, 5);
  }
  sk.pop();

  sk.push();
  sk.fill(0);
  sk.translate(795, -250);
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 20);
    sk.rect(110, 450, 5, 5);
  }
  sk.pop();

  sk.push();
  sk.fill(0);
  sk.translate(810, -250);
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 20);
    sk.rect(110, 450, 5, 5);
  }
  sk.pop();

  sk.push();
  sk.fill(0);
  sk.translate(825, -250);
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 20);
    sk.rect(110, 450, 5, 5);
  }
  sk.pop();

  sk.push();
  sk.fill(0);
  sk.translate(840, -250);
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 20);
    sk.rect(110, 450, 5, 5);
  }
  sk.pop();

  //Prozori na prvoj stranici END---------------------------
  sk.push();
  sk.shearY(0.1);
  sk.rect(970, 105, 60, 620);
  sk.pop();

  sk.push();
  sk.translate(970, 204);
  sk.shearY(0.1);
  for (let i = 0; i < 52; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.5, 620);
  }
  sk.pop();

  sk.push();
  sk.rect(800, 257, 50, 560);
  sk.pop();

  //Prozori Lijeva stranica START----------------------
  sk.push();
  sk.fill(0);
  sk.translate(698, -200);
  for (let i = 0; i < 18; i++) {
    sk.translate(0, i + 21);
    sk.rect(110, 450, 25, 5);
  }
  sk.pop();

  //Prozori Lijeva stranica END------------------------

  sk.push();
  sk.shearY(0.15);
  sk.rect(850, 128, 30, 560);
  sk.pop();

  sk.push();
  sk.translate(850, 258);
  sk.shearY(0.15);
  for (let i = 0; i < 25; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.5, 558);
  }
  sk.pop();

  sk.push();
  sk.rect(920, 420, 70, 400);
  sk.pop();

  sk.push();
  sk.shearY(0.05);
  sk.rect(988, 371, 75, 400);
  sk.pop();

  sk.push();
  sk.translate(988, 421);
  sk.shearY(0.05);
  for (let i = 0; i < 70; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.5, 400);
  }
  sk.pop();
  //Prednje stranice END-------------------------

  sk.push();
  sk.fill(0);
  sk.translate(820, -30);
  for (let i = 0; i < 10; i++) {
    sk.translate(0, i + 18);
    sk.rect(110, 450, 25, 5);
  }
  sk.pop();

  sk.push();
  sk.fill(0);
  sk.translate(855, -32);
  for (let i = 0; i < 10; i++) {
    sk.translate(0, i + 18);
    sk.rect(110, 450, 10, 10);
  }
  sk.pop();

  //Prozori END----------------------------------

  //Antene START---------------------------------
  sk.push();
  sk.translate(900, 143);
  sk.strokeWeight(0.5);
  sk.noFill();
  sk.beginShape();
  for (let i = 0; i < 100; i++) {
    let x = 30 * cos(i + 9);
    let y = 60 * sin(i * 10);
    sk.vertex(x, y);
  }
  sk.endShape();
  sk.pop();

  sk.push();
  sk.translate(900, 60);
  sk.strokeWeight(0.3);
  sk.noFill();
  sk.beginShape();
  for (let i = 0; i < 100; i++) {
    let x = 15 * cos(i + 9);
    let y = 60 * sin(i * 10);
    sk.vertex(x, y);
  }
  sk.endShape();
  sk.pop();

  sk.push();
  sk.translate(900, -50);
  sk.strokeWeight(0.1);
  sk.noFill();
  sk.beginShape();
  for (let i = 0; i < 100; i++) {
    let x = 4 * cos(i * 9);
    let y = 60 * sin(i * 10);
    sk.vertex(x, y);
  }
  sk.endShape();
  sk.pop();
  //Antene END-----------------------------------
};

const cityTwoMiddleThirdBuilding = (sk) => {
  // sk.fill(220);
  //Prva Stranica START-------------
  sk.push();
  sk.translate(130, 120);
  sk.quad(1200, 700, 1350, 700, 1350, -100, 1200, 0);
  sk.pop();
  //Prva Stranica END---------------

  //Lijeva Stranica START-----------
  sk.push();
  sk.rect(1230, 500, 100, 320);
  sk.pop();
  //Lijeva Stranica END-------------

  //Desna Stranica Gornja Tanka START------------

  sk.push();
  sk.shearY(0.1);
  sk.rect(1482, -130, 50, 800);
  sk.pop();

  sk.push();
  sk.translate(1482, 20);
  sk.shearY(0.1);
  for (let i = 0; i < 43; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.5, 800);
  }
  sk.pop();
  //Desna Stranica Gornja Tanka END------------

  //Desna Stranica Donja START------------
  sk.push();
  sk.rect(1482, 620, 100, 200);
  sk.pop();
  //Desna Stranica Donja END--------------

  //Prozori START-------------------
  sk.push();
  sk.fill(0);
  sk.translate(1130, 50);
  for (let i = 0; i < 15; i++) {
    sk.translate(0, i + 13);
    sk.rect(110, 450, 25, 5);
  }
  sk.pop();

  sk.push();
  sk.fill(0);
  sk.translate(1175, 50);
  for (let i = 0; i < 15; i++) {
    sk.translate(0, i + 13);
    sk.rect(110, 450, 25, 5);
  }
  sk.pop();

  sk.push();
  sk.fill(0);
  sk.translate(1385, 170);
  for (let i = 0; i < 10; i++) {
    sk.translate(0, i + 13);
    sk.rect(110, 450, 25, 5);
  }
  sk.pop();

  sk.push();
  sk.fill(0);
  sk.translate(1425, 170);
  for (let i = 0; i < 10; i++) {
    sk.translate(0, i + 13);
    sk.rect(110, 450, 25, 5);
  }
  sk.pop();

  if (cityTwoWindowShuffler === 1) {
    sk.push();
    sk.fill(0);
    sk.translate(1230, -300);
    for (let i = 0; i < 25; i++) {
      sk.translate(0, i + 14);
      sk.rect(110, 450, 10, 5);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(1250, -300);
    for (let i = 0; i < 25; i++) {
      sk.translate(0, i + 14);
      sk.rect(110, 450, 10, 5);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(1270, -300);
    for (let i = 0; i < 25; i++) {
      sk.translate(0, i + 14);
      sk.rect(110, 450, 10, 5);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(1290, -300);
    for (let i = 0; i < 25; i++) {
      sk.translate(0, i + 14);
      sk.rect(110, 450, 10, 5);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(1310, -300);
    for (let i = 0; i < 25; i++) {
      sk.translate(0, i + 14);
      sk.rect(110, 450, 10, 5);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(1330, -300);
    for (let i = 0; i < 25; i++) {
      sk.translate(0, i + 14);
      sk.rect(110, 450, 10, 5);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(1350, -300);
    for (let i = 0; i < 25; i++) {
      sk.translate(0, i + 14);
      sk.rect(110, 450, 10, 5);
    }
    sk.pop();
  } else if (cityTwoWindowShuffler === 2) {
    sk.push();
    sk.fill(0);
    sk.translate(1230, -300);
    for (let i = 0; i < 25; i++) {
      sk.translate(0, i + 14);
      sk.rect(110, 450, 10, 5);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(1250, -300);
    for (let i = 0; i < 25; i++) {
      sk.translate(0, i + 14);
      sk.rect(110, 450, 10, 5);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(1270, -300);
    for (let i = 0; i < 25; i++) {
      sk.translate(0, i + 14);
      sk.rect(110, 450, 10, 5);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(1310, -300);
    for (let i = 0; i < 25; i++) {
      sk.translate(0, i + 14);
      sk.rect(110, 450, 10, 5);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(1330, -300);
    for (let i = 0; i < 25; i++) {
      sk.translate(0, i + 14);
      sk.rect(110, 450, 10, 5);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(1350, -300);
    for (let i = 0; i < 25; i++) {
      sk.translate(0, i + 14);
      sk.rect(110, 450, 10, 5);
    }
    sk.pop();
  } else if (cityTwoWindowShuffler === 3) {
    sk.push();
    sk.fill(0);
    sk.translate(1230, -300);
    for (let i = 0; i < 25; i++) {
      sk.translate(0, i + 14);
      sk.rect(110, 450, 30, 5);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(1270, -300);
    for (let i = 0; i < 25; i++) {
      sk.translate(0, i + 14);
      sk.rect(110, 450, 10, 5);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(1310, -300);
    for (let i = 0; i < 25; i++) {
      sk.translate(0, i + 14);
      sk.rect(110, 450, 30, 5);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(1290, -300);
    for (let i = 0; i < 25; i++) {
      sk.translate(0, i + 14);
      sk.rect(110, 450, 10, 5);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(1350, -300);
    for (let i = 0; i < 25; i++) {
      sk.translate(0, i + 14);
      sk.rect(110, 450, 10, 5);
    }
    sk.pop();
  } else {
    sk.push();
    sk.fill(0);
    sk.translate(1230, -300);
    for (let i = 0; i < 25; i++) {
      sk.translate(0, i + 14);
      sk.rect(110, 450, 30, 5);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(1270, -315);
    for (let i = 0; i < 17; i++) {
      sk.translate(0, i + 30);
      sk.rect(110, 450, 5, 25);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(1310, -300);
    for (let i = 0; i < 25; i++) {
      sk.translate(0, i + 14);
      sk.rect(110, 450, 10, 5);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(1330, -300);
    for (let i = 0; i < 25; i++) {
      sk.translate(0, i + 14);
      sk.rect(110, 450, 10, 5);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(1290, -315);
    for (let i = 0; i < 25; i++) {
      sk.translate(0, i + 30);
      sk.rect(110, 450, 5, 25);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(1350, -300);
    for (let i = 0; i < 25; i++) {
      sk.translate(0, i + 14);
      sk.rect(110, 450, 10, 5);
    }
    sk.pop();
  }

  //Kraj
  //Prozori END---------------------

  //Roftop Resetke Start------------
  sk.push();
  sk.translate(1330, 125);
  sk.stroke(80);
  sk.strokeWeight(5);
  sk.shearY(-0.6);
  for (let i = 0; i < 10; i++) {
    sk.translate(i + 9.5, 0);
    sk.line(0, 0, 0, i * 8.5);
  }
  sk.pop();

  sk.push();
  sk.translate(1330, 122);
  sk.stroke(80);
  sk.strokeWeight(5);
  sk.shearY(-0.1);
  for (let i = 0; i < 10; i++) {
    sk.translate(i + 9.5, 0);
    sk.line(0, 0, 0, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(1330, 123);
  sk.stroke(80);
  sk.strokeWeight(5);
  sk.shearY(-0.05);
  for (let i = 0; i < 10; i++) {
    sk.translate(i + 9.5, 0);
    sk.line(0, 0, 0, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(1330, 130);
  sk.stroke(80);
  sk.strokeWeight(5);
  // sk.shearY(-0.05);
  for (let i = 0; i < 10; i++) {
    sk.translate(i + 9.5, 0);
    sk.line(0, 0, 0, 25);
  }
  sk.pop();
  //Roftop Resetke END------------
};

const cityTwoMiddleTurm = (sk) => {
  sk.fill(220);
  //--------------Prednja Stranica Start---------------
  sk.push();
  sk.fill(150);
  sk.translate(400, 120);
  sk.quad(1200, 700, 1280, 700, 1260, 0, 1220, 0);
  sk.pop();

  //-------------Prednja Stranica Start Resetke-------
  sk.push();
  sk.translate(1641, 725);
  sk.strokeWeight(0.8);
  sk.noFill();
  sk.beginShape();
  for (let i = 0; i < 100; i++) {
    let x = 35 * cos(i + 9);
    let y = 100 * sin(i * 10);
    sk.vertex(x, y);
  }
  sk.endShape();
  sk.pop();

  sk.push();
  sk.translate(1641, 580);
  sk.strokeWeight(0.8);
  sk.noFill();
  sk.beginShape();
  for (let i = 0; i < 100; i++) {
    let x = 30 * cos(i + 9);
    let y = 100 * sin(i * 10);
    sk.vertex(x, y);
  }
  sk.endShape();
  sk.pop();

  sk.push();
  sk.translate(1641, 400);
  sk.strokeWeight(0.8);
  sk.noFill();
  sk.beginShape();
  for (let i = 0; i < 100; i++) {
    let x = 25 * cos(i + 9);
    let y = 100 * sin(i * 10);
    sk.vertex(x, y);
  }
  sk.endShape();
  sk.pop();

  sk.push();
  sk.translate(1641, 215);
  sk.strokeWeight(0.8);
  sk.noFill();
  sk.beginShape();
  for (let i = 0; i < 100; i++) {
    let x = 20 * cos(i + 9);
    let y = 100 * sin(i * 10);
    sk.vertex(x, y);
  }
  sk.endShape();
  sk.pop();
  //-------------Prednja Stranica End Resetke-------
  //--------------Prednja Stranica END-----------------

  //--------------Kugla Start--------------------------
  sk.push();
  sk.translate(1640, 60);
  let rad = 65;
  for (let i = 0; i < 10000; i++) {
    let r = (1 - random(random(random()))) * rad;
    let theta = random(TWO_PI);
    let x = cos(theta) * r;
    let y = sin(theta) * r;
    sk.point(x, y);
  }
  sk.pop();

  //--------------Kugla END--------------------------

  //Antena START Donji Dio--------------------------------

  sk.push();
  sk.translate(1641, -40);
  sk.strokeWeight(0.5);
  sk.noFill();
  sk.beginShape();
  for (let i = 0; i < 100; i++) {
    let x = 20 * cos(i + 9);
    let y = 40 * sin(i * 10);
    sk.vertex(x, y);
  }
  sk.endShape();
  sk.pop();
  //Antena END Donji Dio----------------------------------

  //Antena START VRH--------------------------------

  sk.push();
  sk.translate(1640, -180);
  sk.strokeWeight(0.1);
  sk.noFill();
  sk.beginShape();
  for (let i = 0; i < 100; i++) {
    let x = 6 * cos(i * 9);
    let y = 150 * sin(i * 10);
    sk.vertex(x, y);
  }
  sk.endShape();
  sk.pop();
  //Antena END VRH----------------------------------
};

const cityTwoLeftPart = (sk) => {
  if (cases === 1) {
    // sk.fill(220);
    sk.push();
    //First Building
    //Antena postolje
    sk.push();
    sk.translate(75, 500);
    // sk.shearY(0.1);
    for (let i = 0; i < 20; i++) {
      sk.translate(1.1, 0);
      buildShadow(sk, 1.5, 15);
    }
    sk.pop();
    //Antena
    sk.push();
    sk.translate(80, 480);
    for (let i = 0; i < 10; i++) {
      sk.shearY(-0.4);
      sk.translate(1.1, 0);
      buildShadow(sk, 0.8, 45);
    }
    sk.pop();

    sk.scale(0.6);
    sk.translate(26, 460);
    cityTwoFirstBuilding(sk);
    sk.pop();
    //First Building END----------------------------------

    //Second Building START-------------------------------
    sk.push();
    //Rooftop START--------------------------------------
    sk.push();
    sk.translate(230, 285);
    for (let i = 0; i < 80; i++) {
      sk.translate(1.1, 0);
      buildShadow(sk, 1.3, 35);
    }
    sk.pop();

    sk.push();
    sk.translate(230, 277);
    sk.shearY(25);
    for (let i = 0; i < 80; i++) {
      sk.translate(1.1, 0);
      buildShadow(sk, 1.3, 20);
    }
    sk.pop();

    sk.push();
    sk.translate(305, 195);
    sk.shearY(-0.2);
    for (let i = 0; i < 10; i++) {
      sk.translate(1.1, 0);
      buildShadow(sk, 1.3, 75);
    }
    sk.pop();

    sk.translate(100, -80);
    cityTwoFirstBuilding(sk);
    sk.pop();

    //Second Building END-------------------------------
    sk.push();
    sk.translate(400, 10);
    sk.scale(0.75);
    cityTwoFirstBuilding(sk);
    sk.pop();

    sk.push();
    sk.translate(320, 100);
    sk.scale(0.8);
    cityTwoFirstBuilding(sk);
    sk.pop();
    //Highest Building
    sk.push();
    sk.translate(480, 220);
    sk.scale(0.75);
    cityTwoSecondBuilding(sk);
    sk.pop();
  } else if (cases === 2) {
    // sk.fill(220);
    sk.push();
    //First Building
    //Antena postolje
    sk.rotate(0.05);
    sk.translate(25, 0);
    sk.push();
    sk.translate(75, 500);
    sk.shearY(0.1);
    for (let i = 0; i < 20; i++) {
      sk.translate(1.1, 0);
      buildShadow(sk, 1.5, 15);
    }
    sk.pop();
    //Antena
    sk.push();
    sk.translate(80, 480);
    for (let i = 0; i < 10; i++) {
      sk.shearY(-0.4);
      sk.translate(1.1, 0);
      buildShadow(sk, 0.8, 45);
    }
    sk.pop();

    sk.scale(0.6);
    sk.translate(26, 460);
    cityTwoFirstBuilding(sk);
    sk.pop();
    //First Building END----------------------------------

    //Second Building START-------------------------------
    sk.push();
    sk.rotate(-0.1);
    sk.translate(-60, 15);
    //Rooftop START--------------------------------------
    sk.push();
    sk.translate(230, 285);
    for (let i = 0; i < 80; i++) {
      sk.translate(1.1, 0);
      buildShadow(sk, 1.3, 35);
    }
    sk.pop();

    sk.push();
    sk.translate(230, 277);
    sk.shearY(25);
    for (let i = 0; i < 80; i++) {
      sk.translate(1.1, 0);
      buildShadow(sk, 1.3, 20);
    }
    sk.pop();

    sk.push();
    sk.translate(305, 195);
    sk.shearY(-0.2);
    for (let i = 0; i < 10; i++) {
      sk.translate(1.1, 0);
      buildShadow(sk, 1.3, 75);
    }
    sk.pop();

    sk.translate(100, -80);
    cityTwoFirstBuilding(sk);
    sk.pop();

    //Second Building END-------------------------------
    sk.push();
    sk.shearX(-0.1);
    sk.translate(400, 10);
    sk.scale(0.75);
    cityTwoFirstBuilding(sk);
    sk.pop();

    sk.push();
    sk.shearY(0.1);
    sk.rotate(0.05);
    sk.translate(350, 100);
    sk.scale(0.8);
    cityTwoFirstBuilding(sk);
    sk.pop();
    //Highest Building
    sk.push();
    sk.translate(480, 220);
    sk.scale(0.75);
    sk.rotate(-0.05);
    cityTwoSecondBuilding(sk);
    sk.pop();
  } else {
    // sk.fill(220);
    sk.push();
    //First Building
    //Antena postolje
    sk.rotate(0.05);
    sk.translate(25, 0);
    sk.push();
    sk.translate(75, 500);
    sk.shearY(0.1);
    for (let i = 0; i < 20; i++) {
      sk.translate(1.1, 0);
      buildShadow(sk, 1.5, 15);
    }
    sk.pop();
    //Antena
    sk.push();
    sk.translate(80, 480);
    for (let i = 0; i < 10; i++) {
      sk.shearY(-0.4);
      sk.translate(1.1, 0);
      buildShadow(sk, 0.8, 45);
    }
    sk.pop();

    sk.scale(0.6);
    sk.translate(26, 460);
    cityTwoFirstBuilding(sk);
    sk.pop();
    //First Building END----------------------------------

    //Second Building START-------------------------------
    sk.push();
    sk.rotate(-0.1);
    sk.translate(-60, 15);
    //Rooftop START--------------------------------------
    sk.push();
    sk.translate(230, 285);
    for (let i = 0; i < 80; i++) {
      sk.translate(1.1, 0);
      buildShadow(sk, 1.3, 35);
    }
    sk.pop();

    sk.push();
    sk.translate(230, 277);
    sk.shearY(25);
    for (let i = 0; i < 80; i++) {
      sk.translate(1.1, 0);
      buildShadow(sk, 1.3, 20);
    }
    sk.pop();

    sk.push();
    sk.translate(305, 195);
    sk.shearY(-0.2);
    for (let i = 0; i < 10; i++) {
      sk.translate(1.1, 0);
      buildShadow(sk, 1.3, 75);
    }
    sk.pop();

    sk.translate(100, -80);
    cityTwoFirstBuilding(sk);
    sk.pop();

    //Second Building END-------------------------------
    sk.push();
    sk.shearX(-0.1);
    sk.translate(400, 10);
    sk.scale(0.75);
    cityTwoFirstBuilding(sk);
    sk.pop();

    sk.push();
    sk.shearY(0.1);
    sk.rotate(0.05);
    sk.translate(350, 100);
    sk.scale(0.8);
    cityTwoFirstBuilding(sk);
    sk.pop();
    //Highest Building
    sk.push();
    sk.translate(480, 220);
    sk.scale(0.75);
    sk.rotate(-0.05);
    cityTwoSecondBuilding(sk);
    sk.pop();
  }
};

const cityTwoRightPart = (sk) => {
  sk.push();
  cityTwoRightPartFirstBuilding(sk);
  sk.pop();
};

const cityTwoRightPartFirstBuilding = (sk) => {
  if (cases === 1) {
    //Prva zgrada
    sk.push();
    sk.translate(1500, 150);
    sk.scale(0.8);

    cityTwoFirstBuilding(sk);
    sk.pop();

    //Druga Zgrada
    sk.push();
    sk.translate(1647, -80);
    cityTwoFirstBuilding(sk);
    sk.pop();
  } else if (cases === 2) {
    sk.push();
    sk.translate(1500, 150);
    sk.scale(0.8);
    sk.rotate(0.05);
    cityTwoFirstBuilding(sk);
    sk.pop();

    //Druga Zgrada
    sk.push();
    sk.translate(1647, -80);
    sk.rotate(-0.05);
    cityTwoFirstBuilding(sk);
    sk.pop();
  } else {
    sk.push();
    sk.translate(1500, 150);
    sk.scale(0.8);
    sk.rotate(0.09);
    cityTwoFirstBuilding(sk);
    sk.pop();

    //Druga Zgrada
    sk.push();
    sk.translate(1647, -80);
    sk.rotate(-0.09);
    cityTwoFirstBuilding(sk);
    sk.pop();
  }
};

const cityTwoFirstBuilding = (sk) => {
  sk.push();
  // sk.noFill();
  // sk.fill(random(palette));

  //Prva stranica
  sk.push();
  sk.rect(100, 400, 150, 600);
  sk.pop();
  //Druga Stranica
  sk.push();
  sk.shearY(0.1);
  sk.translate(0, -26);
  sk.rect(250, 400, 50, 600);
  sk.pop();
  //Druga stranica sjena
  sk.push();
  sk.translate(250, 400);
  sk.shearY(0.1);
  for (let i = 0; i < 45; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.5, 600);
  }
  sk.pop();

  //Prozori prvi red desno
  if (cityTwoWindowShuffler === 1) {
    sk.push();
    sk.fill(0);
    sk.translate(10, -30);
    for (let i = 0; i < 15; i++) {
      sk.translate(0, i + 20);
      sk.rect(110, 450, 10, 10);
    }
    sk.pop();

    //Prozori sredina
    sk.push();
    sk.fill(0);
    sk.translate(50, -30);
    for (let i = 0; i < 15; i++) {
      sk.translate(0, i + 20);
      sk.rect(110, 450, 10, 10);
    }
    sk.pop();

    //Prozori livo
    sk.push();
    sk.fill(0);
    sk.translate(90, -30);
    for (let i = 0; i < 15; i++) {
      sk.translate(0, i + 20);
      sk.rect(110, 450, 10, 10);
    }
    sk.pop();
  }

  if (cityTwoWindowShuffler === 2) {
    sk.push();
    sk.fill(0);
    sk.translate(10, -30);
    for (let i = 0; i < 15; i++) {
      sk.translate(0, i + 20);
      sk.rect(110, 450, 5, 10);
    }
    sk.pop();

    //Prozori sredina
    sk.push();
    sk.fill(0);
    sk.translate(40, -30);
    for (let i = 0; i < 15; i++) {
      sk.translate(0, i + 20);
      sk.rect(110, 450, 5, 10);
    }
    sk.pop();

    //Prozori livo
    sk.push();
    sk.fill(0);
    sk.translate(90, -30);
    for (let i = 0; i < 15; i++) {
      sk.translate(0, i + 20);
      sk.rect(110, 450, 5, 10);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(120, -30);
    for (let i = 0; i < 15; i++) {
      sk.translate(0, i + 20);
      sk.rect(110, 450, 5, 10);
    }
    sk.pop();
  }

  if (cityTwoWindowShuffler === 3) {
    sk.push();
    sk.fill(0);
    sk.translate(10, -30);
    for (let i = 0; i < 15; i++) {
      sk.translate(0, i + 20);
      sk.rect(110, 450, 40, 10);
    }
    sk.pop();

    //Prozori sredina
    sk.push();
    sk.fill(0);
    sk.translate(60, -30);
    for (let i = 0; i < 15; i++) {
      sk.translate(0, i + 20);
      sk.rect(110, 450, 5, 10);
    }
    sk.pop();

    //Prozori livo
    sk.push();
    sk.fill(0);
    sk.translate(90, -30);
    for (let i = 0; i < 15; i++) {
      sk.translate(0, i + 20);
      sk.rect(110, 450, 5, 10);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(120, -65);
    for (let i = 0; i < 8; i++) {
      sk.translate(0, i + 50);
      sk.rect(110, 450, 5, 28);
    }
    sk.pop();
  }

  if (cityTwoWindowShuffler === 4) {
    sk.push();
    sk.fill(0);
    sk.translate(10, -30);
    for (let i = 0; i < 15; i++) {
      sk.translate(0, i + 20);
      sk.rect(110, 450, 40, 10);
    }
    sk.pop();

    //Prozori livo
    sk.push();
    sk.fill(0);
    sk.translate(90, -65);
    for (let i = 0; i < 8; i++) {
      sk.translate(0, i + 50);
      sk.rect(110, 450, 5, 28);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(120, -65);
    for (let i = 0; i < 8; i++) {
      sk.translate(0, i + 50);
      sk.rect(110, 450, 5, 28);
    }
    sk.pop();
  }

  if (cityTwoWindowShuffler === 5) {
    sk.push();
    sk.fill(0);
    sk.translate(10, -30);
    for (let i = 0; i < 15; i++) {
      sk.translate(0, i + 20);
      sk.rect(110, 450, 40, 10);
    }
    sk.pop();

    //Prozori livo
    sk.push();
    sk.fill(0);
    sk.translate(90, -30);
    for (let i = 0; i < 15; i++) {
      sk.translate(0, i + 20);
      sk.rect(110, 450, 40, 10);
    }
    sk.pop();
  }

  if (cityTwoWindowShuffler === 6) {
    sk.push();
    sk.fill(0);
    sk.translate(10, -30);
    for (let i = 0; i < 5; i++) {
      sk.translate(0, i + 20);
      sk.rect(110, 450, 40, 10);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(10, 80);
    for (let i = 0; i < 8; i++) {
      sk.translate(0, i + 35);
      sk.rect(110, 450, 10, 20);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(40, 80);
    for (let i = 0; i < 8; i++) {
      sk.translate(0, i + 35);
      sk.rect(110, 450, 10, 20);
    }
    sk.pop();

    //Prozori livo
    sk.push();
    sk.fill(0);
    sk.translate(90, -30);
    for (let i = 0; i < 15; i++) {
      sk.translate(0, i + 20);
      sk.rect(110, 450, 40, 10);
    }
    sk.pop();
  }

  if (cityTwoWindowShuffler === 7) {
    sk.push();
    sk.fill(0);
    sk.translate(10, -30);
    for (let i = 0; i < 5; i++) {
      sk.translate(0, i + 20);
      sk.rect(110, 450, 110, 5);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(10, 80);
    for (let i = 0; i < 8; i++) {
      sk.translate(0, i + 35);
      sk.rect(110, 450, 10, 20);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(40, 80);
    for (let i = 0; i < 8; i++) {
      sk.translate(0, i + 35);
      sk.rect(110, 450, 10, 20);
    }
    sk.pop();

    sk.push();
    sk.fill(0);
    sk.translate(90, 80);
    for (let i = 0; i < 8; i++) {
      sk.translate(0, i + 35);
      sk.rect(110, 450, 10, 20);
    }
    sk.pop();
    sk.push();
    sk.fill(0);
    sk.translate(120, 80);
    for (let i = 0; i < 8; i++) {
      sk.translate(0, i + 35);
      sk.rect(110, 450, 10, 20);
    }
    sk.pop();
  }

  //Sjena
  sk.push();
  sk.translate(100, 400);
  for (let i = 0; i < 31; i++) {
    sk.translate(0, i + 0.001);
    lineX(sk, 0.9, 150);
  }
  sk.pop();

  sk.pop();
};

const cityTwoSecondBuilding = (sk) => {
  sk.push();
  // sk.fill(random(palette));
  // sk.noFill();
  // ---------------------------------------------Ovo dobro sutra pregledat
  // sk.strokeWeight(2);
  // sk.noStroke();
  //---------------------------Prizemlje
  //Prvi kvadrat
  sk.push();
  sk.rect(100, 600, 100, 200);
  sk.pop();
  //Drugi element

  sk.push();
  sk.rect(200, 700, 130, 100);
  sk.pop();

  //Treci element

  sk.push();
  sk.rect(330, 600, 100, 200);
  sk.pop();

  //Glavna stranica

  sk.push();
  sk.rect(200, 0, 130, 700);
  sk.pop();
  //Lijeva strana
  sk.push();
  sk.rect(120, 550, 80, 50);
  sk.pop();

  //Desna Strana

  sk.push();
  sk.rect(330, 550, 80, 50);
  sk.pop();

  //Lijeva strana
  sk.push();
  sk.rect(140, 470, 60, 80);
  sk.pop();

  //Desna strana
  sk.push();
  sk.rect(330, 470, 60, 80);
  sk.pop();

  //Lijeva strana
  sk.push();
  sk.rect(160, 0, 40, 470);
  sk.pop();

  //Desna strana
  sk.push();
  sk.rect(330, 0, 40, 470);
  sk.pop();

  //Vrh prvi dio

  sk.push();
  sk.rect(200, -150, 130, 150);
  // sk.fill(120);
  sk.translate(0, -150);
  sk.curve(400, 150, 200, 0, 330, 0, 200, 150);
  sk.pop();

  sk.push();
  sk.translate(0, -135);
  // sk.fill(120);
  for (let i = 0; i < 15; i++) {
    sk.translate(13, i - 30);
    sk.scale(0.95);
    sk.curve(400, 150, 200, 0, 330, 0, 200, 150);
  }
  sk.pop();

  //Antena

  sk.push();
  sk.translate(250, -600);
  for (let i = 0; i < 10; i++) {
    sk.shearY(-0.5);
    sk.translate(1.1, 0);
    buildShadow(sk, 0.5, 200);
  }
  sk.pop();

  //Prozori desno

  sk.push();
  sk.fill(0);
  for (let i = 0; i < 18; i++) {
    sk.translate(0, i + 15);
    sk.rect(170, 10, 5);
  }
  sk.pop();

  sk.push();
  sk.fill(0);
  sk.translate(15, 0);
  for (let i = 0; i < 18; i++) {
    sk.translate(0, i + 15);
    sk.rect(170, 10, 5);
  }
  sk.pop();

  //Prozori livo

  sk.push();
  sk.fill(0);
  for (let i = 0; i < 18; i++) {
    sk.translate(0, i + 15);
    sk.rect(340, 10, 5);
  }
  sk.pop();

  sk.push();
  sk.fill(0);
  sk.translate(15, 0);
  for (let i = 0; i < 18; i++) {
    sk.translate(0, i + 15);
    sk.rect(340, 10, 5);
  }
  sk.pop();

  //Prozori sredina

  sk.push();
  sk.fill(0);
  for (let i = 0; i < 25; i++) {
    sk.translate(0, i + 15);
    sk.rect(210, 2, 20, 5);
  }
  sk.pop();

  sk.push();
  sk.fill(0);
  // sk.translate(15, 0);
  for (let i = 0; i < 25; i++) {
    sk.translate(0, i + 15);
    sk.rect(300, 2, 20, 5);
  }
  sk.pop();

  sk.push();
  sk.fill(0);
  // sk.translate(15, 0);
  for (let i = 0; i < 25; i++) {
    sk.translate(0, i + 15);
    sk.rect(240, 0, 10);
  }
  sk.pop();
  sk.push();
  sk.fill(0);
  sk.translate(20, 0);
  for (let i = 0; i < 25; i++) {
    sk.translate(0, i + 15);
    sk.rect(240, 0, 10);
  }
  sk.pop();

  sk.push();
  sk.fill(0);
  sk.translate(40, 0);
  for (let i = 0; i < 25; i++) {
    sk.translate(0, i + 15);
    sk.rect(240, 0, 10);
  }
  sk.pop();

  sk.push();
  sk.fill(0);
  // sk.translate(15, 0);
  for (let i = 0; i < 5; i++) {
    sk.translate(0, i + 10);
    sk.rect(145, 470, 30, 5);
  }
  sk.pop();

  sk.push();
  sk.fill(0);
  // sk.translate(15, 0);
  for (let i = 0; i < 5; i++) {
    sk.translate(0, i + 10);
    sk.rect(185, 470, 5);
  }
  sk.pop();

  sk.push();
  sk.fill(0);
  // sk.translate(15, 0);
  for (let i = 0; i < 5; i++) {
    sk.translate(0, i + 10);
    sk.rect(340, 470, 5);
  }
  sk.pop();

  sk.push();
  sk.fill(0);
  // sk.translate(15, 0);
  for (let i = 0; i < 5; i++) {
    sk.translate(0, i + 10);
    sk.rect(355, 470, 30, 5);
  }
  sk.pop();

  sk.push();
  sk.strokeWeight(10);
  sk.translate(120, 600);
  for (let i = 0; i < 8; i++) {
    sk.translate(0, i + 20);
    sk.point(0, 0);
  }
  sk.pop();

  sk.push();
  sk.strokeWeight(10);
  sk.translate(140, 600);
  for (let i = 0; i < 8; i++) {
    sk.translate(0, i + 20);
    sk.point(0, 0);
  }
  sk.pop();

  sk.push();
  sk.strokeWeight(10);
  sk.translate(160, 600);
  for (let i = 0; i < 8; i++) {
    sk.translate(0, i + 20);
    sk.point(0, 0);
  }
  sk.pop();

  sk.push();
  sk.strokeWeight(10);
  sk.translate(180, 600);
  for (let i = 0; i < 8; i++) {
    sk.translate(0, i + 20);
    sk.point(0, 0);
  }
  sk.pop();

  sk.push();
  sk.strokeWeight(10);
  sk.translate(350, 600);
  for (let i = 0; i < 8; i++) {
    sk.translate(0, i + 20);
    sk.point(0, 0);
  }
  sk.pop();

  sk.push();
  sk.strokeWeight(10);
  sk.translate(370, 600);
  for (let i = 0; i < 8; i++) {
    sk.translate(0, i + 20);
    sk.point(0, 0);
  }
  sk.pop();

  sk.push();
  sk.strokeWeight(10);
  sk.translate(390, 600);
  for (let i = 0; i < 8; i++) {
    sk.translate(0, i + 20);
    sk.point(0, 0);
  }
  sk.pop();

  sk.push();
  sk.strokeWeight(10);
  sk.translate(410, 600);
  for (let i = 0; i < 8; i++) {
    sk.translate(0, i + 20);
    sk.point(0, 0);
  }
  sk.pop();

  sk.push();
  sk.fill(0);
  sk.translate(-140, 230);
  for (let i = 0; i < 5; i++) {
    sk.translate(0, i + 15);
    sk.rect(355, 470, 100, 5);
  }
  sk.pop();

  sk.push();
  sk.fill(0);
  sk.translate(-230, 76);
  for (let i = 0; i < 3; i++) {
    sk.translate(0, i + 13);
    sk.rect(355, 470, 65, 5);
  }
  sk.pop();

  sk.push();
  sk.fill(0);
  sk.translate(-15, 76);
  for (let i = 0; i < 3; i++) {
    sk.translate(0, i + 13);
    sk.rect(355, 470, 65, 5);
  }
  sk.pop();

  //Toranj Prozori Start--------------------------------
  sk.push();
  sk.translate(200, -150);
  for (let i = 0; i < 70; i++) {
    // sk.shearY(-0.5);
    sk.translate(1.1, 0);
    buildShadow(sk, 0.7, 150);
  }
  sk.pop();

  sk.push();
  sk.translate(310, -150);
  for (let i = 0; i < 15; i++) {
    // sk.shearY(-0.5);
    sk.translate(1.1, 0);
    buildShadow(sk, 0.7, 150);
  }
  sk.pop();

  //Toranj Prozori Kraj---------------------------------

  sk.pop();
};

const lineX = (sk, strokeW, sizeX) => {
  sk.push();
  sk.strokeWeight(strokeW);
  sk.beginShape();
  for (let x = 0; x < sizeX; x++) {
    let dis = map(x, 0, sizeX, 0, 1);
    let y = noise(dis * 3);
    sk.vertex(x, y);
  }
  sk.endShape();
  sk.pop();
};

const lineY = (sk, strokeW, sizeY) => {
  sk.push();
  sk.strokeWeight(strokeW);
  sk.noFill();
  sk.beginShape();
  for (let y = 0; y < sizeY; y++) {
    let dis = map(y, 0, sizeY, 0, 1);
    let x = noise(dis * 3);
    sk.vertex(x, y);
  }
  sk.endShape();
  sk.pop();

  if (cases === 3) {
    sk.push();
    sk.strokeWeight(strokeW);
    sk.noFill();
    sk.beginShape();
    for (let y = 0; y < sizeY; y++) {
      let dis = map(y, 0, sizeY, 0, 1);
      let x = noise(dis * 3) * 20;
      sk.vertex(x, y);
    }
    sk.endShape();
    sk.pop();
  }
  if (cases === 4) {
    sk.push();
    sk.strokeWeight(strokeW);
    sk.noFill();
    sk.beginShape();
    for (let y = 0; y < sizeY; y++) {
      let dis = map(y, 0, sizeY, 0, 1);
      let x = noise(dis * 3) * 80;
      sk.vertex(x, y);
    }
    sk.endShape();
    sk.pop();
  }
  if (cases === 5) {
    sk.push();
    sk.strokeWeight(strokeW);
    sk.noFill();
    sk.beginShape();
    for (let y = 0; y < sizeY; y++) {
      let dis = map(y, 0, sizeY, 0, 1);
      let x = noise(dis * 3) * 150;
      sk.vertex(x, y);
    }
    sk.endShape();
    sk.pop();
  }
  if (cases === 6) {
    sk.push();
    sk.strokeWeight(strokeW);
    sk.noFill();
    sk.beginShape();
    for (let y = 0; y < sizeY; y++) {
      let dis = map(y, 0, sizeY, 0, 1);
      let x = noise(dis * 3) * 10;
      sk.vertex(x, y);
    }
    sk.endShape();
    sk.pop();
  }
};

const gearLineX = (sk, strokeW, sizeX) => {
  sk.push();
  sk.strokeWeight(strokeW);
  sk.beginShape();
  for (let x = 0; x < sizeX; x++) {
    let dis = map(x, 0, sizeX, 0, 1);
    let y = noise(dis * 3);
    sk.vertex(x, y);
  }
  sk.endShape();
  sk.pop();
};

const gearLineY = (sk, strokeW, sizeY) => {
  sk.push();
  sk.strokeWeight(strokeW);
  sk.noFill();
  sk.beginShape();
  for (let y = 0; y < sizeY; y++) {
    let dis = map(y, 0, sizeY, 0, 1);
    let x = noise(dis * 3);
    sk.vertex(x, y);
  }
  sk.endShape();
  sk.pop();
};

const buildShadow = (sk, strokeW, sizeY) => {
  if (cases === 1) {
    let stress = 1;

    sk.push();
    sk.strokeWeight(strokeW);
    sk.noFill();
    sk.beginShape();
    for (let y = 0; y < sizeY; y++) {
      let dis = map(y, 0, sizeY, 0, 10);
      let x = noise(dis / 3.5) * stress;
      sk.vertex(x, y);
    }
    sk.endShape();
    sk.pop();
  }
  if (cases === 2) {
    let stress = random(10, 15);

    sk.push();
    sk.strokeWeight(strokeW);
    sk.noFill();
    sk.beginShape();
    for (let y = 0; y < sizeY; y++) {
      let dis = map(y, 0, sizeY, 0, 10);
      let x = noise(dis / 3.5) * stress;
      sk.vertex(x, y);
    }
    sk.endShape();
    sk.pop();
  }

  if (cases === 3) {
    let stress = random(15, 20);

    sk.push();
    sk.strokeWeight(strokeW);
    sk.noFill();
    sk.beginShape();
    for (let y = 0; y < sizeY; y++) {
      let dis = map(y, 0, sizeY, 0, 10);
      let x = noise(dis / 3.5) * stress;
      sk.vertex(x, y);
    }
    sk.endShape();
    sk.pop();
  }

  if (cases === 4) {
    let stress = random(20, 25);

    sk.push();
    sk.strokeWeight(strokeW);
    sk.noFill();
    sk.beginShape();
    for (let y = 0; y < sizeY; y++) {
      let dis = map(y, 0, sizeY, 0, 10);
      let x = noise(dis / 3.5) * stress;
      sk.vertex(x, y);
    }
    sk.endShape();
    sk.pop();
  }

  if (cases === 5) {
    let stress = random(70, 85);

    sk.push();
    sk.strokeWeight(strokeW);
    sk.noFill();
    sk.beginShape();
    for (let y = 0; y < sizeY; y++) {
      let dis = map(y, 0, sizeY, 0, 10);
      let x = noise(dis / 3.5) * stress;
      sk.vertex(x, y);
    }
    sk.endShape();
    sk.pop();
  }
  if (cases === 6) {
    let stress = random(70, 85);

    sk.push();
    sk.strokeWeight(strokeW);
    sk.noFill();
    sk.beginShape();
    for (let y = 0; y < sizeY; y++) {
      let dis = map(y, 0, sizeY, 0, 10);
      let x = noise(dis / 3.5) * stress;
      sk.vertex(x, y);
    }
    sk.endShape();
    sk.pop();
  }
};

const gearShadow = (sk, strokeW, sizeY) => {
  sk.push();
  sk.strokeWeight(strokeW);
  sk.noFill();
  sk.beginShape();
  for (let y = 0; y < sizeY; y++) {
    let dis = map(y, 0, sizeY, 0, 10);
    let x = noise(dis / 3.5) * 1;
    sk.vertex(x, y);
  }
  sk.endShape();
  sk.pop();
};

const shadowTexture = (sk, weight, nsIncrement, R, G, B, A) => {
  let x, y;
  // sk.colorMode(HSB, 360, 100, 100, 100);
  sk.stroke(R, G, B, A);
  sk.translate(-500, -500);
  sk.beginShape();
  sk.noFill();
  let xt = 100;
  let yt = 100;
  for (let i = 0; i < 50; i += nsIncrement) {
    x = cos(xt) * i;
    let nx = map(noise(x), 0, 1, 0, 2000);
    y = sin(i) * yt;
    let ny = map(noise(y), 0, 1, 0, 2000);
    // sk.stroke(R, G, B, A);
    sk.strokeWeight(0.02);
    // sk.strokeWeight(1);
    sk.vertex(nx, ny);
  }
  sk.endShape();
};

const outsideCircle = (sk, fsRND, scRND, index, strokeDensity, strokeW) => {
  sk.colorMode(HSB, 360, 100, 100, 100);
  sk.noFill();
  sk.beginShape();
  for (let i = 0; i < index; i += strokeDensity) {
    let x, y;
    let r = random(fsRND, scRND);
    x = r * cos(i);
    y = r * sin(i);
    sk.strokeWeight(strokeW);
    sk.vertex(x, y);
  }
  sk.scale(2.5);
  sk.endShape();
};
// ---------------------------------------------------Prva Varijanta------------------
// const layer2conicGradient = (sk, x0, y0, x1, y1) => {
//   let gradient = drawingContext.createLinearGradient(x0, y0, x1, y1);
//   gradient.addColorStop(1, hexToRgba("#C69320", 0));
//   gradient.addColorStop(0.6, hexToRgba("#EEB609", 0.4));
//   gradient.addColorStop(0.3, hexToRgba("#FCC201", 0.5));
//   gradient.addColorStop(0, hexToRgba("#C69320", 0.7));
//   sk.drawingContext.strokeStyle = gradient;
// };

const layer2conicGradient = (sk, x0, y0, x1, y1) => {
  let gradient = drawingContext.createLinearGradient(x0, y0, x1, y1);
  gradient.addColorStop(1, hexToRgba(random(palette), 0));
  gradient.addColorStop(0.6, hexToRgba(random(palette), 0.4));
  gradient.addColorStop(0.3, hexToRgba(random(palette), 0.5));
  gradient.addColorStop(0, hexToRgba(random(palette), 0.7));
  sk.drawingContext.strokeStyle = gradient;
};

const skconicGradient = (sk, x0, y0, x1, y1) => {
  let gradient = drawingContext.createLinearGradient(x0, y0, x1, y1);
  gradient.addColorStop(1, hexToRgba("#cd7f32", 0.5));
  gradient.addColorStop(0.6, hexToRgba("#b9722d"));
  gradient.addColorStop(0.3, hexToRgba("#29190a", 0.5));
  gradient.addColorStop(0, hexToRgba("#b9722d", 0.8));
  sk.drawingContext.strokeStyle = gradient;
};

const circleCompose = (sk) => {
  sk.push();
  sk.scale(1.2);
  sk.strokeWeight(0.5);
  sk.noFill();
  sk.ellipse(369, 60, 500);
  sk.pop();
  layer2conicGradient(
    sk,
    width / 2 - 200,
    height / 2 - 200,
    width / 2 + 200,
    height / 2 + 200
  );
  sk.push();
  sk.scale(1.2);
  sk.strokeWeight(1);
  sk.noFill();

  for (let i = 0; i < 3.05; i++) {
    sk.translate(i * 1, -1);
    sk.ellipse(370, 60, 500);
  }
  sk.pop();
};

const gear = (sk, stressX, stressY, strokeTrans) => {
  sk.angleMode(DEGREES);

  //Production dimenzije---------

  sk.scale(3);
  sk.translate(430, -205);
  sk.rotate(-5);

  for (let i = 0; i < 30; i++) {
    // Vanjski krug nazubljeni pocetak------------------
    // sk.shearY(random(-500, 200)); //Dobro za varijacije pogotovo u igri s formatima
    sk.shearX(stressX);
    sk.shearY(stressY);
    sk.push();
    sk.rotate((360 * i) / 25);
    sk.translate(5, 0);
    sk.push();
    sk.translate(140, -7);
    gearLineY(sk, 1, 9);
    sk.pop();

    sk.push();
    sk.translate(140, -8);
    sk.rotate(-10);
    gearLineX(sk, 1, 27);
    sk.pop();

    sk.push();
    sk.translate(165.9, -31);
    gearLineY(sk, 1, 19.7);
    sk.pop();

    // -----------Boja Zupcanika------------
    sk.push();
    sk.scale(0.46);
    // ------------------Prva Varijanta---------------//
    // sk.stroke(hexToRgba("#C69320", 0.3));
    sk.stroke(hexToRgba(random(palette), 0.3));
    outsideCircle(sk, 147, 85.2, 35, 0.04, strokeTrans);
    sk.pop();

    //-----------Boja Kraj-------------------
    sk.push();
    sk.translate(137, -37);
    sk.rotate(10);
    gearLineX(sk, 2.7, 30);
    sk.pop();
    sk.colorMode(HSB, 360, 100, 100, 100);
    sk.pop();
    // Vanjski krug nazubljeni kraj-------------

    //Unutarnji krug prvi iza zubaca pocetak--------
    sk.push();

    sk.push();
    sk.scale(0.52);
    outsideCircle(sk, 95, 88.2, TWO_PI, 0.04, 0.2);
    sk.pop();

    sk.push();
    sk.scale(0.48);
    sk.rotate(138);
    outsideCircle(sk, 95, 104.2, 0.9, 0.009, 0.2);
    sk.pop();
    sk.push();
    sk.rotate(170);
    sk.push();
    // sk.scale(2);
    sk.rotate((i * 90) / 35);
    sk.translate(115, 25);
    gearLineY(sk, 1.3, 30);
    sk.pop();
    sk.pop();
    sk.pop();
    //Unutarnji krug prvi iza zubaca kraj-----------

    //Sjena izmedju unutarnjeg i treceg pocetak----------

    sk.push();
    sk.rotate(200);
    sk.push();
    // sk.scale(2);
    sk.rotate((i * 160) / 50);
    sk.translate(100, 5);
    gearLineY(sk, 1.5, 55);
    sk.pop();
    sk.pop();

    sk.push();
    sk.rotate(173);
    sk.push();
    sk.rotate((i * 20) / 5);
    sk.translate(100, 25);
    gearLineY(sk, 0.8, 20);
    sk.pop();
    sk.pop();

    //------------Sarafi----------------------
    sk.push();
    sk.rotate((360 * i) / 6);
    sk.rotate(-110);
    sk.translate(10, -109);
    sk.scale(0.01);
    sk.push();
    outsideCircle(sk, 95, 90.2, PI, 0.004, 0.2);
    sk.pop();
    sk.pop();
    //------------Sarafi----------------------
    //Sjena izmedju unutarnjeg i treceg kraj-------------

    //Treci krug do pozicija sata pocetak---------------------
    sk.push();
    sk.scale(0.42);
    outsideCircle(sk, 95, 93.2, TWO_PI, 0.04, 0.2);
    sk.pop();
    sk.push();
    sk.noFill();
    sk.stroke("#fff");
    sk.strokeWeight(0.1);
    sk.circle(0, 0, 201);
    sk.pop();
    //Treci krug do sata kraj------------------------

    //Unutarnji glavni krug--------------------------
    sk.push();
    sk.scale(0.25);
    outsideCircle(sk, 83, 95.2, TWO_PI, 0.04, 0.2);

    sk.pop();
    sk.push();
    sk.scale(0.25);
    outsideCircle(sk, 83, 95.2, TWO_PI, 0.04, 0.2);

    sk.pop();
    //Unutarnji glavni krug kraj--------------------------

    //Kazaljke------------------------------

    //Kazaljka Sati-------------------------
    sk.push();

    sk.push();

    sk.push();
    sk.translate(-4, -67);
    for (let i = 0; i < 4; i++) {
      sk.translate(1.1, 0);
      gearShadow(sk, 0.8, 85);
    }
    sk.pop();

    sk.push();
    sk.rotate(10);
    sk.translate(-16, -80);
    for (let i = 0; i < 2; i++) {
      sk.shearY(50);
      sk.translate(1.1, 0);
      gearShadow(sk, 0.8, 35);
    }

    sk.pop();

    sk.push();
    sk.rotate(-10);
    sk.translate(10, -74);
    for (let i = 0; i < 2; i++) {
      sk.shearY(-50);
      sk.translate(1.1, 0);
      gearShadow(sk, 0.8, 35);
    }

    sk.pop();

    sk.pop();

    sk.pop();
    //Kazaljka Sati-------------------------

    //Kazaljka Minute-----------------------

    sk.push();
    if (cases === 1) {
      sk.rotate(-33);
    }
    if (cases === 2) {
      sk.rotate(-25);
    }
    if (cases === 3) {
      sk.rotate(-20);
    }
    if (cases === 4) {
      sk.rotate(-15);
    }
    if (cases === 5) {
      sk.rotate(-10);
    }

    sk.push();

    sk.push();
    sk.translate(-4, -67);
    for (let i = 0; i < 4; i++) {
      sk.translate(1.1, 0);
      gearShadow(sk, 0.8, 85);
    }
    sk.pop();

    sk.push();
    sk.rotate(10);
    sk.translate(-16, -80);
    for (let i = 0; i < 2; i++) {
      sk.shearY(50);
      sk.translate(1.1, 0);
      gearShadow(sk, 0.8, 35);
    }

    sk.pop();

    sk.push();
    sk.rotate(-10);
    sk.translate(10, -74);
    for (let i = 0; i < 2; i++) {
      sk.shearY(-50);
      sk.translate(1.1, 0);
      gearShadow(sk, 0.8, 35);
    }

    sk.pop();

    sk.pop();

    sk.pop();

    //Kazaljka Minute-----------------------

    //Kazaljke------------------------------

    //Sredisna kruznica---------------------

    sk.push();
    // ------------Prva Varijanta---------//
    // sk.fill(hexToRgba(sepiaClouds[7]));
    sk.fill(hexToRgba(random(palette)));
    sk.circle(0, 0, 15);
    sk.pop();

    //Sredisna kruznica---------------------

    //Predzadnja kruznica-------------------
    sk.push();
    sk.scale(0.1);
    sk.noFill();
    sk.circle(0, 0, 480);
    sk.pop();
    //Predzadnja kruznica-------------------

    //Tri unutarnja bloka-----------------------------
    sk.push();
    sk.rotate((360 * i) / 3);
    sk.push();
    sk.translate(-15, -54);
    for (let i = 0; i < 22; i++) {
      sk.translate(1.1, 0);
      gearShadow(sk, 0.8, 7);
    }
    sk.pop();
    sk.pop();
    //Tri unutarnja bloka-----------------------------

    //Tri unutarnja prstena-----------------
    sk.push();
    sk.rotate((360 * i) / 3);

    sk.push();
    sk.translate(-1, -38);
    sk.scale(0.066);
    sk.stroke("#000");
    sk.strokeWeight(3);
    sk.noFill();
    sk.circle(0, 0, 380);
    sk.scale(0.19);
    sk.strokeWeight(15);
    sk.circle(0, 0, 800);
    sk.rotate(50);
    sk.translate(-80, 0);
    // lineX(sk, 9, 160);
    sk.rotate(80);
    sk.translate(-70, -80);
    // lineX(sk, 9, 165);
    sk.pop();

    // sk.push();

    sk.pop();
    //Tri unutarnja prstena-----------------
  }

  //Sat-----------------------------------

  //12-------
  sk.push();

  sk.push();
  sk.rotate(20);
  sk.translate(-38, -90);
  gearLineY(sk, 1.5, 45);
  sk.pop();

  sk.push();
  sk.rotate(-20);
  sk.translate(16, -97);
  gearLineY(sk, 1.5, 44);
  sk.pop();

  sk.pop();

  sk.push();
  sk.translate(0, -97);
  gearLineY(sk, 1.5, 40);
  sk.pop();

  sk.push();
  sk.translate(5, -97);
  gearLineY(sk, 1.5, 40);
  sk.pop();
  //12---------

  //6----------

  sk.push();
  sk.translate(-10, 59);
  gearLineY(sk, 1.5, 40);
  sk.pop();

  sk.push();

  sk.push();
  sk.rotate(5);
  sk.translate(5, 59);
  gearLineY(sk, 1.5, 41);
  sk.pop();

  sk.push();
  sk.rotate(-10);
  sk.translate(-10, 59);
  gearLineY(sk, 1.5, 41);
  sk.pop();

  sk.pop();
  //6----------

  //3----------

  sk.push();

  sk.push();
  sk.translate(58, 5);
  gearLineX(sk, 1.5, 40);
  sk.pop();

  sk.push();
  sk.translate(58, -5);
  gearLineX(sk, 1.5, 40);
  sk.pop();

  sk.push();
  sk.translate(58, 0);
  gearLineX(sk, 1.5, 40);
  sk.pop();

  sk.pop();
  //3----------

  //11----------

  sk.push();
  sk.rotate(-28);
  sk.push();
  sk.push();
  sk.rotate(20);
  sk.translate(-38, -90);
  gearLineY(sk, 1.5, 45);
  sk.pop();

  sk.push();
  sk.rotate(-20);
  sk.translate(16, -97);
  gearLineY(sk, 1.5, 44);
  sk.pop();

  sk.push();
  sk.translate(0, -97);
  gearLineY(sk, 1.5, 44);
  sk.pop();
  sk.pop();
  sk.pop();
  //11----------

  //10-------------
  sk.push();
  sk.rotate(-53);
  sk.push();
  sk.push();
  sk.rotate(20);
  sk.translate(-38, -90);
  gearLineY(sk, 1.5, 45);
  sk.pop();

  sk.push();
  sk.rotate(-20);
  sk.translate(16, -97);
  gearLineY(sk, 1.5, 44);
  sk.pop();

  sk.pop();
  sk.pop();
  //10-----------

  // 9---------------------

  sk.push();
  sk.rotate(-85);
  sk.push();
  sk.rotate(-5);
  sk.translate(14, 0);
  sk.push();
  sk.rotate(20);
  sk.translate(-38, -90);
  gearLineY(sk, 1.5, 45);
  sk.pop();

  sk.push();
  sk.rotate(-20);
  sk.translate(16, -97);
  gearLineY(sk, 1.5, 44);
  sk.pop();

  sk.push();
  sk.translate(-25, -97);
  gearLineY(sk, 1.5, 44);
  sk.pop();

  sk.pop();
  sk.pop();
  // 9---------------------

  //7----------------------
  sk.push();
  sk.rotate(25);
  sk.push();

  sk.push();
  sk.translate(-10, 59);
  gearLineY(sk, 1.5, 40);
  sk.pop();

  sk.push();
  sk.translate(-15, 58);
  gearLineY(sk, 1.5, 41);
  sk.pop();

  sk.push();
  sk.rotate(5);
  sk.translate(5, 59);
  gearLineY(sk, 1.5, 41);
  sk.pop();

  sk.push();
  sk.rotate(-10);
  sk.translate(-10, 59);
  gearLineY(sk, 1.5, 41);
  sk.pop();

  sk.pop();

  sk.pop();
  //7----------------------

  // 8---------------------

  sk.push();
  sk.rotate(54);
  sk.push();

  sk.push();
  sk.rotate(5);
  sk.translate(-1, 59);
  gearLineY(sk, 1.5, 40);
  sk.pop();

  sk.push();
  sk.rotate(5);
  sk.translate(-15, 58);
  // gearLineY(sk, 1.5, 40);
  sk.pop();

  sk.push();
  sk.rotate(4);
  sk.translate(-14, 58);
  gearLineY(sk, 1.5, 40);
  sk.pop();

  sk.push();
  sk.rotate(4);
  sk.translate(-8, 58);
  gearLineY(sk, 1.5, 41);
  sk.pop();

  sk.push();
  sk.rotate(5);
  sk.translate(5, 59);
  gearLineY(sk, 1.5, 41);
  sk.pop();

  sk.push();
  sk.rotate(-10);
  sk.translate(-10, 59);
  gearLineY(sk, 1.5, 41);
  sk.pop();

  sk.pop();

  sk.pop();
  // 8---------------------

  // 1---------------------
  sk.push();
  sk.rotate(-60);

  sk.push();
  sk.translate(58, -5);
  // gearLineX(sk, 1.5, 40);
  sk.pop();

  sk.push();
  sk.translate(58, 0);
  gearLineX(sk, 1.5, 40);
  sk.pop();

  sk.pop();
  // 1---------------------

  // 2---------------------
  sk.push();
  sk.rotate(-30);

  sk.push();
  sk.translate(58, -5);
  gearLineX(sk, 1.5, 40);
  sk.pop();

  sk.push();
  sk.translate(58, 0);
  gearLineX(sk, 1.5, 40);
  sk.pop();

  sk.pop();
  // 2---------------------

  //4----------------------

  sk.push();
  sk.rotate(-55);
  sk.push();

  sk.push();
  sk.translate(10, 59);
  sk.rotate(-3);
  gearLineY(sk, 1.5, 40);
  sk.pop();

  sk.push();
  sk.rotate(5);
  sk.translate(5, 59);
  gearLineY(sk, 1.5, 41);
  sk.pop();

  sk.push();
  sk.rotate(-10);
  sk.translate(-10, 59);
  gearLineY(sk, 1.5, 41);
  sk.pop();

  sk.pop();

  sk.pop();
  //4----------------------

  // 5---------------------
  sk.push();
  sk.rotate(-28);
  sk.push();

  sk.push();
  sk.translate(10, 59);
  sk.rotate(-3);
  // gearLineY(sk, 1.5, 40);
  sk.pop();

  sk.push();
  sk.rotate(5);
  sk.translate(5, 59);
  gearLineY(sk, 1.5, 41);
  sk.pop();

  sk.push();
  sk.rotate(-10);
  sk.translate(-10, 59);
  gearLineY(sk, 1.5, 41);
  sk.pop();

  sk.pop();

  sk.pop();
  // 5---------------------
  //Sat KRAJ-------------------------------------
};

const birds = (sk) => {
  sk.translate(-50, 50);
  sk.push();
  sk.rotate(-25);
  lineX(sk, 1, 10);
  sk.pop();

  sk.push();
  sk.rotate(35);
  sk.translate(5, -8);
  lineX(sk, 1, 10);
  sk.pop();

  sk.push();
  sk.rotate(-35);
  sk.translate(12, 8);
  lineX(sk, 1, 7);
  sk.pop();
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

const texture_2 = (sk, strokeW) => {
  sk.colorMode(HSB, 360, 100, 100, 100);
  sk.push();
  sk.translate(100, 100);
  // ------------Prva Varijanta Sepia-----------
  // oblik(
  //   sk,
  //   hue(sepiaSky[2]),
  //   saturation(sepiaSky[1]),
  //   brightness(sepiaSky[4]),
  //   strokeW,
  //   random(4000, 4500),
  //   150,
  //   149
  // );

  oblik(
    sk,
    hue(random(palette)),
    saturation(random(palette)),
    brightness(random(palette)),
    strokeW,
    random(4000, 4500),
    150,
    149
  );
  sk.pop();
};

//City one First Building Start--------------------------------------------
const cityOnefirstBuilding = (sk) => {
  sk.push();
  sk.translate(50, 500);
  lineY(sk, 0.7, 200);
  sk.pop();
  sk.push();
  sk.translate(50, 500);
  lineX(sk, 0.8, 60);
  sk.pop();
  sk.push();
  sk.translate(110, 500);
  lineY(sk, 1, 200);
  sk.pop();
  sk.push();
  sk.translate(110, 500);
  sk.angleMode(DEGREES);
  sk.rotate(10);
  lineX(sk, 1, 30);
  sk.pop();
  sk.push();
  sk.translate(140, 505);
  lineY(sk, 1, 60);
  sk.pop();
  sk.push();
  sk.translate(180, 566);
  lineY(sk, 1, 155);
  sk.pop();
  sk.push();
  sk.translate(140, 565);
  sk.angleMode(DEGREES);
  sk.rotate(1);
  lineX(sk, 1, 40);
  sk.pop();
  sk.push();
  sk.translate(140, 600);
  sk.beginShape();
  for (let y = 0; y < 100; y++) {
    let distorsion = map(y, 0, 100, 0, 10);
    let x = noise(distorsion * 3) * 3;
    sk.vertex(x, y);
  }
  sk.endShape();
  sk.pop();

  sk.push();
  sk.translate(70, 460);
  for (let i = 0; i < 25; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.5, 30);
  }
  sk.pop();
  sk.push();
  sk.strokeWeight(6);
  sk.point(100, 495);
  sk.pop();

  sk.push();
  sk.translate(100, 450);
  lineY(sk, 0.6, 50);
  sk.pop();

  sk.push();
  sk.shearY(10);
  sk.translate(110, 482);
  for (let i = 0; i < 26; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 60);
  }
  sk.pop();
  sk.push();
  sk.translate(143, 620);
  for (let i = 0; i < 32; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 80);
  }
  sk.pop();

  sk.push();
  sk.translate(100, 505);
  lineY(sk, 0.5, 80);
  sk.pop();
  sk.push();
  sk.strokeWeight(7);
  sk.point(100, 515);
  sk.strokeWeight(6);
  sk.point(100, 530);
  sk.strokeWeight(5);
  sk.point(100, 545);
  sk.strokeWeight(4);
  sk.point(90, 515);
  sk.strokeWeight(4);
  sk.point(90, 530);
  sk.strokeWeight(4);
  sk.point(140, 575);
  sk.strokeWeight(5);
  sk.point(140, 585);
  sk.strokeWeight(3);
  sk.point(140, 595);
  sk.pop();
};
//City one First Building END--------------------------------------------

//City one Second Building Start-----------------------------------------
const cityOnesecondBuilding = (sk) => {
  sk.push();
  sk.translate(170, 320);
  lineY(sk, 1, 248);
  sk.pop();
  sk.push();
  sk.translate(170, 320);
  lineX(sk, 1, 100);
  sk.pop();
  sk.push();
  sk.translate(270, 320);
  lineY(sk, 1, 370);
  sk.pop();
  sk.push();
  sk.translate(269, 320);
  sk.angleMode(DEGREES);
  sk.rotate(10);
  lineX(sk, 1, 30);
  sk.pop();
  sk.push();
  sk.translate(299, 325);
  lineY(sk, 1, 330);
  sk.pop();

  sk.push();
  sk.translate(270, 320);
  sk.shearY(11);
  for (let i = 0; i < 22; i++) {
    sk.translate(1.3, 0);
    buildShadow(sk, 0.8, 220);
  }
  sk.pop();

  sk.push();
  sk.translate(287, 575);
  for (let i = 0; i < 10; i++) {
    sk.shearY(-25);
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 120);
  }
  sk.pop();

  sk.push();
  sk.translate(277, 573);
  for (let i = 0; i < 10; i++) {
    sk.shearY(-25);
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 120);
  }
  sk.pop();

  sk.push();
  sk.translate(269, 570);
  for (let i = 0; i < 9; i++) {
    sk.shearY(-27);
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 120);
  }
  sk.pop();

  sk.push();
  sk.translate(5, -15);
  for (let i = 1.3; i < 8; i++) {
    sk.translate(0, i * 8);
    sk.strokeWeight(8 / i);
    sk.point(200, 380);
  }
  sk.pop();

  sk.push();
  sk.translate(184, 375);
  for (let i = 0; i < 2; i++) {
    sk.translate(0, i * 80);
    lineY(sk, 1.5, 45);
  }
  sk.pop();
  sk.push();
  sk.translate(203, 370);
  lineY(sk, 0.5, 150);
  sk.pop();

  sk.push();
  sk.translate(-15, -35);
  for (let i = 1.3; i < 8; i++) {
    sk.translate(0, i * 8);
    sk.strokeWeight(8 / i);
    sk.point(200, 380);
  }
  sk.pop();

  sk.push();
  sk.translate(193, 320);
  sk.rotate(180);
  for (let i = 0; i < 10; i++) {
    sk.shearY(15);
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 80);
  }
  sk.pop();
  sk.push();
  sk.translate(175, 300);
  for (let i = 0; i < 20; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 21);
  }
  sk.pop();

  sk.push();
  sk.strokeWeight(10);
  sk.point(173, 315);
  sk.pop();
};
//City one Second Building END-----------------------------------------

//Small city block between Second and Thirds Building Start-----------------------------------
const smallCityBlock = (sk) => {
  sk.push();
  sk.translate(300, 650);
  lineX(sk, 2, 92);
  sk.pop();
  sk.push();
  sk.translate(299, 650);
  lineY(sk, 1, 48);
  sk.pop();

  sk.push();
  sk.translate(300, 650);
  for (let i = 0; i < 8; i++) {
    sk.shearY(3);
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 49);
  }
  sk.pop();
  sk.push();
  sk.strokeWeight(5);
  sk.point(320, 665);
  sk.pop();

  sk.push();
  sk.strokeWeight(4);
  sk.point(320, 680);
  sk.pop();

  sk.push();
  sk.strokeWeight(5);
  sk.point(350, 665);
  sk.pop();

  sk.push();
  sk.translate(319.5, 660);
  lineY(sk, 0.7, 33);
  sk.pop();

  sk.push();
  sk.translate(365, 650);
  for (let i = 0; i < 8; i++) {
    sk.shearY(4);
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 67);
  }
  sk.pop();

  sk.push();
  sk.translate(374, 650);
  for (let i = 0; i < 14; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 70);
  }
  sk.pop();
};
//Small city block between Second and Thirds Building END-------------------------------------

//City one small road start---------------------------------

const cityOnesmallRoad = (sk) => {
  sk.push();
  sk.translate(180, 670);
  for (let i = 0; i < 20; i++) {
    sk.shearX(10);
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 50);
  }
  sk.pop();
};
//City one small road END---------------------------------

//City one third building start---------------------------
const cityOnethirdBuilding = (sk) => {
  sk.push();
  sk.translate(390, 590);
  lineY(sk, 1, 60);
  sk.pop();

  sk.push();
  sk.translate(390, 590);
  lineX(sk, 0.2, 300);
  sk.pop();

  sk.push();
  sk.angleMode(DEGREES);
  sk.rotate(4);
  sk.translate(450, 60);
  lineY(sk, 1, 500);
  sk.pop();

  sk.push();
  sk.translate(445, 92);
  lineX(sk, 1, 96);
  sk.pop();
  sk.push();
  sk.angleMode(DEGREES);
  sk.rotate(-4);
  sk.translate(530, 130);
  lineY(sk, 1, 500);
  sk.pop();

  sk.push();
  sk.translate(445, 92);
  for (let i = 0; i < 165; i++) {
    sk.translate(random(0, 1), 0);
    buildShadow(sk, 0.3, 480);
  }
  sk.pop();
  sk.push();
  sk.angleMode(DEGREES);
  sk.rotate(4);
  sk.translate(450, 60.5);
  for (let i = 0; i < 35; i++) {
    sk.translate(random(0.5, 1), 0);
    buildShadow(sk, 0.3, 498);
  }
  sk.pop();
  sk.push();
  sk.angleMode(DEGREES);
  sk.rotate(-4.1);
  sk.translate(470, 130);
  for (let i = 0; i < 79; i++) {
    sk.translate(random(0.5, 1), 0);
    buildShadow(sk, 0.3, 380);
  }
  sk.pop();
  if (cases === 1) {
    sk.push();
    sk.noStroke();
    sk.rect(440, 470, 121, 120);
    sk.pop();
  }
  if (cases === 2) {
    sk.push();
    sk.noStroke();
    sk.fill(hexToRgba("#000", 0.2));
    sk.shearY(5);
    sk.rect(440, 470, 121, 120);
    sk.pop();
  }
  sk.push();
  sk.angleMode(DEGREES);
  sk.rotate(-3);
  sk.translate(545, 500);
  for (let i = 0; i < 20; i++) {
    sk.translate(random(0, 2), 0);
    buildShadow(sk, 0.4, 120);
  }
  sk.pop();

  sk.push();
  sk.translate(510, 66);
  sk.shearX(10);
  for (let i = 0; i < 22; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 27);
  }
  sk.pop();
  sk.push();
  sk.translate(461, 66);
  sk.shearX(10);
  for (let i = 0; i < 45; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 15);
  }
  sk.pop();

  sk.push();
  sk.strokeWeight(10);
  sk.point(505, 84);
  sk.pop();

  sk.push();
  sk.translate(500, 10);
  sk.shearY(-15);
  for (let i = 0; i < 10; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 59);
  }
  sk.pop();
  if (cases === 1) {
    sk.push();
    sk.strokeWeight(7);
    sk.point(507, -3);
    sk.pop();

    sk.push();
    sk.translate(506, -75);
    sk.strokeWeight(2);
    sk.beginShape();
    for (let y = 0; y < 60; y++) {
      let dis = map(y, 0, 60, 0, 1);
      let x = noise(dis * 3) * 3;
      sk.vertex(x, y);
    }
    sk.endShape();
    sk.pop();
  }

  if (cases === 3) {
    sk.push();
    sk.strokeWeight(7);
    sk.point(370, 220);
    sk.pop();

    sk.push();
    sk.translate(400, 135);
    sk.rotate(20);
    sk.strokeWeight(1.5);
    sk.beginShape();
    for (let y = 0; y < 80; y++) {
      let dis = map(y, 0, 60, 0, 1);
      let x = noise(dis * 3) * 3;
      sk.vertex(x, y);
    }
    sk.endShape();
    sk.pop();
  }
};
//City one third building END---------------------------

//Building block under highest building in city one start---------------
const buildingBlockcityOne = (sk) => {
  sk.push();
  sk.translate(390, 718);
  lineX(sk, 1, 260);
  sk.pop();
  sk.push();
  sk.translate(438, 596);
  lineY(sk, 2, 80);
  sk.pop();
  sk.push();
  sk.strokeWeight(12);
  sk.point(435, 600);
  sk.pop();

  sk.push();
  sk.translate(445, 597);
  for (let i = 0; i < 5; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 80);
  }
  sk.pop();
  sk.push();
  sk.translate(447, 597);
  sk.rotate(-20);
  lineX(sk, 1, 40);
  sk.pop();

  sk.push();
  sk.translate(451.5, 597);
  sk.shearY(-19);
  for (let i = 0; i < 20; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 65);
  }
  sk.pop();

  sk.push();
  sk.strokeWeight(6);
  sk.point(482, 590);
  sk.pop();

  sk.push();
  sk.strokeWeight(4);
  sk.point(482, 600);
  sk.pop();

  sk.push();
  sk.translate(482, 595);
  lineY(sk, 0.5, 50);
  sk.pop();

  sk.push();
  sk.translate(473, 590);
  for (let i = 0; i < 5; i++) {
    sk.shearY(18);
    sk.translate(1.1, 0);
    buildShadow(sk, 0.6, 30);
  }
  sk.pop();

  sk.push();
  sk.translate(565, 590);
  sk.rotate(-10);
  lineX(sk, 2, 10);
  sk.pop();

  sk.push();
  sk.translate(565, 591);
  lineY(sk, 3.7, 127);
  sk.pop();

  sk.push();
  sk.translate(567, 592);
  sk.strokeWeight(7);
  for (let i = 0; i < 4; i++) {
    sk.translate(0, i * 16);
    sk.point(0, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(576, 591);
  lineY(sk, 0.5, 127);
  sk.pop();

  sk.push();
  sk.translate(577, 587);
  sk.strokeWeight(2);
  for (let i = 0; i < 15; i++) {
    sk.translate(0, i * 1);
    sk.point(0, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(585, 590);
  sk.rotate(-10);
  lineX(sk, 2, 15);
  sk.pop();

  sk.push();
  sk.translate(585, 591);
  lineY(sk, 3.7, 127);
  sk.pop();

  sk.push();
  sk.translate(586, 592);
  sk.strokeWeight(8);
  for (let i = 0; i < 5; i++) {
    sk.translate(0, i * 10);
    sk.point(0, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(599, 591);
  lineY(sk, 0.5, 127);
  sk.pop();

  sk.push();
  sk.translate(599, 595);
  for (let i = 0; i < 14; i++) {
    sk.translate(0, i * 1.2);
    lineX(sk, 1.5, 8);
  }
  sk.pop();

  sk.push();
  sk.translate(617, 595);
  lineY(sk, 3.7, 122);
  sk.pop();

  sk.push();
  sk.translate(619, 592);
  sk.strokeWeight(7);
  for (let i = 0; i < 8; i++) {
    sk.translate(0, i * 3.8);
    sk.point(0, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(626, 597);
  sk.shearY(-15);
  for (let i = 0; i < 15; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 120);
  }
  sk.pop();

  sk.push();
  sk.translate(626, 595);
  for (let i = 0; i < 15; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 120);
  }
  sk.pop();

  sk.push();
  sk.translate(639, 667);
  for (let i = 0; i < 10; i++) {
    sk.shearY(-20);
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 50);
  }
  sk.pop();

  sk.push();
  sk.translate(627, 687);
  for (let i = 0; i < 28; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 30);
  }
  sk.pop();
};
//Building block under highest building in city one end---------------
//Fourth Building------------------------------------------------------
const cityOnefourthBuilding = (sk) => {
  sk.push();
  sk.translate(767, 202);
  lineY(sk, 3.5, 270);
  sk.pop();

  sk.push();
  sk.translate(768, 472);
  lineX(sk, 3, 95);
  sk.pop();

  sk.push();
  sk.translate(900, 472);
  lineY(sk, 3, 160);
  sk.pop();

  sk.push();
  sk.translate(900, 630);
  lineX(sk, 0.5, 85);
  sk.pop();

  sk.push();
  sk.translate(900, 630);
  sk.rotate(180);
  for (let i = 0; i < 28; i++) {
    sk.shearY(4);
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 152);
  }
  sk.pop();

  sk.push();
  sk.translate(832, 592);
  for (let i = 0; i < 60; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 1.3, 40);
  }
  sk.pop();

  sk.push();
  sk.translate(832, 510);
  for (let i = 0; i < 20; i++) {
    sk.shearY(-2);
    sk.translate(1.1, 0);
    buildShadow(sk, 1, 120);
  }
  sk.pop();

  sk.push();
  sk.translate(858, 515);
  for (let i = 0; i < 6; i++) {
    sk.shearY(-20);
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 122);
  }
  sk.pop();

  sk.push();
  sk.translate(820, 470);
  sk.rotate(-35);
  for (let i = 0; i < 10; i++) {
    sk.shearY(10);
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 30);
  }
  sk.pop();

  sk.push();
  sk.translate(815, 445);
  for (let i = 0; i < 42; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 30);
  }
  sk.pop();

  sk.push();
  sk.translate(815, 416);
  for (let i = 0; i < 35; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 30);
  }
  sk.pop();

  sk.push();
  sk.translate(762, 290);
  sk.strokeWeight(2);
  sk.beginShape();
  for (let y = 0; y < 80; y++) {
    let dis = map(y, 0, 80, 0, 1000);
    let x = noise(dis * 3) * 15;
    sk.vertex(x, y);
  }
  sk.endShape();
  sk.pop();

  sk.push();
  sk.translate(910, 632);
  sk.strokeWeight(4);
  sk.beginShape();
  for (let y = 0; y < 20; y++) {
    let dis = map(y, 0, 80, 0, 1000);
    let x = noise(dis * 3) * 4;
    sk.vertex(x, y);
  }
  sk.endShape();
  sk.pop();

  sk.push();
  sk.translate(930, 632);
  sk.strokeWeight(4);
  sk.beginShape();
  for (let y = 0; y < 20; y++) {
    let dis = map(y, 0, 80, 0, 1000);
    let x = noise(dis * 3) * 4;
    sk.vertex(x, y);
  }
  sk.endShape();
  sk.pop();

  sk.push();
  sk.translate(911, 654);
  lineY(sk, 3, 60);
  sk.pop();

  sk.push();
  sk.translate(931, 654);
  lineY(sk, 3, 60);
  sk.pop();

  sk.push();
  sk.translate(940, 630);
  for (let i = 0; i < 40; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 90);
  }
  sk.pop();

  sk.push();
  sk.translate(984, 640);
  for (let i = 0; i < 20; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 80);
  }
  sk.pop();

  sk.push();
  sk.translate(1006, 640);
  for (let i = 0; i < 10; i++) {
    sk.shearY(-5);
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 80);
  }
  sk.pop();

  sk.push();
  sk.strokeWeight(8);
  sk.point(805, 500);
  sk.point(805, 520);
  sk.point(790, 500);
  sk.point(790, 520);
  sk.pop();

  sk.push();
  sk.translate(795, 540);
  for (let i = 0; i < 2; i++) {
    sk.translate(0, i * 10);
    lineX(sk, 0.8, 30);
  }
  sk.pop();

  sk.push();
  sk.translate(810, 532);
  sk.rotate(8);
  lineY(sk, 1, 25);
  sk.pop();

  sk.push();
  sk.translate(815, 560);
  for (let i = 0; i < 2; i++) {
    sk.translate(0, i * 30);
    lineX(sk, 1.5, 20);
  }
  sk.pop();

  sk.push();
  sk.translate(817, 610);
  for (let i = 0; i < 2; i++) {
    sk.translate(i * 10, 0);
    lineY(sk, 1, 20);
  }
  sk.pop();

  sk.push();
  sk.translate(750, 570);
  for (let i = 0; i < 2; i++) {
    sk.translate(i * 18, 0);
    lineY(sk, 0.6, 22);
  }
  sk.pop();

  sk.push();
  sk.translate(667, 685);
  lineX(sk, 1.5, 30);
  sk.pop();

  sk.push();
  sk.translate(697, 655);
  lineY(sk, 1.5, 32);
  sk.pop();

  sk.push();
  sk.translate(697, 655);
  lineX(sk, 1.5, 20);
  sk.pop();

  sk.push();
  sk.translate(717, 630);
  lineY(sk, 1.5, 25);
  sk.pop();

  sk.push();
  sk.translate(727, 630);
  sk.rotate(3);
  lineY(sk, 1.5, 25);
  sk.pop();

  sk.push();
  sk.translate(727, 630);
  sk.rotate(-25);
  lineX(sk, 1.5, 40);
  sk.pop();

  sk.push();
  sk.strokeWeight(10);
  sk.point(767, 614);
  sk.pop();

  sk.push();
  sk.translate(767, 597);
  lineY(sk, 3, 8);
  sk.pop();

  sk.push();
  sk.translate(767, 627);
  lineY(sk, 3, 30);

  sk.pop();

  sk.push();
  sk.translate(767, 667);
  lineY(sk, 3, 10);
  sk.pop();

  sk.push();
  sk.translate(767, 687);
  lineY(sk, 3, 20);
  sk.pop();

  sk.push();
  sk.strokeWeight(7);
  sk.point(766, 637);
  sk.point(766, 697);
  sk.pop();

  sk.push();
  sk.strokeWeight(5);
  sk.point(860, 660);
  sk.point(880, 667);
  sk.pop();

  sk.push();
  sk.translate(860, 670);
  lineY(sk, 1, 30);
  sk.pop();

  sk.push();
  sk.translate(860, 680);
  for (let i = 0; i < 3; i++) {
    sk.translate(0, i * 5);
    lineX(sk, 3, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(835, 632);
  lineX(sk, 5, 65);
  sk.pop();

  sk.push();
  sk.shearX(-1);
  sk.translate(670, 207);
  lineY(sk, 1.5, 70);
  sk.pop();

  sk.push();
  sk.strokeWeight(3.5);
  sk.point(665, 290);
  sk.pop();

  sk.push();
  sk.shearX(-1);
  sk.translate(670, 330);
  lineY(sk, 1, 20);
  sk.pop();

  sk.push();
  sk.shearX(-1);
  sk.translate(670, 385);
  sk.strokeWeight(3);
  for (let i = 0; i < 3; i++) {
    sk.translate(0, i * 55);
    sk.point(0, 10);
  }
  sk.pop();

  sk.push();
  sk.shearX(-1);
  sk.translate(670, 387);
  lineY(sk, 0.5, 62);
  sk.pop();

  sk.push();
  sk.shearX(-1);
  sk.translate(700, 220);
  sk.strokeWeight(3);
  for (let i = 0; i < 15; i++) {
    sk.translate(0, i * 2.7);
    sk.point(0, 10);
  }
  sk.pop();

  sk.push();
  sk.shearX(-1);
  sk.translate(699.5, 220);
  lineY(sk, 0.2, 270);
  sk.pop();

  sk.push();
  sk.shearX(-0.5);
  sk.translate(720, 220);
  sk.strokeWeight(4);
  for (let i = 0; i < 17; i++) {
    sk.translate(0, i * 2.2);
    sk.point(0, 10);
  }
  sk.pop();

  sk.push();
  sk.shearX(-0.5);
  sk.translate(718, 220);
  lineY(sk, 0.5, 270);
  sk.pop();

  sk.push();
  sk.translate(743, 220);
  sk.strokeWeight(2);
  sk.beginShape();
  for (let y = 0; y < 130; y++) {
    let dis = map(y, 0, 130, 0, 1000);
    let x = noise(dis * 3) * 4;
    sk.vertex(x, y);
  }
  sk.endShape();
  sk.pop();

  sk.push();
  sk.strokeWeight(7);
  sk.point(745, 352);
  sk.point(745, 365);
  sk.pop();

  sk.push();
  sk.translate(745, 385);
  for (let i = 0; i < 4; i++) {
    sk.translate(0, i * 15);
    lineY(sk, 0.5, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(668, 207);
  sk.angleMode(DEGREES);
  sk.rotate(-3);
  lineX(sk, 1, 16);
  sk.pop();

  sk.push();
  sk.translate(768, 202);
  sk.angleMode(DEGREES);
  sk.rotate(10);
  lineX(sk, 3, 45);
  sk.pop();

  sk.push();
  sk.translate(811, 210);
  sk.angleMode(DEGREES);
  sk.rotate(-1);
  lineY(sk, 1, 260);
  sk.pop();

  sk.push();
  sk.translate(769, 215);
  sk.shearY(-5);
  for (let i = 0; i < 41; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 260);
  }
  sk.pop();

  sk.push();
  sk.translate(769, 205);
  sk.shearY(5);
  for (let i = 0; i < 40; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 10);
  }
  sk.pop();

  //----------------------------CETVRTA ZGRADA KROV-----------------------------------

  sk.push();
  sk.translate(690, 200);
  sk.angleMode(DEGREES);
  sk.rotate(195);
  lineY(sk, 1, 20);
  sk.pop();

  sk.push();
  sk.translate(694, 180);
  sk.angleMode(DEGREES);
  sk.rotate(-3);
  lineX(sk, 1, 60);
  sk.pop();

  sk.push();
  sk.translate(765, 203);
  sk.angleMode(DEGREES);
  sk.rotate(-190);
  for (let i = 0; i < 10; i++) {
    sk.shearY(15);
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 16);
  }
  sk.pop();

  sk.push();
  sk.translate(703, 150);
  sk.shearY(-5);
  for (let i = 0; i < 15; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 30);
  }
  sk.pop();

  sk.push();
  sk.strokeWeight(7);
  sk.point(711, 137);
  sk.pop();

  sk.push();
  sk.translate(711, 105);
  lineY(sk, 3.5, 20);
  sk.pop();

  sk.push();
  sk.translate(725, 150);
  sk.shearY(-2);
  for (let i = 0; i < 20; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 30);
  }
  sk.pop();

  sk.push();
  sk.translate(740, 145);
  sk.shearY(-2);
  for (let i = 0; i < 5; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 35);
  }
  sk.pop();

  sk.push();
  sk.strokeWeight(7);
  sk.point(744, 142);
  sk.pop();

  sk.push();
  sk.translate(770, 203);
  sk.angleMode(DEGREES);
  sk.rotate(-190);
  for (let i = 0; i < 15; i++) {
    sk.shearY(10);
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 20);
  }
  sk.pop();

  sk.push();
  sk.translate(744, 160);
  sk.angleMode(DEGREES);
  // sk.rotate(-190);
  sk.shearX(20);
  for (let i = 0; i < 10; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 25);
  }
  sk.pop();

  //----------------------------CETVRTA ZGRADA KROV KRAJ------------------------------
};

//Fourth Building------------------------------------------------------

//Fifth Building------------------------------------------------------
const cityOnefifthBuilding = (sk) => {
  sk.push();
  sk.shearX(-1);
  sk.translate(1028, 375);
  lineY(sk, 1.5, 222);
  sk.pop();

  sk.push();
  sk.shearX(-1);
  sk.translate(1028, 597);
  sk.rotate(5);
  lineY(sk, 0.4, 40);
  sk.pop();

  sk.push();
  sk.translate(1022, 375);
  sk.angleMode(DEGREES);
  sk.rotate(-2);
  lineX(sk, 1, 70);
  sk.pop();

  sk.push();
  sk.translate(1161, 372);
  sk.angleMode(DEGREES);
  sk.rotate(-2);
  lineX(sk, 1, 30);
  sk.pop();

  sk.push();
  sk.translate(1033, 415);
  sk.rotate(-180);
  for (let i = 0; i < 10; i++) {
    sk.shearY(15);
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 30);
  }
  sk.pop();

  sk.push();
  sk.translate(1070, 375);
  sk.shearX(-75);
  for (let i = 0; i < 20; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 6);
  }
  sk.pop();

  sk.push();
  sk.translate(1175, 373);
  for (let i = 0; i < 15; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 28);
  }
  sk.pop();

  // Peta Zgrada KROV--------------------------------------------------
  sk.push();
  sk.translate(1128, 340);
  sk.shearX(-8);
  for (let i = 0; i < 8; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 15);
  }
  sk.pop();

  sk.push();
  sk.translate(1158, 353);
  for (let i = 0; i < 8; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 20);
  }
  sk.pop();

  sk.push();
  sk.translate(1130, 300);
  lineY(sk, 2, 40);
  sk.pop();

  sk.push();
  sk.strokeWeight(6);
  sk.point(1130, 375);
  sk.pop();

  // Peta Zgrada KROV KRAJ---------------------------------------------

  sk.push();
  sk.translate(1191, 370);
  lineY(sk, 1.5, 32);
  sk.pop();

  sk.push();
  sk.translate(1191, 400);
  sk.angleMode(DEGREES);
  sk.rotate(2);
  lineX(sk, 1, 40);
  sk.pop();

  sk.push();
  sk.translate(1228, 402);
  sk.rotate(-0.5);
  lineY(sk, 1.5, 300);
  sk.pop();

  sk.push();
  sk.shearX(-1);
  sk.translate(1055, 400);
  lineY(sk, 1.5, 310);
  sk.pop();

  sk.push();
  sk.strokeWeight(15);
  sk.point(1040, 405);
  sk.pop();

  sk.push();
  sk.translate(1028, 418);
  for (let i = 0; i < 3; i++) {
    sk.translate(0, i * 10);
    lineX(sk, 4.5, 20);
  }
  sk.pop();

  sk.push();
  sk.strokeWeight(13);
  sk.point(1028, 465);
  sk.pop();

  sk.push();
  sk.translate(1020, 475);
  lineX(sk, 2, 20);
  sk.pop();

  sk.push();
  sk.translate(1035, 485);
  for (let i = 0; i < 3; i++) {
    sk.translate(0, i * 5);
    lineX(sk, 4, 13);
  }
  sk.pop();

  sk.push();
  sk.translate(1020, 510);
  for (let i = 0; i < 3; i++) {
    sk.translate(0, i * 9);
    lineX(sk, 4, 25);
  }
  sk.pop();
  sk.push();
  sk.translate(1020, 527);
  lineX(sk, 6, 25);
  sk.pop();

  sk.push();
  sk.translate(1020, 548);
  for (let i = 0; i < 5; i++) {
    sk.translate(0, i * 4);
    lineX(sk, 4, 25);
  }
  sk.pop();
  sk.push();
  sk.translate(1028, 598);
  lineX(sk, 4, 5);
  sk.pop();

  sk.push();
  sk.translate(1030, 638);
  sk.angleMode(DEGREES);
  sk.rotate(-170);
  for (let i = 0; i < 3; i++) {
    sk.shearY(50);
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 25);
  }
  sk.pop();
  sk.push();
  sk.shearX(-1);
  for (let i = 5; i < 12; i++) {
    sk.translate(0, i * 3);
    sk.push();
    sk.push();
    sk.strokeWeight(8);
    sk.point(1080, 400);
    sk.pop();
    sk.push();
    sk.translate(1080, 396);
    sk.rotate(-10);
    lineX(sk, 2, 10);
    sk.pop();
    sk.pop();
  }
  sk.pop();

  sk.push();
  sk.translate(1070, 620);
  sk.strokeWeight(5);
  for (let i = 0; i < 2; i++) {
    sk.point(0, i * 40);
  }
  sk.pop();

  sk.push();
  sk.translate(1115, 430);
  lineY(sk, 0.6, 230);
  sk.pop();

  sk.push();
  sk.translate(1115, 665);
  sk.strokeWeight(4);
  for (let i = 0; i < 2; i++) {
    sk.point(0, i * 15);
  }
  sk.pop();

  sk.push();
  sk.strokeWeight(3);
  sk.point(1115, 690);
  sk.pop();

  // x1,y1 1115,430, x4,y4 1315,430
  sk.push();
  sk.curve(1115, 500, 1115, 420, 1185, 420, 1215, 500);
  sk.pop();

  sk.push();
  sk.translate(1130, 485);
  sk.rotate(180);
  for (let i = 0; i < 4; i++) {
    sk.strokeWeight(i * 3);
    sk.point(0, i * 15);
  }
  sk.pop();

  sk.push();

  sk.translate(1150, 545);
  sk.rotate(180);
  for (let j = 0; j < 8; j++) {
    sk.push();
    sk.translate(1.1, j * 15);
    for (let i = 0; i < j; i++) {
      sk.translate(1.1, 0);
      buildShadow(sk, 0.8, 10);
    }
    sk.pop();
  }
  sk.pop();

  sk.push();

  sk.translate(1153, 430);
  for (let j = 0; j < 7; j++) {
    sk.push();
    sk.translate(1.1, j * 15);
    for (let i = 0; i < 7; i++) {
      sk.translate(1.1, 0);
      buildShadow(sk, 0.8, 10);
    }
    sk.pop();
  }
  sk.pop();

  sk.push();

  sk.translate(1155, 535);
  for (let j = 0; j < 8; j++) {
    sk.push();
    sk.translate(1.1, j * 15);
    for (let i = 0; i < 10; i++) {
      sk.translate(1.1, 0);
      buildShadow(sk, 0.8, 5);
    }
    sk.pop();
  }
  sk.pop();

  sk.push();

  sk.translate(1167, 430);
  for (let j = 0; j < 7; j++) {
    sk.push();
    sk.translate(1.1, j * 15);
    for (let i = 0; i < 10; i++) {
      sk.translate(1.1, 0);
      buildShadow(sk, 0.8, 10);
    }
    sk.pop();
  }
  sk.pop();

  sk.push();

  sk.translate(1169, 535);
  for (let j = 0; j < 8; j++) {
    sk.push();
    sk.translate(1.1, j * 15);
    for (let i = 0; i < 10; i++) {
      sk.translate(1.1, 0);
      buildShadow(sk, 0.8, 5);
    }
    sk.pop();
  }
  sk.pop();

  sk.push();
  sk.translate(1189, 400);
  lineY(sk, 1.8, 160);
  sk.pop();

  sk.push();
  sk.translate(1227, 560);
  sk.rotate(180);
  for (let i = 0; i < 6; i++) {
    sk.translate(i * 1.6, 0);
    lineY(sk, 1.5, 160);
  }
  sk.pop();

  sk.push();
  sk.translate(1188, 560);
  for (let i = 0; i < 35; i++) {
    sk.shearY(-10);
    sk.translate(1.1, 0);
    buildShadow(sk, 1, 145);
  }
  sk.pop();

  //Kraj zadnje zgrade ispod piramide pogledati nagib jos kasnije
  sk.push();
  sk.translate(1230, 540);
  sk.rotate(-2);
  lineX(sk, 0.8, 35);
  sk.pop();

  sk.push();
  sk.translate(1225, 540);
  for (let i = 0; i < 35; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 1, 100);
  }
  sk.pop();

  sk.push();
  sk.translate(1266, 689);
  sk.rotate(180);
  for (let i = 0; i < 40; i++) {
    sk.shearY(5);
    sk.translate(1.1, 0);
    buildShadow(sk, 1, 59);
  }
  sk.pop();

  sk.push();
  sk.translate(1225, 600);
  sk.shearX(-25);
  for (let i = 0; i < 40; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 1, 30);
  }
  sk.pop();

  sk.push();
  sk.translate(1220, 628);
  for (let i = 0; i < 37; i++) {
    sk.shearY(-1);
    sk.translate(1.1, 0);
    buildShadow(sk, 1.2, 77);
  }
  sk.pop();

  sk.push();
  sk.translate(1215, 625);
  sk.shearX(-18);
  for (let i = 0; i < 30; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 1.2, 80);
  }
  sk.pop();

  sk.push();
  sk.translate(1258, 495);
  sk.shearY(-18);
  for (let i = 0; i < 10; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 1.2, 195);
  }
  sk.pop();

  sk.push();
  sk.translate(1260, 620);
  lineX(sk, 2, 30);
  sk.pop();

  sk.push();
  sk.translate(1265, 620);
  for (let i = 0; i < 25; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 1.2, 65);
  }
  sk.pop();

  sk.push();
  sk.translate(1285, 684);
  lineX(sk, 0.5, 170);
  sk.pop();
  sk.push();
  sk.translate(1335, 595);
  lineY(sk, 1.5, 25);
  sk.pop();

  sk.push();
  sk.curve(1315, 500, 1292, 640, 1335, 620, 1315, 500);
  sk.pop();

  sk.push();
  sk.translate(1308, 648);
  lineY(sk, 1.5, 37);
  sk.pop();

  sk.push();
  sk.translate(1320, 643);
  lineY(sk, 1.5, 42);
  sk.pop();

  sk.push();
  sk.translate(1330, 633);
  lineY(sk, 2.5, 52);
  sk.pop();

  sk.push();
  sk.translate(1332, 640);
  sk.strokeWeight(8);
  for (let i = 0; i < 4; i++) {
    sk.point(0, i * 12);
  }
  sk.pop();

  sk.push();
  sk.translate(1395, 620);
  for (let i = 0; i < 4; i++) {
    sk.translate(i * 3, 0);
    lineY(sk, 1, 65);
  }
  sk.pop();

  sk.push();
  sk.translate(1385, 682);
  sk.rotate(-40);
  sk.shearX(50);
  for (let i = 0; i < 5; i++) {
    sk.translate(0, i * 2);
    lineX(sk, 1, 15);
  }
  sk.pop();

  sk.push();
  sk.translate(1420, 675);
  sk.rotate(180);
  for (let i = 0; i < 6; i++) {
    sk.strokeWeight(1.5 * i);
    sk.point(0, i * 12);
  }
  sk.pop();

  sk.push();
  sk.translate(1335, 595);
  lineX(sk, 1.5, 120);
  sk.pop();

  sk.push();
  sk.translate(1425, 595);
  for (let i = 0; i < 25; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.8, 90);
  }
  sk.pop();
};
//Fifth Building END------------------------------------------------------

//Sixth Building START---------------------------------------------------
const cityOnesixthBuilding = (sk) => {
  sk.push();
  sk.translate(1453, 545);
  lineY(sk, 1, 50);
  sk.pop();

  sk.push();
  sk.translate(1453, 545);
  lineX(sk, 1, 100);
  sk.pop();

  sk.push();
  sk.translate(1475, 625);
  sk.rotate(180);
  for (let i = 0; i < 6; i++) {
    sk.strokeWeight(1.5 * i);
    sk.point(0, i * 12);
  }
  sk.pop();

  sk.push();
  sk.translate(1490, 625);
  sk.rotate(180);
  for (let i = 0; i < 6; i++) {
    sk.strokeWeight(1.5 * i);
    sk.point(0, i * 12);
  }
  sk.pop();

  sk.push();
  sk.translate(1515, 550);
  for (let i = 0; i < 4; i++) {
    sk.translate(i * 3, 0);
    lineY(sk, 0.3, 85);
  }
  sk.pop();
};
//Sixth Building END---------------------------------------------------
// Pyramid---------------------------
const pyramid = (sk) => {
  sk.push();
  sk.translate(1406, 280);
  sk.rotate(45);
  lineY(sk, 1, 250);
  sk.pop();

  sk.push();
  sk.translate(1406, 280);
  sk.rotate(22);
  lineY(sk, 1, 140);
  sk.pop();

  sk.push();
  sk.translate(1355, 408);
  sk.rotate(22);
  lineY(sk, 0.8, 20);
  sk.pop();

  sk.push();
  sk.translate(1348, 426);
  sk.rotate(22);
  lineY(sk, 0.6, 20);
  sk.pop();

  sk.push();
  sk.translate(1348, 426);
  sk.rotate(22);
  lineY(sk, 0.3, 100);
  sk.pop();

  sk.push();
  sk.translate(1406, 280);
  sk.rotate(-45);
  lineY(sk, 1, 200);
  sk.pop();
};
// Pyramid END----------------------

const mreza = (sk) => {
  // sk.push();
  // sk.angleMode(DEGREES);

  // sk.pop();

  sk.angleMode(DEGREES);
  sk.scale(3);
  sk.translate(250, 0);
  // sk.rotate(190);
  for (let i = 0; i < 360; i++) {
    sk.push();
    sk.rotate((360 * i) / 360);
    //Ovde se moze igrat sa shearX da i mnozi neki drugi broj i takodjer iznad sa ovim rotate
    sk.shearX(i * 4);
    // sk.shearY(i / 0.4);
    // sk.translate(i * 5, i * 50);
    sk.push();
    sk.translate(180, 0);
    lineX(sk, 1, 15);
    sk.pop();

    sk.push();
    sk.translate(175, -29);
    sk.rotate(-10);
    lineY(sk, 1, 30);
    sk.pop();

    sk.push();
    sk.translate(156, -30);
    lineX(sk, 1, 20);
    sk.pop();

    sk.push();
    sk.translate(156, -29);
    sk.rotate(10);
    lineY(sk, 2.7, 30);
    sk.pop();

    sk.push();
    sk.translate(137, 0);
    lineX(sk, 1, 15);
    sk.pop();
    sk.pop();
  }
};

const cityThree = (sk) => {
  if (cases === 1) {
    sk.push();

    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.push();
    cityThreeFirstBuilding(sk);
    sk.pop();
    sk.push();
    cityThreeSecondBuilding(sk);
    sk.pop();

    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.push();
    sk.translate(0, -630);
    cityThreeRightFirstBuilding(sk);
    sk.pop();

    sk.push();
    sk.translate(30, -800);
    cityThreeRightSecondBuilding(sk);
    sk.pop();

    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.translate(-340, 500);
    cityThreeMiddleFirstBuilding(sk);
    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.translate(-190, 550);
    cityThreeMiddleSecondBuilding(sk);
    sk.pop();
    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    cityThreeMiddleBuilding(sk);
    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    cityThreeGreda(sk);
    sk.pop();
  }

  if (cases === 2) {
    sk.push();

    sk.fill(hexToRgba(random(cityThreeColor)));
    if (twoValStress === 1) {
      sk.shearX(0.5);
    }
    if (twoValStress === 2) {
      sk.shearY(0.5);
    }

    sk.translate(0, 300);
    sk.push();
    cityThreeFirstBuilding(sk);
    sk.pop();
    sk.push();
    cityThreeSecondBuilding(sk);
    sk.pop();

    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.shearY(random(0.25, 0.4));
    sk.push();
    sk.rotate(random(0.07, 0.1));
    sk.translate(0, -630);
    cityThreeRightFirstBuilding(sk);
    sk.pop();

    sk.push();
    sk.translate(30, -800);
    cityThreeRightSecondBuilding(sk);
    sk.pop();

    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.translate(-340, 500);
    sk.shearX(random(-0.6, 0.6));
    cityThreeMiddleFirstBuilding(sk);
    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.translate(-190, 550);
    sk.shearX(random(-0.3, 0.7));
    cityThreeMiddleSecondBuilding(sk);
    sk.pop();
    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.shearX(random(0.05, 0.6));
    cityThreeMiddleBuilding(sk);
    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.translate(0, 50);
    cityThreeGreda(sk);
    sk.pop();
  }
  if (cases === 3) {
    sk.push();

    sk.fill(hexToRgba(random(cityThreeColor)));
    if (twoValStress === 1) {
      sk.translate(100, 400);
      sk.shearX(0.8);
    }
    if (twoValStress === 2) {
      sk.translate(100, 400);
      sk.shearY(0.5);
    }

    sk.translate(0, 300);
    sk.push();
    sk.translate(200, 250);
    sk.shearX(random(0.6));
    cityThreeFirstBuilding(sk);
    sk.pop();
    sk.push();
    sk.rotate(0.1);
    cityThreeSecondBuilding(sk);
    sk.pop();

    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.shearY(random(0.25, 0.4));
    sk.push();
    sk.rotate(random(0.07, 0.1));
    sk.translate(0, -430);
    cityThreeRightFirstBuilding(sk);
    sk.pop();

    sk.push();
    sk.translate(30, -600);
    cityThreeRightSecondBuilding(sk);
    sk.pop();

    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.translate(-340, 500);
    sk.shearX(random(-2.6, 2.6));
    cityThreeMiddleFirstBuilding(sk);
    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.translate(-190, 550);
    sk.shearX(random(-2.6, 2.6));
    cityThreeMiddleSecondBuilding(sk);
    sk.pop();
    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.shearX(random(0.1, 0.5));
    sk.translate(0, random(50, 150));
    cityThreeMiddleBuilding(sk);
    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.translate(0, 50);
    cityThreeGreda(sk);
    sk.pop();
  }

  if (cases === 4) {
    sk.push();

    sk.fill(hexToRgba(random(cityThreeColor)));
    if (twoValStress === 1) {
      sk.translate(100, 400);
      sk.shearX(0.8);
    }
    if (twoValStress === 2) {
      sk.translate(100, 400);
      sk.shearY(0.5);
    }

    sk.translate(0, 300);
    sk.push();
    sk.translate(200, 250);
    sk.shearX(random(0.6));
    sk.pop();
    sk.push();
    sk.rotate(0.1);
    cityThreeSecondBuilding(sk);
    sk.pop();

    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.shearY(random(0.25, 0.4));
    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.translate(-340, 500);
    sk.shearX(random(-2.6, 2.6));
    cityThreeMiddleFirstBuilding(sk);
    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.translate(-190, 550);
    sk.shearX(random(-2.6, 2.6));
    cityThreeMiddleSecondBuilding(sk);
    sk.pop();
    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.shearX(random(0.1, 0.5));
    sk.translate(0, random(50, 150));
    cityThreeMiddleBuilding(sk);
    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.translate(0, 150);
    cityThreeGreda(sk);
    sk.pop();
  }

  if (cases === 5) {
    sk.push();

    sk.fill(hexToRgba(random(cityThreeColor)));
    if (twoValStress === 1) {
      sk.translate(100, 400);
      sk.shearX(0.8);
    }
    if (twoValStress === 2) {
      sk.translate(100, 400);
      sk.shearY(0.5);
    }

    sk.translate(0, 300);
    sk.push();
    sk.translate(200, 250);
    sk.shearX(random(0.6));
    sk.pop();
    sk.push();
    sk.rotate(0.1);
    cityThreeSecondBuilding(sk);
    sk.pop();

    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.shearY(random(0.25, 0.4));
    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.translate(-340, 500);
    sk.shearX(random(-2.6, 2.6));
    cityThreeMiddleFirstBuilding(sk);
    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.translate(-190, 550);
    sk.shearX(random(-2.6, 2.6));
    cityThreeMiddleSecondBuilding(sk);
    sk.pop();
    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.shearX(random(0.1, 0.5));
    sk.translate(0, random(50, 150));
    cityThreeMiddleBuilding(sk);
    sk.pop();

    sk.push();
    sk.fill(hexToRgba(random(cityThreeColor)));
    sk.translate(0, 150);
    cityThreeGreda(sk);
    sk.pop();
  }
};

const cityThreeFirstBuilding = (sk) => {
  sk.push();

  let t = atan2(150, 450);
  sk.rotate(t);
  sk.push();
  sk.rect(-270, -600, 350, 400);
  sk.pop();
  //Prozori
  // if (twoValStress === 1) {
  sk.push();
  sk.translate(-270, -775);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 15; i++) {
    sk.translate(0, i + 18);
    sk.rect(120, 180, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(-250, -775);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 15; i++) {
    sk.translate(0, i + 18);
    sk.rect(120, 180, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(-230, -775);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 15; i++) {
    sk.translate(0, i + 18);
    sk.rect(120, 180, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(-210, -775);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 15; i++) {
    sk.translate(0, i + 18);
    sk.rect(120, 180, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(-190, -775);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 15; i++) {
    sk.translate(0, i + 18);
    sk.rect(120, 180, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(-170, -775);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 15; i++) {
    sk.translate(0, i + 18);
    sk.rect(120, 180, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(-150, -775);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 15; i++) {
    sk.translate(0, i + 18);
    sk.rect(120, 180, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(-130, -775);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 15; i++) {
    sk.translate(0, i + 18);
    sk.rect(120, 180, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(-110, -775);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 15; i++) {
    sk.translate(0, i + 18);
    sk.rect(120, 180, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(-90, -775);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 15; i++) {
    sk.translate(0, i + 18);
    sk.rect(120, 180, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(-70, -775);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 15; i++) {
    sk.translate(0, i + 18);
    sk.rect(120, 180, 10, 10);
  }
  sk.pop();
  // }

  sk.pop();
};

const cityThreeSecondBuilding = (sk) => {
  sk.push();
  let t = atan2(150, 450);
  sk.rotate(t);
  sk.push();
  sk.rect(-350, -200, 600, 1200);
  sk.pop();

  //Prozori

  sk.push();
  sk.translate(-130, -365);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 25);
    sk.rect(120, 180, 30, 5);
  }
  sk.pop();

  sk.push();
  sk.translate(-90, -365);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 25);
    sk.rect(120, 180, 30, 5);
  }
  sk.pop();

  sk.push();
  sk.translate(-50, -365);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 25);
    sk.rect(120, 180, 30, 5);
  }
  sk.pop();

  sk.push();
  sk.translate(-10, -365);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 25);
    sk.rect(120, 180, 30, 5);
  }
  sk.pop();

  sk.push();
  sk.translate(30, -365);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 25);
    sk.rect(120, 180, 30, 5);
  }
  sk.pop();

  sk.push();
  sk.translate(70, -365);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 25);
    sk.rect(120, 180, 30, 5);
  }
  sk.pop();

  sk.push();
  sk.translate(0, 200);
  sk.rect(270, -200, 40, 900);

  sk.pop();
  //Sjene----------------------------
  sk.push();
  sk.translate(270, 2);
  for (let i = 0; i < 33; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.3, 850);
  }
  sk.pop();

  sk.push();
  sk.translate(0, 200);
  sk.rect(320, -200, 20, 900);
  sk.pop();
  // sk.push();
  // sk.translate(320, 2);
  // for (let i = 0; i < 16; i++) {
  //   sk.translate(1.1, 0);
  //   buildShadow(sk, 0.7, 850);
  // }
  // sk.pop();

  sk.pop();
};

const cityThreeRightFirstBuilding = (sk) => {
  sk.push();
  let t = atan2(150, 450);
  sk.shearY(t);
  sk.translate(1490, -550);
  for (let i = 0; i < 150; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.5, 350);
  }
  sk.pop();
  //Prednja Stranica
  sk.push();
  let c = atan2(-70, 250);
  sk.rotate(c);
  sk.rect(1200, 350, 250, 300);

  //Prozori
  // if (twoValStress === 1) {
  sk.push();
  sk.translate(215, -430);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 15);
    sk.rect(1000, 780, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(230, -430);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 15);
    sk.rect(1000, 780, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(245, -430);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 15);
    sk.rect(1000, 780, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(260, -430);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 15);
    sk.rect(1000, 780, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(275, -430);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 15);
    sk.rect(1000, 780, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(290, -430);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 15);
    sk.rect(1000, 780, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(305, -430);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 15);
    sk.rect(1000, 780, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(320, -430);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 15);
    sk.rect(1000, 780, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(335, -430);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 15);
    sk.rect(1000, 780, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(350, -430);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 15);
    sk.rect(1000, 780, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(365, -430);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 15);
    sk.rect(1000, 780, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(380, -430);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 15);
    sk.rect(1000, 780, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(395, -430);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 15);
    sk.rect(1000, 780, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(410, -430);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 15);
    sk.rect(1000, 780, 10, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(425, -430);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 20; i++) {
    sk.translate(0, i + 15);
    sk.rect(1000, 780, 10, 10);
  }
  sk.pop();

  //-----------Antena------------
  if (cases === 1) {
    sk.push();
    sk.translate(1280, 310);
    for (let i = 0; i < 70; i++) {
      sk.translate(1.1, 0);
      buildShadow(sk, 1, 40);
    }
    sk.pop();

    sk.push();
    sk.translate(1310, 212);
    for (let i = 0; i < 20; i++) {
      sk.shearY(-0.1);
      sk.translate(1.1, 0);
      buildShadow(sk, 1, 100);
    }
    sk.pop();
  }

  if (cases === 2) {
    sk.push();
    sk.translate(1280, 310);
    for (let i = 0; i < 70; i++) {
      sk.translate(1.1, 0);
      buildShadow(sk, 1, 40);
    }
    sk.pop();

    sk.push();
    sk.translate(1310, 212);
    for (let i = 0; i < 20; i++) {
      sk.shearY(-0.1);
      sk.translate(1.1, 0);
      buildShadow(sk, 1, 100);
    }
    sk.pop();
  }

  // }
  // if (twoValStress === 2) {
  //   sk.push();
  //   sk.translate(215, -430);
  //   sk.fill(hexToRgba("#000", 0.8));
  //   sk.strokeWeight(1.5);
  //   for (let i = 0; i < 10; i++) {
  //     sk.translate(0, i + 22);
  //     sk.line(1000, 780, 1210, 780);
  //   }
  //   sk.pop();
  // }
  sk.pop();
};

const cityThreeRightSecondBuilding = (sk) => {
  sk.push();
  let c = atan2(-70, 250);
  sk.rotate(c);
  sk.push();
  //-------Prednja Stranica
  sk.rect(950, 800, 550, 1250);
  sk.pop();
  //Prozori----------
  // if (twoValStress === 1) {
  sk.push();
  sk.translate(-30, 50);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 10; i++) {
    sk.translate(i + 30, 0);
    sk.rect(1000, 780, 20, 30);
  }
  sk.pop();

  sk.push();
  sk.translate(-30, 90);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 10; i++) {
    sk.translate(i + 30, 0);
    sk.rect(1000, 780, 20, 30);
  }
  sk.pop();

  sk.push();
  sk.translate(-30, 130);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 10; i++) {
    sk.translate(i + 30, 0);
    sk.rect(1000, 780, 20, 30);
  }
  sk.pop();

  sk.push();
  sk.translate(-30, 170);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 10; i++) {
    sk.translate(i + 30, 0);
    sk.rect(1000, 780, 20, 30);
  }
  sk.pop();

  sk.push();
  sk.translate(-30, 210);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 10; i++) {
    sk.translate(i + 30, 0);
    sk.rect(1000, 780, 20, 30);
  }
  sk.pop();

  sk.push();
  sk.translate(-30, 250);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 10; i++) {
    sk.translate(i + 30, 0);
    sk.rect(1000, 780, 20, 30);
  }
  sk.pop();

  sk.push();
  sk.translate(0, 275);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 25; i++) {
    sk.translate(0, i + 30);
    sk.rect(1000, 780, 50, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(65, 275);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 25; i++) {
    sk.translate(0, i + 30);
    sk.rect(1000, 780, 50, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(130, 275);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 25; i++) {
    sk.translate(0, i + 30);
    sk.rect(1000, 780, 50, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(200, 275);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 25; i++) {
    sk.translate(0, i + 30);
    sk.rect(1000, 780, 50, 10);
  }
  sk.pop();

  sk.push();
  sk.translate(270, 275);
  sk.fill(hexToRgba("#000", 0.8));
  for (let i = 0; i < 25; i++) {
    sk.translate(0, i + 30);
    sk.rect(1000, 780, 50, 10);
  }
  sk.pop();
  // }
  // if (twoValStress === 2) {
  //   sk.push();
  //   sk.translate(-40, 50);
  //   sk.fill(hexToRgba("#000", 0.8));
  //   sk.strokeWeight(1.5);
  //   for (let i = 0; i < 15; i++) {
  //     sk.translate(i + 30, 0);
  //     sk.line(1000, 780, 1000, 2000);
  //   }
  //   sk.pop();
  // }

  sk.pop();
};

const cityThreeMiddleBuilding = (sk) => {
  // sk.push();
  // sk.quad(950, -860, 1150, -860, 1400, -200, 950, -200);
  // sk.pop();

  //Left Side

  sk.push();
  sk.translate(0, 1050);
  sk.quad(950, -860, 1250, -800, 1400, -100, 950, -100);
  sk.pop();

  //Right Side

  sk.push();
  let c = atan2(-200, 250);
  sk.shearY(c);

  sk.push();
  sk.translate(-300, 1810);
  sk.quad(870, -860, 1250, -860, 1250, -100, 800, -100);
  sk.pop();

  //Prozori

  sk.push();
  sk.translate(600, 1050);
  sk.shearX(-0.1);
  for (let i = 0; i < 50; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 1, 400);
  }

  sk.pop();

  sk.push();
  sk.shearX(-0.09);
  sk.translate(780, 1050);
  for (let i = 0; i < 50; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.7, 450);
  }

  sk.pop();

  sk.push();
  sk.shearX(-0.05);
  sk.translate(820, 1050);
  for (let i = 0; i < 50; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.5, 500);
  }

  sk.pop();

  sk.push();
  sk.shearX(-0.02);
  sk.translate(870, 1050);
  for (let i = 0; i < 50; i++) {
    sk.translate(1.1, 0);
    buildShadow(sk, 0.3, 550);
  }

  sk.pop();
  sk.pop();
};

const cityThreeMiddleFirstBuilding = (sk) => {
  let t = atan2(200, 450);
  sk.shearY(t);
  sk.push();
  sk.translate(-300, 100);
  sk.quad(1100, -700, 1200, -860, 1150, 100, 1000, 200);
  sk.pop();

  sk.push();
  sk.translate(-300, 100);
  sk.fill(hexToRgba("#000", 0.3));
  sk.noStroke();
  sk.quad(1100, -700, 1200, -860, 1150, 100, 1000, 200);
  sk.pop();

  sk.push();
  sk.translate(-200, 101);
  sk.quad(1100, -860, 1200, -860, 1300, 100, 1000, 200);
  sk.pop();
};

const cityThreeMiddleSecondBuilding = (sk) => {
  let t = atan2(200, 450);
  sk.shearY(t);
  sk.push();
  sk.translate(-300, 100);
  sk.quad(1100, -700, 1200, -860, 1150, 100, 1000, 200);
  sk.pop();

  sk.push();
  sk.translate(-300, 100);
  sk.fill(hexToRgba("#000", 0.3));
  sk.noStroke();
  sk.quad(1100, -700, 1200, -860, 1150, 100, 1000, 200);
  sk.pop();

  sk.push();
  sk.translate(-200, 101);
  sk.quad(1100, -860, 1200, -860, 1300, 100, 1000, 200);
  sk.pop();
};

const cityThreeGreda = (sk) => {
  //Desna tangenta
  sk.strokeWeight(2.5);
  sk.push();
  if (cases === 2) {
    sk.rotate(random(0.5));
  }

  if (cases === 3) {
    sk.translate(0, 250);
    sk.rotate(random(0.5));
  }
  let t = atan2(200, 250);
  sk.translate(0, -320);
  sk.shearY(t);
  sk.push();
  sk.rect(0, 300, 910, 50);
  sk.pop();
  sk.push();
  sk.fill(80);
  sk.shearX(-t);
  sk.translate(280, 0);
  sk.rect(0, 350, 910, 70);
  sk.pop();
  sk.pop();

  //Lijeva Tangenta
  sk.push();
  let c = atan2(-200, 250);
  sk.shearY(c);
  if (cases === 2) {
    // sk.translate(0, 150);
    sk.shearY(random(0.3));
  }
  if (cases === 3) {
    sk.translate(0, 150);
    sk.shearY(random(0.3));
  }
  sk.push();
  sk.rect(912, 1436, 650, 50);
  sk.pop();

  sk.push();
  sk.fill(150);
  sk.translate(-1187, 0);
  sk.shearX(-c);
  sk.rect(912, 1486, 650, 70);
  sk.pop();

  sk.pop();

  // Donji dio Lijevo
  sk.push();
  sk.translate(-20, -72);
  sk.fill(110);
  sk.shearY(-0.45);
  sk.rect(875, 1280, 60, 130);

  sk.pop();

  // Donji dio Desno
  sk.push();
  sk.translate(40, -1005);
  sk.fill(150);
  sk.shearY(0.5);
  sk.rect(875, 1280, 55, 130);

  sk.pop();
};

const gearCable = (sk) => {
  if (cases === 4) {
    sk.push();
    sk.translate(200, -1000);

    let stress = 10;

    sk.push();
    sk.translate(15, -1060);
    sk.strokeWeight(7);
    sk.stroke(50);
    sk.noFill();
    sk.beginShape();
    for (let y = 0; y < 1600; y++) {
      let dis = map(y, 0, 1600, 0, 30);
      let x = noise(dis / 1) * stress;
      sk.vertex(x, y);
    }
    sk.endShape();
    sk.pop();

    sk.push();
    sk.scale(0.3);
    sk.translate(-1220, 2400);
    gear(sk, 0, 0, 0.1);
    sk.pop();

    sk.pop();
  }

  if (cases === 5) {
    sk.push();
    sk.translate(200, -1000);

    let stress = 2000;

    sk.push();
    sk.translate(-650, -260);
    sk.strokeWeight(0.5);
    sk.stroke(0);
    sk.noFill();
    sk.beginShape();
    if (twoValStress === 1) {
      for (let y = 0; y < 1600; y++) {
        let dis = map(y, 0, 1600, 0, 100);
        let x = noise(dis / 3) * stress;
        sk.vertex(x, y);
      }
    }
    if (twoValStress === 2) {
      for (let y = 0; y < 1600; y++) {
        let dis = map(y, 0, 1600, 0, 900);
        let x = noise(dis / 3) * stress;
        sk.vertex(x, y);
      }
    }
    sk.endShape();
    sk.pop();

    sk.push();
    sk.scale(0.3);
    sk.translate(-1220, 2400);
    if (twoValStress === 1) {
      gear(sk, 0, random(-3, 3), random(0.1, 0.4));
    }
    if (twoValStress === 2) {
      gear(sk, random(-2, 3), 0, random(0.1, 0.4));
    }
    sk.pop();

    sk.pop();
  }
};

const gearCableMrezaComposer = (sk) => {
  if (case4FirstPerspectiveRandom < 0.25) {
    sk.push();
    gearCable(sk);
    sk.pop();
    sk.push();
    sk.translate(400, 200);
    sk.scale(1.1);
    gearCable(sk);
    sk.pop();
    sk.push();
    sk.translate(800, -100);
    sk.scale(0.9);
    gearCable(sk);
    sk.pop();
    sk.push();
    sk.translate(1150, 0);
    gearCable(sk);
    sk.pop();
    sk.push();
    sk.translate(random(-130, 910), random(250, 250));
    sk.scale(0.4);
    mreza(sk);
    sk.pop();
  } else if (case4FirstPerspectiveRandom < 0.5) {
    sk.push();
    sk.translate(0, random(-400, 0));
    sk.push();
    sk.translate(0, 900);
    gearCable(sk);
    sk.pop();
    sk.push();
    sk.translate(250, 400);
    sk.scale(1.1);
    gearCable(sk);
    sk.pop();
    sk.push();
    sk.translate(500, 800);
    sk.scale(1.1);
    gearCable(sk);
    sk.pop();
    sk.push();
    sk.translate(1000, 650);
    sk.scale(0.9);
    gearCable(sk);
    sk.pop();
    sk.push();
    sk.translate(800, 100);
    sk.scale(0.9);
    gearCable(sk);
    sk.pop();
    sk.push();
    sk.translate(1150, 400);
    gearCable(sk);
    sk.pop();
    sk.pop();
  } else if (case4FirstPerspectiveRandom < 0.75) {
    sk.push();
    sk.translate(-500, -400);
    for (let i = 0; i < 3; i++) {
      sk.translate(i + 500, random(130));
      sk.push();
      sk.scale(0.6);
      sk.translate(0, 200);
      gearCable(sk);
      sk.pop();
      sk.push();
      sk.scale(0.6);
      sk.translate(200, 500);
      gearCable(sk);
      sk.pop();
      sk.push();
      sk.translate(250, 150);
      sk.scale(0.7);
      gearCable(sk);
      sk.pop();
    }
    sk.push();
    sk.translate(-715, random(700, 900));
    sk.scale(1.1);
    gearCable(sk);
    sk.pop();
    sk.push();
    sk.translate(-215, random(700, 950));
    sk.scale(1.1);
    gearCable(sk);
    sk.pop();
    sk.pop();
  } else {
    sk.push();
    sk.translate(-990, -400);
    for (let i = 0; i < 2; i++) {
      sk.translate(i + 1000, random(130));
      sk.push();
      sk.scale(0.6);
      sk.translate(0, 200);
      gearCable(sk);
      sk.pop();
      sk.push();
      sk.scale(0.6);
      sk.translate(200, 500);
      gearCable(sk);
      sk.pop();
      sk.push();
      sk.translate(250, 150);
      sk.scale(0.7);
      gearCable(sk);
      sk.pop();
    }
    sk.pop();
    sk.push();
    sk.translate(550, random(-200, 200));
    sk.scale(0.3);
    mreza(sk);
    sk.pop();
  }
};

const fakeThunder = (sk) => {
  for (let i = 0; i < random(10, 15); i++) {
    sk.translate(i + random(200, 500), 0);
    // sk.rotate(i * random(15, 30));
    sk.rotate(random(0.5, 1.5));
    sk.push();
    sk.translate(-300, -1500);

    let stress = random(50, 100);

    sk.strokeWeight(random(0.8, 1.3));
    sk.push();
    // sk.translate(-650, -460);
    if (threeValGearComposer === 1) {
      sk.stroke(hexToRgba("#fff", 0.4));
    }
    if (threeValGearComposer === 2) {
      sk.stroke(hexToRgba("#fff", 0.5));
    }
    if (threeValGearComposer === 3) {
      sk.stroke(hexToRgba("#fff", 0.6));
    }
    sk.noFill();
    sk.beginShape();
    let t = random(10, 40);
    for (let y = 0; y < 3500; y++) {
      let dis = map(y, 0, 3500, 0, 900);
      let x = noise(dis / t) * stress;
      sk.vertex(x, y);
    }
    sk.endShape();
    sk.pop();
    sk.pop();
  }
};

const case6explosion = (sk) => {
  sk.push();
  fakeThunder(sk);
  sk.pop();
  sk.scale(0.4);
  if (case6FirstPerspectiveRandom < 0.25) {
    // sk.push();
    sk.translate(-500, random(100, 500));
    if (case6Gears === 1) {
      sk.push();
      sk.translate(0, -500);
      gear(sk, 0, 0, 0.05);
      sk.pop();
      sk.push();
      sk.translate(900, 500);
      sk.scale(1.1);
      gear(sk, 0, 0, 0.05);
      sk.pop();
      sk.push();
      sk.translate(2600, 0);
      sk.scale(0.9);
      gear(sk, 0, 0, 0.05);
      sk.pop();
      sk.push();
      sk.translate(1650, -900);
      gear(sk, 0, 0, 0.05);
      sk.pop();
    }
    if (case6Gears === 2) {
      sk.push();
      sk.translate(0, 600);
      gear(sk, 0, 0, 0.05);
      sk.pop();
      sk.push();
      sk.translate(800, -300);
      sk.scale(1.1);
      gear(sk, 0, 0, 0.05);
      sk.pop();
      sk.push();
      sk.translate(2600, -300);
      sk.scale(0.9);
      gear(sk, 0, 0, 0.05);
      sk.pop();
      sk.push();
      sk.translate(1650, 800);
      gear(sk, 0, 0, 0.05);
      sk.pop();
    }
    if (case6Gears === 3) {
      sk.push();
      sk.translate(0, -1000);
      gear(sk, 0, 0, 0.05);
      sk.pop();
      sk.push();
      sk.translate(0, 600);
      gear(sk, 0, 0, 0.05);
      sk.pop();
      sk.push();
      sk.translate(900, -200);
      sk.scale(1.1);
      gear(sk, 0, 0, 0.05);
      sk.pop();
      sk.push();
      sk.translate(2200, -300);
      sk.scale(1.2);
      gear(sk, 0, 0, 0.05);
      sk.pop();
      sk.push();
      sk.translate(1650, 800);
      gear(sk, 0, 0, 0.05);
      sk.pop();
    }
    if (case6Gears === 4) {
      sk.push();
      sk.translate(0, random(-800, -700));
      sk.push();
      sk.translate(0, 900);
      gear(sk, 0, 0, 0.05);
      sk.pop();
      sk.push();
      sk.translate(450, -400);
      sk.scale(1.1);
      gear(sk, 0, 0, 0.05);
      sk.pop();
      sk.push();
      sk.translate(1100, 800);
      sk.scale(1.1);
      gear(sk, 0, 0, 0.05);
      sk.pop();
      sk.push();
      sk.translate(random(800, 1900), 1900);
      sk.scale(0.9);
      gear(sk, 0, 0, 0.05);
      sk.pop();
      sk.push();
      sk.translate(2400, -600);
      sk.scale(0.9);
      gear(sk, 0, 0, 0.05);
      sk.pop();
      sk.push();
      sk.translate(2550, 600);
      gear(sk, 0, 0, 0.05);
      sk.pop();
      sk.pop();
    }
    sk.pop();
  } else if (case4FirstPerspectiveRandom < 0.5) {
    sk.translate(-500, random(100, 500));
    if (case6Gears === 1) {
      sk.push();
      sk.translate(0, -500);
      gear(sk, 0, random(10, 30), 0.01);
      sk.pop();
      sk.push();
      sk.translate(900, 500);
      sk.scale(1.1);
      gear(sk, 0, random(-30, -10), 0.01);
      sk.pop();
      sk.push();
      sk.translate(2600, 0);
      sk.scale(0.9);
      gear(sk, 0, random(-30, -10), 0.01);
      sk.pop();
      sk.push();
      sk.translate(1650, -900);
      gear(sk, 0, random(10, 30), 0.01);
      sk.pop();
    }
    if (case6Gears === 2) {
      sk.push();
      sk.translate(0, 600);
      gear(sk, random(10, 30), 0, 0.01);
      sk.pop();
      sk.push();
      sk.translate(800, -300);
      sk.scale(1.1);
      gear(sk, 0, random(10, 30), 0.01);
      sk.pop();
      sk.push();
      sk.translate(2600, -300);
      sk.scale(0.9);
      gear(sk, random(-30, -10), 0, 0.01);
      sk.pop();
      sk.push();
      sk.translate(1650, 800);
      gear(sk, 0, random(-30, -10), 0.01);
      sk.pop();
    }
    if (case6Gears === 3) {
      sk.push();
      sk.translate(0, -1000);
      gear(sk, 0, random(-30, -10), 0.01);
      sk.pop();
      sk.push();
      sk.translate(0, 600);
      gear(sk, 0, random(-30, -10), 0.01);
      sk.pop();
      sk.push();
      sk.translate(900, -200);
      sk.scale(1.1);
      gear(sk, 0, random(10, 30), 0.01);
      sk.pop();
      sk.push();
      sk.translate(2200, -300);
      sk.scale(1.2);
      gear(sk, random(10, 30), 0, 0.01);
      sk.pop();
      sk.push();
      sk.translate(1650, 800);
      gear(sk, 0, random(10, 30), 0.01);
      sk.pop();
    }
    if (case6Gears === 4) {
      sk.push();
      sk.translate(0, random(-800, -700));
      sk.push();
      sk.translate(0, 900);
      gear(sk, 0, random(10, 30), 0.01);
      sk.pop();
      sk.push();
      sk.translate(450, -400);
      sk.scale(1.1);
      gear(sk, 0, random(10, 30), 0.01);
      sk.pop();
      sk.push();
      sk.translate(1100, 800);
      sk.scale(1.1);
      gear(sk, 0, random(10, 30), 0.01);
      sk.pop();
      sk.push();
      sk.translate(random(800, 1900), 1900);
      sk.scale(0.9);
      gear(sk, 0, random(10, 30), 0.01);
      sk.pop();
      sk.push();
      sk.translate(2400, -600);
      sk.scale(0.9);
      gear(sk, 0, random(10, 30), 0.01);
      sk.pop();
      sk.push();
      sk.translate(2550, 600);
      gear(sk, 0, random(10, 30), 0.01);
      sk.pop();
      sk.pop();
    }
    sk.pop();
  } else if (case4FirstPerspectiveRandom < 0.75) {
    sk.push();
    sk.translate(-800, random(-1400, -1000));
    sk.push();
    sk.translate(0, 900);
    gear(sk, 0, random(10, 30), 0.01);
    sk.pop();
    sk.push();
    sk.translate(450, -400);
    sk.scale(1.1);
    gear(sk, 0, random(3, 20), 0.01);
    sk.pop();
    sk.push();
    sk.translate(1100, 800);
    sk.scale(1.1);
    gear(sk, 0, random(5, 50), 0.01);
    sk.pop();
    sk.push();
    sk.translate(random(800, 1900), 1900);
    sk.scale(0.9);
    gear(sk, 0, random(-50, -5), 0.01);
    sk.pop();
    sk.push();
    sk.translate(2400, -600);
    sk.scale(0.9);
    gear(sk, 0, random(10, 30), 0.01);
    sk.pop();
    sk.push();
    sk.translate(2550, 600);
    gear(sk, 0, random(-50, 5), 0.01);
    sk.pop();
    sk.pop();
  } else {
    sk.push();
    if (twoValStress === 1) {
      sk.translate(-100, random(100, 100));
      sk.rotate(random(-0.1, -0.4));
    }
    if (twoValStress === 2) {
      sk.translate(-100, random(-1600, -1000));
      sk.rotate(random(0.7, 0.7));
    }
    sk.push();
    sk.translate(0, 900);
    gear(sk, random(5, 10), 0, 0.01);
    sk.pop();
    sk.push();
    sk.translate(450, -400);
    sk.scale(1.1);
    gear(sk, random(-10, -5), 0, 0.01);
    sk.pop();
    sk.push();
    sk.translate(1100, 800);
    sk.scale(1.1);
    gear(sk, random(-10, 5), 0, 0.01);
    sk.pop();
    sk.push();
    sk.translate(random(800, 1900), 1900);
    sk.scale(0.9);
    gear(sk, random(-10, 10), 0, 0.01);
    sk.pop();
    sk.push();
    sk.translate(2400, -600);
    sk.scale(0.9);
    gear(sk, random(-30, -5), 0, 0.01);
    sk.pop();
    sk.push();
    sk.translate(2550, 600);
    gear(sk, random(10, 30), 0, 0.01);
    sk.pop();
    sk.pop();
  }
};
