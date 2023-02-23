const { createApp } = Vue;

createApp({
  data() {
    return {
      url: "http://localhost/php-todo-list-json/api.php",
      addUrl: "http://localhost/php-todo-list-json/create.php",
      lista: [], // array di item
      // nuovo item che verrà aggiunto
      newitem: {
        text: "",
        done: false,
      },
    };
  },
  methods: {
    eliminaElemento(index) {
      this.lista.splice(index, 1); // Rimuovo l'elemento dalla lista
    },

    taskCompletato(index) {
      this.lista[index].done = !this.lista[index].done;
    },

    aggiungiItem() {
      //ogni volta che viene aggiunto un item viene chiamato questo metodo
      console.log(this.newitem);
      axios //chiamata axios per aggiungere il nuovo item al server
        .post(
          this.addUrl,
          {
            newitem: this.newitem,
          },
          { headers: { "Content-Type": "multipart/form-data" } }
        )
        .then((response) => {
          //qui la chiamata è completa
          console.log(response);
          this.lista = response.data; //aggiorno la lista degli item
          this.newitem.text = ""; //svuoto il campo dell'input text
          this.newitem.done = false; //resetto il campo del done
          this.created(); //chiamo il metodo create per aggiornare la lista degli item
        });
    },
  },

  created() {
    // metodo chiamato all'avvio dell'applicazione Vue
    axios.get("./api.php").then((response) => {
      //effettua una chiamata Axios per ottenere la lista degli item dal server
      this.lista = response.data.lista; //aggiorna la lista degli item
    });
  },
}).mount("#app");
