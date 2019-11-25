const utils = require('./utils');
const _ = require('lodash');


module.exports.getGrafo = (maxNos, maxPeso) => {
    var grafo = {};
    var origem = 0;
    var destino = 0;
    var custo = 0;

    for (let i = 0; i < (maxNos); i++) {
        origem = utils.getRandomInt(0, maxNos);
        destino = utils.getRandomInt(0, maxNos);
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
    const nos = Object.keys(grafo);
    var noAtual = nos[0];
    var visitados = [];
    var custo = 0;
    var j = 0;

    for (let i = 0; i < nos.length; i++) {
        const destino = grafo[noAtual];
        if (!destino[j]) {
            i = nos.length;
            continue;
        }

        const key = Object.keys(destino[j]);

        if (!key) {
            i = nos.length;
            continue;
        }

        if (noAtual != Number(key[0])) {
            if (visitados.indexOf(key[0]) < 0) {
                visitados.push(noAtual);
                custo += destino[j][key[0]];
                if (Number.isNaN(custo)) {
                    continue;
                }
                noAtual = key[0]
            } else {
                j++;
                i--;
            }

        }
    }

    return { custo, visitados, grafo };
}






module.exports.solucaoInicial = (grafo) => {
    const nos = Object.keys(grafo);
    var no = utils.getRandomInt(0, nos.length)+'';
    var solucao = {};
    var visitados = [];
    var j = 1, x = 0;
    while(!grafo[no]) no++;

    for ( let i = 0; i < nos.length; i ++) {
        
        if(visitados.indexOf(no) >= 0) {
            i-=2;
            x++;
            j++;
            if (x == nos.length) {
                i = x;
            }
            continue;
        }
        
        let dest = grafo[no][Math.abs(j)];
        solucao[no] = dest;
        visitados.push(no)
        no = Object.keys(dest)[0]
        j = 0;
    }
    var visitados = [];


    console.log(JSON.stringify(nos));
}