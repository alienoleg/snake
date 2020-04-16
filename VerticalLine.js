class VerticalLine extends Figure{

  constructor(yUp, yDown, x, sym) {
    super();
    for(let i = yUp; i <= yDown; i++) {
      this.points.push( new Point(x, i, sym) );
    }
  }

}