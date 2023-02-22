<?php

//recupero le info dal file database, ho una stringa;
$doDoListString = file_get_contents('database.json');

//trasformo le info, la stringa JSON, in un array php; 
//le info sono restituite come array associativo grazie a true;
$doDoList = json_decode($doDoListString, true);

//modifico la risposta dell'api
$response = [
    'lista' => $doDoList,
    'message' => 'ok'
];

//trasformo i dati PHP in una stringa JSON;
$jsonResponse = json_encode($response);

//indico al client che il contenuto della risposta sarà in formato JSON
header('Content-Type: application/json');

//stampo la stringa;
echo $jsonResponse;

?>
