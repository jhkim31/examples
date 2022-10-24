from pprint import pprint
from collections import deque


#graphImage : https://school.programmers.co.kr/learn/courses/30/lessons/118669
graph = [[], [2, 4], [1, 3, 6], [2], [1, 5], [4, 6], [2, 5, 7], [6]]
n = 7

initNode = 1
q = deque([initNode])
visited = [0 for _ in range(n + 1)]

while q:
    currentNode = q.popleft()
    if visited[currentNode] == 1:
        continue
    print(currentNode)
    nextNodes = graph[currentNode]
    visited[currentNode] = 1

    for nextNode in nextNodes:
        if visited[nextNode] == 0:
            q.append(nextNode)
