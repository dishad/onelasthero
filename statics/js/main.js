var hero = require('hero'),
    // player = {
    //   level: 1,
    //   class: 'no vocation',
    //   attack: 0,
    //   defence: 0,
    //   health: 10
    // },
    knight = {
      level: 1,
      class: 'Knight',
      attack: 2,
      defence: 1,
      health: 10
    },
    mage = {
      level: 1,
      class: 'Magician',
      attack: 3,
      defence: 0,
      health: 10
    };
    // worldOne = {
    //   numLevels: 10,
    //   monsters: []
    // };

function showEl(element) {
  element.style.display = 'block';
}

function hideEl(element) {
  element.style.display = 'none';
}

// var worlds = [w_1, w_2, w_3, w_4, w_5, w_6];

function changeVocation(choice) {
  if (choice === 'Knight') {
    player = knight;
  }
  else {
    player = mage;
  }
  hideEl(document.getElementById('myModal'));
}

function vocationModal() {
  var optionsVocation = {
    header: 'Choose a Vocation',
    body: 'Choose between being a Knight (Balanced stats) or being a powerful Magician (Favors ATTK, low DEF)',
    left: 'Knight',
    right: 'Mage',
    leftEvt: changeVocation('Knight'),
    rightEvt: changeVocation('Magician')
  };

  createDialog(optionsVocation);
}

// Custom modal that changes based on options object
function createDialog(options) {
  var header = document.getElementById('modalHeader'),
      body = document.getElementById('modalBody'),
      leftButton = document.getElementById('modalLeftButton'),
      rightButton = document.getElementById('modalRightButton');

  // modal.style.display = 'block';
  header.innerText = options.header;
  body.innerText = options.body;
  leftButton.innerText = options.left;
  rightButton.innerText = options.right;

  leftButton.addEventListener('click', options.leftEvt);
  rightButton.addEventListener('click', options.rightEvt);
};

document.getElementById('close').addEventListener('click', function() {
  hideEl(document.getElementById('myModal'));
});

document.getElementById('canvas').addEventListener('click', function(e) {
  showEl(document.getElementById('myModal'));
  vocationModal();
});

window.onload = function() {
  hero.animate('../images/breathing.png');
};
