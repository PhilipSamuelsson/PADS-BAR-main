    //CHARTS
    fetch('chart.json')
    .then ((response) => response.json())
    .then ((result) => {
        const chart = document.querySelector("#myChart").getContext('2d')

        const data = [];
        const labels = [];

        for(let n = 0; n < result.length; n++){
            const votes = result[n];
            data.push(votes.value);
            labels.push(votes.name)
        }
        console.log('labels', labels)
        const myChart = new Chart(chart, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Votes',
                    data: data,
                    backgroundColor: [
                        'rgba(150, 200, 200, 0.6)',
                        'rgba(150, 200, 200, 0.6)',
                        'rgba(150, 200, 200, 0.6)',
                        'rgba(150, 200, 200, 0.6)',
                        'rgba(150, 200, 200, 0.6)',


                    ],

                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        let sum = data.reduce((a, b) => a + b, 0);
        //antal röster
         let a = data[0];
        let b = data[1];
        let c = data[2];
        let d = data[3];
        let e = data[4];
        console.log(sum)
        let avg = (a*1 + b*2 + c*3 + d*4 + e*5) / sum;
        let avgRounded = Math.round(avg * 10) / 10;
        document.querySelector(".avg").innerHTML = avgRounded + "/5"
    })
