const ROW_HEIGHT = 83;
const COL_WIDTH = 101;
const CANVAS_WIDTH = 505;
const CANVAS_HEIGHT = 606;
const PLAYER_STARTPOINT_X = 200;
const PLAYER_STARTPOINT_Y = 394;

// Now instantiate enemy and player objects.
// Place all enemy objects in an array called allEnemies
let enemy0 = new Enemy(0, 62, 100);
let enemy1 = new Enemy(0 + 300, 62, 100);
let enemy2 = new Enemy(100, 62 + 83, 80);
let enemy3 = new Enemy(100 + 300, 62 + 83, 30);
let enemy4 = new Enemy(350, 62 + 166, 60);
let enemy5 = new Enemy(350 + 400, 62 + 166, 200);
const allEnemies = [enemy0, enemy1, enemy2, enemy3, enemy4, enemy5];
// Place the player object in a variable called player
const player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener("keyup", function(e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
