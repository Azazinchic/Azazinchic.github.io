var PaleZombieHP = 100;
var DifficultyHPPercent = [
  {
    Easy: 66.67,
    Normal: 100,
    Hard: 150,
    Nightmare: 200,
    Impossible: 250,
    Career: [67, 250],
    Mutation: 100,
  },
];
var ZombieStats = [
  {
    "Normal Zombie": {
        "ExpGrow": 11,
    },
    "Boomer": {
        "HealthScale":1.25,
        "NMRarityScale":1.25,
        "IMPRarityScale":1.5,
    },
    "Toxic": {
        "HealthScale":1.2,
        "NMRarityScale":1.25,
        "IMPRarityScale":1.5,
    },
    "Crawler": {
        "HealthScale":0.8,
        "NMRarityScale":1.25,
        "IMPRarityScale":1.5,
    },
    "Headless": {
        "HealthScale":0.9,
        "NMRarityScale":1.25,
        "IMPRarityScale":1.5,
    },
    "Electric": {
        "HealthScale":1.1,
        "NMRarityScale":1.25,
        "IMPRarityScale":1.5,
    },
    "Flamer": {
        "HealthScale":1.2,
        "NMRarityScale":1.25,
        "IMPRarityScale":1.5,
    },
    "Riot": {
        "HealthScale":1.1,
        "NMRarityScale":1.25,
        "IMPRarityScale":1.5,
        "NMUniqueScale":1.25,
        "IMPUniqueScale":1.5,
    },
    "Long Arm": {
        "HealthScale":1.1,
        "NMRarityScale":1.25,
        "IMPRarityScale":1.5,
        "NMUniqueScale":1.1,
        "IMPUniqueScale":1.25,
    },
    "Armoured": {
        "HealthScale":1.25,
        "NMRarityScale":1.25,
        "IMPRarityScale":1.5,
    },
    "Slasher": {
        "HealthScale":1.2,
        "NMRarityScale":1.25,
        "IMPRarityScale":1.5,
        "NMUniqueScale":1.25,
        "IMPUniqueScale":1.5,
    },
    "Hunter": {
      "HealthScale": 3.375,
      "PerScale": 0.8,
      "ExpGrow": 1.15,
      "ExpThr": 8,
      "NMRarityScale":1.5,
      "IMPRarityScale":2,
    },
    "Drench Wraith": {
        "HealthScale": 1.2,
        "NMRarityScale":1.5,
        "IMPRarityScale":2,
      },
      "Frost Wraith": {
        "HealthScale": 1.5,
        "NMRarityScale":1.5,
        "IMPRarityScale":2,
      },
      "Wraith": {
        "HealthScale": 1.2,
        "NMRarityScale":1.5,
        "IMPRarityScale":2,
      },
      "Miner": {
        "HealthScale": 1.5,
        "NMRarityScale":1.5,
        "IMPRarityScale":2,
      },
      "Sniper": {
        "HealthScale": 1.5,
        "PerScale": 0.625,
        "NMRarityScale":1.5,
        "IMPRarityScale":2,
      },
      "Sponger": {
        "HealthScale": 1.875,
        "PerScale": 0.625,
        "ExpThr": 8,
        "NMRarityScale":1.5,
        "IMPRarityScale":2,
      },
      "Destroyer": {
        "HealthScale": 2,
        "PerScale": 0.12,
        "NMRarityScale":1.5,
        "IMPRarityScale":2,
        "HUniqueScale":1.2,
        "NMUniqueScale":1.4,
        "IMPUniqueScale":1.6,
      },
      "Lurker": {
        "HealthScale": 2.25,
        "PerScale": 0.625,
        "NMRarityScale":1.5,
        "IMPRarityScale":2,
      },
      "Annihilator": {
        "HealthScale": 2.625,
        "PerScale": 0.625,
        "ExpThr":8,
        "NMRarityScale":1.5,
        "IMPRarityScale":2,
      },
      "Berserker": {
        "HealthScale": 3,
        "PerScale": 0.625,
        "ExpThr":8,
        "ExpGrow":1.15,
        "NMRarityScale":1.5,
        "IMPRarityScale":2,
      },
      "Boss": {
        "HealthScale": 7.5,
        "PerScale": 0.5,
        "ExpThr":7,
        "ExpGrow":1.17,
        "NMRarityScale":1.5,
        "IMPRarityScale":2,
      },
      "Swamp Giant": {
        "HealthScale": 9666.667,
        "PerScale": 0.75,
        "ExpThr":11,
        "ExpGrow":1.12,
        "NMRarityScale":1.5,
        "IMPRarityScale":2,
      },
  },
];

