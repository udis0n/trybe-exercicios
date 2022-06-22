const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};
  
const battleMembers = { mage, warrior, dragon };

const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

const hit = (damage, victim) => {
  return victim.healthPoints -= damage;
}

const dragonDamage = () => {
  dragon.damage = randomNumberBetween(15, dragon.strength);
  return dragon.damage;
};

const warriorDamage = () => {
  warrior.damage = randomNumberBetween(warrior.strength, (warrior.strength * warrior.weaponDmg));
  return warrior.damage;
};

const mageDamageAndMana = () => {
    if (mage.mana < 15) {
      mage.damage = 'Não possui mana suficiente'
    } else {
      mage.damage = randomNumberBetween(mage.intelligence, (mage.intelligence * 2));
      mage.mana -= 15;
    };
    return mage.damage;
};

let turn = 0

const gameActions = {
    warriorTurn: (callback) => {
        hit(callback(), dragon);
    },
    mageTurn: (callback) => {
        const mageTurnDamage = callback;
        hit(callback(), dragon);
    },
    dragonTurn: (callback) => {
        const dragonDamageTurn = callback()
        hit(dragonDamageTurn, mage);
        hit(dragonDamageTurn, warrior);
    },
    battleMembers: () => {
        turn += 1;
        gameActions.warriorTurn(warriorDamage);
        gameActions.mageTurn(mageDamageAndMana);
        gameActions.dragonTurn(dragonDamage);

        console.log(
`=========================TURNO ${turn}========================

Warrior: ${JSON.stringify(warrior)}

Mage: ${JSON.stringify(mage)}

Dragon: ${JSON.stringify(dragon)}
        `);
    },
  };

  gameActions.battleMembers();
  gameActions.battleMembers();
  gameActions.battleMembers();
  gameActions.battleMembers();
  gameActions.battleMembers();

//   console.log(`=========================TURNO ${turn}========================
        
// Warrior: ${JSON.stringify(warrior)}

// Mage: ${JSON.stringify(mage)}

// Dragon: ${JSON.stringify(dragon)}`);
