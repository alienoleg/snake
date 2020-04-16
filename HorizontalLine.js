class HorizontalLine extends Figure{

  constructor(xLeft, xRight, y, sym) {
    super();
    for(let i = xLeft; i <= xRight; i++) {
      this.points.push( new Point(i, y, sym) );
    }
  }

}