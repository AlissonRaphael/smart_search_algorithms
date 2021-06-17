class CidadeAdjacente {

  constructor(cidade, distancia){
    this.cidade = cidade
    this.distancia = distancia
    this.distanciaAEstrela = this.cidade.distanciaObjetivo + this.distancia
  }

}

module.exports = CidadeAdjacente