class Airline {
  
  constructor(city) {
    this.city = city;
  }
  
  findFlight() {
    // Lower population cities don't have flights available as often.
    if (Math.random() * this.city.population < 1e6)
      return;
    // The algorithm chooses cities with higher populations more frequently.
    var personIndex = Math.random() * GC.WORLDPOPULATION;
    for (var i = 0; personIndex > 0; i++, personIndex -= GC.cities[i].population);
    return GC.cities[i];
  }
  
}
