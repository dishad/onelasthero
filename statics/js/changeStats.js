module.exports = function (player, stat) {
  if (stat === 'attack') {
    player.attack += 1;
    player.gold -= 20;
  }
  else if (stat === 'defence') {
    player.defence += 1;
    player.gold -= 25;
  }
  else if (stat === 'health') {
    player.health += 5;
    player.maxHealth += 5;
    player.gold -= 15;
  }
  else if (stat === 'potion') {
    player.health += 15;
    player.gold -= 10;
  }

  return player;
};
