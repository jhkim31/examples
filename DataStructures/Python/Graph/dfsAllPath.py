from pprint import pprint
#https://school.programmers.co.kr/learn/courses/30/lessons/118669
n = 7

graph = [[], [2, 4], [1, 3, 6], [2], [1, 5], [4, 6], [2, 5, 7], [6]]
visited = [0 for _ in range(n + 1)]
print(graph)

def dfs(graph, visited, node, endNode, path):
    print(node)
    if node == endNode:
        return 1

    nextNodes = graph[node]

    for nextNode in nextNodes:
        if visited[nextNode] != 1:
            visited[nextNode] = 1
            path.append(nextNode)
            if dfs(graph, visited,  nextNode, endNode, path) == 1:
                print("도착!", path)
            path.remove(nextNode)
            visited[nextNode] = 0
    visited[node] = 0
    return 0

start = 1
end = 5
path = []
visited[start] = 1
path.append(start)
dfs(graph, visited,  start, end, path)




