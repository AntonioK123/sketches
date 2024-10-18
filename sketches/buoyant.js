let s, xoff, yoff, v2, posX;
const seed = ~~(fxrand() * 1e9);
let sketchWidth = 800;
let sketchHeight = 600;

const compositionOneVariantsFourArr = [1, 2, 3, 4, 5];
let compositionOneVariantsFour =
  compositionOneVariantsFourArr[
    ~~(fxrand() * compositionOneVariantsFourArr.length)
  ];

const compositionOneVariantsSixYPositionArr = [
  -300, -200, -100, -50, 0, 100, 600, 800, 900, 1200,
];
let compositionOneVariantsSixYPosition =
  compositionOneVariantsSixYPositionArr[
    ~~(fxrand() * compositionOneVariantsSixYPositionArr.length)
  ];
let secondValueCirclePositionArr = [150, 250, 350, 550];
let secondValueCirclePosition =
  secondValueCirclePositionArr[
    ~~(fxrand() * secondValueCirclePositionArr.length)
  ];
let circlePositionArr = [
  [150, secondValueCirclePosition],
  [250, secondValueCirclePosition],
  [300, secondValueCirclePosition],
  [400, secondValueCirclePosition],
  [650, secondValueCirclePosition],
];

let compositionOneCase4XTranslationArr = [100, 200, 300, 400];
let compositionOneCase4XTranslation =
  compositionOneCase4XTranslationArr[
    ~~(fxrand() * compositionOneCase4XTranslationArr.length)
  ];

let circlePosition =
  circlePositionArr[Math.floor(fxrand() * circlePositionArr.length)];

let twoVal = parseInt(fxrand() * 2) ? 1 : 2;
let twoValCompositionOneRotationValue = parseInt(fxrand() * 2) ? 0.7 : 0.9;
let mainPolygonShearerYArr = [
  -0.001, -0.002, -0.003, -0.004, -0.005, 0.001, 0.002, 0.003, 0.004,
];
let mainPolygonShearerY =
  mainPolygonShearerYArr[~~(fxrand() * mainPolygonShearerYArr.length)];

let mainPolygonShapeArr = [
  0.006, 0.007, 0.009, 0.001, 0.01, 0.02, 0.02, 0.02, 0.03,
];
let mainPolygonShape =
  mainPolygonShapeArr[~~(fxrand() * mainPolygonShapeArr.length)];
let palettesArrCompositionOne = [
  ["#F3AD8C", "#F28A5C", "#FDC09D"],
  ["#cdb4db", "#ffc8dd", "#ffafcc", "#bde0fe", "#a2d2ff"],
  ["#ffaa00", "#ffb700", "#ffc300", "#ffd000", "#ffdd00", "#ffea00"],
  [
    "#F7CFA5",
    "#F8D1A8",
    "#F8D3AB",
    "#F9D4AE",
    "#F9D6B2",
    "#FAD8B5",
    "#FADAB8",
    "#FBDBBB",
    "#FBDDBE",
    "#FCDFC1",
    "#FCE1C4",
    "#FDE2C7",
    "#FDE4CB",
    "#FEE6CE",
    "#FEE8D1",
    "#FFE9D4",
    "#FFEBD7",
  ],
  [
    "#93D687",
    "#33C4B6",
    "#E8E99E",
    "#3CA88A",
    "#9DD49F",
    "#E3C64D",
    "#EF2910",
    "#E4F3B8",
    "#F9F27E",
    "#FEFAB6",
  ],
  [
    "#A87AC2",
    "#64B250",
    "#3BA483",
    "#BA413F",
    "#E59723",
    "#E49530",
    "#E87625",
    "#319B76",
    "#E88227",
    "#C33734",
  ],
  [
    "#4878C2",
    "#E59723",
    "#AD81BE",
    "#BB4485",
    "#4471BB",
    "#81CE4C",
    "#64B250",
    "#BA413F",
    "#76CD48",
    "#E49530",
  ],
  [
    "#81CE4C",
    "#4878C2",
    "#76CD48",
    "#E6BA26",
    "#DEE0D1",
    "#BB4485",
    "#DEE1D0",
    "#EECAA6",
    "#A87AC2",
    "#D9D5BA",
  ],
  [
    "#E79821",
    "#F1D629",
    "#F17014",
    "#50A7E5",
    "#E8C348",
    "#74C52E",
    "#FCD024",
    "#B1DA3F",
    "#E7251C",
    "#E7DCD7",
  ],
  [
    "#E1C06E",
    "#B2C7E4",
    "#D9D8D0",
    "#98B0D2",
    "#ECCD8B",
    "#8BC187",
    "#D5B148",
    "#BDCADB",
    "#C4A569",
    "#D0B586",
  ],
  [
    "#E1C06E",
    "#A28439",
    "#D5B148",
    "#7495C6",
    "#C4A569",
    "#C5CACC",
    "#A48C5D",
    "#7E6123",
    "#8BC187",
    "#5177A7",
    "#A48C5D",
    "#5177A7",
    "#D5B148",
    "#E0C87D",
    "#ECCD8B",
    "#8E7D46",
    "#7495C6",
    "#C4A569",
    "#B2C7E4",
    "#BDCADB",
  ],
];

