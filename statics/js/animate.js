module.exports = function(spriteLoc) {

//the with and height of our spritesheet
  var hero = require('hero'),
      canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d'),

      canvasWidth = 962,
      canvasHeight = 482,

      x = 0,
      y = 301,

      character = new Image(),
      heroSprite;

  character.src = spriteLoc;
  heroSprite = hero.sprite({
    context: context,
    width: 256,
    height: 64,
    image: character,
    dx: x,
    dy: y
  });

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  // Start the game loop as soon as the sprite sheet is loaded
  character.addEventListener('load', gameLoop);
  function gameLoop () {
    // var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame(gameLoop);
    heroSprite.update();
    heroSprite.render();
  }

  function move(e) {
    if (e.keyCode === 37 || e.keyCode === 65) {
      x -= 10;
    }
    else if (e.keyCode === 38 || e.keyCode === 87) {
      y -= 10;
    }
    else if (e.keyCode === 39 || e.keyCode === 68) {
      x += 10;
    }
    else if (e.keyCode === 40 || e.keyCode === 83) {
      y += 10;
    }

    canvas.width = canvasWidth;
  }

  document.onkeydown = move;
};
