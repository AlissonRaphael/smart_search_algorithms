class Vetor {

  constructor(tamanho){
    this.numeroElementos = 0
    this.cidades = new Array(tamanho)
  }

  inserir(cidade){
    if(this.numeroElementos === 0){
      this.cidades[0] = cidade
      this.numeroElementos = 1
      return
    }

    let posicao = 0
    let i = 0
    while(i < this.numeroElementos){
      if(cidade.distanciaObjetivo > this.cidades[posicao].distanciaObjetivo){
        posicao += 1
      }
      i += 1
    }

    for(let k=this.numeroElementos; k > posicao; k--){
      this.cidades[k] = this.cidades[k-1]
    }

    this.cidades[posicao] = cidade
    this.numeroElementos += 1
  }

  getPrimeiro(){
    return this.cidades[0]
  }

  mostrar(){
    for(let l=0; l < this.numeroElementos; l++){
      const c = this.cidades[l]
      console.log(`${c.nome} -->${l===0 ?'\x1b[32m':''} ${c.distanciaObjetivo}\x1b[0m`)
    }
  }

}

module.exports = Vetor
