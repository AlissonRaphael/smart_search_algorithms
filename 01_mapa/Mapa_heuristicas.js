const Cidade = require('./Cidade_heuristicas.js')
const CidadeAdjacente = require('./CidadeAdjacente.js')


const Mapa = {
  portoUniao: new Cidade("Porto Uniao", 203),
  pauloFrontin: new Cidade("Paulo Frontin", 172),
  canoinhas: new Cidade("Canoinhas", 141),
  irati: new Cidade("Irati", 139),
  palmeira: new Cidade("Palmeira", 59),
  campoLargo: new Cidade("Campo Largo", 27),
  curitiba: new Cidade("Curitiba", 0),
  balsaNova: new Cidade("Balsa Nova", 41),
  araucaria: new Cidade("Araucaria", 23),
  saoJose: new Cidade("São josé dos pinhais", 13),
  contenda: new Cidade("Contenda", 39),
  mafra: new Cidade("Mafra", 94),
  tijucas: new Cidade("Tijucas do sul", 56),
  lapa: new Cidade("Lapa", 74),
  saoMateus: new Cidade("Sao Mateus do Sul", 123),
  tresBarras: new Cidade("Tres barras", 131),
}

Mapa.portoUniao.adicionarAdjacente(new CidadeAdjacente(Mapa.canoinhas))
Mapa.portoUniao.adicionarAdjacente(new CidadeAdjacente(Mapa.saoMateus))
Mapa.portoUniao.adicionarAdjacente(new CidadeAdjacente(Mapa.pauloFrontin))

Mapa.pauloFrontin.adicionarAdjacente(new CidadeAdjacente(Mapa.irati))
Mapa.pauloFrontin.adicionarAdjacente(new CidadeAdjacente(Mapa.portoUniao))

Mapa.canoinhas.adicionarAdjacente(new CidadeAdjacente(Mapa.tresBarras))
Mapa.canoinhas.adicionarAdjacente(new CidadeAdjacente(Mapa.portoUniao))
Mapa.canoinhas.adicionarAdjacente(new CidadeAdjacente(Mapa.mafra))

Mapa.irati.adicionarAdjacente(new CidadeAdjacente(Mapa.palmeira))
Mapa.irati.adicionarAdjacente(new CidadeAdjacente(Mapa.saoMateus))
Mapa.irati.adicionarAdjacente(new CidadeAdjacente(Mapa.pauloFrontin))

Mapa.palmeira.adicionarAdjacente(new CidadeAdjacente(Mapa.irati))
Mapa.palmeira.adicionarAdjacente(new CidadeAdjacente(Mapa.saoMateus))
Mapa.palmeira.adicionarAdjacente(new CidadeAdjacente(Mapa.campoLargo))

Mapa.campoLargo.adicionarAdjacente(new CidadeAdjacente(Mapa.palmeira))
Mapa.campoLargo.adicionarAdjacente(new CidadeAdjacente(Mapa.balsaNova))
Mapa.campoLargo.adicionarAdjacente(new CidadeAdjacente(Mapa.curitiba))

Mapa.curitiba.adicionarAdjacente(new CidadeAdjacente(Mapa.campoLargo))
Mapa.curitiba.adicionarAdjacente(new CidadeAdjacente(Mapa.balsaNova))
Mapa.curitiba.adicionarAdjacente(new CidadeAdjacente(Mapa.araucaria))
Mapa.curitiba.adicionarAdjacente(new CidadeAdjacente(Mapa.saoJose))

Mapa.balsaNova.adicionarAdjacente(new CidadeAdjacente(Mapa.campoLargo))
Mapa.balsaNova.adicionarAdjacente(new CidadeAdjacente(Mapa.curitiba))
Mapa.balsaNova.adicionarAdjacente(new CidadeAdjacente(Mapa.contenda))

Mapa.araucaria.adicionarAdjacente(new CidadeAdjacente(Mapa.curitiba))
Mapa.araucaria.adicionarAdjacente(new CidadeAdjacente(Mapa.contenda))

Mapa.saoJose.adicionarAdjacente(new CidadeAdjacente(Mapa.tijucas))
Mapa.saoJose.adicionarAdjacente(new CidadeAdjacente(Mapa.curitiba))

Mapa.contenda.adicionarAdjacente(new CidadeAdjacente(Mapa.balsaNova))
Mapa.contenda.adicionarAdjacente(new CidadeAdjacente(Mapa.araucaria))
Mapa.contenda.adicionarAdjacente(new CidadeAdjacente(Mapa.lapa))

Mapa.mafra.adicionarAdjacente(new CidadeAdjacente(Mapa.lapa))
Mapa.mafra.adicionarAdjacente(new CidadeAdjacente(Mapa.tijucas))
Mapa.mafra.adicionarAdjacente(new CidadeAdjacente(Mapa.canoinhas))

Mapa.tijucas.adicionarAdjacente(new CidadeAdjacente(Mapa.saoJose))
Mapa.tijucas.adicionarAdjacente(new CidadeAdjacente(Mapa.mafra))

Mapa.lapa.adicionarAdjacente(new CidadeAdjacente(Mapa.mafra))
Mapa.lapa.adicionarAdjacente(new CidadeAdjacente(Mapa.saoMateus))
Mapa.lapa.adicionarAdjacente(new CidadeAdjacente(Mapa.contenda))

Mapa.saoMateus.adicionarAdjacente(new CidadeAdjacente(Mapa.palmeira))
Mapa.saoMateus.adicionarAdjacente(new CidadeAdjacente(Mapa.lapa))
Mapa.saoMateus.adicionarAdjacente(new CidadeAdjacente(Mapa.irati))
Mapa.saoMateus.adicionarAdjacente(new CidadeAdjacente(Mapa.tresBarras))
Mapa.saoMateus.adicionarAdjacente(new CidadeAdjacente(Mapa.portoUniao))

Mapa.tresBarras.adicionarAdjacente(new CidadeAdjacente(Mapa.saoMateus))
Mapa.tresBarras.adicionarAdjacente(new CidadeAdjacente(Mapa.canoinhas))

module.exports = Mapa
