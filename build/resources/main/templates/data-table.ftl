<html>
<head>

 <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
 <link rel="stylesheet" href="/assets/css/dataTables.bootstrap.min.css">

<script type="text/javascript" src="/assets/js/jquery-1.12.3.js"></script>
<script type="text/javascript" src="/assets/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="/assets/js/dataTables.bootstrap.min.js"></script>
<script type="text/javascript">
$(document).ready(function() {
    $('#example').DataTable();
} );
</script>
</head>
<body>

<table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%" align="center">
        <thead>
            <tr>
                <th>System</th>
                <th>Exception</th>
                <th>Exception Detail</th>
                <th>Criticality</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>System</th>
                <th>Exception</th>
                <th>Exception Details</th>
                <th>Criticality</th>
            </tr>
        </tfoot>
        <tbody>

        <#list exceptionRecordList as exceptionRecord>
            <tr>
                <td>${exceptionRecord.system}</td>
                <td>${exceptionRecord.exception}</td>
                <td>${exceptionRecord.exceptionDetails}</td>
                <td>${exceptionRecord.criticality}</td>
            </tr>

        </#list>


        </tbody>
    </table>
    </body>
    </html>