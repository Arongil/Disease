class GameController {

  constructor() {
    this.cities = [];
    this.agentNum = 4000;
    this.statistics = {"alive": [], "dead": [], "infected": [], "recovered": [], "days": 0};
    this.alive = 0; this.dead = 0; this.infected = 0; this.recovered = 0;
    this.graphTimeScale = 1; // greater => fewer days recorded but more detail
    this.timeMultiplier = 1; // 0 => paused, 2 => 2x speed, n => nx speed.
    
    this.infectiousness = 0.004; // fraction of agents infected from sick agent
    this.deadlyness = 0.002; // per day chance of death for infected agents
    this.recoveryProtection = 0.8; // Relative chance of becoming infected for recovered agents. 0.2 means, for example, that when 10 regular agents would get infected, only 2 recovered agents would.
    this.daysToMaximumRecoveryChance = 5; // Days after infection until recovery is most likely.
    this.maximumRecoveryChance = 1/20; // Likelyhood per frame of recovery at the maximum.
    this.recoveredRecoveryFactor = 1.4; // Scalar from 0 to n that signifies how much better recovered agents re-recover (0 means they don't; 2 means they re-recover at 2x efficiency).
    this.recoveredDeathFactor = 0.8; // Scalar from 0 to 1 that signifies how much less likely recovered agents are to die from infection.
    this.recoveredDays = 80; // (1-n) How many days before recovered state is over and agents no longer maintain the benefits against the disease.
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
    var x = graphCanvas.width * this.statistics["days"] / (3000/0.8) * this.graphTimeScale;
    graphCtx.lineWidth = 4;
    
    graphFill(80, 60, 0); // brown => dead
    graphLine(x, this.statistics["dead"][this.statistics["dead"].length - 1], x + graphCanvas.width/(3000/0.8) * this.graphTimeScale, dead);
    graphEllipse(x, this.statistics["dead"][this.statistics["dead"].length - 1], 2, 2);
    
    graphFill(0, 0, 200); // blue => recovered
    graphLine(x, this.statistics["recovered"][this.statistics["recovered"].length - 1], x + graphCanvas.width/(3000/0.8) * this.graphTimeScale, recovered);
    graphEllipse(x, this.statistics["recovered"][this.statistics["recovered"].length - 1], 2, 2);
    
    graphFill(0, 200, 0); // green => alive
    graphLine(x, this.statistics["alive"][this.statistics["alive"].length - 1], x + graphCanvas.width/(3000/0.8) * this.graphTimeScale, alive);
    graphEllipse(x, this.statistics["alive"][this.statistics["alive"].length - 1], 2, 2);
    
    graphFill(200, 0, 0); // red => infected
    graphLine(x, this.statistics["infected"][this.statistics["infected"].length - 1], x + graphCanvas.width/(3000/0.8) * this.graphTimeScale, infected);
    graphEllipse(x, this.statistics["infected"][this.statistics["infected"].length - 1], 2, 2);

    graphCtx.restore();
    
    this.statistics["days"]++;
  }
  
  initGraph() {
    // Make the graph blank.
    graphFill(255, 255, 255);
    graphEllipse(0, 0, graphCanvas.width*100, graphCanvas.height*100);
    // Draw the graph's tick marks.
    graphCtx.strokeStyle = "rgba(100, 100, 100, 1)";
    graphCtx.fillStyle = "rgba(80, 80, 80, 1)";
    graphCtx.font = WIDTH/80 + "px Arial";
    for (var i = 0; i < 1; i += 1/5) {
      graphLine(0, graphCanvas.height * i, WIDTH/50, graphCanvas.height * i); // vertical: agents
      graphCtx.fillText(Math.round(100*(1 - i)) + "% of agents", 0, graphCanvas.height * i + WIDTH/80);
      graphLine(graphCanvas.width * i, graphCanvas.height, graphCanvas.width * i, graphCanvas.height - WIDTH/50); // horizontal: time
      graphCtx.fillText(Math.floor(3000/0.8 / this.graphTimeScale * i) + " days", graphCanvas.width * i, graphCanvas.height);
    }
  }
  
  infoPanel() {
//     this.cities.forEach(city => {
//       alive += city.agents.length;
//       city.agents.forEach(agent => {
//         if (!agent.healthy)
//           infected++;
//         if (agent.recovered)
//           recovered++;
//       });
//     });
//     dead = this.AGENTPOPULATION - alive;
    this.alive = this.AGENTPOPULATION - this.dead;
    
    var globalStats = document.getElementById("global-stats");
    globalStats.innerHTML = "Alive: " + this.alive + "<br>Healthy: " + (this.alive - this.infected) + "<br>Infected: " + this.infected + "<br>Recovered: " + this.recovered + "<br>Dead: " + this.dead;
    
    // Record data for the graph if the infection is (or recovered agents are) alive. Records are useless during other periods.
    if (this.infected > 0 || this.recovered > 0) {
      this.updateGraph(this.alive, this.dead, this.infected, this.recovered);
      
      this.statistics.alive.push(this.alive);
      this.statistics.dead.push(this.dead);
      this.statistics.infected.push(this.infected);
      this.statistics.recovered.push(this.recovered);
    }
  }
  
  reset() {
    this.controlPanel();
    this.cities = [];
    this.initCities();
    this.controlPanel();
    
    this.initGraph();
    this.statistics = {"alive": [], "dead": [], "infected": [], "recovered": [], "days": 0};
    this.alive = 0; this.dead = 0; this.infected = 0; this.recovered = 0;
  }
  
  controlPanel() {
    var getWithBackup = function(elementName, float) { // returns default value if undefined
      var input = document.getElementById(elementName);
      return input.value !== undefined ? (float ? parseFloat(input.value) : parseInt(input.value)) : (float ? parseFloat(input.defaultValue) : parseInt(input.defaultValue));
    }
    
    this.timeMultiplier = getWithBackup("fast-forward", false);
    this.agentNum = getWithBackup("agent-count", false);
    
    this.infectiousness = getWithBackup("infectiousness", true);
    this.deadlyness = getWithBackup("deadlyness", true);
    this.recoveryProtection = getWithBackup("recovered-protection", true);
    this.daysToMaximumRecoveryChance = getWithBackup("days-to-max-recovery", false);
    this.maximumRecoveryChance = getWithBackup("max-recovery-chance", true);
    this.recoveredRecoveryFactor = getWithBackup("recovered-recovery", true);
    this.recoveredDeathFactor = getWithBackup("recovered-death", true);
    this.recoveredDays = getWithBackup("recovered-days", false);
    
    this.cities.forEach(city => city.airline.infectedRejectionRate = getWithBackup("infected-rejected", true));
    
    this.graphTimeScale = 3000 / getWithBackup("days-graphed", false);
  }
  
  displayDisabledMessage() {
    fill(180, 180, 180);
    rect(0, 0, WIDTH, HEIGHT);
    fill(0, 0, 0);
    textSize(HEIGHT/10);
    text("Display Disabled", 0, -HEIGHT/10);
    textSize(HEIGHT/20);
    text("to save computational resources", 0, 0);
    textSize(HEIGHT/30);
    text("The display may be enabled by pressing the 'toggle display' button.", 0, 0.9*HEIGHT/2);
  }
  
  update() {
    for (var i = 0; i < this.timeMultiplier; i++) {
      this.cities.forEach(city => city.update());
      this.infoPanel();
    }
    if (display) {
      image("resources/map.png", 0, 0, WIDTH, HEIGHT);
      this.cities.forEach(city => city.display());
      this.cities.forEach(city => city.mouseInteraction());
    }
    else {
      this.displayDisabledMessage();
    }
  }
  
}
