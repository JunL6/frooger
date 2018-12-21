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
      /** player can't go above the map */
      if (this.y < 0) {
        break;
      }
      this.y += -ROW_HEIGHT;
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
      /** player can't go under the map */
      if (this.y + ROW_HEIGHT > 400) {
        break;
      }
      this.y += ROW_HEIGHT;
      break;
  }
  console.log("x: " + this.x + ", y: " + this.y);
  /** see if the player reaches the water, if so, bring him back to start point with .reset() */
  if (this.y < 0) {
    setTimeout(() => {
      alert("You win!");
      this.reset();
    }, 300);
  }
};

Player.prototype.reset = function() {
  this.x = PLAYER_STARTPOINT_X;
  this.y = PLAYER_STARTPOINT_Y;
};
