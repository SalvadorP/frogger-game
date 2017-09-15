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

$('.up').hammer().bind("panup tap press", {action: 'up'}, actionHandler);
$('.down').hammer().bind("pandown tap press", {action: 'down'}, actionHandler);
$('.left').hammer().bind("panleft tap press", {action: 'left'}, actionHandler);
$('.right').hammer().bind("panright tap press", {action: 'right'}, actionHandler);

// $(document).ready(function(){
//     var board = $('#board canvas');
//     $(board).hammer().bind("tap", canvasTapHandler);
//     console.log();

// });

// function canvasTapHandler(event) {
//     console.log(event);
// }
