class VetorAdjacente {

  constructor(tamanho){
    this.numeroElementos = 0
    this.adjacentes = new Array(tamanho)
  }

  inserir(adjacente){
    if(this.numeroElementos === 0){
      this.adjacentes[0] = adjacente
      this.numeroElementos = 1
      return
    }

    let posicao = 0
    let i = 0
    while(i < this.numeroElementos){
      if(adjacente.distanciaAEstrela > this.adjacentes[posicao].distanciaAEstrela){
        posicao += 1
      }
      i += 1
    }

    for(let k=this.numeroElementos; k > posicao; k--){
      this.adjacentes[k] = this.adjacentes[k-1]
    }

    this.adjacentes[posicao] = adjacente
    this.numeroElementos += 1
  }

  getPrimeiro(){
    return this.adjacentes[0].cidade
  }

  mostrar(){
    for(let l=0; l < this.numeroElementos; l++){
      const a = this.adjacentes[l]
      console.log(`${a.cidade.nome} -->${l===0 ?'\x1b[32m':''} ${a.distanciaAEstrela}\x1b[0m`)
    }
  }

}

module.exports = VetorAdjacente
