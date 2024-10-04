// Detect a Cycle in an Undirected Graph
// You are given an undirected graph represented by an adjacency list. Your task is to determine if the graph contains any cycle. A cycle is formed if you can traverse through a sequence of edges that starts and ends at the same vertex.

// Input : V = 5, E = 5
// Edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]]

// Output : true



function DFS(V, edges) {
   
    const adjList = new Map();
    for (let i = 0; i < V; i++) {
        adjList.set(i, []);
    }
    
    for (let [u, v] of edges) {
        adjList.get(u).push(v);
        adjList.get(v).push(u);  
    }

    const visited = new Array(V).fill(false);

    function dfs(v, parent) {
        visited[v] = true;  
       
        for (let neighbor of adjList.get(v)) {
      
            if (!visited[neighbor]) {
                if (dfs(neighbor, v)) {
                    return true;  
                }
            } 
           
            else if (neighbor !== parent) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < V; i++) {
        if (!visited[i]) {
            if (dfs(i, -1)) {
                return true; 
            }
        }
    }

    return false;  
}

let V1 = 5;
let edges1 = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]];
console.log(DFS(V1, edges1));  

let V2 = 3;
let edges2 = [[0, 1], [1, 2]];
console.log(DFS(V2, edges2));  

let V3 = 1;
let edges3 = [];
console.log(DFS(V3, edges3));  


let V4 = 4;
let edges4 = [[0, 1], [1, 2], [2, 3]];
console.log(DFS(V4, edges4));  
