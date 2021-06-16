class Fila {


  constructor(tamanho){
    this.tamanho = tamanho
    this.cidades = new Array(this.tamanho)
    this.inicio = 0
    this.fim = -1
    this.numeroElementos = 0
  }


  enfileirar(cidade){
    if(this.filaCheia()){
      console.log('A fila está cheia!')
      return 'Não enfileirado.'
    }

    if(this.fim === this.tamanho-1){
      this.fim = -1
    }

    this.fim += 1
    this.cidades[this.fim] = cidade
    this.numeroElementos += 1
  }


  desenfileirar(){
    if(this.filaVazia()){
      console.log('A fila está vazia!')
      return 'Nada desenfileirado.'
    }

    const tempCidade = this.cidades[this.inicio]

    this.inicio += 1
    if(this.inicio === this.tamanho) this.inicio = 0
    this.numeroElementos -= 1

    return tempCidade
  }


  getPrimeiro(){
    return this.cidades[this.inicio]
  }


  filaVazia(){
    return this.numeroElementos === 0
  }

  filaCheia(){
    return this.numeroElementos === this.tamanho
  }

}

module.exports = Fila
