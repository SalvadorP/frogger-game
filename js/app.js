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
