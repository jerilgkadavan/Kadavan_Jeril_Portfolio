<?php
require 'functions.php';

  $data = get_gallery($conn);
  echo json_encode($data);

?>