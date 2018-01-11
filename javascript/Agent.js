class Agent {
  
  constructor(pos, city) {
    this.pos = pos;
    this.size = WIDTH / 400;
    
    this.city = city;
    
    this.healthy = true;
    this.recovered = false; // true if successfully recovered
    this.timeSick = 0;
    this.timeRecovered = 0;
  }
  
  display() {
    if (!this.healthy) // unhealthy => red
      fill(200, 0, 0);
    else if (!this.recovered) // healthy but not immune => green
      fill(0, 200, 0);
    else // healthy and immume => blue
      fill(0, 0, 200);
    noStroke();
    ellipse(this.pos.x + (Math.random() - 0.5) * this.city.radius/2, this.pos.y + (Math.random() - 0.5) * this.city.radius/2, this.size, this.size);
  }
  
  infect() {
    if (this.healthy)
      return;
    
    // Not healthy: every agent in the city has a chance of getting infected.
    this.city.agents.forEach(agent => {
      if (agent === this)
        return;
      if (Math.random() < GC.infectiousness * (agent.recovered ? GC.recoveredProtection : 1)) {
        agent.healthy = false;
        agent.timeSick = 0;
      }
    });
  }
  
  makeRecovered() {
    this.healthy = true;
    this.recovered = true; // Assume a recovered agent has the antibodies to not become infected again.
    this.timeRecovered = 0;
    this.timeSick = 0;
    this.city.healthyAgents.push(this);
  }
  recover() {
    if (this.healthy) {
      if (this.recovered) {
        this.timeRecovered++;
        if (this.timeRecovered > GC.recoveredDays)
          this.recovered = false;
      }
      return;
    }
    // Agents' chance of recovery per frame follows the curve 1 / (a + e^(b-t)), where t = this.timeSick.
    if (Math.random() < 1 / (1/GC.maximumRecoveryChance + Math.exp(GC.daysToMaximumRecoveryChance-this.timeSick)) * (this.recovered ? GC.recoveredRecoveryFactor : 1)) { // Recovery.
        this.makeRecovered();
    }
    if (Math.random() < GC.deadlyness * (this.recovered ? GC.recoveredDeathFactor : 1)) { // Death: remove from city agents list.
      this.city.agents.splice(this.city.agents.indexOf(this), 1);
    }
    this.timeSick++;
  }
  
  fly(destination) {
    if (!this.healthy && Math.random() < this.city.airline.infectedRejectionRate) {
      this.flightData = undefined;
      return;
    }
//     stroke(100, 100, 100);
//     geodesic(this.city, destination, 20, WIDTH, HEIGHT);

    this.city.agents.splice(this.city.agents.indexOf(this), 1);
    if (this.healthy)
      this.city.healthyAgents.splice(this.city.healthyAgents.indexOf(this));
    this.city = destination;
    this.pos = this.city.pos;
    this.city.agents.push(this);
    if (this.healthy)
      this.city.healthyAgents.push(this);
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
      if (this.flightData.destination) { // A flight is available
        this.fly(this.flightData.destination);
        
        if (this.flightData !== undefined) {
          if (!this.flightData.moving) { // If not moving, fly back home after 1 - 27 days.
            this.flightData.daysUntilReturn = Math.floor( Math.pow(5, 4*Math.random() - 2) + 2);
          }
        }
      }
      else { // No flights available: reset and retry.
        this.flightData = undefined;
      }
    }
  }
  
  update() {
    this.travel();
    this.infect();
    this.recover();
  }
  
}
