// Load net worth history from local storage
const netWorthHistory = JSON.parse(localStorage.getItem('netWorthHistory')) || [];

function getNetWorth() {
    const currentDate = new Date().toLocaleDateString();
    const specificNetWorth = 1600; // Replace with your desired net worth

    const netWorthElement = document.getElementById('net-worth');
    netWorthElement.textContent = `₹${specificNetWorth.toFixed(2)}`;

    const netWorthData = { date: currentDate, value: specificNetWorth };
    netWorthHistory.push(netWorthData);
    localStorage.setItem('netWorthHistory', JSON.stringify(netWorthHistory));

    animateNetWorth(netWorthElement, specificNetWorth);
    updateNetWorthGraph();
}

function animateNetWorth(element, targetValue) {
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60 frames per second
    const frames = duration / frameDuration;
    const step = (targetValue - 0) / frames;

    let currentValue = 0;
    let currentFrame = 0;

    function update() {
        currentFrame++;
        currentValue += step;

        if (currentFrame <= frames) {
            element.innerHTML = `₹${currentValue.toFixed(2)}`;
            requestAnimationFrame(update);
        } else {
            element.innerHTML = `₹${targetValue.toFixed(2)}`;
        }
    }

    update();
}
