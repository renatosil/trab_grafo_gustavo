# -*- coding: utf-8 -*-
import time
import networkx as nx
import matplotlib.pyplot as plt
import copy
import random
import warnings
import math

# ler os dados do arquivo vertices.txt para gerar o grafo não  direcionado
def GeraGrafo():
    
    g = nx.DiGraph()
 
    g.add_edge('B', 'C', weight=1)
    g.add_edge('C', 'D', weight=5)
    g.add_edge('E', 'A', weight=10)
    g.add_edge('A', 'C', weight=15)
 
    g.add_edge('B', 'G', weight=1)
    g.add_edge('O', 'F', weight=5)
    g.add_edge('L', 'E', weight=10)
    g.add_edge('K', 'D', weight=15)
 
    g.add_edge('I', 'B', weight=1)
    g.add_edge('J', 'O', weight=5)
    g.add_edge('G', 'E', weight=10)
    g.add_edge('I', 'D', weight=15)
 
    g.add_edge('J', 'C', weight=1)
    g.add_edge('K', 'B', weight=5)
    g.add_edge('I', 'G', weight=10)
    g.add_edge('10', 'E', weight=15)
 
    pos = nx.circular_layout(g)
 
    edge_labels = { (u,v): d['weight'] for u,v,d in g.edges(data=True) }
 
    nx.draw_networkx_nodes(g,pos,node_size=700)
    nx.draw_networkx_edges(g,pos)
    nx.draw_networkx_labels(g,pos)
    nx.draw_networkx_edge_labels(g,pos,edge_labels=edge_labels)
 
    plt.axis('off')
 
    plt.show()
        
    return g

def funcao_custo(solucao):
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    