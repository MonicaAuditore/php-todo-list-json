const { createApp } = Vue;

createApp({
  data() {
    return {
      lista: [],
      newTask: "",
    };
  },
  methods: {
    deleteTask(index) {
      axios
        //per inviare i dati usiamo post
        .post(
          "./delete.php",
          //secondo argomento: con il metoto get usavamo params, con il metodo post quello che vogliamo inviare è un oggetto normale
          {
            deleteText: this.lista[index].text,
          },
          //questo serve per dire che i dati arrivano da un form, è una coppia chiave:valore
          { headers: { "Content-Type": "multipart/form-data" } }
        )
        .then((response) => {
          // Rimuovi il task dall'array locale, i dati ritornano indietro modificati e bisogna aggiornare l'array lista
          // il metodo splice prende come primo argomento l'indice dell'elemento da rimuovere,
          //e come secondo argomento il numero di elementi da rimuovere a partire dall'indice specificato
          this.lista.splice(index, 1);
          // Visualizza un messaggio di successo
          console.log("Task eliminato con successo");
        });
    },

    changeDone(index) {
      axios
        //per inviare i dati usiamo post
        .post(
          "./modify.php",
          //secondo argomento: con il metoto get usavamo params, con il metodo post quello che vogliamo inviare è un oggetto normale
          {
            changeDone: this.lista[index].done,
          },
          //questo serve per dire che i dati arrivano da un form, è una coppia chiave:valore
          { headers: { "Content-Type": "multipart/form-data" } }
        )
        .then((response) => {
          this.lista[index].done = !this.lista[index].done;
          console.log("Task done modificato con successo");
        });
    },
    addNewTask() {
      axios
        //per inviare i dati usiamo post
        .post(
          "./create.php",
          //secondo argomento: con il metoto get usavamo params, con il metodo post quello che vogliamo inviare è un oggetto normale
          {
            newtext: this.newTask,
          },
          //questo serve per dire che i dati arrivano da un form, è una coppia chiave:valore
          { headers: { "Content-Type": "multipart/form-data" } }
        )
        .then((response) => {
          const newTask = { text: this.newTask, done: false };
          this.lista.push(newTask);
          console.log("Task aggiunto con successo");
          this.newTask.text = ""; //svuoto il campo dell'input text
        });
    },
  },
  created() {
    //per andare a prendere i dati usiamo get
    axios.get("./api.php").then((response) => {
      this.lista = response.data;
      console.log(this.lista);
    });
  },
}).mount("#app");
