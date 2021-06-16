class Cidade {

  constructor(nome, distanciaObjetivo){
    this.nome = nome
    this.visitado = false
    this.adjacentes = []
    this.distanciaObjetivo = distanciaObjetivo
  }

  adicionarAdjacente(cidade){
    this.adjacentes.push(cidade)
  }

}

module.exports = Cidade
