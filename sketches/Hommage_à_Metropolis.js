let s, xoff, yoff, v2, posX;
const seed = ~~(fxrand() * 1e9);
let sketchWidth = 800;
let sketchHeight = 600;
const cityTypeArr = [1, 2, 3, 4, 5];
let cityType = cityTypeArr[~~(fxrand() * cityTypeArr.length)];
const cityShapeArr = [
  0.7, 0.73, 0.74, 0.75, 0.78, 0.79, 0.82, 0.9, 0.93, 0.97, 1, 1.4, 1.8, 1.9, 2,
  2.5, 2.8,
];
let twoVal = parseInt(fxrand() * 2) ? 1 : 2;
let cityShape = cityShapeArr[~~(fxrand() * cityShapeArr.length)];
let palettesArr = [
  ["#F3AD8C", "#F28A5C", "#FDC09D"],
  [
    "#f8b746",
    "#f7b745",
    "#f7b643",
    "#f6b642",
    "#f6b541",
    "#f5b540",
    "#f4b53e",
    "#f4b43d",
    "#f3b43c",
    "#f2b33b",
    "#f2b339",
    "#f1b338",
    "#f0b237",
    "#f0b236",
    "#efb135",
    "#eeb134",
    "#eeb032",
    "#edb031",
    "#ecb030",
  ],
  [
    "#FFDEBB",
    "#FEDCB8",
    "#FCD9B4",
    "#FBD7B1",
    "#FAD5AE",
    "#F8D3AA",
    "#F7D0A7",
    "#F6CEA4",
    "#F5CCA0",
    "#F3CA9D",
    "#F2C79A",
    "#F1C596",
    "#EFC393",
    "#EEC090",
    "#EDBE8C",
    "#EBBC89",
    "#EABA85",
    "#E9B782",
    "#E7B57F",
    "#E6B37B",
    "#E5B078",
    "#E3AE75",
    "#E2AC71",
    "#E1AA6E",
    "#E0A76B",
    "#DEA567",
    "#DDA364",
    "#DCA161",
    "#DA9E5D",
    "#D99C5A",
  ],
  [
    "#CFDBBD",
    "#CBD8B9",
    "#C8D5B5",
    "#C4D1B2",
    "#C0CEAE",
    "#BDCBAA",
    "#B9C8A6",
    "#B5C4A3",
    "#B2C19F",
    "#AEBE9B",
  ],
  [
    "#BDD9DB",
    "#B4D5D7",
    "#AAD1D4",
    "#A1CED0",
    "#97CACD",
    "#8EC6C9",
    "#84C2C6",
    "#7BBFC2",
    "#71BBBF",
    "#68B7BB",
  ],
  [
    "#6DF0F9",
    "#61EBF4",
    "#56E5EF",
    "#4AE0E9",
    "#3EDBE4",
    "#33D5DF",
    "#27D0DA",
    "#1BCBD4",
    "#10C5CF",
    "#04C0CA",
  ],
  [
    "#E09F67",
    "#E3A36B",
    "#E7A66F",
    "#EAAA72",
    "#EDAE76",
    "#F1B17A",
    "#F4B57E",
    "#F7B981",
    "#FBBC85",
    "#FEC089",
  ],
  [
    "#FFFFFF",
    "#FEFEFE",
    "#FCFCFC",
    "#FBFBFB",
    "#FAFAFA",
    "#F8F8F8",
    "#F7F7F7",
    "#F6F6F6",
    "#F4F4F4",
    "#F3F3F3",
  ],
];

let palette = palettesArr[~~(fxrand() * palettesArr.length)];

