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
  
  fly(destination) {
    stroke(100, 100, 100);
    line(this.city.pos.x, this.city.pos.y, destination.pos.x, destination.pos.y);

    this.city.agents.splice(this.city.agents.indexOf(this), 1);
    this.city = destination;
    this.city.agents.push(this);
  }
  
  travel() {
    if (this.flightData) {
      this.flightData.daysUntilReturn--;
      if (this.flightData.daysUntilReturn == 0) {
        this.fly(this.flightData.origin);
        this.flightData = undefined;
      }
    }
    else if (Math.random() < 0.01) {
      this.flightData = {"moving": Math.random() < 0.05, "destination": this.city.airline.findFlight(), "origin": this.city};
      if (this.fightData.destination) { // A flight is available
        this.fly(this.flightData.destination);
        
        if (!this.flightData.moving) {
          let n = Math.random() * 14 + 3;
          this.flightData.daysUntilReturn = Math.floor(n * (Math.log(n) - 1));
        }
        else {
          this.flightData = undefined;
        }
      }
    }
  }
  
  update() {
    this.travel();
    this.display();
  }
  
}
