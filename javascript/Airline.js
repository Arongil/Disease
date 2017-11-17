class Airline {
  
  constructor(city) {
    this.city = city;
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
    // Lower population cities don't have flights available as often.
    if (Math.random() * this.city.population < 1e6)
      return;
    // Choose cities with higher populations more frequently. Of 2 cities chosen like this, return the closer one.
    var choices = [];
    while (choices.length < 2) {
      var personIndex = Math.random() * GC.WORLDPOPULATION;
      for (var i = -1; personIndex > 0; i++, personIndex -= GC.cities[i].population);
      choices.push({"city": GC.cities[i], "distance": this.distanceTo(GC.cities[i])});
    }
    return choices[0].distance < choices[1].distance ? choices[0].city : choices[1].city;
  }
  
}
