<html>
<head>
<title>My first chart using FusionCharts Suite XT</title>
<script type="text/javascript" src="/assets/fusioncharts/js/fusioncharts.js"></script>
<script type="text/javascript" src="/assets/fusioncharts/js/themes/fusioncharts.theme.fint.js"></script>
<script type="text/javascript">
  FusionCharts.ready(function(){
    var revenueChart = new FusionCharts({
        "type": "pie3d",
        "renderAt": "chartContainer",
        "width": "500",
        "height": "300",
        "dataFormat": "json",
        "dataSource":  {
          "chart": {
            "caption": "Exception Listing",
            "subCaption": "7th July 2016",
            "xAxisName": "System",
            "yAxisName": "Exceptions",
            "theme": "fint"
         },
         "data": [
            {
               "label": "CLASS",
               "value": "2"
            },
            {
               "label": "SFD",
               "value": "1"
            }
          ]
      }

  });
revenueChart.render();
})
</script>
</head>
<body>
  <div id="chartContainer">FusionCharts XT will load here!</div>
</body>
</html>