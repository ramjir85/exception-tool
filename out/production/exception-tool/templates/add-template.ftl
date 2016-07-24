<html>
<head>
	<meta charset="utf-8" />
	<title>Add Release Template</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="/assets/css/formoid-solid-blue.css"/>
	<link rel="stylesheet" href="/assets/css/style.css"/>
    <script type="text/javascript" src="/assets/js/jquery.min.js"></script>
</head>
<body style="background-color:#EBEBEB">

<!-- Start Formoid form-->

<form method="POST" action="/save-new-template" class="formoid-solid-blue" style="background-color:#FFFFFF;font-size:14px;font-family:'Lucida Sans Unicode','Lucida Grande',sans-serif;color:#000000;max-width:480px;min-width:150px">
	<div class="element-input"><label class="title"><span class="required">Release Label</span></label><div class="item-cont"><input class="large" type="text" name="releaseLabel" required="required" placeholder="Release Label"/><span class="icon-place"></span></div></div>
	<div class="element-input"><label class="title"><span class="required">Live Version</span></label><div class="item-cont"><input class="large" type="text" name="liveVersion" required="required" placeholder="Live Version"/><span class="icon-place"></span></div></div>

<p class="submit"><input type="submit" name="commit" value="Save"/></p></form>
<!--<input type="submit" name="commit" value="Save"></form>-->
<!-- Stop Formoid form-->



</body>
</html>
