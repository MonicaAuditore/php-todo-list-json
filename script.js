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
          this.lista = response.data;
        });
    },

    changeDone(index) {
      this.lista[index].done = !this.lista[index].done;
    },
    inserisciNewTask() {
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
          this.lista = response.data;
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
