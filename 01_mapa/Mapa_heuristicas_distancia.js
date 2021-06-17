const Cidade = require('./Cidade_heuristicas.js')
const CidadeAdjacente = require('./CidadeAdjacente_distancia.js')


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

Mapa.portoUniao.adicionarAdjacente(new CidadeAdjacente(Mapa.canoinhas, 78))
Mapa.portoUniao.adicionarAdjacente(new CidadeAdjacente(Mapa.saoMateus, 87))
Mapa.portoUniao.adicionarAdjacente(new CidadeAdjacente(Mapa.pauloFrontin, 46))

Mapa.pauloFrontin.adicionarAdjacente(new CidadeAdjacente(Mapa.irati, 75))
Mapa.pauloFrontin.adicionarAdjacente(new CidadeAdjacente(Mapa.portoUniao, 46))

Mapa.canoinhas.adicionarAdjacente(new CidadeAdjacente(Mapa.tresBarras,12 ))
Mapa.canoinhas.adicionarAdjacente(new CidadeAdjacente(Mapa.portoUniao,78))
Mapa.canoinhas.adicionarAdjacente(new CidadeAdjacente(Mapa.mafra,66))

Mapa.irati.adicionarAdjacente(new CidadeAdjacente(Mapa.palmeira, 75))
Mapa.irati.adicionarAdjacente(new CidadeAdjacente(Mapa.saoMateus, 57))
Mapa.irati.adicionarAdjacente(new CidadeAdjacente(Mapa.pauloFrontin, 75))

Mapa.palmeira.adicionarAdjacente(new CidadeAdjacente(Mapa.irati, 75))
Mapa.palmeira.adicionarAdjacente(new CidadeAdjacente(Mapa.saoMateus, 77))
Mapa.palmeira.adicionarAdjacente(new CidadeAdjacente(Mapa.campoLargo, 55))

Mapa.campoLargo.adicionarAdjacente(new CidadeAdjacente(Mapa.palmeira, 55 ))
Mapa.campoLargo.adicionarAdjacente(new CidadeAdjacente(Mapa.balsaNova,22 ))
Mapa.campoLargo.adicionarAdjacente(new CidadeAdjacente(Mapa.curitiba, 29))

Mapa.curitiba.adicionarAdjacente(new CidadeAdjacente(Mapa.campoLargo, 29))
Mapa.curitiba.adicionarAdjacente(new CidadeAdjacente(Mapa.balsaNova, 51))
Mapa.curitiba.adicionarAdjacente(new CidadeAdjacente(Mapa.araucaria, 37))
Mapa.curitiba.adicionarAdjacente(new CidadeAdjacente(Mapa.saoJose, 15))

Mapa.balsaNova.adicionarAdjacente(new CidadeAdjacente(Mapa.campoLargo, 22 ))
Mapa.balsaNova.adicionarAdjacente(new CidadeAdjacente(Mapa.curitiba, 51))
Mapa.balsaNova.adicionarAdjacente(new CidadeAdjacente(Mapa.contenda, 19))

Mapa.araucaria.adicionarAdjacente(new CidadeAdjacente(Mapa.curitiba, 37 ))
Mapa.araucaria.adicionarAdjacente(new CidadeAdjacente(Mapa.contenda, 18))

Mapa.saoJose.adicionarAdjacente(new CidadeAdjacente(Mapa.tijucas, 49))
Mapa.saoJose.adicionarAdjacente(new CidadeAdjacente(Mapa.curitiba, 15))

Mapa.contenda.adicionarAdjacente(new CidadeAdjacente(Mapa.balsaNova,19 ))
Mapa.contenda.adicionarAdjacente(new CidadeAdjacente(Mapa.araucaria, 18))
Mapa.contenda.adicionarAdjacente(new CidadeAdjacente(Mapa.lapa, 26 ))

Mapa.mafra.adicionarAdjacente(new CidadeAdjacente(Mapa.lapa, 57 ))
Mapa.mafra.adicionarAdjacente(new CidadeAdjacente(Mapa.tijucas, 99))
Mapa.mafra.adicionarAdjacente(new CidadeAdjacente(Mapa.canoinhas,66 ))

Mapa.tijucas.adicionarAdjacente(new CidadeAdjacente(Mapa.saoJose, 49))
Mapa.tijucas.adicionarAdjacente(new CidadeAdjacente(Mapa.mafra,99 ))

Mapa.lapa.adicionarAdjacente(new CidadeAdjacente(Mapa.mafra, 57) )
Mapa.lapa.adicionarAdjacente(new CidadeAdjacente(Mapa.saoMateus, 60))
Mapa.lapa.adicionarAdjacente(new CidadeAdjacente(Mapa.contenda, 26 ))

Mapa.saoMateus.adicionarAdjacente(new CidadeAdjacente(Mapa.palmeira, 77 ))
Mapa.saoMateus.adicionarAdjacente(new CidadeAdjacente(Mapa.lapa, 60))
Mapa.saoMateus.adicionarAdjacente(new CidadeAdjacente(Mapa.irati, 57))
Mapa.saoMateus.adicionarAdjacente(new CidadeAdjacente(Mapa.tresBarras ,43))
Mapa.saoMateus.adicionarAdjacente(new CidadeAdjacente(Mapa.portoUniao, 87))

Mapa.tresBarras.adicionarAdjacente(new CidadeAdjacente(Mapa.saoMateus,43))
Mapa.tresBarras.adicionarAdjacente(new CidadeAdjacente(Mapa.canoinhas,12))

module.exports = Mapa
