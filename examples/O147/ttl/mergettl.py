from rdflib import Graph
import os

directory = os.fsencode(".")

g=Graph()
    
for file in os.listdir(directory):
     filename = os.fsdecode(file)
     if filename.endswith(".ttl"): 
         g.parse(filename,encoding="utf-8")
         
g.serialize("merged_o147.ttl",encoding="utf-8")