class City {
  
  constructor(name, latitude, longitude, population) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.pos = convertCoords(latitude, longitude, WIDTH, HEIGHT);
    this.population = population;
    this.radius = WIDTH/1200 * (Math.log(population) - 11);
    this.radiusSquared = this.radius*this.radius;
    this.airline = new Airline(this);
    this.agents = [];
  }
  
  initAgents() {
    this.agentNum = Math.ceil((this.population / GC.WORLDPOPULATION) * GC.agentNum);
    for (var i = 0; i < this.agentNum; i++) {
      this.agents.push(new Agent(
        this.pos,
        new Vector2D(0, 0),
        this
      ));
    }
  }
  
  infoCard() {
    fill(0, 0, 0, 0.4);
    rect(this.pos.x, this.pos.y + this.radius + HEIGHT/10, WIDTH/4, HEIGHT/5);
    fill(255, 255, 255);
    textWrap(this.name + ": population: " + this.population +
         "latitude: " + Math.floor(this.latitude * 1000) / 1000 +
         "longitude: " + Math.floor(this.longitude * 1000) / 1000,
         this.pos.x, this.pos.y + this.radius + HEIGHT/10, WIDTH/4, HEIGHT/20);
  }
  
  display() {
    fill(200, 200, 0);
    ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    // If the mouse is over a city, display additional information.
    var distSquared = Math.pow(this.pos.x - Input.mousepos.x, 2) + Math.pow(this.pos.y - Input.mousepos.y, 2);
    if (distSquared < this.radiusSquared) {
      this.infoCard();
    }
  }
  
  update() {
    this.agents.forEach(agent => agent.update());
    this.display();
  }
  
}
