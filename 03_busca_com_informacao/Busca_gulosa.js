const VetorOrdenado = require('./Vetor_ordenado.js')
const Mapa = require('../01_mapa/Mapa_heuristicas.js')

class Gulosa {

  constructor(objetivo){
    this.objetivo = objetivo
    this.achou = false
  }

  buscar(atual){
    console.log(`Atual: \x1b[33m${atual.nome}\x1b[0m`)
    atual.visitado = true

    if(atual === this.objetivo){
      this.achou = true
      return
    }

    this.fronteira = new VetorOrdenado(atual.adjacentes.length)
    atual.adjacentes.forEach(a => {
      if(a.cidade.visitado === false){
        a.cidade.visitado = true
        this.fronteira.inserir(a.cidade)
      }
    })
    this.fronteira.mostrar()

    if(this.fronteira.getPrimeiro() != NaN){
      this.buscar(this.fronteira.getPrimeiro())
    }
  }

}

const buscaGulosa = new Gulosa(Mapa.curitiba)
buscaGulosa.buscar(Mapa.portoUniao)