function setup() {
  let format = +fxrand().toFixed(1);
  if (format < 0.1) {
    sketchWidth = 500;
    sketchHeight = 600;
  } else if (format < 0.2) {
    sketchWidth = 600;
    sketchHeight = 600;
  } else if (format < 0.3) {
    sketchWidth = 900;
    sketchHeight = 600;
  } else if (format < 0.4) {
    sketchWidth = 800;
    sketchHeight = 600;
  } else if (format < 0.5) {
    sketchWidth = 600;
    sketchHeight = 800;
  } else if (format < 0.6) {
    sketchWidth = 900;
    sketchHeight = 400;
  } else if (format < 0.7) {
    sketchWidth = 1000;
    sketchHeight = 1200;
  } else if (format < 0.8) {
    sketchWidth = 1000;
    sketchHeight = 1500;
  } else {
    sketchWidth = 800;
    sketchHeight = 600;
  }
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
    sk.save(`Hommage à Metropolis (${fxhash}).png`);
  }
  if (key === "s" || key === "S") {
    let sk = createSketch(width * 3, height * 3);
    sk.save(`Hommage à Metropolis (${fxhash}).png`);
  }
  if (key === "d" || key === "D") {
    let sk = createSketch(width * 4, height * 4);
    sk.save(`Hommage à Metropolis (${fxhash}).png`);
  }
  if (key === "f" || key === "F") {
    let sk = createSketch(width * 6, height * 6);
    sk.save(`Hommage à Metropolis (${fxhash}).png`);
  }
}

const createSketch = (width, height) => {
  let sk = createGraphics(width, height);
  sk.pixelDensity(1);
  noiseSeed(seed);
  randomSeed(seed);
  let scale = min(width / sketchWidth, height / sketchHeight);
  sk.scale(scale);
  sk.background(0);
  sk.colorMode(HSB, 360, 100, 100, 100);
  xoff = 0;
  if (cityType === 1) {
    sk.push();
    cityBackground(sk);
    sk.pop();
  }
  if (cityType === 3) {
    sk.push();
    cityBackground(sk);
    sk.pop();
  }
  if (cityType === 4) {
    sk.push();
    cityBackground(sk);
    sk.pop();
  }
  if (cityType === 5) {
    sk.push();
    cityBackground(sk);
    sk.pop();
  }
  sk.push();
  city(sk);
  sk.pop();
  frame(sk);
  noiseFilter(sk, scale, 25);
  return sk;
};

