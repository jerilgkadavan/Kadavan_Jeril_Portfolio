<?php
require 'connect.php';

function get_gallery($pdo)
{
  $query = "SELECT * FROM `tbl_gallery`";
  $get_gallery = $pdo->query($query);
  $results = array();
  while ($row = $get_gallery->fetch(PDO::FETCH_ASSOC)) {
    $results[] = $row;
  }
  return $results;
}
?>