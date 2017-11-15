class GameController {

  constructor() {
    this.cities = [];
    this.agentNum = 200;
  }
  
  initCities() {
    var cityData = readCSV("/disease/resources/map-data.csv");
    for (var i = 0, city; i < cityData.length; i++) {
      city = cityData[i];
      this.cities.push(new City(city[0], city[2], city[3], city[4])); // name, latitude, longitude, population
    }
  }
  
  update() {
    image("resources/map.png", 0, 0, WIDTH, HEIGHT);
    
    this.cities.forEach(city => city.update());
  }
  
}
