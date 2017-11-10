var Vector2D = (function() {
  
  function Vector2D(x, y) {
    this.x = x;
    this.y = y;
  }
  
  Vector2D.FromPolar = function(angle, radius) {
    return new Vector2D(radius * Math.cos(angle), radius * Math.sin(angle));
  };
  
  Vector2D.prototype.clone = function() {
    return new Vector2D(this.x, this.y);
  };
  
  Vector2D.prototype.getMagnitude = function() {
    return Math.sqrt(this.x*this.x + this.y*this.y);
  };
  
  Vector2D.prototype.getShifted = function(other) {
    return new Vector2D(this.x + other.x, this.y + other.y);
  };
  Vector2D.prototype.shift = function(other) {
    this.x += other.x;
    this.y += other.y;
  };
  
  Vector2D.prototype.getScaled = function(scalar) {
    return new Vector2D(scalar * this.x, scalar * this.y);
  };
  Vector2D.prototype.scale = function(scalar) {
    this.x *= scalar;
    this.y *= scalar;
  };
  
  Vector2D.prototype.getRotated = function(angle) {
    return new Vector2D(this.x*Math.cos(angle) - this.y*Math.sin(angle), this.x*Math.sin(angle) + this.y*Math.cos(angle));
  };
  Vector2D.prototype.rotate = function(angle) {
    var x = this.x;
    this.x = x*Math.cos(angle) - this.y*Math.sin(angle);
    this.y = x*Math.sin(angle) + this.y*Math.cos(angle);
  };
  
  return Vector2D;
}());
