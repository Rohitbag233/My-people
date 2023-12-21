// Load net worth history from local storage
const netWorthHistory = JSON.parse(localStorage.getItem('netWorthHistory')) || [];

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
