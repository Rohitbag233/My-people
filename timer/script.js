 
  function updateCountdown() {
    const targetDate = new Date("Wednesday, 4 May 2061, 14:15:00");
    const now = new Date();
  
    if (targetDate <= now) {
      document.getElementById('countdown-timer').innerHTML = 'Event has already occurred.';
      return;
    }
  
    let years = targetDate.getFullYear() - now.getFullYear();
    let months = targetDate.getMonth() - now.getMonth();
    let days = targetDate.getDate() - now.getDate();
    let hours = targetDate.getHours() - now.getHours();
    let minutes = targetDate.getMinutes() - now.getMinutes();
    let seconds = targetDate.getSeconds() - now.getSeconds();
  
    // Adjust negative values
    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }
    if (days < 0) {
      const daysInLastMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0).getDate();
      days += daysInLastMonth;
      months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }
  
    const countdownElement = document.getElementById('countdown-timer');
    countdownElement.innerHTML = `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }
  
  setInterval(updateCountdown, 1000);
  updateCountdown();
  
//timetaken 

function updateTimePassed() {
  const startTime = new Date('December 5, 2006');
  const now = new Date();

  const timeDifference = now - startTime;

  // Calculate years, months, days, hours, minutes, and seconds
  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30.44)) % 12;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) % 30;
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDifference / 1000) % 60);

  const timePassedElement = document.getElementById('time-passed');
  timePassedElement.innerText = `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Update time every second
setInterval(updateTimePassed, 1000);

// Call the function to update the time passed initially
updateTimePassed();



//musicplayer
const backgroundMusic = document.getElementById('background-music');

if (backgroundMusic) {
    backgroundMusic.volume = 1; // Adjust the volume (0.0 to 1.0)
    backgroundMusic.play();
}
