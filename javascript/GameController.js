class GameController {

  constructor() {
    this.cities = [];
    this.agentNum = 4000;
    this.statistics = {"alive": [], "dead": [], "infected": [], "recovered": [], "days": 0};
    this.graphTimeScale = 8/30; // greater => fewer days recorded but more detail
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
  
  graphLine(x1, y1, x2, y2) {
    graphCtx.beginPath();
    graphCtx.moveTo(x1, y1);
    graphCtx.lineTo(x2, y2);
    graphCtx.closePath();
    graphCtx.stroke();
  }
  updateGraph(alive, dead, infected, recovered) {
    if (this.statistics["alive"].length == 0) // Nothing to record. Wait for data.
      return;
    if (this.statistics["days"] == 0) // Don't draw offset as if data was recorded from the beginning
      this.statistics["days"]++;
    
    graphCtx.save();
    // Transform (scale and translate) correctly.
    graphCtx.translate(0, graphCanvas.height);
    graphCtx.scale(1, -graphCanvas.height / this.statistics["alive"][0]);
    
    // Messiness could have been averted with the creation of a Canvas class to hold context functions and information.
    var x = this.statistics["days"] * this.graphTimeScale;
    graphCtx.lineWidth = 4;
    graphCtx.strokeStyle = "rgba( 80,  60,   0, 1)"; // brown => dead
    this.graphLine(x, this.statistics["dead"][this.statistics["dead"].length - 1], x + this.graphTimeScale, dead);
    graphCtx.strokeStyle = "rgba(  0,   0, 200, 1)"; // blue => recovered
    this.graphLine(x, this.statistics["recovered"][this.statistics["recovered"].length - 1], x + this.graphTimeScale, recovered);
    graphCtx.strokeStyle = "rgba(  0, 200,   0, 1)"; // green => alive
    this.graphLine(x, this.statistics["alive"][this.statistics["alive"].length - 1], x + this.graphTimeScale, alive);
    graphCtx.strokeStyle = "rgba(200,   0,   0, 1)"; // red => infected
    this.graphLine(x, this.statistics["infected"][this.statistics["infected"].length - 1], x + this.graphTimeScale, infected);

    graphCtx.restore();
    
    this.statistics["days"]++;
  }
  
  initGraph(GC) {
    // Make the graph blank.
    graphCtx.fillStyle = "rgba(255, 255, 255, 1)";
    graphCtx.beginPath();
    graphCtx.rect(0, 0, graphCanvas.width, graphCanvas.height);
    graphCtx.closePath();
    graphCtx.fill();
    // Draw the graph's tick marks.
    for (var i = 0; i < 1; i += 1/5) {
      graphCtx.strokeStyle = "rgba(100, 100, 100, 1)";
      graphCtx.fillStyle = "rgba(80, 80, 80, 1)";
      graphCtx.font = WIDTH/80 + "px Arial";
      GC.graphLine(0, graphCanvas.height * i, WIDTH/50, graphCanvas.height * i); // vertical: agents
      graphCtx.fillText(Math.floor(100*(1 - i)) + "% of agents", 0, graphCanvas.height * i + WIDTH/80);
      GC.graphLine(graphCanvas.width * i, graphCanvas.height, graphCanvas.width * i, graphCanvas.height - WIDTH/50); // horizontal: time
      graphCtx.fillText(Math.floor(graphCanvas.width / GC.graphTimeScale * i) + " days", graphCanvas.width * i, graphCanvas.height);
    }
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
    
    var globalStats = document.getElementById("global-stats");
    globalStats.innerHTML = "Global Statistics<br>Alive: " + alive + "<br>Healthy: " + (alive - infected) + "<br>Infected: " + infected + "<br>Recovered: " + recovered + "<br>Dead: " + dead;
    
    // Record data for the graph if the infection is (or recovered agents are) alive. Records are useless during other periods.
    if (infected > 0 || recovered > 0) {
      this.updateGraph(alive, dead, infected, recovered);
      
      this.statistics.alive.push(alive);
      this.statistics.dead.push(dead);
      this.statistics.infected.push(infected);
      this.statistics.recovered.push(recovered);
    }
  }
  
  reset() {
    this.cities = [];
    this.initCities();
    window.setTimeout(this.controlPanel, 500); // Let cities initialize before updating their properties.
    
    this.initGraph(this);
    this.statistics = {"alive": [], "dead": [], "infected": [], "recovered": [], "days": 0};
  }
  
  controlPanel() {
    var getWithBackup = function(elementName, float) { // returns default value if undefined
      var input = document.getElementById(elementName);
      return input.value !== undefined ? (float ? parseFloat(input.value) : parseInt(input.value)) : (float ? parseFloat(input.defaultValue) : parseInt(input.defaultValue));
    }
    
    this.agentNum = getWithBackup("agent-count", false);
    this.cities.forEach(city => city.agents.forEach(agent => {
      agent.infectiousness = getWithBackup("infectiousness", true);
      agent.deadlyness = getWithBackup("deadlyness", true);
      agent.recoveryProtection = getWithBackup("recovered-protection", true);
      agent.daysToMaximumRecoveryChance = getWithBackup("days-to-max-recovery", false);
      agent.maximumRecoveryChance = getWithBackup("max-recovery-chance", true);
      agent.recoveredRecoveryFactor = getWithBackup("recovered-recovery", true);
      agent.recoveredDeathFactor = getWithBackup("recovered-death", true);
      agent.recoveredDays = getWithBackup("recovered-days", false);
    }));
    this.cities.forEach(city => city.airline.infectedRejectionRate = getWithBackup("infected-rejected", true));
  }
  
  update() {
    image("resources/map.png", 0, 0, WIDTH, HEIGHT);
    this.cities.forEach(city => city.update());
    this.cities.forEach(city => city.mouseInteraction());
    this.infoPanel();
  }
  
}
