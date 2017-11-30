class GameController {

  constructor() {
    this.cities = [];
    this.agentNum = 2000;
  }
  
  initCities() {
    for (var i = 1, city; i < map_data.length; i++) { // The first row holds headers not data.
      city = map_data[i];
      this.cities.push(new City(city[0], parseFloat(city[2]), parseFloat(city[3]), parseInt(city[4]), city[5])); // name, latitude, longitude, population
    }
    this.WORLDPOPULATION = 0;
    this.cities.forEach(city => this.WORLDPOPULATION += city.population, this);
    this.cities.forEach(city => city.initAgents());
    this.AGENTPOPULATION = 0;
    this.cities.forEach(city => this.AGENTPOPULATION += city.agents.length, this);
  }
  
  repositionCities() {
    this.cities.forEach(city => city.reposition());
  }
  
  infoPanel() {
    var alive = this.cities.reduce((agents, city) => agents + city.agents.length),
        dead = this.AGENTPOPULATION - alive,
        infected = this.cities.reduce((infected, city) => infected + city.agents.reduce((infected, agent) => infected + (!agent.healthy ? 1 : 0))),
        recovered = this.cities.reduce((recovered, city) => recovered + city.agents.reduce((recovered, agent) => recovered + (agent.immune ? 1 : 0)));
    
    var statsCard = document.getElementById("global-stats");
    statsCard.innerHTML = "Global Statistics<br>Alive: " + alive + "<br>Infected: " + infected + "<br>Recovered: " + recovered + "<br>Dead: " + dead;
  }
  
  update() {
    image("resources/map.png", 0, 0, WIDTH, HEIGHT);
    this.cities.forEach(city => city.update());
    this.cities.forEach(city => city.mouseInteraction());
    this.infoPanel();
  }
  
}
