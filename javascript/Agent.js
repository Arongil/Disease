class Agent {
  
  constructor(pos, vel, city) {
    this.pos = pos;
    this.vel = vel;
    this.size = WIDTH / 400;
    
    this.city = city;
    this.citiesToVisit = [];
    
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
    geodesic(this.city, destination, 20, WIDTH, HEIGHT);
    
    this.citiesToVisit.splice(this.citiesToVisit.indexOf(destination), 1);
    this.city.agents.splice(this.city.agents.indexOf(this), 1);
    this.city = destination;
    this.city.agents.push(this);
  }
  
  travel() {
//     if (this.flightData) {
//       this.flightData.daysUntilReturn--;
//       if (this.flightData.daysUntilReturn == 0) {
//         this.fly(this.flightData.origin);
//         this.flightData = undefined;
//       }
//     }
//     else if (Math.random() < 0.01) {
//       this.flightData = {"moving": Math.random() < 0.05, "destination": this.city.airline.findFlight(), "origin": this.city};
//       if (this.flightData.destination) { // A flight is available
//         this.fly(this.flightData.destination);
        
//         if (!this.flightData.moving) { // If not moving, fly back home after 1 - 27 days.
//           this.flightData.daysUntilReturn = Math.floor( Math.pow(5, 4*Math.random() - 2) + 2);
//         }
//         else {
//           this.flightData = undefined;
//         }
//       }
//       else { // No flights available: reset and retry.
//         this.flightData = undefined;
//       }
//     }
//   }
  
//   update() {
//     this.travel();
//     this.display();
//   }
  
}
