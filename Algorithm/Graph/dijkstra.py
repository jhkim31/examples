weights = [[1, 2, 3], [2, 3, 5], [2, 4, 2], [2, 5, 4], [3, 4, 4], [4, 5, 3], [4, 6, 1], [5, 6, 1]]
n = 6

graph = [[] for _ in range(n + 1)]

weightMatrix = [[0  for _ in range(n + 1)] for _ in range(n + 1)]

for [start, end, weight] in weights:
    weightMatrix[start][end] = weight
    weightMatrix[end][start] = weight
    graph[start].append(end)
    graph[end].append(start)

dijkstra = [9 for _ in range(n + 1)]
selectedNode = [0 for _ in range(n + 1)]
initNode = 1
dijkstra[initNode] = 0

for i in range(1, n + 1):
    minWeight = 9
    select = 0
    for node, weight in enumerate(dijkstra):
        if weight < minWeight and selectedNode[node] == 0:
            minWeight = weight
            select = node
    selectedNode[select] = 1

    for j in range(1, n + 1):
        if weightMatrix[select][j] != 0:
            if dijkstra[j] > dijkstra[select] + weightMatrix[select][j]:
                dijkstra[j] = dijkstra[select] + weightMatrix[select][j]

print(dijkstra)