const frame = (sk) => {
  rectMode(CORNER);
  sk.push();
  sk.noFill();
  sk.stroke(20);
  sk.strokeWeight(sketchWidth / 25, sketchHeight / 25);
  sk.rect(0, 0, sketchWidth, sketchHeight);
  sk.pop();
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

const city = (sk) => {
  if (cityType === 1 && sketchWidth === 1000 && sketchHeight === 1200) {
    sk.translate(450, 300);
  } else if (
    cityType === 2 &&
    sketchWidth === 1000 &&
    (sketchHeight === 1200 || 1500)
  ) {
    sk.translate(500, 400);
    sk.scale(1.24);
  } else if (cityType === 2 && sketchWidth === 900 && sketchHeight === 400) {
    sk.translate(400, +random(200, 301).toFixed());
  } else if (cityType === 2 && sketchWidth === 800 && sketchHeight === 600) {
    sk.translate(400, 300);
    sk.scale(1.24);
  } else if (cityType === 2 && sketchWidth === 500 && sketchHeight === 600) {
    sk.translate(450, 300);
  } else if (cityType === 2 && sketchWidth === 600 && sketchHeight === 600) {
    sk.translate(270, random(400));
    sk.scale(1.24);
  } else if (cityType === 2 && sketchWidth === 900 && sketchHeight === 600) {
    sk.translate(400, random(300, 450));
  } else if (cityType === 2 && sketchWidth === 600 && sketchHeight === 800) {
    sk.translate(400, random(300, 450));
  } else if (
    cityType === 3 &&
    sketchWidth === 1000 &&
    (sketchHeight === 1200 || sketchHeight === 1500)
  ) {
    sk.translate(525, random(-100, 1200));
    sk.scale(1.3);
  } else if (
    cityType === 4 &&
    sketchWidth === 1000 &&
    (sketchHeight === 1200 || sketchHeight === 1500)
  ) {
    sk.translate(525, random(-100, 1200));
    sk.scale(1.3);
  } else if (cityType === 5 && sketchWidth === 1000 && sketchHeight === 1200) {
    sk.translate(400, random(1200));
  } else if (cityType === 5 && sketchWidth === 1000 && sketchHeight === 1500) {
    sk.translate(400, random(1500));
  } else {
    sk.translate(random(399, 601), random(641));
  }
  sk.scale(1.2);
  sk.strokeWeight(0.5);
  sk.fill(hexToRgba(random(palette), 0.1));
  sk.beginShape();
  for (let y = 0; y < sketchHeight; y++) {
    let x = noise(xoff) * 500;
    if (cityType === 1) {
      for (let i = 1; i < 100; i += cityShape) {
        sk.rect(
          (x * cos(i)) / sin(i) / cos(i),
          (y * sin(i) * cos(i)) / sin(i),
          50
        );
      }
    } else if (cityType === 2) {
      for (let i = 1; i < 100; i += +random(1, 1.3).toFixed()) {
        sk.rect((x * cos(i)) / sin(i), y * sin(i), 50);
        shape1(sk, 5, (x * cos(i)) / sin(i), y * sin(i));
      }
    } else if (cityType === 3) {
      for (let i = 1; i < 80; i += 2.5) {
        sk.rect((x * cos(i)) / sin(i), (y * sin(i) * cos(i)) / sin(i), 50);
        shape1(sk, 5, (x * cos(i)) / sin(i), y * sin(i));
      }
    } else if (cityType === 4) {
      for (let i = 1; i < 80; i += +random(1, 1.5).toFixed()) {
        sk.rect(x * cos(i) * sin(i) - 250, (y * sin(i) * cos(i)) / sin(i), 50);
        sk.rect(
          ((x * cos(i) * sin(i)) / cos(i)) * sin(i) - 100,
          (y * sin(i) * cos(i)) / sin(i),
          50
        );
        sk.rect(x * cos(i) * sin(i) + 250, (y * sin(i) * cos(i)) / sin(i), i);
      }
    } else if (cityType === 5) {
      for (let i = 1; i < 80; i += 1.4) {
        sk.rect(x * cos(i) * sin(i) + 200, (y * sin(i) * cos(i)) / sin(i), 50);
        sk.rect(x * cos(i) * sin(i) + 400, (y * sin(i) * cos(i)) / sin(i), 50);
        sk.rect(x * cos(i) * sin(i), y * sin(i), i);
        sk.rect(x * sin(i) - 300, (y * sin(i) * cos(i)) / sin(i), 50);
      }
    }
    sk.noiseDetail(10, 0.05);
    xoff += 0.025;
  }
  sk.endShape();
};

const shape1 = (sk, amount, x1, y1) => {
  for (i = 0; i < amount; i++) {
    sk.push();
    sk.translate(x1, y1);
    sk.beginShape();
    for (m = 0; m < TWO_PI; m += random()) {
      r = random(10);
      let x = cos(m) * r;
      let y = sin(m) * r;
      sk.vertex(x, y);
    }
    sk.endShape(CLOSE);
    sk.pop();
  }
};

const polygon = (sk, x, y, radius, npoints) => {
  sk.fill(hexToRgba(random(palette), 0.09));
  let angle = TWO_PI / npoints;
  sk.beginShape(TRIANGLE_STRIP);
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    sk.vertex(sx, sy);
  }
  sk.endShape(CLOSE);
};

const cityBackground = (sk) => {
  if (
    cityType === 1 &&
    sketchWidth === 1000 &&
    (sketchHeight === 1200 || sketchHeight === 1500)
  ) {
    sk.translate(500, 600);
    sk.scale(1.3);
  } else {
    sk.translate(400, 300);
  }
  sk.strokeWeight(0.5);
  sk.fill(hexToRgba(random(palette), 0.09));
  sk.beginShape();
  for (let y = 0; y < sketchHeight; y++) {
    let x = noise(xoff) * 500;
    for (let i = 1; i < 100; i += 1.3) {
      if (cityType === 1) {
        polygon(sk, (x * cos(i)) / sin(i), y * sin(i), 50, 7);
      }

      if (cityType === 3) {
        polygon(sk, (x * cos(i)) / sin(i), y * sin(i), 50, 7);
      }

      if (cityType === 4) {
        if (twoVal === 1) {
          polygon(sk, (x * cos(i)) / sin(i), y * sin(i), 50, 15);
        } else {
          polygon(sk, (x * cos(i)) / sin(i), y * sin(i), 50, 7);
        }
      }

      if (cityType === 5) {
        polygon(sk, (x * cos(i)) / sin(i), y * sin(i), i, 7);
      }
    }
    sk.noiseDetail(10, 0.05);
    xoff += 0.025;
  }
  sk.endShape();
};
