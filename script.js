const { createApp } = Vue;

createApp({
  data() {
    return {
      lista: [],
    };
  },
  methods: {
    eliminaElemento(index) {
      this.lista.splice(index, 1);
    },
  },
  created() {
    axios.get("./api.php").then((response) => {
      this.lista = response.data.lista;
    });
  },
}).mount("#app");

// "http://localhost/php-todo-list-json/api.php"
