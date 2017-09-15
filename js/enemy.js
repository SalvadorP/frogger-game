/**
 * Enemy Class and methods.
 */

/**
 * Enemy Class.
  * @param integer x 
  * @param integer y 
  * @param integer speed
 */
var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

/**
 * Updates the bug, allowing it to move across the screen.
 */
Enemy.prototype.update = function(dt) {
    // Multiplying any movement by the dt parameter 
    // will ensure the game runs at the same speed on all computers.
    this.x += this.speed * dt;
    if (this.x >= 500) {
        this.x = 0;
    }
    checkCollision(this);
};

/**
 * Renders each bug.
 */
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
