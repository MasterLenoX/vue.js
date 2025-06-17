new Vue({
  el: '#app',
  data: {
    name: 'LenoX',
    games: [
      { game_character: 'Sora', game_title: 'Kingdom Hearts'},
      { game_character: 'Joker', game_title: 'Persona 5'},
      { game_character: 'Snake', game_title: 'Metal Gear Solid'},
      { game_character: 'Kiryu', game_title: 'Yakuza 0'},
      { game_character: 'Luffy', game_title: 'One Piece Odyssey'},
      { game_character: 'Naruto', game_title: 'Naruto Ninja Storm 4'}
    ],
    characters: ['Sora', 'Joker', 'Snake', 'Kiryu', 'Luffy', 'Naruto'],
    ninjas: [
      { name: 'Leonardo', species: 'turtle' },
      { name: 'Donatello', species: 'turtle' },
      { name: 'Michelangelo', species: 'turtle' },
      { name: 'Raphael', species: 'turtle' },
      { name: 'Splinter', species: 'rat' }
    ]
    // available: false,
    // nearby: false
    // age: 20,
    // a: 0,
    // b: 0
    // title: 'Hello, Vue 2.7.16!',
    // message: 'This is a simple Vue.js application.',
    // name: 'LenoX',
    // catchphrase: 'Got It Memorized!!',
    // age: 27,
    // website: 'https://lenoxportfolio.web.app/',
    // websiteTag: '<a href="https://lenoxportfolio.web.app/" target="_blank">James LenoX Portfolio</a>',
    // x: 0,
    // y: 0,
    // name: ''
  },
  methods: {
    // greet: function (time) {
    //   return `Hello and Good ` + time + `, Your name is ${this.name}! You are ${this.age} years old.`;
    // },
    // add: function (inc) {
    //   this.age += inc;
    // },
    // subtract: function (dec) {
    //   this.age -= dec;
    // },
    // updatePosition: function (event) {
    //   this.x = event.offsetX;
    //   this.y = event.offsetY;
    // },
    // click: function (){
    //   alert(`Hello, ${this.name}! Did you know that you just clicked on the page?`);
    // },
    // keyboard events handler
    // logName: function(){
    //   console.log('You entered your name')
    // },
    // logAge: function(){
    //   console.log('You entered your age')
    // },
    // addtoA: function () {
    //   return this.a + this.age;
    // },
    // addtoB: function () {
    //   return this.b + this.age;
    // }
  },
  computed: {
    // addtoA: function () {
    //   console.log('addtoA called');
    //   return this.a + this.age;
    // },
    // addtoB: function () {
    //   console.log('addtoB called');
    //   return this.b + this.age;
    // },
    // sum: function () {
    //   return this.addtoA + this.addtoB;
    // }
    // compClasses: function () {
    //   return {
    //     available: this.available,
    //     nearby: this.nearby
    //   };
    // }
  }
});
