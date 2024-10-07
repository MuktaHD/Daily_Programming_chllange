// Find the Shortest Path in an Unweighted Graph
// You are given an unweighted graph represented by an adjacency list. Your task is to find the shortest path (in terms of the number of edges) between two given nodes in the graph.

// Input : V = 5
// Edges = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4]]
// start = 0
// end = 4




function BFSShortestPath(V, edges, start, end) {
  
    const adjList = Array.from({ length: V }, () => []);

    for (const [u, v] of edges) {
        adjList[u].push(v);
        adjList[v].push(u); 
    }

    const queue = [[start, 0]]; 
    const visited = Array(V).fill(false);
    visited[start] = true;

    while (queue.length > 0) {
        const [node, distance] = queue.shift();

        if (node === end) return distance;

        for (const neighbor of adjList[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push([neighbor, distance + 1]);
            }
        }
    }

    return -1;
}


console.log(BFSShortestPath(5, [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4]], 0, 4)); 
console.log(BFSShortestPath(3, [[0, 1], [1, 2]], 0, 2)); 
console.log(BFSShortestPath(4, [[0, 1], [1, 2]], 2, 3)); 
