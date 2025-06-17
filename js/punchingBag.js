new Vue({
  el: '#punchingBag',
  data: {
    health: 100,
    ended: false
  },
  methods: {
    punch: function () {
      this.health -= 5;
      if (this.health <= 0) {
        this.ended = true;
      }
    },
    restart: function (){
      this.health = 100;
      this.ended = false;
    }
  },
  computed: {
  }
});