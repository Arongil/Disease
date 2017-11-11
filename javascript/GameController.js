class GameController {

  constructor() {
    this.agents = [];
    // temp *********
    for (var i = 0, x, y, color; i < 1000; i++) {
      x = 2*(Math.random()-1/2) * WIDTH;
      y = 2*(Math.random()-1/2) * HEIGHT;
      color = colorAt(x, y);
      while (color[0] < 200 || color[1] < 200 || color[2] < 200) {
        x = 2*(Math.random()-1/2) * WIDTH;
        y = 2*(Math.random()-1/2) * HEIGHT;
        color = colorAt(x, y);
      }
      
      this.agents.push(new Agent(
        new Vector2D(x, y),
        new Vector2D(Math.random() * WIDTH/200, Math.random() * 2*Math.PI);
      ));
    }
    // temp *********
  }
  
  update() {
    image("resources/map.png", 0, 0, WIDTH, HEIGHT);
    
    this.agents.forEach(agent => agent.update());
  }
  
}
