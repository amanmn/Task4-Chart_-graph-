// const dataShow = document.querySelector('#myChart');
const data = {
    'year': [0 ,'AGE 5', 'AGE 10', 'AGE 15', 'AGE 20', 'AGE 25', 'AGE 30', 'AGE 35', 'AGE 40', 'AGE 45'],
    // 'age': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    'income': [0, 300, 1100, 1500, 3000, 6000, 9000, 12000, 15000, 18000],
    'exp': [1250, 3650, 5500, 6800, 8200, 9500, 10500, 12000, 14000, 17000]
}

new Chart("myChart", {
    type: "line",
    labels: 'age',
    data: {
        labels: 'year',
        labels: data.year,
        fontSize: '50px',

        datasets: [
            {
                // label : 'year',
                data: data.age,
                borderColor: 'white',
                fill: false,
            }, {

                label: 'income',
                data: data.income,
                borderColor: 'green',
                fill: false,
            },
            {
                label: 'expenses',
                data: data.exp,
                borderColor: 'red',
                fill: false
            }],
    },
    options: {
        responsive: true,
            legend: {
                display: false, // Change this to true if you want to display the legend
                labels: {
                    font: {
                        size: 16 // Font size for legend labels
                    }
                }
            },
        title: {
            text:'Age/Income/Expenses',
            display: true,
        }
    }
});
