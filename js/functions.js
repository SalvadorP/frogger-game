/**
 * Checks the status of the board for collissions between player and bugs.
 * 
 * @param stdClass enemy 
 */
function checkCollision(enemy) {

    // Player dimensions are x=70 y=80
    // Bug dimensions are x=100 y=80
    // IDEA: Check collissions here with the gems??
    // Check for collision between enemy and player
    if (
        player.y + 135 >= enemy.y + 90 &&
        player.y + 90 <= enemy.y + 135 &&
        player.x + 25 <= enemy.x + 90 &&
        player.x + 90 >= enemy.x + 25) {
        console.log('collided');
        player.resetPlayer();
    }

    // Check if player reaches borders of the canvas
    // Bottom border
    if (player.y > 380) {
        player.y = 380;
    }
    // Top border, Reached the top!
    if (player.y <= 50) {
        player.update();
    }
    // Left border
    if (player.x < 0) {
        player.x = 0;
    }
    // Right border
    if (player.x > 400) {
        player.x = 400;
    }
}

/**
 *  Gets a random integer between min and max.
 * 
 * @param integer min 
 * @param integer max 
 * @returns integer
 */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


function findGem(gem) {
    var remove = 0;
    allGems.forEach(function(el, index) {
        if (gem.x === el.x && gem.y === el.y) {
            remove = index;
        }
    });
    allGems.splice(remove, 1);
    remove = 0;
}