const PlayerCountA = document.querySelector(".Players");
const WaveCountA = document.querySelector(".Wave");
const Inputs = document.querySelector(".Inputs");
const ResultDiv = document.querySelector(".Results");
const text = document.querySelector(".funkytext");
function Clean() {
  while (ResultDiv.firstChild) {
    ResultDiv.removeChild(ResultDiv.firstChild);
  }
}
var df = "";
var PlayerCount = 1;
var Wave = 1;
var CurrentZombie = "";
var perscale = 0.06;

function CreateDiv(Name, Value) {
  let div = document.createElement("div");
  div.className = "divv";
  ResultDiv.appendChild(div);
  let texted = document.createElement("div");
  texted.textContent = Name;
  texted.style.float = "left";
  div.appendChild(texted);

  let spanned = document.createElement("div");
  spanned.textContent = Math.round(Value );
  spanned.style.position = "relative";
  spanned.style.float = "right";
  texted.appendChild(spanned);
}
function PaleZombieHealth(ColorMulti) {
  return (
    (Math.min(Wave, 9 - 1) * 100 + 50) *
    1.12 ** Math.max(0, Wave - (9 - 1)) *
    ((PlayerCount - 1) * perscale + 1) *
    (ColorMulti * 1) *
    (Multiplier * 1 * 1)
  );
}
function CustomFormula(ColorMulti) {
  ColorMulti = ColorMulti || 1;
  let UniqueScale = 1;
  let ExpThr = ZombieStats[0][CurrentZombie].ExpThr || 9;
  let CPerscale = ZombieStats[0][CurrentZombie].PerScale || perscale;
  let RarityScale = 1
  if (df == "Nightmare"){
    RarityScale = ZombieStats[0][CurrentZombie].NMRarityScale || 1
    UniqueScale = ZombieStats[0][CurrentZombie].NMUniqueScale || 1;
  }
  else if(df == "Impossible"){
    RarityScale = ZombieStats[0][CurrentZombie].IMPRarityScale || 1
    UniqueScale = ZombieStats[0][CurrentZombie].IMPUniqueScale || 1;
  }
   
  let ExpGrow = ZombieStats[0][CurrentZombie].ExpGrow || 1.12;
  let HealthScale = ZombieStats[0][CurrentZombie].HealthScale || 1;

  return (
    (Math.min(Wave, ExpThr - 1) * 100 + 50) *
    ExpGrow ** Math.max(0, Wave - (ExpThr - 1)) *
    ((PlayerCount - 1) * CPerscale + 1) *
    (ColorMulti * HealthScale) *
    (Multiplier * RarityScale * UniqueScale)
  );
}



