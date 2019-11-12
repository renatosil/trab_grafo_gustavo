const _ = require('lodash');


module.exports.calcula = (grafo, param) => {
    if (!_.isObject(grafo)) throw new Error('Não é um grafo valido');

    var caminho = {};
    var caminhoTxt = "";
    var vertices = Object.keys(grafo);
    var noAtual;
    var nosVistados = [];
    var j = 0;
    let peso = 0;

    for (var i = 0; i < vertices.length; i++) {
        let proximo;
        let no;

        if (!noAtual) {
            noAtual = grafo[vertices[i]];
            caminhoTxt += vertices[i];
        }

        no = grafo[vertices[j]];

        nosVistados.push(vertices[j]);
        proximo = escolheMenorCaminho(noAtual, nosVistados, no)

        if (Object.keys(proximo).length <= 0) break;

        if (param.debug) {
            //console.log(`Do vertice ${vertices[j]} vai para ${proximo.no} com peso ${proximo.peso}`);
        }

        // caminhoTxt += `---(${proximo.peso})---> ${proximo.no} `;
        caminho[vertices[j]] = proximo;
        peso += proximo.peso;
        j = vertices.indexOf(proximo.no);



        if (i % 2 !== 0) {
            caminhoTxt += `${proximo.no}`;
        }
        else {
            caminhoTxt += ` ----- ${proximo.no} \n`;
        }
    }

    if (param.debug) {
        console.log(`\n\n\nPeso total do caminho ${peso}`);
        console.log(`Caminho:\n${caminhoTxt}`);
    }
}

escolheMenorCaminho = (noAtual, nosVistados, destinos) => {
    //if (_.isArray(no)) throw new Error('Não é um nó valido');
    var retorno = {};
    destinos.forEach(v => {
        var d = Object.keys(v);
        for (var i = 0; i < d.length; i++) {
            if (nosVistados.indexOf(d[i]) === -1) {
                let no = [d[i]][0];
                let vl = v[d[i]];
                if (Object.keys(retorno).length === 0) {
                    retorno.no = no;
                    retorno.peso = vl;
                }
                else if (retorno.peso > vl) {
                    retorno.no = no;
                    retorno.peso = vl;
                }
            }
        }
    });

    return retorno;
}

