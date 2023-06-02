from rdflib import Graph
import os

directory = os.fsencode(".")

g=Graph()
    
for file in os.listdir(directory):
     filename = os.fsdecode(file)
     if filename.endswith(".ttl") and "merged" in filename: 
         g.parse(filename,encoding="utf-8")
         
g.serialize("merged.ttl",encoding="utf-8")