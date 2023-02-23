<?php

//mi prendo prima tutti i dati dal database;
$doDoListString = file_get_contents('database.json');

//li trasformo
$doDoList = json_decode($doDoListString, true);

//aggiungo il nuovo item;
$newMemoDecoded = [
  'text' => $_POST['newitem']['text'],
  'done' => $_POST['newitem']['done'],
];

//aggiungo il nuovo item all'array esistente
$doDoList[] = $newMemoDecoded;

//Stampo nel database l'array con il nuovo item
file_put_contents('database.json', json_encode($doDoList));

header ('Content-Type: application/json');
echo json_encode($doDoList);

?>