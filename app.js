const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');

const graph = require('./grafh');
const calcula = require('./calcula');

const param = commandLineArgs([{
    name: 'teste',
    alias: 't',
    type: Boolean
}, {
    name: "nodes",
    alias: 'n',
    type: Number
}, {
    name: "debug",
    alias: 'd',
    type: Boolean
}
]);


const sections = [{
    header: "Trabalho de Inteligencia Artificial"
},
{
    herder: "Teste",
    optionList: [{
        name: 'teste',
        alias: 't',
        type: Boolean,
        typeLable: '[underline]{teste}',
        description: "Use para executar o programa conforme o enunciado do exercicio."
    },
    {
        name: 'vertices',
        alias: 'v',
        type: Number,
        typeLable: '[underline]{vertices}',
        description: "Número que vertice para o grafo que será criado."
    },
    {
        name: 'debug',
        alias: 'd',
        type: Boolean,
        typeLable: '[underline]{debug}',
        description: "Imprime log da execução no stdout."
    }]
}]


if (Object.keys(param).length == 0) {
    console.log(commandLineUsage(sections));
    process.exit(1);
}

if (!param.teste && !param.vertice) {
    console.log("Informe o metodo de execução (Teste) ou informe o número de vertice.");
    console.log(commandLineUsage(sections));
    process.exit(1);
}

if (param.debug) {
    console.log(`Debug ${param.debug ? `ativo` : `inativo`}.\n\n\n`);
}


calcula.calcula(graph.default, param);
