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