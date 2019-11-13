const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');
const graph = require('./grafh');
const _ = require('lodash');
//const calcula = require('./calcula');

const param = commandLineArgs([{
	name: 'teste',
	alias: 't',
	type: Boolean
}, {
	name: "vertice",
	alias: 'v',
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

var calcula = (grafo, param) => {
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
			caminhoTxt += (`${vertices[i]} - (${0})`);
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
			caminhoTxt += `${proximo.no} - (${proximo.peso})`;
		}
		else {
			caminhoTxt += `-----(${proximo.peso}) - ${proximo.no} \n`;
		}
	}

	if (param.debug) {
		console.log(`\n\n\nPeso total do caminho ${peso}`);
		console.log(`Caminho:\n${caminhoTxt}`);
	}
}

var escolheMenorCaminho = (noAtual, nosVistados, destinos) => {
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


var getGrafo = (numeroNos, pesoMin, pesoMax, maxFilhos) => {
	if(Number.isNaN(numeroNos) || Number.isNaN(pesoMin) || Number.isNaN(pesoMax) || Number.isNaN(maxFilhos)) {
		throw new Error('Verifique parametros para gerar Grafo.');
	}
	var grafo = {};
	for (var i = 0; i < numeroNos*2; i++) {
		let peso = Math.floor(Math.random() * (pesoMax - pesoMin)) + pesoMin;
		let no   = Math.floor(Math.random() * (numeroNos/2 - 1)) + 1;
		let no1   = Math.floor(Math.random() * (numeroNos/2 - 1)) + 1;
		
		if (grafo[no] && grafo[no1]){
			if ( (grafo[no].length >= maxFilhos) || (grafo[no1].length >= maxFilhos) ) {
				i--;
				continue;
			}
		}

		if (grafo[no]) {
			grafo[no].push({[no1]:peso});
		}
		else {
			grafo[no] = [{[no1]:peso}];
		}


		if (grafo[no1]) {
			grafo[no1].push({[no]:peso});
		}
		else {
			grafo[no1] = [{[no]:peso}];
		}

		//console.log(no);
	}

	console.log(grafo);
	return grafo;
}


if(param.teste)
	calcula(graph.default, param)
else
	calcula(getGrafo(1000000, 10, 20, 50), param);
//calcula.calcula(graph.default, param);
