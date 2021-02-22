new Vue({
  el: '#desafio',
  data: {
    valor: ''
  },
  methods: {
    showAlert: function() {
      alert('botao clicado')
    },
    handleKeyDown: function(event) {
      this.valor = event.target.value
    }
  }
})
