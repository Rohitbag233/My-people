function getNetWorth() {
    // Set your specific net worth value here

    //put your Net-Worth here Below






    const specificNetWorth = 1000;          // Replace with your desired net worth






    //put your Net-Worth here above 



    // Update the text content of the 'net-worth' element
    const netWorthElement = document.getElementById('net-worth');
    netWorthElement.textContent = `₹{specificNetWorth.toFixed(2)}`;

    // Create particle effects
    createParticles();

    // Animate the net worth
    animateNetWorth(netWorthElement, specificNetWorth);
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
            element.textContent = `₹${currentValue.toFixed(2)}`;
            requestAnimationFrame(update);
        } else {
            element.textContent = `₹${targetValue}`;
        }
    }

    update();
}



function createParticles() {
    const particles = document.getElementById('particles');

    // Add particle elements to the particles container
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particles.appendChild(particle);

        // Set random position and size for each particle
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.width = Math.random() * 8 + 'px';
        particle.style.height = Math.random() * 8 + 'px';
    }

    // Remove particles after animation duration
    setTimeout(() => {
        particles.innerHTML = '';
    }, 5000);
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
            element.textContent = `₹${currentValue.toFixed(2)}`;
            requestAnimationFrame(update);
        } else {
            element.textContent = `₹${targetValue}`;
        }
    }

    update();
}
