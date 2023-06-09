const app = Vue.createApp({
  data() {
    return {
      music: [
        {
          name: "New Jersey",
          artist: "Bon Jovi",
          date: "1988",
          photo: "img/515kBetVK-L._UF10001000QL80.jpg",
        },
        {
          name: "Live at Wembley 86",
          artist: "Queen",
          date: "1992",
          photo: "img/71g40mlbinL._UF10001000QL80.jpg",
        },
        {
          name: "Ten's Summoner's Tales",
          artist: "Sting",
          date: "1993",
          photo: "img/513ynFqGo6L._UF10001000QL80.jpg",
        },
        {
          name: "Steve Gadd Band",
          artist: "Steve Gadd Band",
          date: "2018",
          photo: "img/R-11780040-1642836415-5710.jpg",
        },
        {
          name: "Brave New World",
          artist: "Iron Maiden",
          date: "2000",
          photo: "img/51g8WnA9bVL._AC_UF10001000QL80.jpg",
        },
        {
          name: "One More Car, One More Rider",
          artist: "Eric Clapton",
          date: "2002",
          photo: "img/713t9D4S-7L._UF10001000QL80.jpg",
        },
      ],
    };
  },
  methods: {
    requestMusic() {
      axios
        .get(
          "http://localhost:8080/06-Giugno/46-09Giu/php-dischi-json/server.php"
        )
        .then((response) => console.log(response.data));
    },
  },
  created() {
    this.requestMusic();
  },
});

app.mount("#app");
