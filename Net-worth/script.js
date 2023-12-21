// Load net worth history from local storage
const netWorthHistory = JSON.parse(localStorage.getItem('netWorthHistory')) || [];

function getNetWorth() {
    // Get the current date
    const currentDate = new Date().toLocaleDateString();

    // Set your specific net worth value here
    const specificNetWorth = 1005; // Replace with your desired net worth

    // Update the text content of the 'net-worth' element
    const netWorthElement = document.getElementById('net-worth');
    netWorthElement.textContent = `₹${specificNetWorth.toFixed(2)}`;

    // Store net worth and date in local storage
    const netWorthData = { date: currentDate, value: specificNetWorth };
    netWorthHistory.push(netWorthData);
    localStorage.setItem('netWorthHistory', JSON.stringify(netWorthHistory));

    // Animate the net worth
    animateNetWorth(netWorthElement, specificNetWorth);

    // Update the net worth graph
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

function updateNetWorthGraph() {
    // Extract dates and values for chart data
    const dates = netWorthHistory.map(data => data.date);
    const values = netWorthHistory.map(data => data.value);

    // Get the canvas and context
    const canvas = document.getElementById('netWorthChart');
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the chart
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'Net Worth',
                data: values,
                borderColor: '#00bcd4',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'category',
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Net Worth (₹)'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}

// Initial chart update
updateNetWorthGraph();