// Gall Peters projection conversion
const RADIUS = 6378.1 /* radius of Earth in kilometers */, sq2 = Math.sqrt(2);
function convert_coords(latitude, longitude) {
  return new Vector2D(RADIUS * Math.PI * longitude / (180 * sq2), RADIUS * sq2 * Math.sin(latitude));
}
