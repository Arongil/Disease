class Airline {
  
  constructor(city) {
    this.city = city;
    this.infectedRejectionRate = 0.1; // Fraction of infected passengers rejected and forced to miss their flight.
  }
  
  distanceTo(otherCity) {
    // Credit to https://www.movable-type.co.uk/scripts/latlong.html
    var R = 6371e3; // metres
    var lat1 = this.city.latitude * Math.PI/180;
    var lat2 = otherCity.latitude * Math.PI/180;
    var latDiff = (lat2-lat1);
    var lonDiff = (otherCity.longitude - this.city.longitude) * Math.PI/180;

    var a = Math.sin(latDiff/2) * Math.sin(latDiff/2) +
            Math.cos(lat1) * Math.cos(lat2) *
            Math.sin(lonDiff/2) * Math.sin(lonDiff/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return R * c;
  }
  
  findFlight() {
    // Choose closer cities with higher populations more frequently.
    var total = 0;
    GC.cities.forEach(city => {
      if (city !== this.city)
        total += city.population / this.distanceTo(city);
    });
    for (var i = -1, cityIndex = Math.random() * total; cityIndex > 0; i++)
      if (GC.cities[i] !== this.city)
        cityIndex -= GC.cities[i].population / this.distanceTo(GC.cities[i]);
    return GC.cities[i];
  }
  
}
