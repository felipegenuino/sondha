Chart.defaults.global.responsive = true;


var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Google Income",
            fillColor: "rgba(229,89,52,0.2)",
            strokeColor: "#9BC53D",
            pointColor: "#E55934",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 40, 71, 56, 65, 80]
        },
        {
            label: "Ads Income",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "#E55934",
            pointColor: "#02C39A",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [12, 16, 20, 15, 34, 43, 70]
        }
    ]
};
var context = document.getElementById("graph").getContext("2d");
new Chart(context).Line(data);