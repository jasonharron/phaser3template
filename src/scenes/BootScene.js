/*global Phaser*/
export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }

  init (data) {
    // Initialization code goes here
  }

  preload () {
    // Preloader code goes here
    this.load.image('logo', './assets/logo.png');
    this.centerX = this.cameras.main.width / 2;
    this.centerY = this.cameras.main.height / 2;
  }

  create (data) {
    //Create the scene
      var playerScore = 10;
      var logo = this.add.image(this.centerX, this.centerY, 'logo');
  }

  update (time, delta) {
    // Update the scene
  }
}
