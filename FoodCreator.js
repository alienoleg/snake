class FoodCreator {

  mapWidth;
  mapHeight;
  sym;

  constructor(mapWidth, mapHeight, sym) {
    this.mapWidth = mapWidth;
    this.mapHeight = mapHeight;
    this.sym = sym;    
  }

  createFood() {
    let x = Math.trunc( Math.random() * (this.mapWidth - 2) + 1 );
    let y = Math.trunc( Math.random() * (this.mapHeight - 2) + 1 );
    console.log('x: ', x, ' y: ', y);
    let food = new Point(x, y, this.sym);
    return food;
  }

}