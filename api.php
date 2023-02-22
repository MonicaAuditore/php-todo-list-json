<?php

//recupero le info dal file database, ho una stringa;
$doDoListString = file_get_contents('database.json');

var_dump($doDoListString);

// trasformo le info, la stringa, in una variabile php. Grazie a true, 
// le info sono restituite come array associativo;
$doDoList = json_decode($doDoListString, true);

var_dump($doDoList);

//trasformo i dati json in php, ottengo una stringa;
$jsonLista = json_encode($doDoList);

//stampo la stringa;
echo $jsonLista;

?>