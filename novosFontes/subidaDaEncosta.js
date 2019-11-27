const gf = require('./grafo');

module.exports.hillClimb = (grafo) => {
    const tamGrafo = Object.keys(grafo);
    var solucao = gf.solucao(grafo, -1);
    const custoAtual = gf.custo(solucao);
    var melhorCusto = custoAtual;
    var vizinhos = [];
    var caminho = Object.keys(solucao);

    caminho.forEach((n) => {
        let index = Number(n);

        if (tamGrafo.length <= (index +1)) {
            vizinhos.push(gf.solucao(grafo, (index + 1)));
        }

        if (0 <= (index - 1)) {
            vizinhos.push(gf.solucao(grafo, (index - 1)));
        }
    })


    vizinhos.forEach((s) => {
        let custoAtual = gf.custo(s);

        if (custoAtual < melhorCusto) {
            melhorCusto = custoAtual;
            solucao = s;
        }
    })

    return {melhorCusto, solucao};
}