var Formulas = [
  {
    "Normal Zombie": function () {
      CreateDiv("Pale Zombie:", CustomFormula(1));
      CreateDiv("Blue Zombie:", CustomFormula(0.8));
      CreateDiv("Green Zombie:", CustomFormula(1.2));
      CreateDiv("Red Zombie:", CustomFormula(1.2));
    },
    Boomer: function () {
      CreateDiv("Pale Boomer Zombie:", CustomFormula(1));
      CreateDiv("Blue Boomer Zombie:", CustomFormula(0.8));
      CreateDiv("Green Boomer Zombie:", CustomFormula(1.2));
      CreateDiv("Red Boomer Zombie:", CustomFormula(1.2));
    },
    Crawler: function () {
      CreateDiv("Pale Crawler Zombie:", CustomFormula(1, 0.8));
      CreateDiv("Blue Crawler Zombie:", CustomFormula(0.8, 0.8));
      CreateDiv("Green Crawler Zombie:", CustomFormula(1.2, 0.8));
      CreateDiv("Red Crawler Zombie:", CustomFormula(1.2, 0.8));
    },
    Electric: function () {
      CreateDiv("Pale Electric Zombie:", CustomFormula(1, 1.1));
      CreateDiv("Blue Electric Zombie:", CustomFormula(0.8, 1.1));
      CreateDiv("Green Electric Zombie:", CustomFormula(1.2, 1.1));
      CreateDiv("Red Electric Zombie:", CustomFormula(1.2, 1.1));
    },
    Flamer: function () {
      CreateDiv("Pale Flamer Zombie:", CustomFormula(1, 1.2));
      CreateDiv("Blue Flamer Zombie:", CustomFormula(0.8, 1.2));
      CreateDiv("Green Flamer Zombie:", CustomFormula(1.2, 1.2));
      CreateDiv("Red Flamer Zombie:", CustomFormula(1.2, 1.2));
    },
    Headless: function () {
      CreateDiv("Pale Headless Zombie:", CustomFormula(1, 0.9));
      CreateDiv("Blue Headless Zombie:", CustomFormula(0.8, 0.9));
      CreateDiv("Green Headless Zombie:", CustomFormula(1.2, 0.9));
      CreateDiv("Red Headless Zombie:", CustomFormula(1.2, 0.9));
    },
    "Long Arm": function () {
      CreateDiv("Pale Long Arm Zombie:", CustomFormula(1, 1.2));
      CreateDiv("Blue Long Arm Zombie:", CustomFormula(0.8, 1.2));
      CreateDiv("Green Long Arm Zombie:", CustomFormula(1.2, 1.2));
      CreateDiv("Red Long Arm Zombie:", CustomFormula(1.2, 1.2));
    },
    Toxic: function () {
      CreateDiv("Pale Toxic Zombie:", CustomFormula(1, 1.2));
      CreateDiv("Blue Toxic Zombie:", CustomFormula(0.8, 1.2));
      CreateDiv("Green Toxic Zombie:", CustomFormula(1.2, 1.2));
      CreateDiv("Red Toxic Zombie:", CustomFormula(1.2, 1.2));
    },
    Slasher: function () {
      CreateDiv("Pale Slasher Zombie:", CustomFormula(1, 1.2));
      CreateDiv("Blue Slasher Zombie:", CustomFormula(0.8, 1.2));
      CreateDiv("Green Slasher Zombie:", CustomFormula(1.2, 1.2));
      CreateDiv("Red Slasher Zombie:", CustomFormula(1.2, 1.2));
    },
    Riot: function () {
      CreateDiv("Pale Riot Zombie:", CustomFormula(1, 1.2));
      CreateDiv("Blue Riot Zombie:", CustomFormula(0.8, 1.2));
      CreateDiv("Green Riot Zombie:", CustomFormula(1.2, 1.2));
      CreateDiv("Red Riot Zombie:", CustomFormula(1.2, 1.2));
    },
    Wraith: function () {
      CreateDiv("Pale Riot Zombie:", CustomFormula(1));
    },
    Hunter: function () {
      CreateDiv("Hunter:", CustomFormula(1));
    },
  },
];

const DifficultyButtons = document.querySelectorAll(".difficulty");
const ZombieButtons = document.querySelectorAll(".zombie");

DifficultyButtons.forEach((Difficulty) => {
  Difficulty.addEventListener("mousedown", () => {
    Multiplier = DifficultyHPPercent[0][Difficulty.id] / 100;
    DifficultyButtons.forEach((d) => {
      d.style.display = "none";
    });
    df = Difficulty.id;
    ZombieButtons.forEach((zombie) => {
      zombie.style.display = "flex";
      text.textContent = "select zombie";
      zombie.addEventListener("mousedown", () => {
        CurrentZombie = zombie.id;
        text.textContent = `Selected: ${zombie.id} | Difficulty:${df}`;
        Inputs.style.display = "flex";
        ResultDiv.style.display = "flex";
        ZombieButtons.forEach((zomba) => {
          zomba.style.display = "none";
        });
      });
    });
  });
});

function Fate() {
   if(ZombieStats[0][CurrentZombie].NMRarityScale == 1.5){
    CreateDiv(`${CurrentZombie}:`, CustomFormula(1));
   }
   else{
    CreateDiv(`Pale ${CurrentZombie}:`, CustomFormula(1));
    CreateDiv(`Blue & Infected ${CurrentZombie}:`, CustomFormula(.8));
    CreateDiv(`Red & Green ${CurrentZombie}:`, CustomFormula(1.2));
   }
}

PlayerCountA.addEventListener("change", (ev) => {
  Clean();
  PlayerCount = PlayerCountA.value;
  Fate();
});
WaveCountA.addEventListener("change", (ev) => {
  Clean();
  Wave = WaveCountA.value;
  Fate()
});
