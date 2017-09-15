// Canvas width = 505
// Canvas height = 606

var player = new Player(200, 380, 100);

var allEnemies = [];
createEnemy();

var allGems = [];
createGems();

// Listens for key presses and sends they keys to the Player.handleInput().
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        49: 'char-boy',
        50: 'char-cat-girl',
        51: 'char-horn-girl',
        52: 'char-pink-girl',
        53: 'char-princess-girl',
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

// var up = $('#up');
// var left = $('#left');
// var right = $('#right');
// var down = $('#down');

// var mcUp = new Hammer(up);
// var mcDown = new Hammer(down);

// // listen to events...
// mcUp.on("panleft panright tap press", function(ev) {
//     // myElement.textContent = ev.type +" gesture detected.";
//     console.log("up!");
// });
// mcDown.on("panleft panright tap press", function(ev) {
//     // myElement.textContent = ev.type +" gesture detected.";
//     console.log("down!");
// });

// IDEA: Make it DRY!!
$('#up').hammer().bind("panup tap press", upHandler);
$('#down').hammer().bind("pandown tap press", downHandler);
$('#left').hammer().bind("panleft tap press", leftHandler);
$('#right').hammer().bind("panright tap press", rightHandler);

function upHandler() {
    player.handleInput('up');
}

function downHandler() {
    player.handleInput('down');
}
function leftHandler() {
    player.handleInput('left');
}

function rightHandler() {
    player.handleInput('right');
}


// $('#up').hammer().bind("panup tap press", actionHandler('up'));
// $('#down').hammer().bind("pandown tap press", actionHandler('down'));
// $('#left').hammer().bind("panleft tap press", actionHandler('left'));
// $('#right').hammer().bind("panright tap press", actionHandler('right'));

// function actionHandler(action) {
//     player.handleInput(action);
// }

