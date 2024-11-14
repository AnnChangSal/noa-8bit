export default function preload() {
    this.load.image('background', './assets/background.png'); // Replace your pixel background
    this.load.spritesheet('character', './assets/character.png', {
      frameWidth: 32,
      frameHeight: 32,
    }); // Replace with pixel character
  }
  