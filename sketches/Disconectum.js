let s, xoff, yoff, amt, rnd;
const seed = Math.floor(fxrand() * 1e9);
let sketchWidth = 800;
let sketchHeight = 600;
let palettesArr = [
  [
    "#40595F",
    "#5C887F",
    "#BFB286",
    "#446A72",
    "#BDC9A1",
    "#6189A5",
    "#5D757C",
    "#818469",
    "#B4AD7B",
    "#82A7C0",
  ],
  [
    "#C8AB6B",
    "#CCC0A6",
    "#80683D",
    "#859BAE",
    "#CDD5E6",
    "#6179A3",
    "#DCB980",
    "#CBCCD0",
    "#62757A",
    "#505C4C",
  ],
  [
    "#1A4239",
    "#5D887F",
    "#818469",
    "#B5C1B9",
    "#9BB3B8",
    "#B4AD7C",
    "#556B5F",
    "#8DA183",
    "#466B73",
    "#B3AC92",
  ],
  [
    "#BEB176",
    "#DFB06C",
    "#798064",
    "#6E7067",
    "#9CA88A",
    "#CECCA0",
    "#7A705C",
    "#DB965C",
    "#92A16D",
    "#8C9269",
  ],
  [
    "#346030",
    "#78977B",
    "#C47D56",
    "#937E68",
    "#625B31",
    "#986038",
    "#5A5168",
    "#C8B797",
    "#BBA571",
    "#5B7647",
  ],
  [
    "#99AE9D",
    "#CA843E",
    "#3A503F",
    "#E9A953",
    "#C19E59",
    "#A15429",
    "#E7C27B",
    "#B74B2C",
    "#664B32",
    "#6C856F",
  ],
  [
    "#AF9256",
    "#C29B53",
    "#7A5B11",
    "#55481D",
    "#7F662D",
    "#6E501B",
    "#A98034",
    "#9A732D",
    "#A9894A",
    "#A1772D",
  ],
  [
    "#C7BBA1",
    "#8B7A73",
    "#E6E1CE",
    "#6A5D56",
    "#513B3A",
    "#A09C95",
    "#463E41",
    "#595051",
    "#423A36",
    "#6E413C",
  ],
  [
    "#ffedd8",
    "#f3d5b5",
    "#e7bc91",
    "#d4a276",
    "#bc8a5f",
    "#a47148",
    "#8b5e34",
    "#6f4518",
    "#603808",
    "#583101",
  ],
  [
    "#b76935",
    "#a56336",
    "#935e38",
    "#815839",
    "#6f523b",
    "#5c4d3c",
    "#4a473e",
    "#38413f",
    "#263c41",
    "#143642",
  ],
  [
    "#e5d4c3",
    "#e5c9ae",
    "#debea2",
    "#d6ab7d",
    "#b3895d",
    "#9b744a",
    "#81583a",
    "#734f38",
    "#553725",
    "#482919",
  ],
  [
    "#7B5A56",
    "#F6F0EA",
    "#4B323E",
    "#8C7273",
    "#B19E9A",
    "#8E7068",
    "#674D55",
    "#EBE0D9",
    "#C5B2A9",
    "#968689",
  ],
  [
    "#CCD5D4",
    "#BABDB9",
    "#3C565B",
    "#223D44",
    "#20434F",
    "#2E4243",
    "#828F8E",
    "#BBA47B",
    "#4A5855",
    "#4D666A",
    "#CCD5D4",
    "#BABDB9",
    "#ADA79B",
    "#223D44",
    "#20434F",
    "#377585",
    "#8D938F",
    "#BBA47B",
    "#BDC0C5",
    "#DBCBAA",
  ],
  [
    "#797875",
    "#A0685C",
    "#7A4D48",
    "#8B5045",
    "#B39E92",
    "#768D95",
    "#BA8479",
    "#79675F",
    "#9B9A96",
    "#5D7079",
  ],
  [
    "#8A591E",
    "#E5E8BF",
    "#E49544",
    "#76A8C0",
    "#2A170A",
    "#95806C",
    "#48220B",
    "#4F341A",
    "#AC996E",
    "#FAD242",
    "#B96B1A",
    "#8EC6DF",
    "#CCB6A0",
    "#F8DF71",
    "#457CA1",
    "#37789B",
    "#3C84A6",
    "#37332F",
    "#344C4C",
    "#38442C",
  ],
  [
    "#EFDABE",
    "#EBD5B8",
    "#E7D0B1",
    "#E3CBAB",
    "#DEC6A4",
    "#DAC19E",
    "#D6BC98",
    "#D2B791",
    "#CEB38B",
    "#CAAE84",
    "#C6A97E",
    "#C1A477",
    "#BD9F71",
    "#B99A6B",
    "#B59564",
    "#B1905E",
    "#AD8B57",
    "#A98651",
    "#A5814B",
    "#A07C44",
    "#9C773E",
    "#987237",
    "#946E31",
    "#90692A",
    "#8C6424",
    "#885F1E",
    "#835A17",
    "#7F5511",
    "#7B500A",
    "#774B04",
  ],
  [
    "#f8f9fa",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#6c757d",
    "#495057",
    "#343a40",
    "#212529",
  ],
  [
    "#ff6d00",
    "#ff7900",
    "#ff8500",
    "#ff9100",
    "#ff9e00",
    "#240046",
    "#3c096c",
    "#5a189a",
    "#7b2cbf",
    "#9d4edd",
  ],
  [
    "#b76935",
    "#a56336",
    "#935e38",
    "#815839",
    "#6f523b",
    "#5c4d3c",
    "#4a473e",
    "#38413f",
    "#263c41",
    "#143642",
  ],
  [
    "#ffb950",
    "#ffad33",
    "#ff931f",
    "#ff7e33",
    "#fa5e1f",
    "#ec3f13",
    "#b81702",
    "#a50104",
    "#8e0103",
    "#7a0103",
  ],
  ["#410b13", "#cd5d67", "#ba1f33", "#421820", "#91171f"],
  [
    "#F2C6A2",
    "#746356",
    "#9B977C",
    "#DFBF9A",
    "#C27443",
    "#565D65",
    "#A3513B",
    "#ACAB8E",
    "#324A86",
    "#BE7A5A",
  ],
  [
    "#7A929D",
    "#4D6555",
    "#4B6173",
    "#864C27",
    "#636639",
    "#938842",
    "#607D82",
    "#4E462C",
    "#CACFC5",
    "#B1B2A6",
  ],
  [
    "#A3543F",
    "#5C2C2F",
    "#19274B",
    "#4F698F",
    "#161425",
    "#245D96",
    "#514247",
    "#F4B76B",
    "#BDA99F",
    "#7A4D42",
    "#245D96",
    "#1D1E32",
    "#19274B",
    "#A3543F",
    "#BDA99F",
    "#DA8B64",
    "#161425",
    "#D46A43",
    "#2D2F47",
    "#E5A763",
    "#A3543F",
    "#1C3668",
    "#F4B76B",
    "#E5A763",
    "#DA8B64",
    "#4F698F",
    "#245D96",
    "#2D2F47",
    "#423243",
    "#5C2C2F",
    "#245D96",
    "#F0C083",
    "#A3543F",
    "#BDA99F",
    "#D46A43",
    "#A8816E",
    "#4F698F",
    "#E5A763",
    "#1D1E32",
    "#514247",
  ],
  [
    "#78625F",
    "#55554A",
    "#7898A7",
    "#202429",
    "#293246",
    "#CCB991",
    "#526665",
    "#BA9158",
    "#4D3A48",
    "#3F688C",
    "#677587",
    "#71503B",
    "#BA9158",
    "#78625F",
    "#A4A8A4",
    "#3F688C",
    "#718E87",
    "#AC9B81",
    "#C2C1A7",
    "#526665",
  ],
];

