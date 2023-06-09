<?php
$music = file_get_contents('music_data.json');

header('content-type: application/json');
// echo json_encode($music);
echo $music;
