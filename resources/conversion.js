// Gall Peters projection conversion
const RADIUS = 6378.1 /* radius of Earth in kilometers */, sq2 = Math.sqrt(2);
function convert_coords(latitude, longitude, WIDTH, HEIGHT) {
  return new Vector2D(WIDTH * longitude / (180 * sq2), HEIGHT/2 * Math.sin(latitude));
}
