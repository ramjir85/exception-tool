<!doctype html>

<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Implementation Plan</title>
    <meta name="description" content="Stuff">

    <link rel="stylesheet" href="/assets/css/w3.css">
    <link rel="stylesheet" href="/assets/css/mycss.css">

    <style>

    #main_section{
        width:700px;
        height:500px;
        border:1px solid white;
        margin-left:350px;
    }

    legend {
        color:#696969;
        font-weight:bold;
        font-size:1.1em;
    }
    span {
        color:red;
        font-weight:bold;
        font-size:1.1em;
    }

  a:link, a:visited {
      background-color: #008000;
      border-radius: 25px;
      color: white;
      padding: 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
  }

  a:hover, a:active {
      background-color: gray;
  }
    </style>

</head>
<body>
     <header>
        <div>
            <table>
            <tr>
                    <td><h1 class="w3-xxxlarge" align="center">Sync Exception Dashboard</h1></td>
                </tr>
                </table>
        </div>
    </header>
<fieldset style="border: 2px solid;" align="center">
    <legend>
        <span></span>
        <a href="/get-report?type=tabular">Tabular Report</a>
        <a href="/get-report?type=graphical">Graphical Report</a>
    </legend>
     <div id="main_section" align="center">
        <#if mainSection?? >
        <#include "${mainSection}">
        </#if>
        </div>
</fieldset>

 <footer align="center">
     <table align="center">
         <tr><td><img src="/assets/images/slc.jpg" align="center" style="width:10%;max-width:80px"></td></tr>
 </table>
 </footer>


</body>
</html>