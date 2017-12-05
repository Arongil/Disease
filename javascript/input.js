function initInput(canvas) {
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
  let panelID;
  function panelMouseDown(t)
  {
    panelID = t;
  }
  function panelMouseUp()
  {
    panelID = undefined;
  }
  document.onmousemove = function(e) {
    var x = e.clientX - window.innerWidth/2;

    var y = e.clientY - HALFHEIGHT - HEIGHT/40;
    Input["mousepos"]["x"] = x;
    Input["mousepos"]["y"] = y;
    
    if(panelID)
    {
      document.getElementById(panelID).style.left = (e.clientX / window.innerWidth) * 100 + '%';
      document.getElementById(panelID).style.top = (e.clientY / window.innerHeight) * 100 + '%';
    }
  };
}
