const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");

let gameOver = false;
let foodX, foodY;
let snakeX = 5,
    snakeY = 5;
let velocityX = 0,
    velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;

//GET HIGH SCORE FROM LOCAL STORAGE
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;

//PASS A RANDOM BETWEEN 1 AND 30 AS FOOD POSITION
const updateFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
};

const handleGameOver = () => {
    clearInterval(setIntervalId);
    alert("Game Over: Press OK to replay...");
    location.reload();
};

//CHANGE VELOCITY VALUE BASED ON KEY PRESS
const changeDirection = (e) => {
    if (e.key === "ArrowUp" && velocity != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
};
