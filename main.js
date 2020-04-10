'use strict'

// field settings

const FIELD_ROWS = 26;
const FIELD_CELLS = 60;
const FIELD_CHAR_INIT = ' ';
const FIELD_CHAR_SNAKE = 'Q';

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
    let position = (y - 1) * FIELD_CELLS + (y - 1) + x - 1;
    field = field.slice(0, position) + char + field.slice(position + 1);
    gameField.innerHTML = field;
}

function main() {

    initField();
    
    let p1 = new Point(7, 3, 'U');
    p1.draw();

    let p2 = new Point(15, 15, 'X');
    p2.draw();
    

    console.log('Hello world');
}

document.addEventListener('DOMContentLoaded', main);
