<?php

//recupero le info dal file database, ho una stringa;
$doDoListString = file_get_contents('database.json');

//creo l'array associativo php
$todoArray = json_decode($doDoListString, true);

//questi sono i dati che ho inviato, vengono presi in questo modo
$newDeletetext = $_POST['deleteText'];

//tolgo il task da eliminare dall'array $todoArray
//la sintassi del ciclo foreach prevede due variabili, una per l'indice corrente $index e una per il valore corrente dell'array
foreach($todoArray as $index => $singleTask) {

  if ($singleTask['text'] === $newDeletetext) {
    unset($todoArray[$index]);
  }
};

//trasformo con encode il nuovo array aggiornato in json
$todoArrayEncoded = json_encode($todoArray);

//Aggiorno il nuovo array nel file database.json;
//Questa funzione prende due argomenti, il primo è dove devo mettere i file, il secondo è il file
file_put_contents('database.json', $todoArrayEncoded);


?>