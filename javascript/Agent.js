class Agent {
  
  constructor(pos, vel, city) {
    this.pos = pos;
    this.vel = vel;
    this.size = WIDTH / 400;
    
    this.city = city;
    
    this.healthy = true;
    this.immune = false; // true if successfully recovered
  }
  
  display() {
    if (!this.healthy) // unhealthy => red
      fill(200, 0, 0);
    else if (!this.immune) // healthy but not immune => green
      fill(0, 200, 0);
    else // healthy and immume => blue
      fill(0, 0, 200);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
  
  fly() {
    if (Math.random() < 0.01) {
      this.flightData = {"moving": Math.random() < 0.05, "destination": this.city.airline.findFlight()};
      if (this.fightData.city) { // A flight is available
        stroke(100, 100, 100);
        line(this.city.pos.x, this.city.pos.y, this.flightData.destination.pos.x, this.flightData.destination.pos.y);
        
        this.city.agents.splice(this.city.agents.indexOf(this), 1);
        this.city = this.flightData.destination;
        this.city.agents.push(this);
      }
    }
  }
  
  update() {
    this.fly();
    this.display();
  }
  
}
