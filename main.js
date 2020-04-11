'use strict'

// field settings

const FIELD_ROWS = 25;
const FIELD_CELLS = 80;

const FIELD_CHAR_INIT = ' ';
const FIELD_CHAR_SNAKE = 'Q';
const FIELD_CHAR_LINE = '#';

/**
 * classes
 */

class Point {

  x = null;
  y = null;
  sym = '';

  constructor(x, y, char) {
    this.x = x;
    this.y = y;
    this.sym = char;
  }

  draw() {
    setChar(this.x, this.y, this.sym);        
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
  
  let p1 = new Point(10, 10, 'U');
  p1.draw();

  console.log('Hello world');
}

document.addEventListener('DOMContentLoaded', main);
