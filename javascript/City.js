class City {
  
  constructor(latitude, longitude, population, agentCount) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.pos = convert_coords(latitude, longitude);
    this.population = population;
    this.radius = WIDTH/400 + WIDTH/2000 * Math.log(population);
    this.airline;
    this.agents = [];
    for (var i = 0; i < agentCount; i++)
      this.agents.push(new Agent(this.pos);
  }
  
  display() {
    fill(200, 200, 0);
    ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
  }
  
}
