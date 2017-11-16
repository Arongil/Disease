// Gall Peters projection conversion
function convert_coords(latitude, longitude, WIDTH, HEIGHT) {
  return new Vector2D(WIDTH/2 * longitude / 180, -HEIGHT/2 * Math.sin(latitude * Math.PI/180));
}
