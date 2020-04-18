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
    field.setPoint(this.x, this.y, this.sym);        
  }

  clear() {
    field.clearPoint(this.x, this.y, ' ');
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

  static isEqual(point1, point2) {
    if (point1.x == point2.x && point1.y == point2.y) {
      return true;
    }
    return false;
  }

}