var w_1 = {
    num_levels: 10,
    monsters: []
};

function showEl(element) {
    element.style.display = 'block';
}

function hideEl(element) {
    element.style.display = 'none'  ;
}

// var worlds = [w_1, w_2, w_3, w_4, w_5, w_6];

var player = {
    level: 1,
    class: 'no vocation',
    attack: 0,
    defence: 0,
    health: 10
};

var knight = {
    level: 1,
    class: 'Knight',
    attack: 2,
    defence: 1,
    health: 10
};

var mage = {
    level: 1,
    class: 'Magician',
    attack: 3,
    defence: 0,
    health: 10
};

function changeVocation(choice) {
    if (choice === 'Knight') {
        player = knight;
    }
    else {
        player = mage; 
    }
    hideEl(document.getElementById('myModal'));
    console.log(player);
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
    var modal = document.getElementById('myModal'),
        close = document.getElementById('close'),
        header = document.getElementById('modalHeader'),
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

function draw() {
    var canvas = document.getElementById('canvas'),
    context = canvas.msGetInputContext('2d'),

    xPos = 0,
    yPos = 0;

    context.rect(xPos, yPos, 50, 50);
    context.stroke();

    document.onkeydown = move;

}

function drawCanvas() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),

        canvasWidth = 962,
        canvasHeight = 482,
        xPos = 0,
        yPos = 0;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    context.rect(xPos, yPos, 50, 50);
    context.stroke();

    function move(e) {
        if (e.keyCode === 37 || e.keyCode === 65) {
            xPos -= 10;
        }
        else if (e.keyCode === 38 || e.keyCode === 87) {
            yPos -= 10;
        }
        else if (e.keyCode === 39 || e.keyCode === 68) {
            xPos += 10;
        }
        else if (e.keyCode === 40 || e.keyCode === 83) {
            yPos += 10;
        }

        canvas.width = canvasWidth;
        context.rect(xPos, yPos, 50, 50);
        context.stroke();
    }
 
    document.onkeydown = move;
}

window.onload = function() {
    drawCanvas();
};