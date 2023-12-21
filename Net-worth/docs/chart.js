// Assuming netWorthHistory is an array with date and value pairs
const dates = netWorthHistory.map(data => data.date);
const values = netWorthHistory.map(data => data.value);

const netWorthCtx = document.getElementById('netWorthChart').getContext('2d');

new Chart(netWorthCtx, {
    type: 'line',
    data: {
        labels: dates,
        datasets: [{
            label: 'Net Worth',
            data: values,
            borderColor: '#00FFFF',
            borderWidth: 2,
            pointBackgroundColor: '#FFFFFF', // Color of data points
            pointBorderColor: '#FFFFFF', // Border color of data points
            pointRadius: 4, // Size of data points
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
                    color: '#FFFFFF',
                    text: 'Date'
                },
                ticks: {
                    color: '#FFFFFF' // Color of x-axis labels
                }
            },
            y: {
                title: {
                    display: true,
                    color: '#FFFFFF',
                    text: 'Net Worth (₹)'
                },
                beginAtZero: true,
                ticks: {
                    color: '#FFFFFF' // Color of y-axis labels
                }
            }
        }
    }
});


    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCV44cHPKR1EsCgQlAFMpG4lk5Se8xuR_M",
    authDomain: "my-net-worth-a4177.firebaseapp.com",
    databaseURL: "https://my-net-worth-a4177-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "my-net-worth-a4177",
    storageBucket: "my-net-worth-a4177.appspot.com",
    messagingSenderId: "1080228195489",
    appId: "1:1080228195489:web:484c281a1022ad36cb14e0",
    measurementId: "G-07RS78PKP2"
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();


// Load net worth history from Firebase
const netWorthRef = database.ref('netWorthHistory');

netWorthRef.on('value', (snapshot) => {
    const data = snapshot.val();
    const netWorthHistory = Object.values(data || []);

    // Assuming netWorthHistory is an array with date and value pairs
    const dates = netWorthHistory.map(data => data.date);
    const values = netWorthHistory.map(data => data.value);

    const netWorthCtx = document.getElementById('netWorthChart').getContext('2d');

    new Chart(netWorthCtx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'Net Worth',
                data: values,
                color: '#FFFFFF',
                borderColor: '#00FFFF',
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
                        color: '#FFFFFF',
                        text: 'Date'
                    }
                },
                y: {
                    title: {
                        display: true,
                        color: '#FFFFFF',
                        text: 'Net Worth (₹)'
                    },
                    beginAtZero: true
                }
            }
        }
    });
});

function getNetWorth() {
    // Set your specific net worth value here
    const specificNetWorth = 5000;

    // Update the Firebase database
    const currentDate = new Date().toLocaleDateString();
    database.ref('netWorthHistory').push({
        date: currentDate,
        value: specificNetWorth
    });

    // Update the net worth value in the HTML
    const netWorthElement = document.getElementById('net-worth');
    netWorthElement.textContent = `₹${specificNetWorth.toFixed(2)}`;
}


