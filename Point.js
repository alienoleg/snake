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