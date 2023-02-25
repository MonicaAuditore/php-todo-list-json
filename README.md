# php-todo-list-json

Esercizio: PHP ToDo List JSON
nome repo: php-todo-list-json

PARTE I

Descrizione:
Dobbiamo creare una web-app che permetta di leggere una lista di Todo.
Deve essere anche gestita la persistenza dei dati leggendoli da un file JSON.
Stack
Html, CSS, VueJS (importato tramite CDN), axios, PHP

Bonus:
Mostrare lo stato del task → se completato, barrare il testo

PARTE II

Descrizione:
Aggiungiamo la possibilità di scrivere nella lista di Todo.
Creare un apposito form in cui è possibile aggiungere il testo di un nuovo task.
La sottomissione del form verrà inviata ad una nuova pagina che si occuperà di salvare il nuovo task nella lista dei Todo.
Estendiamo la gestione della persistenza dei dati scrivendo le modifiche nel file JSON utilizzato.

Bonus:

1. Permettere di segnare un task come completato facendo click sul testo
2. Permettere il toggle del task (completato/non completato)
3. Abilitare l'eliminazione di un task (modificato)

---///

APP ToDo List, che permette di visualizzare, aggiungere ed eliminare elementi.

La ToDo List è composta da un input di testo per inserire nuovi elementi, una lista di elementi che possono
essere spuntati come "completati" e un'icona di cancellazione per eliminare gli elementi dalla lista.

Il codice HTML utilizza i tag standard e due fogli di stile esterni, uno per il font (Google Font)
e uno per le icone (Font Awesome).

Il codice JavaScript utilizza il framework Vue.js e la libreria Axios per le richieste HTTP.

L'array di dati utilizzato è contenuto in un file JSON ("database.json")
e viene letto inizialmente in fase di creazione dell'applicazione, visualizzando i dati nella lista.

Quando l'utente clicca sull'icona di eliminazione, viene inviata una richiesta POST
tramite Axios al file "delete.php" con l'indice dell'elemento da eliminare.
Il file "delete.php" riceve la richiesta, rimuove l'elemento dall'array e lo salva nuovamente nel file JSON.

Quando l'utente inserisce un nuovo elemento nella lista, viene inviata una richiesta POST
tramite Axios al file "create.php" con il testo del nuovo elemento.
Il file "create.php" riceve la richiesta, aggiunge il nuovo elemento all'array e lo salva nuovamente nel file JSON.

In conclusione, la ToDo List utilizza il framework Vue.js per la gestione del DOM e Axios per le richieste HTTP.
I dati della lista sono salvati in un file JSON e gestiti tramite richieste POST ai file "create.php" e "delete.php".
