// script.js

document.addEventListener('DOMContentLoaded', function() {
    const chartOptions = {
        plugins: {
            legend: {
                labels: {
                    font: {
                        family: 'Kode Mono', // Use Poppins font family
                        size: 14 // Adjust the font size as needed
                    }
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    font: {
                        family: 'Kode Mono', // Use Poppins font family for Y-axis ticks
                        size: 12 // Adjust the font size for Y-axis ticks as needed
                    }
                }
            },
            x: {
                ticks: {
                    font: {
                        family: 'Kode Mono', // Use Poppins font family for X-axis ticks
                        size: 12 // Adjust the font size for X-axis ticks as needed
                    }
                }
            }
        }
    };

    const chartConfig = {
        type: 'bar', // Example chart type
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Sales',
                data: [50, 60, 70, 180, 190, 200, 220],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: chartOptions
    };

    new Chart(document.getElementById('myChart'), chartConfig);
});
