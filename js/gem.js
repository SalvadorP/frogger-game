/**
 * Gem Class and methods.
 */
var gemTypes = ['Gem-Blue.png', 'Gem-Green.png', 'Gem-Orange.png'];
var gemValues = [5,10,15];

/**
 * Gem class.
 * @param integer x 
 * @param integer y 
 */
var Gem = function(x, y) {
    this.x = x;
    this.y = y;
    var selected = getRandomIntInclusive(0,2);
    this.value = gemValues[selected];
    this.sprite = 'images/' + gemTypes[selected];
};

/**
 * Checks if the player catches the gem, in case affirmative erases it.
 */
Gem.prototype.update = function() {
    if (
        player.y + 135 >= this.y + 90 &&
        player.y + 90 <= this.y + 135 &&
        player.x + 25 <= this.x + 90 &&
        player.x + 90 >= this.x + 25) {
        console.log('collected');
        this.eraseGem();
    }
}

/**
 * Replaces the gem, when the player catches it.
 */
Gem.prototype.replaceGem = function() {
    // DEBUG: Check if this method it's really necessary.
    this.x = getRandomIntInclusive(200, 300);
    this.y = getRandomIntInclusive(100, 350);
    player.score += this.value;
}

/**
 * Erases the Gem when the player catches it adding up the score.
 */
Gem.prototype.eraseGem = function() {
    player.score += this.value;
    findGem(this);
}

/**
 * Renders the gem!
 */
Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};