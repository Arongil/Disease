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

window.onkeydown = function(e) {
  if (Input[e.keyCode] !== undefined) {
    Input[e.keyCode] = true;
  }
};
window.onkeyup = function(e) {
  if (Input[e.keyCode] !== undefined) {
    Input[e.keyCode] = false;
  }
};
canvas.onmouseup = function(e) {
  Input["click"] = true;
};
document.onmousemove = function(e) {
  var x = e.clientX - window.innerWidth/2;

  var y = e.clientY - HALFHEIGHT - 8;
  Input["mousepos"]["x"] = x;
  Input["mousepos"]["y"] = y;
};
