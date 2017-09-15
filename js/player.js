/**
 * Player Class and methods.
 */

/**
 * Players Class.
  * @param integer x 
  * @param integer y 
  * @param integer speed
 */
var Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.score = 0;
    this.level = 0;
    this.sprite = 'images/char-boy.png';
};

/**
 * Method for changing the character of the player.
 */
Player.prototype.changeChar = function() {
    ctx.drawImage(Resources.get(player.sprite), player.x, player.y);
}

/**
 * The player has arrived to the top! 
 * Adds points, level and sends the player to the bottom to start again.
 */
Player.prototype.update = function(dt) {
    this.score += 10;
    this.level += 1;
    this.x = 200;
    this.y = 380;

    createEnemy();
    createGems();
};

/**
 * Handles the input for the player, depending on the key pressed.
 */
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

/**
 * Game over! Reset the player, enemies, gems and the game.
 */
Player.prototype.resetPlayer = function() {
    // Game over!
    player.x = 200;
    player.y = 380;
    player.score = 0;
    player.level = 0;
    allEnemies = [];
    allGems = [];
    createGems();
    createEnemy();
}

/**
 * Renders the player along with the score and level.
 */
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    document.getElementById('score').innerHTML = this.score;
    document.getElementById('level').innerHTML = this.level;
};