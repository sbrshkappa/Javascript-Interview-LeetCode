/*
Implement Breadth First Search and return the distance of the root node from all the other nodes. The Graph is represented as a adjacency matrix.

Example:

Input: ([
    [0,1,1,1,0],
    [0,0,1,0,0],
    [1,1,0,0,0],
    [0,0,0,1,0],
    [0,1,0,0,0]
],1) => (Graph, index of the rootnode)

Output: {0: 2, 1: 0, 2: 1, 3: 3, 4: infinity  }
*/

const BFSDistance = (graph, root) => {

    let nodeDistances = {};

    for(let i=0; i < graph.length; i++){
        nodeDistances[i] = Infinity;    
    }

    nodeDistances[root] = 0;

    let queue = [root];
    let current;

    while(queue.length != 0) {
        current = queue.shift();

        let curConnected = graph[current];
        let neighborIds = [];
        let id = curConnected.indexOf(1);
        while(id != -1){
            neighborIds.push(id);
            id = curConnected.indexOf(1, id + 1);
        }

        for(let j = 0; j < neighborIds.length; j++) {
            if(nodeDistances[neighborIds[j]] == Infinity) {
                nodeDistances[neighborIds[j]] = nodeDistances[current] + 1;
                queue.push(neighborIds[j]);
            }
        }

    }
    console.log(nodeDistances);

    return nodeDistances;
}

module.exports = BFSDistance;