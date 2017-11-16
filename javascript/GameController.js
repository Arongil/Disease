class GameController {

  constructor() {
    this.cities = [];
    this.agentNum = 200;
  }
  
  initCities() {
    for (var i = 1, city; i < map_data.length; i++) {
      city = map_data[i];
      this.cities.push(new City(city[0], parseInt(city[2]), parseInt(city[3]), parseInt(city[4]))); // name, latitude, longitude, population
    }
  }
  
  update() {
    image("resources/map.png", 0, 0, WIDTH, HEIGHT);
    
    this.cities.forEach(city => city.update());
  }
  
}
