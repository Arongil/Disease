class GameController {

  constructor() {
    this.cities = [];
    this.agentNum = 200;
  }
  
  initCities() {
    for (var i = 1, city; i < map_data.length; i++) {
      city = map_data[i];
      this.cities.push(new City(city[0], parseFloat(city[2]), parseFloat(city[3]), parseInt(city[4]))); // name, latitude, longitude, population
    }
    this.WORLDPOPULATION = 0;
    this.cities.forEach(city => this.WORLDPOPULATION += city.population, this);
  }
  
  update() {
    image("resources/map.png", 0, 0, WIDTH, HEIGHT);
    
    this.cities.forEach(city => city.update());
  }
  
}
