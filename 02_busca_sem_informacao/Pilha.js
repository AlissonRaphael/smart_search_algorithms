class Pilha {

  constructor(tamanho){
    this.tamanho = tamanho
    this.cidades = new Array(this.tamanho)
    this.topo = -1
  }


  empilhar(cidade){
    if(this._pilhaCheia()) return 'A pilha está cheia!'

    this.topo += 1
    this.cidades[this.topo] = cidade

    return 'Empilhou!'
  }


  desempilhar(){
    if(this._pilhaVazia()) return 'A pilha está vazia!'

    const tempCidade = this.cidades[this.topo]
    this.topo -= 1

    return tempCidade
  }


  verTopo(){
    return this.cidades[this.topo]
  }

  _pilhaVazia(){
    return this.topo === -1
  }

  _pilhaCheia(){
    return this.topo === this.tamanho - 1
  }

}