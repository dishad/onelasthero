module.exports = function (playerClass) {
  var player;

  player.health = 10;
  player.maxHealth = 10;

  if (playerClass === 'Knight') {
    player.attack = 2;
    player.defense = 1;
    player.class = playerClass;
  }
  else if (playerClass === 'Mage') {
    player.attack = 3;
    player.defense = 0;
    player.class = playerClass;
  }

  return player;
};
