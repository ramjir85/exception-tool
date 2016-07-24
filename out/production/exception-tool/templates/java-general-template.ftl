<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>Implementation Plan - Formoid online form</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="/assets/css/formoid-solid-blue.css"/>
	<link rel="stylesheet" href="/assets/css/style.css">
    <script type="text/javascript" src="/assets/js/jquery.min.js"></script>
</head>
<!--<body class="blurBg-false">-->
<body style="background-color:#EBEBEB">

<!-- Start Formoid form-->

<form class="formoid-solid-blue" style="background-color:#FFFFFF;font-size:14px;font-family:'Lucida Sans Unicode','Lucida Grande',sans-serif;color:#000000;max-width:480px;min-width:150px" method="post">
	<div class="element-input"><label class="title"><span class="required">Release Label</span></label><div class="item-cont"><input class="large" type="text" name="releaseLabel" required="required" placeholder="Release Label" value="${releaseLabel}"/><span class="icon-place"></span></div></div>
	<div class="element-input"><label class="title"><span class="required">Developer Name</span></label><div class="item-cont"><input class="large" type="text" name="input1" required="required" placeholder="Developer Name"/><span class="icon-place"></span></div></div>
	<div class="element-input"><label class="title"><span class="required">Charge Code</span></label><div class="item-cont"><input class="large" type="text" name="input2" required="required" placeholder="Charge Code"/><span class="icon-place"></span></div></div>
	<div class="element-textarea"><label class="title">Change Description</label><div class="item-cont"><textarea class="medium" name="textarea" cols="20" rows="5" placeholder="Change Description"></textarea><span class="icon-place"></span></div></div>
	<div class="element-input"><label class="title">Functional Dependency</label><div class="item-cont"><input class="large" type="text" name="input3" placeholder="Functional Dependency"/><span class="icon-place"></span></div></div>
	<div class="element-input"><label class="title">Implementation Dependency</label><div class="item-cont"><input class="large" type="text" name="input4" placeholder="Implementation Dependency"/><span class="icon-place"></span></div></div>
	<div class="element-checkbox"><label class="title">Databases</label>		<div class="column column3"><label><input type="checkbox" name="checkbox[]" value="SFD"/ ><span>SFD</span></label><label><input type="checkbox" name="checkbox[]" value="24+"/ ><span>24+</span></label></div><span class="clearfix"></span>
		<div class="column column3"><label><input type="checkbox" name="checkbox[]" value="HEI"/ ><span>HEI</span></label><label><input type="checkbox" name="checkbox[]" value="MFF"/ ><span>MFF</span></label></div><span class="clearfix"></span>
		<div class="column column3"><label><input type="checkbox" name="checkbox[]" value="FE"/ ><span>FE</span></label><label><input type="checkbox" name="checkbox[]" value="DOC"/ ><span>DOC</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-checkbox"><label class="title">PVCS Project</label>		<div class="column column2"><label><input type="checkbox" name="checkbox1[]" value="Protocol"/ ><span>Protocol</span></label><label><input type="checkbox" name="checkbox1[]" value="Common Services"/ ><span>Common Services</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="checkbox" name="checkbox1[]" value="Common Stakeholder"/ ><span>Common Stakeholder</span></label><label><input type="checkbox" name="checkbox1[]" value="DOC"/ ><span>DOC</span></label></div><span class="clearfix"></span>
</div>
<p class="submit"><input type="submit" name="commit" value="Save"></p></form>
<!-- Stop Formoid form-->



</body>
</html>
