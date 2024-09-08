const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game settings
const petSize = 50;
const petSpeed = 10;
const blockWidth = 100;
const blockHeight = 20;
const blockSpeed = 5;

// Load images
const petImages = [
    'images/pet_frame1.png',
    'images/pet_frame2.png'
];
const backgroundImages = [
    'images/background1.png',
    'images/background2.png'
];
let petImageIndex = 0;
let backgroundImageIndex = 0;
let petX = canvas.width / 2;
let petY = canvas.height / 2;
let blocks = [];
let score = 0;
let highScore = 0;
let frameCount = 0;

// Voice recognition setup
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.onresult = event => {
    const command = event.results[0][0].transcript.toLowerCase();
    if (command.includes('up')) {
        petY -= petSpeed;
    } else if (command.includes('down')) {
        petY += petSpeed;
    }
};
recognition.start();

// Create a block
function createBlock() {
    const x = Math.random() * (canvas.width - blockWidth);
    const y = -blockHeight;
    return { x, y };
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game settings
const petSize = 50;
const petSpeed = 10;
const blockWidth = 100;
const blockHeight = 20;
const blockSpeed = 5;

// Load images
const petImages = [
    'images/pet_frame1.png',
    'images/pet_frame2.png'
];
const backgroundImages = [
    'images/background1.png',
    'images/background2.png'
];
let petImageIndex = 0;
let backgroundImageIndex = 0;
let petX = canvas.width / 2;
let petY = canvas.height / 2;
let blocks = [];
let score = 0;
let highScore = 0;
let frameCount = 0;

// Voice recognition setup
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.onresult = event => {
    const command = event.results[0][0].transcript.toLowerCase();
    if (command.includes('up')) {
        petY -= petSpeed;
    } else if (command.includes('down')) {
        petY += petSpeed;
    }
};
recognition.start();

// Create a block
function createBlock() {
    const x = Math.random() * (canvas.width - blockWidth);
    const y = -blockHeight;
    return { x, y };
}

// Draw function
function draw() {
    // Draw background
    const backgroundImage = new Image();
    backgroundImage.src = backgroundImages[backgroundImageIndex];
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    // Draw pet
    const petImage = new Image();
    petImage.src = petImages[petImageIndex];
    ctx.drawImage(petImage, petX, petY, petSize, petSize);

    // Draw blocks
    ctx.fillStyle = 'red';
    blocks.forEach(block => {
        ctx.fillRect(block.x, block.y, blockWidth, blockHeight);
    });

    // Draw text
    ctx.fillStyle = 'black';
    ctx.font = '24px Arial';
    ctx.fillText('Made By Lakshay', 10, 30);
    ctx.fillText(`Score: ${score}`, 10, 60);
    ctx.fillText(`High Score: ${highScore}`, 10, 90);
}

// Update function
function update() {
    frameCount++;
    petImageIndex = Math.floor(frameCount / 10) % petImages.length;

    // Move blocks
    blocks.forEach(block => {
        block.y += blockSpeed;
        if (block.y > canvas.height) {
            blocks.splice(blocks.indexOf(block), 1);
            blocks.push(createBlock());
            score++;
            if (score > highScore) {
                highScore = score;
                backgroundImageIndex = (backgroundImageIndex + 1) % backgroundImages.length;
            }
        }
    });

    // Collision detection
    blocks.forEach(block => {
        if (
            petX < block.x + blockWidth &&
            petX + petSize > block.x &&
            petY < block.y + blockHeight &&
            petY + petSize > block.y
        ) {
            alert(`Game Over! Your score is ${score}.`);
            score = 0;
            blocks = [];
            for (let i = 0; i < 5; i++) {
                blocks.push(createBlock());
            }
        }
    });

    draw();
}

// Game loop
function gameLoop() {
    update();
    requestAnimationFrame(gameLoop);
}

// Initialize blocks and start game
for (let i = 0; i < 5; i++) {
    blocks.push(createBlock());
}
gameLoop();
￼Enter}

// Draw function
function draw() {
    // Draw background
    const backgroundImage = new Image();
    backgroundImage.src = backgroundImages[backgroundImageIndex];
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    // Draw pet
    const petImage = new Image();
    petImage.src = petImages[petImageIndex];
    ctx.drawImage(petImage, petX, petY, petSize, petSize);

    // Draw blocks
    ctx.fillStyle = 'red';
    blocks.forEach(block => {
        ctx.fillRect(block.x, block.y, blockWidth, blockHeight);
    });

    // Draw text
    ctx.fillStyle = 'black';
    ctx.font = '24px Arial';
    ctx.fillText('Made By Lakshay', 10, 30);
    ctx.fillText(`Score: ${score}`, 10, 60);
    ctx.fillText(`High Score: ${highScore}`, 10, 90);
Update function
function update() {
    frameCount++;
    petImageIndex = Math.floor(frameCount / 10) % petImages.length;

    // Move blocks
    blocks.forEach(block => {
        block.y += blockSpeed;
        if (block.y > canvas.height) {
            blocks.splice(blocks.indexOf(block), 1);
            blocks.push(createBlock());
            score++;
            if (score > highScore) {
                highScore = score;
                backgroundImageIndex = (backgroundImageIndex + 1) % backgroundImages.length;
            }
        }
    });

    // Collision detection
    blocks.forEach(block => {
        if (
            petX < block.x + blockWidth &&
            petX + petSize > block.x &&
