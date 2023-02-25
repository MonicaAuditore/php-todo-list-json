<?php

//recupero le info dal file database, ho una stringa;
$doDoListString = file_get_contents('database.json');

//creo l'array associativo php
$todoArray = json_decode($doDoListString, true);

//questi sono i dati che ho inviato che vengono presi in questo modo
$newtext = $_POST['newtext'];

//creo un oggetto associativo con il dato che mi sono inviata
$newtextTransform = array(
  'text' =>  $newtext, 
  'done' => false
);

// Aggiungi il nuovo oggetto all'array
$todoArray[] = $newtextTransform;

//trasformo con encode il nuovo array aggiornato in json
$todoArrayEncoded = json_encode($todoArray);

//Aggiorno il nuovo array nel file database.json;
//Questa funzione prende due argomenti, il primo è dove devo mettere i file, il secondo è il file
file_put_contents('database.json', $todoArrayEncoded);

?>
