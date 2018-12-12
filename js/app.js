const ROW_HEIGHT = 83;
const COL_WIDTH = 101;
const CANVAS_WIDTH = 505;
const CANVAS_HEIGHT = 606;
const PLAYER_STARTPOINT_X = 200;
const PLAYER_STARTPOINT_Y = 41.5 + 83 * 4;

// Enemies our player must avoid
var Enemy = function(x = 0, y = 83, speed = 40) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = "images/enemy-bug.png";
  //   this.x = ctx.canvas.width / 2;
  //   this.y = ctx.canvs.height / 2;
  //   console.log(Window);
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
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function() {
  this.x = PLAYER_STARTPOINT_X;
  this.y = PLAYER_STARTPOINT_Y;
  this.sprite = "images/char-boy.png";
};
Player.prototype.update = function() {
  // this.x = this.x + x;
  // this.y = this.y + y;
};
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(direction) {
  switch (direction) {
    case "left":
      // this.update(-83, 0);
      this.x += -COL_WIDTH;
      if (this.x < -COL_WIDTH) {
        this.x += COL_WIDTH * 5;
      }
      break;
    case "up":
      // this.update(0, -83);
      this.y += -83;
      break;
    case "right":
      // this.update(83, 0);
      this.x += COL_WIDTH;
      if (this.x > CANVAS_WIDTH - COL_WIDTH) {
        this.x = this.x - COL_WIDTH * 5;
      }
      break;
    case "down":
      // this.update(0, 83);
      this.y += 83;
      break;
  }
  console.log("x: " + this.x + ", y: " + this.y);
  /** see if the player reaches the water, if so, bring him back to start point with .reset() */
  if (this.y < 0) {
    setTimeout(() => {
      this.reset();
    }, 500);
  }
};

Player.prototype.reset = function() {
  this.x = PLAYER_STARTPOINT_X;
  this.y = PLAYER_STARTPOINT_Y;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let enemy0 = new Enemy(0, 62, 100);
let enemy1 = new Enemy(0 + 300, 62, 100);
let enemy2 = new Enemy(100, 62 + 83, 30);
let enemy3 = new Enemy(100 + 300, 62 + 83, 30);
let enemy4 = new Enemy(350, 62 + 166, 60);
let enemy5 = new Enemy(350 + 400, 62 + 166, 60);
const allEnemies = [enemy0, enemy1, enemy2, enemy3, enemy4, enemy5];
// Place the player object in a variable called player
const player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener("keyup", function(e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
