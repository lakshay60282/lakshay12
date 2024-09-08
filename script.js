const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const dragonImage = new Image();
dragonImage.src = 'https://github.com/lakshay60282/lakshay12/blob/main/Untitled%20design.png';
const backgroundImage = new Image();
backgroundImage.src = 'https://github.com/lakshay60282/lakshay12/blob/6a6b2d86aad3136972f9a8f6f93f19e516019226/background.png

co';
    nst dragon = {
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
    backgroundImage.onload = function() {
        updateGame();
        startVoiceRecognition(); // Start voice recognition when images are loaded
    }
};
