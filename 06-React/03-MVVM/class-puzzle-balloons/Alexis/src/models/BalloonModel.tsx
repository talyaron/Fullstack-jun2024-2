class BalloonModel {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  moveUp() {
    this.y -= 5; // Moves the balloon up by 5 pixels
  }
}

export default BalloonModel;
