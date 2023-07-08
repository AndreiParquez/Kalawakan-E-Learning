document.addEventListener("DOMContentLoaded", function() {
    var chartData = <% JSON.stringify(chartData) %>;

    var options = {
      series: chartData.map(data => data.value),
      labels: chartData.map(data => data.label),
      chart: {
        width: 380,
        type: 'pie',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  });