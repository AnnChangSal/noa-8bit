export default function update() {
    const speed = 160;
  
    // Stop the player by default
    this.player.setVelocity(0);
  
    // Horizontal movement
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-speed);
      this.player.play('walk', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(speed);
      this.player.play('walk', true);
    }
  
    // Vertical movement
    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-speed);
      this.player.play('walk', true);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(speed);
      this.player.play('walk', true);
    }
  
    // Stop animation when idle
    if (!this.cursors.left.isDown && !this.cursors.right.isDown && !this.cursors.up.isDown && !this.cursors.down.isDown) {
      this.player.anims.stop();
    }
  }
  