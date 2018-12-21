// Enemies our player must avoid
var Enemy = function(x = 0, y = 83, speed = 40) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = "images/enemy-bug.png";

  /** QUESTION: how to access canvas's height and width??? */
  // this.x = window.ctx.canvas.width / 2;
  //   this.y = ctx.canvs.height / 2;
  console.log(window.ctx);
  /** --- */

  this.x = x;
  this.y = y;
  this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x += dt * this.speed;

  if (this.x >= 505) {
    this.x = -80;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  // console.log(this.x, this.y);
  // debugger;
};
