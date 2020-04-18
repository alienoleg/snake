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

  eat(food) {
    let head = this._getNewPoint();
    if (Point.isEqual(head, food)) {
      food.sym = head.sym;
      this.points.push(head);
      head.draw();
      return true;
    }
    return false;
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