class Console {

  table;
  field = '';

  constructor(parentElement, consoleWidth, consoleHeight, cellSize = 15) {
    
    for (let i = 0; i < consoleHeight; i++) {
      for (let j = 0; j < consoleWidth; j++) {
        this.field += FIELD_CHAR_INIT;
      }
      this.field += '\n';
    }

    let table = document.createElement('table');
    table.style.border = '1px solid black';
    table.style.borderCollapse = 'collapse';
    this.table = table;
    
    for(let i = 0; i < consoleHeight; i++) {
      let tr = document.createElement('tr');
      for(let j = 0; j < consoleWidth; j++) {
        let td = document.createElement('td');
        td.style.width = cellSize + 'px';
        td.style.height = cellSize + 'px';
        tr.append(td);
      }
      table.append(tr);
    }

    parentElement.append(table);

  }

  setPoint(x, y, char, color = 'black') {
    let position = y * FIELD_CELLS + y + x;
    this.field = this.field.slice(0, position) + char + this.field.slice(position + 1);
    this.table.rows[y].cells[x].style.background = color;
  }
  
  clearPoint(x, y, char) {
    this.table.rows[y].cells[x].style.background = 'white';
  }

  getPoint(x, y) {
    let position = y * FIELD_CELLS + y + x;
    return this.field.charAt(position);
  }
}