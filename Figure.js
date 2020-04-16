class Figure {

  points = []

  draw() {
    for(let point of this.points) {
      point.draw();
    }
  }

}