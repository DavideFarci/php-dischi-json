const app = Vue.createApp({
  data() {
    return {
      music: [],
    };
  },
  methods: {
    requestMusic() {
      axios
        .get(
          "http://localhost:8080/06-Giugno/46-09Giu/php-dischi-json/server.php"
        )
        .then((response) => (this.music = response.data));
    },
  },
  created() {
    this.requestMusic();
  },
});

app.mount("#app");
