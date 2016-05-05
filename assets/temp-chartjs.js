  //conteudo provisório, retirar quando implementar
          $(document).ready(function() {
                Chart.defaults.global.responsive = true;
                Chart.defaults.global.legend.labels.fontColor = "#A2BACD";
                Chart.defaults.global.defaultFontColor = '#A2BACD';

                var data = {
                    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                    datasets: [
                        {
                            label: "My First dataset",
                            backgroundColor: "#3d5ab4",
                            borderColor: "rgba(179,181,198,1)",
                            pointBackgroundColor: "rgba(179,181,198,1)",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "rgba(179,181,198,1)",
                            data: [65, 59, 90, 81, 56, 55, 40]
                        },
                        {
                            label: "My Second dataset",
                            backgroundColor: "#d38234",
                            borderColor: "rgba(255,99,132,1)",
                            pointBackgroundColor: "rgba(255,99,132,1)",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "rgba(255,99,132,1)",
                            data: [28, 48, 40, 19, 96, 27, 100]
                        }
                    ]
                };

                var data2 = {
                    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                    datasets: [
                        {
                            label: "My First dataset",
                            backgroundColor: "rgba(179,181,198,0.2)",
                            borderColor: "rgba(179,181,198,1)",
                            pointBackgroundColor: "rgba(179,181,198,1)",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "rgba(179,181,198,1)",
                            data: [65, 59, 90, 81, 56, 55, 40]
                        },
                        {
                            label: "My Second dataset",
                            backgroundColor: "rgba(255,99,132,0.2)",
                            borderColor: "rgba(255,99,132,1)",
                            pointBackgroundColor: "rgba(255,99,132,1)",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "rgba(255,99,132,1)",
                            data: [28, 48, 40, 19, 96, 27, 100]
                        }
                    ]
                };


 
                 var data3 = {
                    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                    datasets: [
                        {
                            label: "My First dataset",
                            backgroundColor: "rgba(225,215,14,0.9)",
                            borderColor: "rgba(225,215,14,0.3)",
                            pointBackgroundColor: "rgba(179,181,198,1)",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "rgba(179,181,198,1)",
                            data: [65, 59, 90, 81, 56, 55, 40]
                        },
                        {
                            label: "My Second dataset",
                            backgroundColor: "rgba(98,68,147,0.9)",
                            borderColor: "rgba(64,44,94,0.4)",
                            pointBackgroundColor: "rgba(255,99,132,1)",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "rgba(255,99,132,1)",
                            data: [28, 48, 40, 19, 96, 27, 100]
                        },
                        {
                            label: "My First dataset",
                            backgroundColor: "rgba(179,181,198,0.9)",
                            borderColor: "rgba(179,181,198,1)",
                            pointBackgroundColor: "rgba(179,181,198,1)",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "rgba(179,181,198,1)",
                            data: [65, 59, 90, 81, 56, 55, 40]
                        },
                        {
                            label: "My Second dataset",
                            backgroundColor: "rgba(255,99,132,0.9)",
                            borderColor: "rgba(255,99,132,1)",
                            pointBackgroundColor: "rgba(255,99,132,1)",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "rgba(255,99,132,1)",
                            data: [28, 48, 40, 19, 96, 27, 100]
                        }
                    ]
                };

  





                var ctx = document.getElementById("chartsample1");
                var myChart = new Chart(ctx, {

                    type: 'bar',
                     data: data,
                    options: {
                         scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }]
                        }
                    }
                });



                var ctx2 = document.getElementById("chartsample2");
                var myChart = new Chart(ctx2, {

                    type: 'line',
                     data: data2,
                    options: {
                         scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }]
                        }
                    }
                });




                var ctx3 = document.getElementById("chartsample3");
                var myChart = new Chart(ctx3, {

                    type: 'pie',
                     data: data3,
                    options: {
                         scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }]
                        }
                    }
                });






           var data10 = {
                    labels: ["18-25", "25-35", "+35", ],
                    datasets: [
                        {
                            label: "18-25",
                            backgroundColor: "rgba(151,187,205,0.5)",
                            borderColor: "rgba(225,215,14,0.3)",
                            pointBackgroundColor: "rgba(179,181,198,1)",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "rgba(179,181,198,1)",
                            data: [65, 59, 90]
                        },
                        {
                            label: "25-35",
                            backgroundColor: "rgba(98,68,147,0.9)",
                            borderColor: "rgba(64,44,94,0.4)",
                            pointBackgroundColor: "rgba(255,99,132,1)",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "rgba(255,99,132,1)",
                            data: [ 96, 27, 100]
                        },
                        {
                            label: "+35",
                               backgroundColor: "#3d5ab4",
                            borderColor: "rgba(179,181,198,1)",
                            pointBackgroundColor: "rgba(179,181,198,1)",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "rgba(179,181,198,1)",
                            data: [65, 55, 40]
                        }
                    ]
                };

  


               var ctx10 = document.getElementById("chartsample10");
                var myChart = new Chart(ctx10, {


                   type: 'doughnut',
                     data: data10,
                      options: {
                            xAxes: [{
                                display: false
                            }]
                        }
                });



                });








              

var dataDoughnut = {
    labels: [
        "Red",
        "Green",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
};


// And for a doughnut chart
var ctx0 = document.getElementById("chartsample4");
var myDoughnutChart = new Chart(ctx0, {
    type: 'doughnut',
    data: dataDoughnut,
    options: {
        elements: {
            arc: {
                borderColor: "#000000"
            }
        }
    }
});







 



