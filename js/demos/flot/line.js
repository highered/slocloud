$(function () {
    
  var d1, d2, data, chartOptions

  d1 = [
    [1262304000000, 100], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 1129], 
    [1272672000000, 1163], [1275350400000, 1905], [1277942400000, 2002], [1280620800000, 2917], 
    [1283299200000, 2700], [1285891200000, 2700], [1288569600000, 2100], [1291161600000, 1700]
  ]
 
  d2 = [
    [1262304000000, 0], [1264982400000, 0], [1267401600000, 0], [1270080000000, 0],
    [1272672000000, 675], [1275350400000, 679], [1277942400000, 789], [1280620800000, 1026], 
    [1283299200000, 1640], [1285891200000, 1892], [1288569600000, 2147], [1291161600000, 2256]
  ]

  data = [{ 
    label: "Total de visitas", 
    data: d1
  }, {
    label: "Total de vendas",
    data: d2
  }]
 
  chartOptions = {
    xaxis: {
      min: (new Date(2009, 12, 1)).getTime(),
      max: (new Date(2010, 11, 2)).getTime(),
      mode: "time",
      tickSize: [1, "month"],
      monthNames: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      tickLength: 0
    },
    yaxis: {

    },
    series: {
      lines: {
        show: true, 
        fill: false,
        lineWidth: 3
      },
      points: {
        show: true,
        radius: 3,
        fill: true,
        fillColor: "#ffffff",
        lineWidth: 3
      }
    },
    grid: { 
      hoverable: true, 
      clickable: true, 
      borderWidth: 0 
    },
    legend: {
      show: true
    },
    tooltip: true,
    tooltipOpts: {
      content: '%s: %y'
    },
    colors: mvpready_core.layoutColors
  }    

  var holder = $('#line-chart')

  if (holder.length) {
    $.plot(holder, data, chartOptions )
  }

})
