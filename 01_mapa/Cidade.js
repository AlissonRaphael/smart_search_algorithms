class Cidade {

  constructor(nome){
    this.nome = nome
    this.visitado = false
    this.adjacentes = []
  }

  adicionarAdjacente(cidade){
    this.adjacentes.push(cidade)
  }

}

module.exports = Cidade
