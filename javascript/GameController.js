class GameController {

  constructor() {
    this.cities = [];
    this.agentNum = 200;
  }
  
  initCities() {
    var cityData;
    Papa.parse("/disease/resources/map-data.csv", {
      header: true,
      complete: function(results) {
        cityData = results.data;
      }
    });
    for (var i = 0, city; i < cityData.length; i++) {
      city = cityData[i];
      this.cities.push(new City(city["city"], city["lat"], city["lng"], city["pop"])); // name, latitude, longitude, population
    }
  }
  
  update() {
    image("resources/map.png", 0, 0, WIDTH, HEIGHT);
    
    this.cities.forEach(city => city.update());
  }
  
}
