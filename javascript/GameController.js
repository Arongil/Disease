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
  
  reset() {
    this.cities = [];
    this.initCities();
    this.controlPanel();
  }
  
  controlPanel() {
    var agentNum = document.getElementById("agent-count"),
        infectiousness = document.getElementById("infectiousness"),
        deadlyness = document.getElementById("deadlyness"),
        recoveryProtection = document.getElementById("recovered-protection"),
        daysToMaxRecovery = document.getElementById("days-to-max-recovery"),
        maxRecoveryChance = document.getElementById("max-recovery-chance"),
        infectedRejected = document.getElementById("infected-rejected"),
        recoveredRecovery = document.getElementById("recovered-recovery"),
        recoveredDeath = document.getElementById("recovered-death");
    this.agentNum = agentNum.value !== undefined ? parseInt(agentNum.value) : parseInt(agentNum.defaultValue);
    this.cities.forEach(city => city.agents.forEach(agent => {
      agent.infectiousness = infectiousness.value !== undefined ? parseFloat(infectiousness.value) : parseFloat(infectiousness.defaultValue);
      agent.deadlyness = deadlyness.value !== undefined ? parseFloat(deadlyness.value) : parseFloat(deadlyness.defaultValue);
      agent.recoveryProtection = recoveryProtection.value !== undefined ? parseFloat(recoveryProtection.value) : parseFloat(recoveryProtection.defaultValue);
      agent.daysToMaximumRecoveryChance = daysToMaxRecovery.value !== undefined ? parseFloat(daysToMaxRecovery.value) : parseFloat(daysToMaxRecovery.defaultValue);
      agent.maximumRecoveryChance = maxRecoveryChance.value !== undefined ? parseFloat(maxRecoveryChance.value) : parseFloat(maxRecoveryChance.defaultValue);
      agent.recoveredRecoveryFactor = recoveredRecovery.value !== undefined ? parseFloat(recoveredRecovery.value) : parseFloat(recoveredRecovery.defaultValue);
      agent.recoveredDeathFactor = recoveredDeath.value !== undefined ? parseFloat(recoveredDeath.value) : parseFloat(recoveredDeath.defaultValue);
    }));
    this.cities.forEach(city => city.airline.infectedRejectionRate = infectedRejected.value !== undefined ? parseFloat(infectedRejected.value) : parseFloat(infectedRejected.defaultValue));
  }
  
  update() {
    image("resources/map.png", 0, 0, WIDTH, HEIGHT);
    this.cities.forEach(city => city.update());
    this.cities.forEach(city => city.mouseInteraction());
    this.infoPanel();
  }
  
}
