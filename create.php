<?php

//prendo i dati dal database;
$doDoListString = file_get_contents('database.json');

//trasformo la stringa JSON in un array associativo
$doDoList = json_decode($doDoListString, true);

//creo un nuovo item con i dati inviati tramite POST
$newMemo = [
  'text' => $_POST['newitem']['text'],
  'done' => $_POST['newitem']['done'],
];

//aggiungo il nuovo item all'array esistente
$doDoList[] = $newMemo;

//salvo l'array aggiornato nel database, sovrascrivendo quello esistente
file_put_contents('database.json', json_encode($doDoList));

//imposto l'header della risposta come JSON e stampo l'array aggiornato come JSON
header ('Content-Type: application/json');
echo json_encode($doDoList);

?>