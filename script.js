const { createApp } = Vue;

createApp({
  data() {
    return {
      addUrl: "http://localhost/php-todo-list-json/create.php",
      lista: [],
      newitem: {
        text: "",
        done: false,
      },
    };
  },
  methods: {
    // eliminaElemento(index) {
    //   this.lista.splice(index, 1);
    // },

    aggiungiItem() {
      console.log(this.newitem);
      axios
        .post(
          this.addUrl,
          {
            item: this.newitem,
          },
          { headers: { "Content-Type": "multipart/form-data" } }
        )
        .then((response) => {
          console.log(response);
        });
    },
  },

  created() {
    axios.get("./api.php").then((response) => {
      this.lista = response.data.lista;
    });
  },
}).mount("#app");

// "http://localhost/php-todo-list-json/api.php"
