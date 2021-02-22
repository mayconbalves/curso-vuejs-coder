new Vue({
  el: "#desafio",
  data: {
    name: "Maycon Alves",
    age: 29,
    imageLink: "https://www.estudokids.com.br/wp-content/uploads/2020/02/o-que-e-paisagem.jpg"
  },
  methods: {
    ageMultiply: function() {
      return this.age * 3
    },
    randomNumber: function() {
      return Math.random()
    }
  }
})
