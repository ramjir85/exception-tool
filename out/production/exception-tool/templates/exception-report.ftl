<!doctype html>

<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Implementation Plan</title>
    <meta name="description" content="Stuff">

    <link rel="stylesheet" href="/assets/css/mycss.css">

    <script type="text/javascript" src="/assets/fusioncharts/js/fusioncharts.js"></script>
    <script type="text/javascript" src="/assets/fusioncharts/js/themes/fusioncharts.theme.fint.js"></script>
    <script type="text/javascript">
    function showGraph() {
    alert("Going to show graph");
    document.getElementById('graphreport').style.display= 'block';
    }
    </script>

</head>
<#include "/templates/header.ftl">
<body>
<form >
  <fieldset>

   <div class="center">
    <div class="dropdown">
      <button class="dropbtn">Home</button>
          </div>

     <div class="dropdown">
       <button class="dropbtn">Exception Report</button>
       <div class="dropdown-content">
         <a href="/get-report?type=tabular" target="tablereport">Tabular Report</a>
         <a href="/get-report?type=graphical" target="graphreport">Graphical Report</a>
       </div>
      </div>
</div>
<br>
  <div class="box" align="left"><iframe frameborder="0" scrolling="no" height="512" width="100%" name="tablereport"></iframe></div>
  <div class="box" align="right"><iframe frameborder="0" scrolling="no" height="512" width="100%" name="graphreport"></iframe></div>
</fieldset>
</form>
</body>
<#include "/templates/footer.ftl">
</html>