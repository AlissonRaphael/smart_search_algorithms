const Fila = require('./Fila_circular.js')
const Mapa = require('../01_mapa/Mapa.js')

class Largura {


  constructor(inicio, objetivo){
    this.inicio = inicio
    this.inicio.visitado = true
    this.objetivo = objetivo
    this.fronteira = new Fila(20)
    this.fronteira.enfileirar(inicio)
    this.achou = false
  }


  buscar(){
    const primeiroFila = this.fronteira.getPrimeiro()
    console.log(`Primeiro: \x1b[33m${primeiroFila.nome}\x1b[0m`)

    if(primeiroFila === this.objetivo){
      this.achou = true
      console.log('\x1b[42mAchou!\x1b[0m')
      return
    }

    const cidadeDesenfileirada = this.fronteira.desenfileirar()
    console.log(`\x1b[31mDesenfileirou ${cidadeDesenfileirada.nome}\x1b[0m`)

    primeiroFila.adjacentes.forEach(a => {
      console.log(`${a.cidade.nome} foi visitado? ${a.cidade.visitado}`)
      if(a.cidade.visitado === false){
        a.cidade.visitado = true
        this.fronteira.enfileirar(a.cidade)
        console.log(`\x1b[32mEnfileirou ${a.cidade.nome}\x1b[0m`)
      }
    })
    if(this.fronteira.numeroElementos > 0){
      this.buscar()
    }
  }

}

const buscaLargura = new Largura(Mapa.portoUniao, Mapa.curitiba)
buscaLargura.buscar()