let palette = palettesArr[Math.floor(fxrand() * palettesArr.length)];
// const casesArr = [1, 2, 3, 4, 5, 6, 7, 8];
const casesArr = [7];
let cases = casesArr[Math.floor(fxrand() * casesArr.length)];

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
    sketchHeight = 750;
  } else if (format < 0.6) {
    sketchWidth = 800;
    sketchHeight = 300;
  } else if (format < 0.7) {
    sketchWidth = 800;
    sketchHeight = 400;
  } else if (format < 0.8) {
    sketchWidth = 800;
    sketchHeight = 450;
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
    sk.save(`Disconectum (${fxhash}).png`);
  }
  if (key === "s" || key === "S") {
    let sk = createSketch(width * 3, height * 3);
    sk.save(`Disconectum (${fxhash}).png`);
  }
  if (key === "d" || key === "D") {
    let sk = createSketch(width * 4, height * 4);
    sk.save(`Disconectum (${fxhash}).png`);
  }
  if (key === "f" || key === "F") {
    let sk = createSketch(width * 6, height * 6);
    sk.save(`Disconectum (${fxhash}).png`);
  }
}

const createSketch = (width, height) => {
  let sk = createGraphics(width, height);
  noiseSeed(seed);
  randomSeed(seed);
  let scale = min(width / sketchWidth, height / sketchHeight);
  sk.scale(scale);
  sk.background(255);
  sk.push();
  texture2(sk);
  sk.pop();
  sk.push();
  mist(sk, 600, 0, 0.03);
  sk.pop();
  sk.push();
  shadowTexture(
    sk,
    0.1,
    0.001,
    hue("#000"),
    saturation("#fff"),
    brightness("#000"),
    100
  );
  sk.pop();
  frame(sk);
  noiseFilter(sk, scale, 17);
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

const shadowTexture = (sk, weight, nsIncrement, R, G, B, A) => {
  let x, y;
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
    sk.strokeWeight(0.02);
    sk.vertex(nx, ny);
  }
  sk.endShape();
};

