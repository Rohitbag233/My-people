let timerInterval;
let timeTakenInterval;
let startTime;

// Get the audio element and volume slider element
const audio = document.getElementById('background-music');
const volumeSlider = document.getElementById('volume-slider');

// Play a random track when the page loads
window.addEventListener('load', playRandomTrack);

// Add an event listener to the audio element to play a random track when the current track ends
audio.addEventListener('ended', playRandomTrack);

// Add an event listener to the volume slider
volumeSlider.addEventListener('input', function () {
  // Set the audio volume based on the slider value (between 0 and 1)
  audio.volume = volumeSlider.value / 100;
});

const musicTracks = [
  'Interstellar-Theme1.mp3',
  'AnotherTrack.mp3',
  'YetAnotherTrack.mp3',
  'LinkinParkInTheEnd.mp3',
  'MemoryReboot.mp3',
  'TonyAnnTheInterstellarExperience.mp3',
  'VARDAANInstrumental.mp3',
  'Vengeance.mp3'
];

function playRandomTrack() {
  const randomIndex = Math.floor(Math.random() * musicTracks.length);
  const randomTrack = musicTracks[randomIndex];
  audio.src = randomTrack;
  audio.play();
}

// Time Stayed: it means how much time I have spent on this Earth.
function updateTimeTaken() {
  const now = new Date();
  const startDate = new Date('December 5, 2006, 15:48:00');

  // Calculate the time difference in milliseconds
  const timeDifference = now - startDate;

  // Calculate years, months, days, hours, minutes, and seconds
  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44));
  const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  const timeTakenElement = document.getElementById('time-taken');
  timeTakenElement.innerText = ` ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Countdown Timer: it means how much time is left to live.
function updateCountdown() {
  const targetDate = new Date('Wednesday, 4 May 2061, 14:15:00');
  const now = new Date();

  if (targetDate <= now) {
    document.getElementById('countdown-timer').innerHTML = 'Event has already occurred.';
    clearInterval(timerInterval);
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

// Call your existing countdown update function every second
timerInterval = setInterval(updateCountdown, 1000);

// Call your time taken update function every second
timeTakenInterval = setInterval(updateTimeTaken, 1000);