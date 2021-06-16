const Pilha = require('./Pilha.js')
const Mapa = require('../01_mapa/Mapa.js')

class Profundidade {

  constructor(inicio, objetivo){
    this.inicio = inicio
    this.objetivo = objetivo
    this.inicio.visitado = true
    this.fronteira = new Pilha(20)
    this.fronteira.empilhar(inicio)
  }

  buscar(){
    const topo = this.fronteira.verTopo()
    console.log(`Topo: \x1b[33m${topo.nome}\x1b[0m`)

    topo.adjacentes.forEach(a => {
      console.log(`\x1b[34m${a.cidade.nome}\x1b[0m foi visitado? ${a.cidade.visitado}`)
      if(a.cidade.visitado === false){
        a.cidade.visitado = true
        this.fronteira.empilhar(a.cidade)
        this.buscar()
      }
    })

    console.log(`Desempilhou: \x1b[34m${this.fronteira.desempilhar().nome}\x1b[0m`)
  }

}

const buscaProfundidade = new Profundidade(Mapa.portoUniao, Mapa.curitiba)
buscaProfundidade.buscar()
