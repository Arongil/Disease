var Input = {
  // 37 is the left arrow. 38 is the up arrow. 39 is the right arrow.
  "37": false,
  "38": false,
  "39": false,
  "40": false,
  "32": false,
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
body.onmouseup = function(e) {
  Input["click"] = true;
};
document.onmousemove = function(e) {
  var x = e.clientX - window.innerWidth/2;

  var y = e.clientY - HALFHEIGHT - 8;
  Input["mousepos"]["x"] = x;
  Input["mousepos"]["y"] = y;
};
