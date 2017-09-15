var gemTypes = ['Gem-Blue.png', 'Gem-Green.png', 'Gem-Orange.png'];
var Gem = function(x, y) {
    // Setting the Player initial location
    this.x = x;
    this.y = y;
    this.value = 5;

    // Loading the image by setting this.sprite to the appropriate image
    this.sprite = 'images/' + gemTypes[getRandomIntInclusive(0,2)];
    // IDEA: Make each gem have a different value depending on the colour
};

Gem.prototype.update = function() {
    if (
        player.y + 135 >= gem.y + 90 &&
        player.y + 90 <= gem.y + 135 &&
        player.x + 25 <= gem.x + 90 &&
        player.x + 90 >= gem.x + 25) {
        console.log('collected');
        gem.eraseGem();
    }
}

Gem.prototype.replaceGem = function() {
    this.x = getRandomIntInclusive(200, 300);
    this.y = getRandomIntInclusive(100, 350);
    player.score += this.value;
}

Gem.prototype.eraseGem = function() {
    player.score += this.value;
    // find the gem in the array and erase it.
    findGem(this);
}

Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};