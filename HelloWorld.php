<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>
<form action="HelloWorld.php" method="post">
Key: <input type="text" name="key"><br>
Value: <input type="text" name="val"><br>
<input type="submit">
</form>

<?php

echo "<h1>Hello world</h1>";

$cars=array("Volvo","BMW","Toyota");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".<br>";
$keyvals = array(array("Key0","Val0"));
echo "keyvals = " . $keyvals[0] . ".<br>";
echo "key = " . $keyvals[0][0] . ".<br>";
echo "rows = " . count($keyvals) . ".<br>";
echo "cols = " . count($keyvals[0]). ".<br>";

$key = $_POST["key"];
$val = $_POST["val"];

echo "Key = " . $key . " val = " . $val . ".<br>";

$keyvals[count($keyvals)] = array($key,$val);
echo "rows = " . count($keyvals) . ".<br>";


/*
$keyvals = array("Key0","Val0");
$key   = $_POST["key"];
$val = $_POST["val"];

echo "Key = " . $key / "<br>";
echo "Val = " . $val / "<br>";

$arrlength=count($keyvals);
for($x=0;$x<$arrlength;$x++) {
  echo $keyvals[$x];
  echo "<br>";
}

$keyvals[$arrlength] = array($key, $val);
$arrlength=count($keyvals);
for($x=0;$x<$arrlength;$x++) {
  echo $keyvals[$x];
  echo "<br>";
}
*/


?>

</body>
</html>