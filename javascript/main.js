var canvas, ctx, WIDTH, HEIGHT, HALFWIDTH, HALFHEIGHT, ASPECTRATIO = 85/54; // aspectRatio is desired WIDTH/HEIGHT ratio.
var GC;
var Input = {
  "37": false, // left arrow
  "38": false, // up arrow
  "39": false, // right arrow
  "40": false, // down arrow
  "32": false, // spacebar
  "click": false,
  "mousepos": {
    "x": 0,
    "y": 99999
  }
};

function resize() {
  ctx.translate(-HALFWIDTH, -HALFHEIGHT);
  
  canvas.width = 4/5 * window.innerWidth;
  canvas.height = canvas.width / ASPECTRATIO;
  if (canvas.height > 7/8 * window.innerHeight) {
    // If the height is greater than the height of the screen, set it accordingly.
    canvas.height = 7/8 * window.innerHeight;
    canvas.width = canvas.height * ASPECTRATIO;
  }
  document.getElementById("canvas").style.marginLeft = 1/10 * window.innerWidth;
  document.getElementById("canvas").style.marginRight = 1/10 * window.innerWidth;
  document.getElementById("canvas").style.marginTop = 1/20 * window.innerWidth;
  
  WIDTH = canvas.width;
  HEIGHT = canvas.height;
  HALFWIDTH = WIDTH / 2;
  HALFHEIGHT = HEIGHT / 2;
  
  ctx.translate(HALFWIDTH, HALFHEIGHT);
}

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  
  var body = document.getElementsByTagName("body")[0];
  body.onresize = resize;
  resize();
  
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  
  ctx.translate(HALFWIDTH, HALFHEIGHT);
  
  initInput(canvas);
  
  GC = new GameController();
  window.setTimeout(GC.initCities.bind(GC), 500); // initialize cities after 500 milliseconds so the image is loaded.
  
  loop();
}

function loop() {
  GC.update();
  
  Input.click = false;
  window.requestAnimationFrame(loop);
}
window.onload = init;
