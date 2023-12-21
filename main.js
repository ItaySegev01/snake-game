import './style.css'

// Define HTML elements
const board = document.getElementById('game-board');
const instructionText = document.getElementById('instruction-text');
const logo = document.getElementById('logo');
const score = document.getElementById('score');
const highScoreText = document.getElementById('highScore');

// Define game variables
const gridSize = 20;
let snake = [{ x: 10, y: 10 }];
let food = generateFood();
let highScore = 0;
let direction = 'right';
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;

function draw(){
  board.innerHTML = '';
  drawSnake();
}

function drawSnake(){
  snake.forEach((segment) => {
      const snakeElement = createGameElement('div','snake');
      setPosition(snakeElement,segment);
      board.appendChild(snakeElement);
  })
}

// Create a snake or food cube/div
function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
  }