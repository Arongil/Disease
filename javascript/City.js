class City {
  
  constructor(name, latitude, longitude, population) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.pos = convert_coords(latitude, longitude, WIDTH, HEIGHT);
    this.population = population;
    this.radius = WIDTH/4000 * Math.log(population);
    this.airline;
    this.agents = [];
    this.agentNum = Math.ceil((this.population / 5e8) * GC.agentNum);
    for (var i = 0; i < this.agentNum; i++) {
      this.agents.push(new Agent(
        this.pos,
        new Vector2D(0, 0),
        this
      ));
    }
  }
  
  display() {
    fill(200, 200, 0);
    ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
  }
  
  update() {
    this.agents.forEach(agent => agent.update());
    this.display();
  }
  
}
