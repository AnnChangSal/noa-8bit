export default function create() {
    // Background and player as before
    this.add.image(400, 300, 'background');
    this.player = this.physics.add.sprite(400, 300, 'character');
    this.player.setCollideWorldBounds(true);
  
    // Add interactive object
    const resume = this.add.text(200, 200, 'Resume', {
      fontSize: '16px',
      fill: '#fff',
    });
    resume.setInteractive();
    resume.on('pointerdown', () => {
      window.open('https://your-resume-link.com', '_blank');
    });
  
    // Add other elements...
  }
  