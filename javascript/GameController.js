class GameController {

  constructor() {
    this.agents = [];
    // temp *********
    for (var i = 0; i < 100; i++) {
      this.agents.push(new Agent(
        2*(Math.random()-1/2) * WIDTH,
        2*(Math.random()-1/2) * HEIGHT,
        2*(Math.random()-1/2) * WIDTH / 1000,
        2*(Math.random()-1/2) * WIDTH / 1000,
      ));
    }
    // temp *********
  }
  
  update() {
    // temp *********
    this.agents.forEach(agent => agent.update());
    // temp *********
  }
  
}
