const { createApp } = Vue;

createApp({
  data() {
    return {
      lista: [],
    };
  },
  methods: {},
  created() {
    axios
      .get("http://localhost/php-todo-list-json/api.php")
      .then((response) => {
        this.lista = response.data.lista;
      });
  },
}).mount("#app");
