// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
    // Setting the Player initial location
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.score = 0;
    this.level = 0;

    // Loading the image by setting this.sprite to the appropriate image
    this.sprite = 'images/char-boy.png';
};

Player.prototype.changeChar = function() {
    ctx.drawImage(Resources.get(player.sprite), player.x, player.y);
}

Player.prototype.update = function(dt) {
    // this.sprite = player.sprite;
    this.score += 10;
    this.level += 1;
    this.x = 200;
    this.y = 380;
    var enemy = new Enemy(0, Math.random() * 180 + 50, Math.random() * 256);
    allEnemies.push(enemy);
    var gem = new Gem(getRandomIntInclusive(0, 500), getRandomIntInclusive(50, 350));
    allGems.push(gem);
};

Player.prototype.handleInput = function(keyCode) {
    switch (keyCode) {
        case 'up':
            player.y -= player.speed - 20; // -20?
            break;
        case 'down':
            player.y += player.speed - 20; // -20?
            break;
        case 'left':
            player.x -= player.speed; // -20?
            break;
        case 'right':
            player.x += player.speed; // -20?
            break;
        case 'char-boy':
            player.sprite = 'images/char-boy.png';
            player.changeChar();
            break;
        case 'char-cat-girl':
            player.sprite = 'images/char-cat-girl.png';
            player.changeChar();
            break;
        case 'char-horn-girl':
            player.sprite = 'images/char-horn-girl.png';
            player.changeChar();
            break;
        case 'char-pink-girl':
            player.sprite = 'images/char-pink-girl.png';
            player.changeChar();
            break;
        case 'char-princess-girl':
            player.sprite = 'images/char-princess-girl.png';
            player.changeChar();
            break;
    }

};

Player.prototype.resetPlayer = function() {
    player.x = 200;
    player.y = 380;
    player.score = 0;
    player.level = 0;
    allEnemies = [];
    var enemy = new Enemy(0, Math.random() * 180 + 50, Math.random() * 256);
    allEnemies.push(enemy);
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    document.getElementById('score').innerHTML = player.score;
    document.getElementById('level').innerHTML = player.level;
};