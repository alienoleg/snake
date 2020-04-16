'use strict'

// field settings

const FIELD_ROWS = 25;
const FIELD_CELLS = 80;

const FIELD_CHAR_INIT = ' ';
const FIELD_CHAR_SNAKE = '*';
const FIELD_CHAR_LINE = '#';
const FIELD_CHAR_FOOD = '@';

const LEFT = 1;
const RIGHT = 2;
const UP = 3;
const DOWN = 4;

/**
 * classes
 */

class Point {

  x = null;
  y = null;
  sym = '';

  constructor(_x, _y, _sym) {
    this.x = _x;
    this.y = _y;
    this.sym = _sym;
  }

  draw() {
    setChar(this.x, this.y, this.sym);        
  }

  clear() {
    setChar(this.x, this.y, ' ');
  }

  move(offset, direction) {
    switch(direction) {
      case LEFT:
        this.x -= offset;
        break;
      case RIGHT:
        this.x += offset;
        break;
      case UP:
        this.y -= offset;
        break;
      case DOWN:
        this.y += offset;
        break;      
    }
  }

}

class Figure {

  points = []

  draw() {
    for(let point of this.points) {
      point.draw();
    }
  }

}

class HorizontalLine extends Figure{

  constructor(xLeft, xRight, y, sym) {
    super();
    for(let i = xLeft; i <= xRight; i++) {
      this.points.push( new Point(i, y, sym) );
    }
  }

}

class VerticalLine extends Figure{

  constructor(yUp, yDown, x, sym) {
    super();
    for(let i = yUp; i <= yDown; i++) {
      this.points.push( new Point(x, i, sym) );
    }
  }

}

class Snake extends Figure {

  direction;

  constructor(tailPoint, snakeLength, _direction) {
    super();
    this.direction = _direction;
    for(let i = 0; i < snakeLength; i++) {
      let point = new Point(tailPoint.x, tailPoint.y, tailPoint.sym);
      point.move(i, this.direction);
      this.points.push(point);
    }
  }

  move() {
    let tail = this.points.shift();
    let head = this._getNewPoint();
    this.points.push(head);

    tail.clear();
    head.draw();
  }

  _getNewPoint() {
    let head = this.points[this.points.length -1];
    let newPoint = new Point(head.x, head.y, head.sym);
    newPoint.move(1, this.direction);
    return newPoint;
  }

  keyHandler(key) {
    switch(key) {
      case 'w':
        this.direction = UP;
        break;
      case 's':
        this.direction = DOWN;
        break;
      case 'a':
        this.direction = LEFT;
        break;
      case 'd':
        this.direction = RIGHT;
        break;
    }
  }

}

class FoodCreator {

  mapWidth;
  mapHeight;
  sym;

  constructor(mapWidth, mapHeight, sym) {
    this.mapWidth = mapWidth;
    this.mapHeight = mapHeight;
    this.sym = sym;    
  }

  createFood() {
    let x = Math.trunc( Math.random() * (this.mapWidth - 2) + 1 );
    let y = Math.trunc( Math.random() * (this.mapHeight - 2) + 1 );
    console.log('x: ', x, ' y: ', y);
    let food = new Point(x, y, this.sym);
    return food;
  }

}

/**
 * End of classes
 */

let field = '';
let gameField = null;

function initField() {
  gameField = document.getElementById('gameField');

  for (let i = 0; i < FIELD_ROWS; i++) {
    for (let j = 0; j < FIELD_CELLS; j++) {
      field += FIELD_CHAR_INIT;
    }
    field += '\n';
  }

  gameField.innerHTML = field;
}

function setChar(x, y, char) {
  let position = y * FIELD_CELLS + y + x;
  field = field.slice(0, position) + char + field.slice(position + 1);
  gameField.innerHTML = field;
}

function getChar(x, y) {
  let position = y * FIELD_CELLS + y + x;
  return field.charAt(position);
}

function main() {

  initField();

  // draw border
  let upBorder = new HorizontalLine(0, FIELD_CELLS - 1, 0, FIELD_CHAR_LINE);
  let downBorder = new HorizontalLine(0, FIELD_CELLS - 1, FIELD_ROWS - 1, FIELD_CHAR_LINE);
  let leftBorder = new VerticalLine(0, FIELD_ROWS - 1, 0, FIELD_CHAR_LINE);
  let rightBorder = new VerticalLine(0, FIELD_ROWS - 1, FIELD_CELLS - 1, FIELD_CHAR_LINE);
  upBorder.draw();
  downBorder.draw();
  leftBorder.draw();
  rightBorder.draw();
  
  let p1 = new Point(10, 10, FIELD_CHAR_SNAKE);
  let snake = new Snake(p1, 4, DOWN);
  snake.draw();

  let foodCreator = new FoodCreator(FIELD_CELLS, FIELD_ROWS, FIELD_CHAR_FOOD);
  let food = foodCreator.createFood();
  food.draw();
  
  document.addEventListener('keypress', function(event) {
    snake.keyHandler(event.key);
  });

  let gameTimer = null;
  
  document.getElementById('start').onclick = function() {
    gameTimer = setInterval( () => snake.move(), 200);
  }

  document.getElementById('stop').onclick = function() {
    console.log('stop');
    clearInterval(gameTimer);
  }
}

document.addEventListener('DOMContentLoaded', main);
