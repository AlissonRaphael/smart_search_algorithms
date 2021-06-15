class Cidade {

  constructor(nome){
    this.nome = nome
    this.visitado = false
    this._adjacentes = []
  }

  adicionarAdjacente(cidade){
    this._adjacentes.push(cidade)
  }

}

module.exports = Cidade
