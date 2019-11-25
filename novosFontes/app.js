const __grafo = require('./grafo');
const __climb = require('./subidaDaEncosta');


// console.log(JSON.stringify(grafo.getGrafo(100, 20)));

//console.log(JSON.stringify(grafo.solucaoInicial(grafo.getGrafo(1000, 10))));

const grafo = __grafo.getGrafo(10, 5);
const solucaoInicial = __grafo.solucaoInicial(grafo)

climb.hillClimb(solucaoInicial,grafo);