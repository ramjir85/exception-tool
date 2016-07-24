<!doctype html>

<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Implementation Plan</title>
    <meta name="description" content="Stuff">

    <link rel="stylesheet" href="/assets/css/form.css">
    <link rel="stylesheet" href="/assets/css/mytable.css">

    <style>
    .fieldset {
        display: block;
        margin-left: 2px;
        margin-right: 2px;
        margin-bottom: 10px;
        height: 250px;
        padding-top: 0.35em;
        padding-bottom: 0.625em;
        padding-left: 0.75em;
        padding-right: 0.75em;
        border: 2px groove (internal value);
    }
    </style>

</head>
<body>
<form>

    <form>
      <fieldset>
        <legend>Release Details</legend>
        Release Label: <input type="text"><br>
        Change Requester: <input type="text"><br>
        Charge Code: <input type="text">
      </fieldset>

        <fieldset>
              <legend>Data Base Selection</legend>
             <table class="table-fill">

             <tbody class="table-hover">
             <tr>
             <td class="text-left">SFD</td>
             <td class="text-left">MFF</td>
             <td class="text-left">CST</td>
             <td class="text-left">HEI</td>
             <td class="text-left">FE</td>
             <td class="text-left">24+</td>
             </tr>
             <tr>
             <td class="text-left"><input type="checkbox" name="db-check"></td>
             <td class="text-left"><input type="checkbox" name="db-check"></td>
             <td class="text-left"><input type="checkbox" name="db-check"></td>
             <td class="text-left"><input type="checkbox" name="db-check"></td>
             <td class="text-left"><input type="checkbox" name="db-check"></td>
             <td class="text-left"><input type="checkbox" name="db-check"></td>
             </tbody>
             </table>
            </fieldset>
    </form>


  <!--<form action="action_page.php">
    <label for="releaseLabel">Release Label</label>
    <input type="text" id="releaseLabel" name="releaseLabel">

    <label for="chargeCode">Charge Code</label>
    <input type="text" id="chargeCode" name="chargeCode">

    <label for="reasonOfChange">Change Reason</label>
        <input type="text" id="reasonOfChange" name="reasonOfChange">

    <input type="submit" value="Create IPLAN">
  </form>-->

</form>
</body>
</html>