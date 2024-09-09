// Get the canvas element
var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

// Set up some constants
var WIDTH = 640;
var HEIGHT = 480;
var PLAYER_SIZE = 50;
var BLOCK_SIZE = 50;

// Set up some colors
var WHITE = "#FFFFFF";
var RED = "#FF0000";
var BLUE = "#0000FF";

// Set up the player
var player = {
    x: WIDTH / 2,
    y: HEIGHT / 2,
    width: PLAYER_SIZE,
    height: PLAYER_SIZE
};

// Set up the blocks
var blocks = [
    {
        x: 100,
        y: 100,
        width: BLOCK_SIZE,
        height: BLOCK_SIZE
    },
    {
        x: 300,
        y: 300,
        width: BLOCK_SIZE,
        height: BLOCK_SIZE
    },
    {
        x: 500,
        y: 500,
        width: BLOCK_SIZE,
        height: BLOCK_SIZE
    }
];

// Set up the speech recognition
var recognition = new webkitSpeechRecognition();
recognition.lang = "en-US";
recognition.maxResults = 10;

// Game loop
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    // Draw the player
    ctx.fillStyle = RED;
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Draw the blocks
    ctx.fillStyle = BLUE;
    for (var i = 0; i < blocks.length; i++) {
        ctx.fillRect(blocks[i].x, blocks[i].y, blocks[i].width, blocks[i].height);
    }

    // Check for collisions with blocks
    for (var i = 0; i < blocks.length; i++) {
        if (checkCollision(player, blocks[i])) {
            alert("Game over!");
            return;
        }
    }

    // Update the player position based on the voice command
    recognition.onresult = function(event) {
        var command = event.results[0][0].transcript;
        if (command.indexOf("up") !== -1) {
            player.y -= 10;
        } else if (command.indexOf("down") !== -1) {
            player.y += 10;
        } else if (command.indexOf("left") !== -1) {
            player.x -= 10;
        } else if (command.indexOf("right") !== -1) {
            player.x += 10;
        }
    };

    // Start the speech recognition
    recognition.start();

    // Request the next frame
    requestAnimationFrame(gameLoop);
}

// Check for collisions between two rectangles
function checkCollision(rect1, rect2) {
    if (rect1.x + rect1.width > rect2.x &&
        rect1.x < rect2.x + rect2.width &&
        rect1.y + rect1.height > rect2.y &&
        rect1.y < rect2.y + rect2.height) {
        return true;
    }
    return false;
}

// Start the game loop
gameLoop();
