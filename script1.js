const heart25 = document.querySelector('.heart-25');

function moveInHeartShape() {
  const radius = 10; // Size of the heart
  const speed = 0.01; // Speed of movement
  let angle = 0;

  function animate() {
    // Parametric equations for a heart shape
    const x = radius * 16 * Math.pow(Math.sin(angle), 3);
    const y = -radius * (13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));

    // Center the heart shape on the screen
    heart25.style.left = `${window.innerWidth / 2 + x}px`;
    heart25.style.top = `${window.innerHeight / 2 + y}px`;

    angle += speed; // Increment the angle for smooth movement
    requestAnimationFrame(animate); // Continuously animate
  }

  animate();
}

moveInHeartShape();