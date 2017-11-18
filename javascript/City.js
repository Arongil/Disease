class City {
  
  constructor(name, latitude, longitude, population, country) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.pos = convertCoords(latitude, longitude, WIDTH, HEIGHT);
    this.population = population;
    this.country = country;
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
    // If the mouse is over a city, display additional information.
    var distSquared = Math.pow(this.pos.x - Input.mousepos.x, 2) + Math.pow(this.pos.y - Input.mousepos.y, 2);
    if (distSquared > this.radiusSquared)
      return;
    
    fill(0, 0, 0, 0.6);
    rect(this.pos.x, this.pos.y + this.radius + HEIGHT/10, WIDTH/4, HEIGHT/5);
    fill(255, 255, 255);
    textSize(HEIGHT/30);
    text("-" + this.name + "-", this.pos.x, this.pos.y + this.radius + 1.25*HEIGHT/30);
    text("country: " + this.country, this.pos.x, this.pos.y + this.radius + 2.5*HEIGHT/30);
    text("population: " + this.population, this.pos.x, this.pos.y + this.radius + 3.5*HEIGHT/30);
    text("latitude: " + Math.floor(this.latitude * 1000) / 1000, this.pos.x, this.pos.y + this.radius + 4.5*HEIGHT/30);
    text("longitude: " + Math.floor(this.longitude * 1000) / 1000, this.pos.x, this.pos.y + this.radius + 5.5*HEIGHT/30);
  }
  
  display() {
    fill(200, 200, 0);
    ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
  }
  
  reposition() {
    this.pos = convertCoords(this.latitude, this.longitude, WIDTH, HEIGHT);  
  }
  
  update() {
    this.agents.forEach(agent => agent.update());
    this.display();
  }
  
}
