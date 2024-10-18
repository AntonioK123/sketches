let s, xoff, yoff, v2;
const seed = ~~(fxrand() * 1e9);
let sketchWidth = 800;
let sketchHeight = 600;
let distArr = [];
for (let i = 0; i < 1; i++) {
  distArr[distArr.length] = 0.1;
}
const mainShapeArr = [...distArr, 1];
let mainShapeDensity = mainShapeArr[~~(fxrand() * mainShapeArr.length)];
const mainShapeThreeValArr = [1, 1, 1, 2];
let mainShapeThreeVal =
  mainShapeThreeValArr[~~(fxrand() * mainShapeThreeValArr.length)];
const backgroundTextureSizeArr = [1, 1, 1, 1, 2, 3];
let backgroundTextureSize =
  backgroundTextureSizeArr[~~(fxrand() * backgroundTextureSizeArr.length)];
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

  [
    "#ff4800",
    "#ff5400",
    "#ff6000",
    "#ff6d00",
    "#ff7900",
    "#ff8500",
    "#ff9100",
    "#ff9e00",
    "#ffaa00",
    "#ffb600",
  ],

  ["#003049", "#d62828", "#f77f00", "#fcbf49", "#eae2b7"],
  [
    "#780000",
    "#660000",
    "#520000",
    "#3d0000",
    "#290000",
    "#e30613",
    "#c70512",
    "#eb1d1d",
    "#f50f0f",
    "#ff0000",
  ],
  [
    "#042E03",
    "#5B7E27",
    "#1D5408",
    "#0A3006",
    "#345519",
    "#1D5E07",
    "#5B8033",
    "#1A3317",
    "#63A52B",
    "#889A62",
    "#63A52B",
    "#33700D",
    "#284917",
    "#889A62",
    "#042E03",
    "#5B7E27",
    "#1D5408",
    "#5B8033",
    "#40662B",
    "#060F0B",
  ],
  [
    "#BBC6D6",
    "#324485",
    "#0B192F",
    "#B4BFD0",
    "#080D18",
    "#0C2A42",
    "#193559",
    "#3B6795",
    "#ADB7C9",
    "#778EAF",
  ],
  [
    "#BBC6D6",
    "#293669",
    "#84A4BE",
    "#193559",
    "#3581AB",
    "#182A4B",
    "#324485",
    "#3B6795",
    "#0C2A42",
    "#44A7BF",
  ],
  [
    "#768A9F",
    "#8C4A27",
    "#573E31",
    "#8C8789",
    "#8096AE",
    "#7D777B",
    "#492A1B",
    "#A05932",
    "#6E3A1F",
    "#5B301C",
  ],
  [
    "#6E3A1F",
    "#8FA0B3",
    "#8096AE",
    "#422D23",
    "#909CA9",
    "#5B301C",
    "#768A9F",
    "#728FAB",
    "#573E31",
    "#A05932",
  ],
  [
    "#545D6E",
    "#555155",
    "#6C666E",
    "#3C3234",
    "#917E6E",
    "#A9AAAE",
    "#6B544B",
    "#CAC1BC",
    "#846355",
    "#7B7C8B",
  ],
  [
    "#954032",
    "#C46A4F",
    "#A26355",
    "#25282E",
    "#EB9862",
    "#262D41",
    "#20212C",
    "#F88F46",
    "#EA864A",
    "#694E4E",
    "#C46A4F",
    "#EB9862",
    "#20212C",
    "#F88F46",
    "#A26355",
    "#DF7448",
    "#162333",
    "#1F2636",
    "#D35635",
    "#142631",
    "#F88F46",
    "#954032",
    "#E1AB84",
    "#C46A4F",
    "#E67139",
    "#EB9862",
    "#DF7448",
    "#A26355",
    "#462A29",
    "#142536",
  ],
  [
    "#16ADED",
    "#7C296B",
    "#B80D15",
    "#8CE1FA",
    "#806FA8",
    "#5BD9FA",
    "#86072D",
    "#F85B10",
    "#5B4C9A",
    "#526EAB",
    "#526EAB",
    "#9B92D2",
    "#07CEFB",
    "#864D94",
    "#618BD5",
    "#1D84D8",
    "#16ADED",
    "#86072D",
    "#7C296B",
    "#5B4C9A",
    "#618BD5",
    "#07CEFB",
    "#B80D15",
    "#FF5303",
    "#FC2F01",
    "#E8303A",
    "#16ADED",
    "#7E4376",
    "#FF7108",
    "#DE0400",
  ],
  [
    "#F0C53E",
    "#1D4B5E",
    "#9A8D35",
    "#EC6B1E",
    "#F3BB13",
    "#E6D3A1",
    "#EF940F",
    "#175A74",
    "#6C5C51",
    "#274941",
    "#97B37F",
    "#EC6B1E",
    "#1B2B39",
    "#328283",
    "#8B4B22",
    "#274941",
    "#E9320E",
    "#E6D3A1",
    "#DEC67D",
    "#1D4B5E",
    "#DEC67D",
    "#EC6B1E",
    "#E59750",
    "#6C5C51",
    "#97B37F",
    "#E9320E",
    "#F0C53E",
    "#1D4B5E",
    "#E6D3A1",
    "#274941",
  ],
  [
    "#AF3F07",
    "#481F03",
    "#371F0B",
    "#7D3506",
    "#9A5B11",
    "#602F07",
    "#451601",
    "#66401D",
    "#4A2E17",
    "#7E4A13",
    "#1D0800",
    "#C67A24",
    "#CD7808",
    "#9A5B11",
    "#7D3506",
    "#4C2705",
    "#481F03",
    "#241508",
    "#371F0B",
    "#693A07",
    "#341001",
    "#7E4A13",
    "#693A07",
    "#4C2705",
    "#4A2E17",
    "#944008",
    "#AF3F07",
    "#7D3506",
    "#5C1E02",
    "#241508",
    "#7D3506",
    "#C67A24",
    "#7E4A13",
    "#451601",
    "#4A2E17",
    "#CD7808",
    "#693A07",
    "#944008",
    "#5C1E02",
    "#66401D",
    "#C97600",
    "#F7BA00",
    "#9C3203",
    "#F8A400",
    "#D97F05",
    "#D87C09",
    "#B54D16",
    "#D37F02",
    "#921700",
    "#AF5015",
  ],
  [
    "#AF2250",
    "#B37659",
    "#641743",
    "#052976",
    "#642657",
    "#BF1D2D",
    "#3A2344",
    "#201945",
    "#241335",
    "#112D60",
    "#13457D",
    "#C87837",
    "#201945",
    "#642657",
    "#F99730",
    "#052976",
    "#0A4C9B",
    "#B37659",
    "#0F1B5C",
    "#641743",
    "#0A4C9B",
    "#241335",
    "#FA9447",
    "#3A2344",
    "#B37659",
    "#AF2250",
    "#642657",
    "#C87837",
    "#13457D",
    "#BF1D2D",
  ],
  [
    "#7400b8",
    "#8013bd",
    "#8b26c3",
    "#9739c8",
    "#a24ccd",
    "#ae60d3",
    "#b973d8",
    "#c586dd",
    "#d099e3",
    "#dcace8",
  ],
  [
    "#e87d2a",
    "#e87721",
    "#de6d17",
    "#cb6415",
    "#b95b13",
    "#a65211",
    "#944910",
    "#81400e",
    "#6e370c",
    "#5c2e0a",
  ],
  [
    "#e3b47c",
    "#d8a975",
    "#ce9f6f",
    "#c59769",
    "#bc8e63",
    "#b4865d",
    "#ad7f58",
    "#a57753",
    "#9c6e4e",
    "#926448",
  ],
  [
    "#310055",
    "#3c0663",
    "#4a0a77",
    "#5a108f",
    "#6818a5",
    "#8b2fc9",
    "#ab51e3",
    "#bd68ee",
    "#d283ff",
    "#dc97ff",
  ],
  [
    "#f992ad",
    "#fbbcee",
    "#fab4c8",
    "#f78ecf",
    "#cfb9f7",
    "#e0cefd",
    "#a480f2",
    "#d4b0f9",
    "#c580ed",
  ],
  ["#ff9286", "#fbb3a5", "#ffc5ba", "#ffe5e5", "#f4b7c6", "#ff92b1", "#fe7295"],
  [
    "#332E28",
    "#C58A5C",
    "#4E433E",
    "#634538",
    "#50321C",
    "#32271C",
    "#4E382A",
    "#3E3835",
    "#3C2818",
    "#A44E2D",
    "#32271C",
    "#C58A5C",
    "#8E5D3C",
    "#322314",
    "#292117",
    "#3C2818",
    "#442F1E",
    "#332E28",
    "#3E3835",
    "#634538",
    "#3C2818",
    "#50321C",
    "#4E433E",
    "#462A17",
    "#A5673C",
    "#1F1D15",
    "#A44E2D",
    "#4E382A",
    "#322314",
    "#81492D",
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
    sk.save(`Recuerdos de Naica (${fxhash}).png`);
  }
  if (key === "s" || key === "S") {
    let sk = createSketch(width * 3, height * 3);
    sk.save(`Recuerdos de Naica (${fxhash}).png`);
  }
  if (key === "d" || key === "D") {
    let sk = createSketch(width * 4, height * 4);
    sk.save(`Recuerdos de Naica (${fxhash}).png`);
  }
  if (key === "f" || key === "F") {
    let sk = createSketch(width * 6, height * 6);
    sk.save(`Recuerdos de Naica (${fxhash}).png`);
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

  sk.push();
  backgroundTexture(sk);
  sk.pop();

  sk.push();
  mainShape(sk);
  sk.pop();

  sk.push();
  texture3(sk);
  sk.pop();

  frame(sk);
  noiseFilter(sk, scale, 15);
  return sk;
};

