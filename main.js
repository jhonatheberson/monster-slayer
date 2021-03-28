new Vue({
	el: '#app',
	data: {
    life_monster: '100',
    life_slayer: '100',
    class_monster: {
      backgroundColor: 'green',
      height: '100%',
    },
    class_slayer: {
      backgroundColor: 'green',
      height: '100%',
    },
    play : false,
    win: null,
    log: [],
  },
  methods: {
    atack(){
      const atack_monster =Math.floor(Math.random() * Math.floor(10));
      const atack_slayer = Math.floor(Math.random() * Math.floor(20));
      this.life_monster -= atack_monster
      this.life_slayer -= atack_slayer
      let atacks = new Map()
      atacks['atack_monster'] = atack_monster
      atacks['atack_slayer'] = atack_slayer
      this.log.unshift(atacks)
    },
    atack_especial(){
      const atack_monster =Math.floor(Math.random() * Math.floor(30));
      const atack_slayer = Math.floor(Math.random() * Math.floor(10));
      this.life_monster -= atack_monster
      this.life_slayer -= atack_slayer
      let atacks = new Map()
      atacks['atack_monster'] = atack_monster
      atacks['atack_slayer'] = atack_slayer
      this.log.unshift(atacks)
    },
    desistir(){
      if(this.play == true){
        this.play = false
      }
    },
    curar(){
      this.life_slayer -= Math.floor(Math.random() * Math.floor(10));
      this.life_slayer += Math.floor(Math.random() * Math.floor(10));
    },
    iniciar(){
      this.life_monster = 100
      this.life_slayer = 100
      this.play = true
      this.win = null
      this.class_monster.backgroundColor = 'green'
      this.class_slayer.backgroundColor = 'green'
      this.log = []
    }
  },
  watch: {
    life_monster(val){
      if (val < 20){
        this.class_monster.backgroundColor = 'red'
      }
      if (val <= 0){
        this.life_monster = 0
        this.win = true
        this.play = false
      }
    },
    life_slayer(val){
      if (val < 20){
        this.class_slayer.backgroundColor = 'red'
      }
      if (val <= 0){
        this.life_slayer = 0
        this.win = false
        this.play = false
      }
    },

  }
});