let compositionOneVariantsArr = [1, 3, 4, 5, 6, 6, 6, 6, 6];
let compositionOneVariants =
  compositionOneVariantsArr[~~(fxrand() * compositionOneVariantsArr.length)];

let paletteCompositionOne =
  palettesArrCompositionOne[~~(fxrand() * palettesArrCompositionOne.length)];

const blabla2ShapeArr = [0.5, 0.8, 0.9, 2];
let blabla2Shape = blabla2ShapeArr[~~(fxrand() * blabla2ShapeArr.length)];

function setup() {
  let format = +fxrand().toFixed(1);
  if (format < 0.2) {
    sketchWidth = 600;
    sketchHeight = 600;
  } else if (format < 0.3) {
    sketchWidth = 900;
    sketchHeight = 600;
  } else if (format < 0.4) {
    sketchWidth = 800;
    sketchHeight = 600;
  } else if (format < 0.6) {
    sketchWidth = 900;
    sketchHeight = 400;
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
    sk.save(`Buoyant (${fxhash}).png`);
  }
  if (key === "s" || key === "S") {
    let sk = createSketch(width * 3, height * 3);
    sk.save(`Buoyant (${fxhash}).png`);
  }
  if (key === "d" || key === "D") {
    let sk = createSketch(width * 4, height * 4);
    sk.save(`Buoyant (${fxhash}).png`);
  }
  if (key === "f" || key === "F") {
    let sk = createSketch(width * 6, height * 6);
    sk.save(`Buoyant (${fxhash}).png`);
  }
}

const createSketch = (width, height) => {
  let sk = createGraphics(width, height);
  sk.pixelDensity(1);
  noiseSeed(seed);
  randomSeed(seed);
  let scale = min(width / sketchWidth, height / sketchHeight);
  sk.scale(scale);
  sk.background(hexToRgba(random(paletteCompositionOne)));
  xoff = 0;

  sk.push();
  compositionOne(sk);
  sk.pop();

  frame(sk);
  noiseFilter(sk, scale, 25);
  return sk;
};

