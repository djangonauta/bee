Vue.component('processarArquivo', resolve => {
  axios.get('/leituras/processar/arquivo/').then(response => {
    resolve({
      template: response.data,
      delimiters: ['[[', ']]'],
      data () {
        return {
          loading: false,
          erros: [],
          sucessos: [],
          data: {arquivo: null},
          file: null
        }
      },
      watch: {
        file (val) {
          const leitor = new FileReader()
          leitor.addEventListener('load', () => {
            this.data.arquivo = leitor.result
          })
          leitor.readAsDataURL(val)
        }
      },
      methods: {
        enviarArquivo () {
          this.erros = []
          this.sucessos = []
          this.loading = true
          this.Leitura.enviarArquivo(this.data).then(response => {
            this.sucessos.push(response.data)
            this.file = null
            this.data = {arquivo: null}
            this.loading = false
          }).catch(response => {
            this.erros.push(response.response.data)
            this.loading = false
          })
        }
      }
    })
  })
})
