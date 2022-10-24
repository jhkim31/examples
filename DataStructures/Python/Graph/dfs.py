from pprint import pprint
#https://school.programmers.co.kr/learn/courses/30/lessons/118669

graph = [[], [2, 4], [1, 3, 6], [2], [1, 5], [4, 6], [2, 5, 7], [6]]
n = 7


visited = [0 for _ in range(n + 1)]

def dfs(graph, visited, node):
    print(node)
    visited[node] = 1
    nextNodes = graph[node]
    for nextNode in nextNodes:
        if visited[nextNode] != 1:
            dfs(graph, visited, nextNode)

# dfs(graph, visited, 1)



initNode = 1
stack = [initNode]

while stack:
    currentNode = stack.pop()
    if visited[currentNode] == 1:
        continue
    visited[currentNode] = 1

    print(currentNode)
    nextNodes = graph[currentNode]

    for nextNode in nextNodes:
        if visited[nextNode] == 0:
            stack.append(nextNode)

