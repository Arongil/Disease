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
  
  onLand() {
    var pixelColor = colorAt(this.pos.x, this.pos.y);
    if (pixelColor[0] < 200 || pixelColor[1] < 200 || pixelColor[2] < 200) { // not white => water
      this.pos.shift(this.vel.getScaled(-1));
      this.vel = Vector2D.FromPolar(this.vel.getMagnitude(), Math.random() * 2*Math.PI);
    }
  }
  
  physics() {
    this.pos.shift(this.vel);
//     this.onLand();
  }
  
  update() {
    this.physics();
    this.display();
  }
  
}
