// Canvas width = 505
// Canvas height = 606

var player = new Player(200, 380, 100);

var allEnemies = [];
var enemy = new Enemy(0, Math.random() * 180 + 50, Math.random() * 256);
allEnemies.push(enemy);

var allGems = [];
var totalGems = getRandomIntInclusive(1,3);
for(var i=0; i < totalGems; i++) {
    var gem = new Gem(getRandomIntInclusive(0, 400), getRandomIntInclusive(50, 350));
    allGems.push(gem);
}


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
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
