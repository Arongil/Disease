class GameController {

  constructor() {
    this.cities = [];
    this.agentNum = 4000;
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
    var getWithBackup = function(input, float) { // returns default value if undefined
      variable = input.value !== undefined ? (float ? parseFloat(input.value) : parseInt(input.value)) : (float ? parseFloat(input.defaultValue) : parseInt(input.defaultValue));
    }
    
    var agentNum = document.getElementById("agent-count"),
        infectiousness = document.getElementById("infectiousness"),
        deadlyness = document.getElementById("deadlyness"),
        recoveryProtection = document.getElementById("recovered-protection"),
        daysToMaxRecovery = document.getElementById("days-to-max-recovery"),
        maxRecoveryChance = document.getElementById("max-recovery-chance"),
        infectedRejected = document.getElementById("infected-rejected"),
        recoveredRecovery = document.getElementById("recovered-recovery"),
        recoveredDeath = document.getElementById("recovered-death"),
        daysRecovered = document.getElementById("recovered-days");
    set(this.agentNum, agentNum, false);
    this.cities.forEach(city => city.agents.forEach(agent => {
      agent.infectiousness = getWithBackup(infectiousness, true);
      agent.deadlyness = getWithBackup(deadlyness, true);
      agent.recoveryProtection = getWithBackup(recoveryProtection, true);
      agent.daysToMaximumRecoveryChance = daysToMaxRecovery, false);
      agent.maximumRecoveryChance = getWithBackup(maxRecoveryChance, true);
      agent.recoveredRecoveryFactor = getWithBackup(recoveredRecovery, true);
      agent.recoveredDeathFactor = getWithBackup(recoveredDeath, true);
      agent.recoveredDays = getWithBackup(daysRecovered, false);
    }));
    this.cities.forEach(city => city.airline.infectedRejectionRate = getWithBackup(infectedRejected, true));
  }
  
  update() {
    image("resources/map.png", 0, 0, WIDTH, HEIGHT);
    this.cities.forEach(city => city.update());
    this.cities.forEach(city => city.mouseInteraction());
    this.infoPanel();
  }
  
}