const texture2 = (sk) => {
  rnd = random(6, 15);
  sk.colorMode(HSB, 360, 100, 100, 100);
  if (cases === 1) {
    amt = 180;
  }
  if (cases === 2) {
    amt = 180;
  }
  if (cases === 3) {
    amt = 400;
  }
  if (cases === 4) {
    amt = 400;
  }
  if (cases === 5) {
    amt = 400;
  }
  if (cases === 6) {
    amt = 400;
  }
  if (cases === 7) {
    amt = 400;
  }
  if (cases === 8) {
    amt = 400;
  }
  if (cases === 9) {
    amt = 400;
  }
  for (i = 0; i < amt; i++) {
    if (cases === 3) {
      sk.strokeWeight(0.05);
    } else {
      sk.strokeWeight(0.1);
    }
    let t = random(0.5, 15);
    let sizeR = random(0, 2);
    sk.fill(
      hue(random(palette)),
      saturation(random(palette)),
      brightness(random(palette)),
      10
    );
    sk.push();
    sk.translate(random(-50, sketchWidth), random(-50, sketchHeight));
    sk.rotate(random(-3.14, 3.14));

    if (cases === 1) {
      sk.beginShape(TRIANGLE_STRIP);
      for (m = 0; m < random(4000, 5000); m += 1) {
        let r = 2 * sqrt(random(random())) * 60;
        let th = random();
        let x1 = (cos(th) * r) / PI;
        let y1 = sin(th * t) * r;
        let x2 = cos(th) * r;
        let y2 = sin(th * t) * r;
        sk.rect(x1, y1 * th, x2, y2);
      }
      sk.endShape(CLOSE);
    }
    if (cases === 2) {
      sk.beginShape(TRIANGLE_STRIP);
      for (m = 0; m < random(4000, 5000); m += 10) {
        let r = 2 * sqrt(random(random())) * 60;
        let th = random(2);
        let x1 = cos(th);
        let y1 = sin(th * t) * r;
        let x2 = cos(th) * r;
        let y2 = sin(th * t) * r;
        sk.rect(x1, y1 * th, x2 * sizeR, y2 * sizeR);
      }
      sk.endShape(CLOSE);
    }
    if (cases === 3) {
      sk.beginShape();
      for (m = 0; m < random(4000, 5000); m += 2) {
        let r = 2 * sqrt(random(random())) * 60;
        let th = random();
        let x1 = cos(th);
        let y1 = sin(th * t) * r;
        let x2 = cos(th) * r;
        let y2 = sin(th * t) * r;
        sk.rect(x1, y1, x2, y2);
      }
      sk.endShape(CLOSE);
    }
    if (cases === 4) {
      sk.beginShape();
      for (m = 0; m < random(4000, 5000); m += 10) {
        let r = 2 * sqrt(random(random())) * 60;
        let th = random();
        let x1 = cos(th);
        let y1 = sin(th * t) * r;
        let x2 = cos(th) * r;
        let y2 = sin(th * t) * r;
        sk.rect(x1, y1, x2, y2);
      }
      sk.endShape(CLOSE);
    }

    if (cases === 5) {
      sk.beginShape();
      for (m = 0; m < random(4000, 5000); m += 10) {
        let r = 2 * sqrt(random(random())) * 60;
        let th = random(2);
        let x1 = cos(th);
        let y1 = sin(th * t) * r;
        let x2 = cos(th) * r;
        let y2 = sin(th * t) * r;
        sk.rect(x1 * 4, y1 * th, x2, y2);
      }
      sk.endShape(CLOSE);
    }
    if (cases === 6) {
      sk.beginShape();
      for (m = 0; m < random(4000, 5000); m += 5) {
        let r = 2 * sqrt(random(random())) * 60;
        let th = random(5);
        let x1 = cos(th);
        let y1 = sin(th * t) * r;
        let x2 = cos(th) * r;
        let y2 = sin(th * t) * r;
        sk.rect(x1 * rnd, y1 * th, x2, y2);
      }
      sk.endShape(CLOSE);
    }
    if (cases === 7) {
      sk.beginShape();
      for (m = 0; m < random(4000, 5000); m += 10) {
        let r = 2.5 * sqrt(random(random())) * random(20, 30);
        let th = random(5);
        let x1 = cos(th);
        let y1 = (sin(th * t) * r) / random(2);
        let x2 = cos(th) * r;
        let y2 = sin(th * t) * r;
        sk.rect(x1, y1 * th, x2, y2);
      }
      sk.endShape(CLOSE);
    }

    if (cases === 8) {
      sk.beginShape();
      for (m = 0; m < random(4000, 5000); m += 10) {
        let r = 2.5 * sqrt(random(random())) * random(20, 30);
        let th = random(5);
        let x1 = cos(th);
        let y1 = (sin(th * t) * r) / random(2);
        let x2 = cos(th) * r;
        let y2 = sin(th * t) * r;
        sk.rect(x1 * 2, y1 * th, x2, y2);
      }
      sk.endShape(CLOSE);
    }
    sk.pop();
  }
};

const mist = (sk, mistAmount, y, trans) => {
  sk.noStroke();
  sk.fill(hexToRgba("#000", trans));
  for (i = 0; i < mistAmount; i++) {
    sk.push();
    sk.translate(random(0, sketchWidth), random(y, 595));
    sk.beginShape();
    for (m = 0; m < PI * 2; m += random()) {
      r = random(20, 50);
      let x = cos(m) * r;
      let y = sin(m) * r;
      sk.vertex(x, y);
    }
    sk.endShape(CLOSE);
    sk.pop();
  }
};
