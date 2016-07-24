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
        height:800px;
        border:1px solid white;
        margin-right:10px;
        float:center;
    }

    #right_section{
        width:700px;
        height:800px;
        border:1px solid white;
        margin-right:10px;
        float:left;
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
    <!-- Menu -->

<!--
   <div class="center">
    <div class="dropdown">
      <button class="dropbtn">Home</button>
          </div>


     <div class="dropdown">
       <button class="dropbtn">CLASS</button>
       <div class="dropdown-content">
         <a href="/get-report?type=tabular">Tabular Report</a>
         <a href="/get-report?type=graphical">Graphical Report</a>
       </div>
      </div>

       <div class="dropdown">
             <button class="dropbtn">SFD</button>
             <div class="dropdown-content">
               <a href="/get-report?type=tabular">Tabular Report</a>
               <a href="/get-report?type=graphical">Graphical Report</a>
             </div>
            </div>

             <div class="dropdown">
                   <button class="dropbtn">FE</button>
                   <div class="dropdown-content">
                     <a href="/get-report?type=tabular">Tabular Report</a>
                     <a href="/get-report?type=graphical">Graphical Report</a>
                   </div>
                  </div>

                   <div class="dropdown">
                         <button class="dropbtn">HEI</button>
                         <div class="dropdown-content">
                           <a href="/get-report?type=tabular">Tabular Report</a>
                           <a href="/get-report?type=graphical">Graphical Report</a>
                         </div>
                        </div>
</div>
-->

<fieldset align = "center" style="border: 2px solid; ">
    <legend>
        <span></span>
        <div class="dropdown-content">
         <a href="/get-report?type=tabular">Tabular Report</a></div>
        <div class="dropdown-content">
        <a href="/get-report?type=graphical">Graphical Report</a></div>
    </legend>
     <div id="main_section">
        <#if mainSection?? >
        <#include "${mainSection}">
        </#if>
        </div>
</fieldset>


   <!-- <div id="right_section">
        <#if rightPane?? >
        <#include "${rightPane}">
        </#if>
        </div>
        -->
 <footer align="center">
     <table align="center">
         <tr><td><img src="/assets/images/slc.jpg" align="center" style="width:10%;max-width:80px"></td></tr>
 </table>
 </footer>


</body>
</html>