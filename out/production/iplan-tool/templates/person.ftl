<#-- @ftlvariable name="" type="com.example.views.PersonView" -->
<html>
<head>
<link rel="stylesheet" href="template/css/w3.css">
</head>
    <body>
        <!-- calls getPerson().getName() and sanitizes it -->
        <div class="w3-body-container">
        <h1>Hello, ${person.name?html}!</h1>
        </div>
    </body>
</html>