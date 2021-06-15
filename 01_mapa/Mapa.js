const Cidade = require('./Cidade.js')
const CidadeAdjacente = require('./CidadeAdjacente.js')

const Mapa = {
  portoUniao: new Cidade("Porto Uniao"),
  pauloFrontin: new Cidade("Paulo Frontin"),
  canoinhas: new Cidade("Canoinhas"),
  irati: new Cidade("Irati"),
  palmeira: new Cidade("Palmeira"),
  campoLargo: new Cidade("Campo Largo"),
  curitiba: new Cidade("Curitiba"),
  balsaNova: new Cidade("Balsa Nova"),
  araucaria: new Cidade("Araucaria"),
  saoJose: new Cidade("São josé dos pinhais"),
  contenda: new Cidade("Contenda"),
  mafra: new Cidade("Mafra"),
  tijucas: new Cidade("Tijucas do sul"),
  lapa: new Cidade("Lapa"),
  saoMateus: new Cidade("Sao Mateus do Sul"),
  tresBarras: new Cidade("Tres barras"),
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
