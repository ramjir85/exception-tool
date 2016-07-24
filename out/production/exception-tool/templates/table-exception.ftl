<!DOCTYPE html>
<html>
<head>
<style>
table {
    border-collapse: collapse;
    width: 100%;
}

th, td {
    text-align: left;
    padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}
</style>
</head>
<body>

<div style="overflow-x:auto;">
  <table>
    <tr>
      <th>System</th>
      <th>Exception</th>
      <th>Criticality</th>
    </tr>
    <tr>
      <td>CLASS</td>
      <td>java.lang.NullPointerException
              at Maze.getNumRandOccupants(Maze.java:118)
              at P4TestDriver.testMaze(P4TestDriver.java:995)
              at P4TestDriver.main(P4TestDriver.java:116)</td>
      <td>1</td>
     </tr>
    <tr>
      <td>SFD</td>
      <td>java.lang.UnknownException    at Maze.getNumRandOccupants(Maze.java:118)
              at P4TestDriver.testMaze(P4TestDriver.java:995)
              at P4TestDriver.main(P4TestDriver.java:116)</td>
      <td>2</td>
         </tr>
    </tr>
       <tr>
          <td>CLASS</td>
          <td>java.lang.NullPointerException
                  at Maze.getNumRandOccupants(Maze.java:118)
                  at P4TestDriver.testMaze(P4TestDriver.java:995)
                  at P4TestDriver.main(P4TestDriver.java:116)</td>
          <td>1</td>
         </tr>
  </table>
</div>

</body>
</html>