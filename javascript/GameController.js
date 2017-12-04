class GameController {

  constructor() {
    this.cities = [];
    this.agentNum = 1000;
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
    var alive = 0, dead = 0, infected = 0, recovered = 0;
    this.cities.forEach(city => {
      alive += city.agents.length;
      city.agents.forEach(agent => {
        if (!agent.healthy)
          infected++;
        if (agent.recovered)
          recovered++;
      });
    });
    dead = this.AGENTPOPULATION - alive;
    
    var statsCard = document.getElementById("global-stats");
    statsCard.innerHTML = "Global Statistics<br>Alive: " + alive + "<br>Infected: " + infected + "<br>Recovered: " + recovered + "<br>Dead: " + dead + "<br>Fraction of Population Recovered: " + Math.floor(recovered/alive * 1e3)/1e3;
  }
  
  conrolPanel() {
    this.agentNum = parseInt(document.getElementById("agent-count").value);
    this.cities.forEach(city => city.agents.forEach(agent => {
      agent.infectiousness = parseFloat(document.getElementById("infectiousness").value);
      agent.deadlyness = parseFloat(document.getElementById("deadlyness").value);
      agent.recoveryProtection = parseFloat(document.getElementById("recovered-protection").value);
      agent.daysToMaximumRecoveryChance = parseFloat(document.getElementById("days-to-max-recovery").value);
      agent.maximumRecoveryChance = parseFloat(document.getElementById("max-recovery-chance").value);
    }));
  }
  
  update() {
    image("resources/map.png", 0, 0, WIDTH, HEIGHT);
    this.cities.forEach(city => city.update());
    this.cities.forEach(city => city.mouseInteraction());
    this.infoPanel();
  }
  
}
