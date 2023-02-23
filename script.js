const { createApp } = Vue;

createApp({
  data() {
    return {
      url: "http://localhost/php-todo-list-json/api.php",
      addUrl: "http://localhost/php-todo-list-json/create.php",
      lista: [],
      newitem: {
        text: "",
        done: false,
      },
    };
  },
  methods: {
    aggiungiItem() {
      console.log(this.newitem);
      axios
        .post(
          this.addUrl,
          {
            newitem: this.newitem,
          },
          { headers: { "Content-Type": "multipart/form-data" } }
        )
        .then((response) => {
          console.log(response);
          this.lista = response.data;
          this.newitem.text = "";
          this.newitem.done = false;
          this.created(); // chiamo manualmente il metodo create
        });
    },
  },

  created() {
    axios.get("./api.php").then((response) => {
      this.lista = response.data.lista;
    });
  },
}).mount("#app");
