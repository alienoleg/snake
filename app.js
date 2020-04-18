'use strict'

let field = null;

function main() {

  field = new Console(gameFieldDiv, FIELD_CELLS, FIELD_ROWS, 15);

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
    gameTimer = setInterval( function() {

      if (snake.eat(food)) {
        food = foodCreator.createFood();
        food.draw();
      } else {
        snake.move();
      } 

    }, 150);
  }

  document.getElementById('stop').onclick = function() {
    console.log('stop');
    clearInterval(gameTimer);
  }
}

document.addEventListener('DOMContentLoaded', main);