class GameController {

  constructor() {
    this.agents = [];
  }
  
  initAgents() {
    for (var i = 0, x, y, color; i < 1000; i++) {
      do {
        x = (Math.random()-1/2) * WIDTH;
        y = (Math.random()-1/2) * HEIGHT;
        color = colorAt(x, y);
      } while (color[0] < 200 || color[1] < 200 || color[2] < 200);
      
      this.agents.push(new Agent(
        new Vector2D(x, y),
        Vector2D.FromPolar(Math.random() * WIDTH/200, Math.random() * 2*Math.PI)
      ));
    }
  }
  
  update() {
    image("resources/map.png", 0, 0, WIDTH, HEIGHT);
    
    this.agents.forEach(agent => agent.update());
  }
  
}
