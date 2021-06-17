const VetorOrdenadoAdjacente = require('./Vetor_ordenado_Adjacente.js')
const Mapa = require('../01_mapa/Mapa_heuristicas_distancia.js')


class AEstrela {

  constructor(objetivo){
    this.objetivo = objetivo
    this.achou = true
  }

  buscar(atual){
    console.log(`Atual: \x1b[33m${atual.nome}\x1b[0m`)
    atual.visitado = true

    if(atual === this.objetivo){
      this.achou = true
      return
    }

    this.fronteira = new VetorOrdenadoAdjacente(atual.adjacentes.length)
    atual.adjacentes.forEach(a => {
      if(a.cidade.visitado === false){
        a.cidade.visitado = true
        this.fronteira.inserir(a)
      }
    })
    this.fronteira.mostrar()

    if(this.fronteira.getPrimeiro() != NaN){
      this.buscar(this.fronteira.getPrimeiro())
    }
  }

}

const buscaAEstrela = new AEstrela(Mapa.curitiba)
buscaAEstrela.buscar(Mapa.portoUniao)
