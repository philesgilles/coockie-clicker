let farmsUpgradeStore = [
  {
    cost: 11000,
    condition: null,
    name: 'Forwards from farms'
  },
  {
    cost: 55000,
    condition: null,
    name: 'Steel-plated rolling pins'
  },
  {
    cost: 550e3,
    condition: null,
    name: 'Lubricated dentures	'
  },
  {
    cost: 550e4,
    condition: null,
    name: 'Genetically-modified cookies'
  },
  {
    cost: 550e6,
    condition: null,
    name: 'Gingerbread scarecrows'
  },
  {
    cost: 550e9,
    condition: null,
    name: 'Pulsar sprinklers'
  },
  {
    cost: 550e12,
    condition: null,
    name: 'Fudge fungus'
  },
  {
    cost: 550e15,
    condition: null,
    name: 'Wheat triffids'
  },
  {
    cost: 550e18,
    condition: null,
    name: 'Humane pesticides'
  },
  {
    cost: 550e21,
    condition: null,
    name: 'Barnstars'
  },
  {
    cost: 550e24,
    condition: null,
    name: 'Lindworns'
  }
];

(() => {
  document.getElementById('upgradeFarms').addEventListener('click', () => {
    console.log('Farms upgrade clicked');
    let farmsUpgradeLevel = saveObject.purchase.farms.upgradeLevel;
    let upgrade = farmsUpgradeStore[farmsUpgradeLevel];
    if (saveObject.compteur > upgrade.cost) {
      saveObject.compteur = saveObject.compteur - upgrade.cost;
      buyUpdate('farms', 'multiply', 2);
      farmsUpgradeLevel++;
      saveObject.purchase.farms.upgradeLevel++;
      document.getElementById('farmsUpgradeCost').innerText =
        farmsUpgradeStore[farmsUpgradeLevel].cost;
      document.getElementById('farmsUpgradeLevel').innerText =
        saveObject.purchase.farms.upgradeLevel;
    } else {
      console.log("T'as pas assez d'argent !");
    }
  });
})();
