/*global Phaser, window*/
import BootScene from './scenes/BootScene.js';
import config from './config/config.js';

class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();
