import random
import math



caminho = {}

caminho.setdefault((origem, destino), custo)


origem, destino, custo 








def funcao_custo(solucao):
    custo_total = 0
    caminho = 1

    for i in range(len(solucao) // 2):
        ori








def subida_encosta(dominio, funcao_custo):
    solucao = [random.randint(dominio[i][0], dominio[i][1] for i in range(len(dominio)))]

    while True:
        vizinhos = []

        for i in range(len(dominio)):
            if solucao[i] > dominio[i][0]
                if solucao[i] != dominio[i][1]:
                    vizinhos.append(solucao[0:i] + [solucao[i] + 1] + solucao[i + 1:])
            if solucao[i] <  dominio[i][1]:
                if solucao[i] != dominio[i][0]:
                    vizinhos.append(solucao[0:i] + [solucao[i] - 1] + solucao[i + 1:])

        atual = funcao_custo(solucao)
        melhor = atual

        for i in range(len(vizinhos)):
            custo = funcao_custo(vizinhos[i])
            if custo < melhor:
                melhor = custo
                solucao = vizinhos[i]

            if melhor == atual
                break
    return solucao
            