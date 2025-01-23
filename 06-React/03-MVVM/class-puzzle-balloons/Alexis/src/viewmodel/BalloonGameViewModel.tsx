import BalloonModel from "../models/BalloonModel";

class BalloonGameViewModel {
  balloons: BalloonModel[] = [];
  onUpdate: (() => void) | null = null; 

  addBalloon() {
    const x = Math.random() * window.innerWidth; 
    const y = window.innerHeight; 
    this.balloons.push(new BalloonModel(x, y));
    this.notifyUpdate();
  }

  updateBalloons() {
    this.balloons.forEach((balloon, index) => {
      balloon.moveUp();
      if (balloon.y <= 0) {
        this.balloons.splice(index, 1); 
      }
    });
    this.notifyUpdate();
  }

  notifyUpdate() {
    if (this.onUpdate) {
      this.onUpdate(); 
    }
  }
}

export default BalloonGameViewModel;
