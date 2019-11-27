const utils = require('./utils');
const _ = require('lodash');


module.exports.getGrafo = (maxNos, maxPeso) => {
    var grafo = {};
    var origem = 0;
    var destino = 0;
    var custo = 0;
    var gerados = [];
    for (let i = 0; i < (maxNos * 2); i++) {
        origem = utils.getRandomInt(0, maxNos / 2);
        destino = utils.getRandomInt(0, maxNos / 2);
        custo = utils.getRandomInt(1, maxPeso);

        if (origem === destino) {
            i--;
            continue;
        }

        if (_.isArray(grafo[origem])) {
            grafo[origem].push({ [destino]: custo })
        } else {
            grafo[origem] = [({ [destino]: custo })];
        }


        if (_.isArray(grafo[destino])) {
            grafo[destino].push({ [origem]: custo })
        } else {
            grafo[destino] = [({ [origem]: custo })];
        }

    }

    return grafo;

}


module.exports.custo = (grafo) => {
    //grafo = {"13":{"49":4},"35":{"42":7},"42":{"93":6},"45":{"62":5},"49":{"83":2},"62":{"92":2},"78":{"13":8},"83":{"35":6},"92":{"45":1},"93":{"62":4}};

    var custo = 0;
    const nos = Object.keys(grafo);

    nos.forEach((n) => {
        let dest = grafo[n];
        let index  = Object.keys(dest)
        custo += dest[index];
    })

    return custo;
}






module.exports.solucao = (grafo, no) => {
    const nos = Object.keys(grafo);
    if (no < 0) {
        no = utils.getRandomInt(0, nos.length)+'';
    }
    var solucao = {};
    var visitados = [];
    var j = 0, x = 0;
    while(!grafo[no]) no++;

    for ( let i = 0; i < nos.length; i ++) {
        dest = grafo[no];
        if(dest.length > 1){
            j = (dest.length % 2) + 1;
        }

        let proxNo = Object.keys(dest[j])[0];

        if (visitados.indexOf(no) < 0) {
            solucao[no] = {[proxNo]: dest[j][proxNo]};
            visitados.push(no);
            no = proxNo;
        }

        j = 0;
    }


    return solucao;
}