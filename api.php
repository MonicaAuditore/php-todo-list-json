<?php

//recupero le info dal file database, ho una stringa;
$doDoListString = file_get_contents('database.json');

//indico al client che il contenuto della risposta sarà in formato JSON
header('Content-Type: application/json');

//stampo la stringa;
echo $doDoListString;

?>