const frame = (sk) => {
  rectMode(CORNER);
  sk.push();
  sk.noFill();
  sk.stroke(50);
  sk.strokeWeight(sketchWidth / 35, sketchHeight / 35);
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

const shape1 = (sk, amount, x1, y1) => {
  sk.strokeWeight(0.1);
  for (i = 0; i < amount; i++) {
    sk.push();
    sk.translate(x1, y1);
    sk.beginShape();
    for (m = 0; m < TWO_PI; m += random()) {
      r = random(10);
      let x = cos(m) * r;
      let y = sin(m) * r;
      sk.curveVertex((x * sin(m)) / sin(m), y / sin(m));
    }
    sk.endShape(CLOSE);
    sk.pop();
  }
};

const polygon = (sk, x, y, radius, npoints) => {
  sk.fill(hexToRgba(random(paletteCompositionOne), 0.09));
  let angle = TWO_PI / npoints;
  sk.beginShape(TRIANGLE_STRIP);
  for (let a = 0; a < 500; a += angle) {
    let n = noise(a) * 100;
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    sk.vertex(sx * sin(n), sy);
  }
  sk.endShape(CLOSE);
};

const compositionOne = (sk) => {
  if (compositionOneVariants === 4 || compositionOneVariants === 5) {
    sk.push();
    sk.translate(-200, 0);
    blabla(sk);
    sk.pop();
    sk.push();
    sk.translate(-100, 200);
    blabla2(sk, random(3), random(-0.4, 1), 0.4, 0.1);
    sk.pop();

    sk.push();
    sk.translate(circlePosition[0], circlePosition[1]);
    centralCircle(sk, "#000");
    sk.pop();
    sk.push();
    sk.translate(random(0, sketchWidth), circlePosition[1]);
    centralCircle(sk, "#000");
    sk.pop();
    sk.push();
    sk.translate(
      random(100, sketchWidth - 150),
      random(100, sketchHeight - 200)
    );
    centralCircle(sk, "#000");
    sk.pop();

    sk.push();
    texture1(sk);
    sk.pop();

    sk.push();
    mainPolygon(sk);
    sk.pop();
  } else {
    sk.push();
    sk.translate(-200, 0);
    blabla(sk);
    sk.pop();
    sk.push();
    sk.translate(-100, 200);
    blabla2(sk, random(3), random(), 0.5, 0.1);
    sk.pop();
    sk.push();
    sk.translate(-100, 500);
    blabla2(sk, random(-3, 0), 0, 0.5, 0.1);
    sk.pop();

    //Dark
    sk.push();
    sk.translate(circlePosition[0], circlePosition[1]);
    centralCircle(sk, "#000");
    sk.pop();
    sk.push();
    sk.translate(random(0, sketchWidth), circlePosition[1]);
    centralCircle(sk, "#000");
    sk.pop();
    sk.push();
    sk.translate(
      random(100, sketchWidth - 150),
      random(100, sketchHeight - 200)
    );
    centralCircle(sk, "#000");
    sk.pop();

    //Color
    sk.push();
    sk.translate(circlePosition[0], circlePosition[1]);
    centralCircle(sk, random(paletteCompositionOne), 0.2);
    sk.pop();
    sk.push();
    sk.translate(random(0, sketchWidth), circlePosition[1]);
    centralCircle(sk, random(paletteCompositionOne), 0.1);
    sk.pop();
    sk.push();
    sk.translate(
      random(100, sketchWidth - 150),
      random(100, sketchHeight - 200)
    );
    centralCircle(sk, random(paletteCompositionOne), 0.2);
    sk.pop();

    sk.push();
    texture1(sk);
    sk.pop();

    sk.push();
    mainPolygon(sk);
    sk.pop();
  }
};

const texture1 = (sk) => {
  sk.strokeWeight(0.1);
  for (i = 0; i < 40; i++) {
    let n = noise(i) * 100;
    let t = random(0.5, 5);
    sk.fill(hexToRgba(random(paletteCompositionOne), 0.06));
    sk.stroke(hexToRgba("#000", 0.5));
    sk.push();
    sk.translate(random(0, sketchWidth), random(0, sketchHeight));
    sk.beginShape();
    for (m = 0; m < 100; m += 1) {
      let th = random(TWO_PI);
      let x = cos(th) * 50;
      let y = sin(th) * random(500);
      sk.vertex(x, y);
    }
    sk.endShape(CLOSE);
    sk.pop();
  }
};

const centralCircle = (sk, strokeColor, strW) => {
  sk.scale(1.1);
  if (compositionOneVariants === 4 || compositionOneVariants === 5) {
    sk.stroke(hexToRgba(strokeColor));
  } else {
    sk.stroke(hexToRgba(strokeColor, strW));
  }
  sk.noFill();
  sk.beginShape(TRIANGLE_STRIP);
  for (let x = 0; x < 200 * 1.5; x++) {
    let debljina = map(x, 0, 100, 0, 0.5);
    let posX = map(noise(0.9), 0, 10, -0.5, 1);
    let y = noise(xoff) * 800;
    sk.strokeWeight(debljina);
    for (let i = 0; i < 10; i++) {
      sk.rotate(posX);
      sk.shearY(0.0005);
      sk.push();
      shape1(sk, 3, x, y / 2);
      sk.pop();
    }
    xoff += 0.004;
  }
  sk.endShape();
};

const blabla = (sk) => {
  sk.translate(0, 300);
  sk.stroke(0);
  sk.fill(hexToRgba(random(paletteCompositionOne), 0.035));
  sk.beginShape();
  for (let x = 0; x < sketchWidth; x++) {
    let debljina = map(x, 0, 200, 0, 0.1);
    let y = (noise(xoff) * sketchHeight) / 2;
    sk.strokeWeight(debljina);
    for (let i = 0; i < 150; i++) {
      sk.circle(x * 2, ((y / sin(i)) * cos(i)) / sin(i), 30);
    }
    xoff += 0.1;
  }
  sk.endShape();
};

const blabla2 = (sk, shearer, rotation, skalar, strWx) => {
  sk.scale(skalar);
  sk.stroke(0);
  sk.fill(hexToRgba(random(paletteCompositionOne), 0.1));
  sk.shearX(shearer);
  sk.rotate(rotation);
  sk.beginShape();
  for (let x = 0; x < sketchWidth; x++) {
    let debljina = map(x, 0, 200, 0, strWx);
    let y = (noise(xoff) * sketchHeight) / 2;
    sk.strokeWeight(debljina);
    for (let i = 0; i < 150; i++) {
      sk.rect(x * blabla2Shape, ((y / sin(i)) * cos(i)) / sin(i), 30);
    }
    xoff += 0.4;
  }
  sk.endShape();
};

const mainPolygon = (sk) => {
  if (compositionOneVariants === 1) {
    if (mainPolygonShearerY === -0.003) {
      sk.translate(random(-100, 0), 500);
    } else if (mainPolygonShearerY === -0.004) {
      sk.translate(random(-100, 0), 500);
    } else if (mainPolygonShearerY === -0.005) {
      sk.translate(random(-100, 0), 500);
    } else if (mainPolygonShearerY === 0.003) {
      sk.translate(random(-100, 0), 100);
    } else if (mainPolygonShearerY === 0.004) {
      sk.translate(random(-100, 0), 100);
    } else {
      sk.translate(random(-100, 0), 300);
    }
  } else if (compositionOneVariants === 3) {
    sk.translate(0, random(199, 401));
  } else if (compositionOneVariants === 6) {
    sk.translate(
      compositionOneCase4XTranslation,
      compositionOneVariantsSixYPosition
    );
  } else {
    sk.translate(compositionOneCase4XTranslation, -100);
  }
  sk.fill(hexToRgba(random(paletteCompositionOne), 0.01));
  sk.beginShape();
  for (let x = 0; x < sketchWidth; x++) {
    let y = (noise(xoff) * sketchHeight) / 2;
    let filer = map(x, 0, 500, 1, 0.4);
    sk.stroke(hexToRgba("#000", filer));
    if (compositionOneVariants === 6) {
      let debljina = map(x, 0, 200, 0, 0.3);
      sk.strokeWeight(debljina);
    } else {
      let debljina = map(x, 0, 200, 0, 0.4);
      sk.strokeWeight(debljina);
    }

    if (compositionOneVariants === 1) {
      sk.shearY(mainPolygonShearerY);
    } else if (compositionOneVariants === 3) {
      sk.shearX(+random(-0.001, 0.002).toFixed());
      sk.shearY(mainPolygonShearerY);
    } else if (compositionOneVariants === 6) {
      sk.rotate(0.9);
    } else {
      if (twoVal === 1) {
        sk.rotate(twoValCompositionOneRotationValue);
      } else {
        sk.shearY(mainPolygonShearerY);
        sk.rotate(twoValCompositionOneRotationValue);
      }
    }
    if (compositionOneVariants === 4) {
      for (let i = 0; i < 550; i++) {
        sk.fill(hexToRgba(random(paletteCompositionOne), 0.02));
        if (compositionOneVariantsFour === 1) {
          sk.rect(x * 2, ((y / sin(i)) * random(1, 1.1)) / sin(i), random(20));
        } else if (compositionOneVariantsFour === 2) {
          sk.circle(
            x * 2,
            ((y / sin(i)) * random(1, 1.1)) / sin(i),
            random(20)
          );
        } else if (compositionOneVariantsFour === 3) {
          sk.rect(
            x * 2,
            ((y / sin(i)) * random(1, 1.1)) / sin(i) + cos(i),
            random(20)
          );
        } else if (compositionOneVariantsFour === 4) {
          sk.circle(
            x * 2,
            ((y / sin(i)) * random(1, 1.1)) / sin(i) + cos(i),
            random(20)
          );
        } else if (compositionOneVariantsFour === 5) {
          sk.rect(
            x * 2,
            ((y / sin(i)) * random(1, 1.1)) / sin(i) - cos(i),
            random(20)
          );
        } else {
          sk.circle(
            x * 2,
            ((y / sin(i)) * random(1, 1.1)) / sin(i) - cos(i),
            random(20)
          );
        }
      }
    } else if (compositionOneVariants === 5) {
      for (let i = 0; i < 550; i++) {
        sk.fill(hexToRgba(random(paletteCompositionOne), 0.02));
        if (twoVal === 1) {
          sk.circle(x * 2, (y / sin(i)) * random(1, 1.1), random(10));
        } else {
          sk.circle(
            x * 2,
            ((y / sin(i)) * random(1, 1.1)) / sin(i) + cos(i),
            random(10)
          );
        }
      }
    } else if (compositionOneVariants === 6) {
      for (let i = 0; i < 150; i++) {
        sk.fill(hexToRgba(random(paletteCompositionOne), 0.08));
        sk.push();
        nesto(sk, x * 2, y / sin(i), random(7.5), 6);
        sk.pop();
      }
    } else {
      for (let i = 0; i < 150; i++) {
        sk.circle(x * 2, (y / sin(i)) * random(1, 1.1), random(20));
      }
    }
    xoff += mainPolygonShape;
  }
  sk.endShape();
};

const nesto = (sk, x, y, radius, npoints) => {
  let angle = TWO_PI / npoints;
  sk.beginShape(TRIANGLE_STRIP);
  for (let a = 0; a <= 12; a += angle) {
    let n = noise(a / sin(2)) * 5;
    let sx = x + cos(a) * radius * n;
    let sy = y + sin(a) * radius;
    sk.vertex(sx, sy);
  }
  sk.endShape(CLOSE);
};
