<html>
<head>
<title>My first chart using FusionCharts Suite XT</title>
 <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
 <link rel="stylesheet" href="/assets/css/dataTables.bootstrap.min.css">
<script type="text/javascript" src="/assets/fusioncharts/js/fusioncharts.js"></script>
<script type="text/javascript" src="/assets/fusioncharts/js/themes/fusioncharts.theme.fint.js"></script>
<script type="text/javascript">
  FusionCharts.ready(function(){
    var revenueChart = new FusionCharts({
        "type": "pie3d",
        "renderAt": "chartContainer",
        "width": "500",
        "height": "450",
        "align": "center",
        "dataFormat": "json",
        "dataSource":  {
          "chart": {
            "caption": "Exception Listing",
            "subCaption": "24th July 2016",
            "xAxisName": "System",
            "yAxisName": "Exceptions",
            "theme": "fint"
         },
         "data": [

         <#list exceptionPerSystemsList as exceptionPerSystems>


            <#if exceptionPerSystems?has_content>
            {
               "label": "${exceptionPerSystems.system}",
               "value": "${exceptionPerSystems.exceptionCount}"
            },
            <#else>
             {
                "label": "${exceptionPerSystems.system}",
                "value": "${exceptionPerSystems.exceptionCount}"
             }
             </#if>
             </#list>
          ]
      }

  });
revenueChart.render();
})
</script>
</head>
<body>
  <div id="chartContainer"></div>
</body>
</html>