const frame = (sk) => {
  rectMode(CORNER);
  sk.push();
  sk.noFill();
  sk.stroke(20);
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

const backgroundGradient = (sk) => {
  let grad = drawingContext.createRadialGradient(0, 0, 0, 100, 100, 800);
  grad.addColorStop(1, hexToRgba("#fff")); //Donji dio canvasa boja
  grad.addColorStop(0.5, hexToRgba("#000")); //Srednji dio canvasa boja
  grad.addColorStop(0, hexToRgba(random(palette)), 0.5); // Gornji dio canvasa boja
  sk.drawingContext.fillStyle = grad;
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

const texture3 = (sk) => {
  sk.noStroke();
  sk.strokeWeight(0.028);
  sk.noFill();
  for (i = 0; i < 500; i++) {
    let t = random(0.5, 5);
    sk.colorMode(HSB, 360, 100, 100, 100);
    sk.fill(
      hue(random(palette)),
      saturation(random(palette)),
      brightness(random(palette)),
      0.9
    );
    sk.stroke(
      hue(random(palette)),
      saturation(random(palette)),
      brightness(random(palette)),
      80
    );
    sk.push();
    sk.translate(random(0, sketchWidth), random(0, sketchHeight));
    sk.rotate(random(-5, 5));
    sk.beginShape();
    for (m = 0; m < random(4000, 5000); m += 100) {
      let r = 2.5 * sqrt(random(random())) * random(15, 30);
      let th = random(5);
      let x1 = cos(th);
      let y1 = (sin(th * t) * r) / random(2);
      let x2 = cos(th) * r;
      let y2 = (sin(th * t) * r) / random(5);
      sk.rect(x1, y1 * th, x2, y2);
    }
    sk.endShape(CLOSE);
    sk.pop();
  }
};

const backgroundTexture = (sk) => {
  sk.noStroke();
  sk.strokeWeight(0.01);
  sk.stroke(0);
  for (i = 0; i < 200; i++) {
    sk.push();
    sk.translate(random(0, sketchWidth), random(0, sketchHeight));
    sk.beginShape();
    for (m = 0; m < 1000; m += 1) {
      backgroundGradient(sk);
      if (backgroundTextureSize === 1) {
        let th = random(TWO_PI);
        let x = cos(th) * 20;
        let y = sin(th) * random(500);
        sk.curveVertex(x, y);
      } else if (backgroundTextureSize === 2) {
        let th = random(TWO_PI);
        let x = cos(th) * 10;
        let y = sin(th) * random(500);
        sk.curveVertex(x, y);
      } else {
        let th = random(TWO_PI);
        let x = cos(th) * 10;
        let y = sin(th) * random(100);
        sk.curveVertex(x, y);
      }
    }
    sk.endShape(CLOSE);
    sk.pop();
  }
};

const mainShape = (sk) => {
  sk.noStroke();
  sk.fill(0);
  v2 = createVector(50, 300);
  if (mainShapeDensity === 0.1) {
    sk.translate(random(-150, 0), 0);
  } else if (mainShapeDensity === 1) {
    sk.translate(random(-150, 0), 0);
  } else {
    sk.translate(random(-150, 0), -200);
  }
  if (mainShapeThreeVal === 1) {
    sk.beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < v2.x; x += 1) {
      xoff = 0.001;
      for (let y = 0; y < v2.y; y += 0.5) {
        let n = map(noise(x, y), 0, 1, 45, 200);
        sk.vertex(x * n, y * n);
      }
      yoff = 0.1;
    }
    sk.endShape();
  } else {
    sk.beginShape();
    for (let x = 0; x < v2.x; x += 1) {
      xoff = 0.001;
      for (let y = 0; y < v2.y; y += 1) {
        let n = map(noise(x, y), 0, 1, 35, 100);
        sk.vertex(x * n, y * n);
      }
      yoff = 0.1;
    }
    sk.endShape();
  }
};

//Varijante za novi rad varijacije
sk.rect((x * cos(i)) / sin(i), (y * sin(i) * cos(i)) / sin(i), 50);

sk.rect((x * cos(i)) / sin(i) / cos(i), (y * sin(i) * cos(i)) / sin(i), 50);

sk.circle((x * cos(i)) / sin(i), (y * sin(i) * cos(i)) / sin(i), 50);

sk.rect((x * cos(i)) / sin(i), (y * sin(i) * cos(i)) / sin(i), i);

sk.rect((y * cos(i)) / sin(i), (x * sin(i) * cos(i)) / sin(i), 50);

sk.circle((x * cos(i)) / sin(i), (y * sin(i) * cos(i)) / sin(i), 50);

//Ovde moze random uzet array za broj nPointsa za poligon
polygon(sk, (x * cos(i)) / sin(i), (y * sin(i) * cos(i)) / sin(i), 50, 3);
