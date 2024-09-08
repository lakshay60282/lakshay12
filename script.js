const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 800;
canvas.height = 600;

// Load images
const dragonImage = new Image();
const backgroundImage = new Image();

// Set image sources (replace with actual paths or URLs)
dragonImage.src = 'https://github.com/lakshay60282/lakshay12/blob/4a8361f50382e7caaa3f76f9da8fb89ce182795d/Untitled%20design.png'; // Update with your GitHub URL
backgroundImage.src = 'https://raw.githubusercontent.com/USERNAME/REPOSITORY/BRANCH/images/background.png'; // Update with your GitHub URL

const dragon = {
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    speed: 5
};

let score = 0;

function drawBackground() {
    console.log('Drawing background');
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
}

function drawDragon() {
    console.log('Drawing dragon');
    ctx.drawImage(dragonImage, dragon.x, dragon.y, dragon.width, dragon.height);
}

function updateGame() {
    console.log('Updating game');
    drawBackground();
    drawDragon();
    updateScore();
}

function updateScore() {
    document.getElementById('score').innerText = `Score: ${score}`;
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

function startVoiceRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        switch (command) {
            case 'move left':
                moveDragon('left');
                break;
            case 'move right':
                moveDragon('right');
                break;
            case 'move up':
                moveDragon('up');
                break;
            case 'move down':
                moveDragon('down');
                break;
        }
        recognition.start(); // Restart recognition to keep listening
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error detected:', event.error);
    };

    recognition.start();
}

dragonImage.onload = function() {
    console.log('Dragon image loaded');
    backgroundImage.onload = function() {
        console.log('Background image loaded');
        updateGame();
        startVoiceRecognition(); // Start voice recognition when images are loaded
    };
};

dragonImage.onerror = function() {
    console.error('Failed to load dragon image');
};

backgroundImage.onerror = function() {
    console.error('Failed to load background image');
};
