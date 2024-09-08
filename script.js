const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const dragonImage = new Image();
dragonImage.src = 'images/flying_dragon.png'; // Path to your dragon image
const backgroundImage = new Image();
backgroundImage.src = 'images/background.png'; // Path to your background image

const dragon = {
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    speed: 5
};

let score = 0;

function drawBackground() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
}

function drawDragon() {
    ctx.drawImage(dragonImage, dragon.x, dragon.y, dragon.width, dragon.height);
}

function updateGame() {
    drawBackground();
    drawDragon();
    updateScore();
}

function updateScore() {
    document.getElementById('score').innerText = score;
}

function moveDragon(direction) {
    switch (direction) {
        case 'left':
            dragon.x -= dragon.speed;
            break;
        case 'right':
            dragon.x += dragon.speed;
            break;
        case 'up':
            dragon.y -= dragon.speed;
            break;
        case 'down':
            dragon.y += dragon.speed;
            break;
    }
    updateGame();
}

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            moveDragon('left');
            break;
        case 'ArrowRight':
            moveDragon('right');
            break;
        case 'ArrowUp':
            moveDragon('up');
            break;
        case 'ArrowDown':
            moveDragon('down');
            break;
    }
});

dragonImage.onload = function() {
    backgroundImage.onload = function() {
        updateGame();
    }
};
