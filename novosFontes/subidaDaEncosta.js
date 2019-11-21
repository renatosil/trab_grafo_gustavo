module.exports.hillClimb = (caminho, fnCusto, callback) => {
    solucao = [];
    while (true) {
        let vizinhos = [];
        let atual;
        let melhor;

        for (let i of is) {
            if (solucao[i] > caminho[i][0]) {
                if (solucao[i] != caminho[i][1]) {
                    vizinhos.push(j + [solucao[i] + 1] + solucao[j - i]);
                }
            }
            if (solucao[i] <  caminho[i][1]){
                if (solucao[i] != caminho[i][1]){
                    for(let j = 0; j < i; i++){
                        vizinhos.push(j + [solucao[i] + 1] + solucao[j - i]);
                    }
                }
            }
        }

        atual = fnCusto(solucao);
        melhor = atual;
        vizinhos.forEach(v => {
            custo = fnCusto(v);
            if(custo <  melhor) {
                melhor = custo;
                solucao = vizinhos[vizinhos.indexof(v)];
            }
        })

        if (melhor = atual) {
            break;
        }

    }

    return solucao;
}