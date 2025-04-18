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
        "ExpGrow": 1.1,
        "ExpThr":11
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
        "HealthScale":1.2,
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
      "PerScale": 0.8/2.25,
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
        "HealthScale": 2,
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
var perscale = 0.12;

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
