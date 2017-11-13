const R = 6378.1 /* kilometers */, sq2 = Math.sqrt(2);
function convert_coords(lng, lat) {
  return new Vector2D(R * Math.PI * lng / (180 * sq2), R * sq2 * Math.sin(lat));
}
