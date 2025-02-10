// Set the date and time for the countdown (e.g., her birthday at midnight)
const countdownDate = new Date("2025-02-11T00:00:00").getTime(); // Replace with her birthday date
// const countdownDate = new Date("2025-02-10T02:30:00").getTime();

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const surpriseElement = document.getElementById("surprise");

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;

  // If the countdown is over, show the surprise
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").classList.add("hidden");
    surpriseElement.style.display = "block";
    triggerConfetti(); // Trigger confetti effect
  }
}, 1000);

// Confetti effect (using a simple library)
function triggerConfetti() {
  const confettiSettings = { target: "confetti" };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();

  // Add confetti canvas to the body
  const confettiCanvas = document.createElement("canvas");
  confettiCanvas.id = "confetti";
  document.body.appendChild(confettiCanvas);
}