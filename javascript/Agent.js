class Agent {
  
  constructor(x, y, xVel, yVel) {
    this.pos = new Vector2D(x, y);
    this.vel = new Vector2D(xVel, yVel);
    this.size = WIDTH / 200;
    
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
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
  
  physics() {
    this.pos.shift(this.vel);
  }
  
  update() {
    physics();
    display();
  }
  
}
