export default class Graph {
    constructor() {
        this.vert = [];
        this.adj = {};
    }

    changeWeight(v1, v2, weight) {
        this.adj[v1][v2] = weight;
    }

    addEdge(v1, v2, weight) {
        this.adj[v1][v2] = weight;
    }

    addVertex(v) {
        this.vert.push(v);
        this.adj[v] = {};
    }

    dijkstra(source) {
        let distances = {},
            parents = {},
            visited = new Set();
        for (let i = 0; i < this.vert.length; i++) {
            if (this.vert[i] === source) {
                distances[source] = 0;
            } else {
                distances[this.vert[i]] = Infinity;
            }
            parents[this.vert[i]] = null;
        }

        let currVertex = this.vertexWithMinDistance(distances, visited);

        while (currVertex !== null) {
            let distance = distances[currVertex],
                neighbors = this.adj[currVertex];
            for (let neighbor in neighbors) {
                let newDistance = distance + neighbors[neighbor];
                if (distances[neighbor] > newDistance) {
                    distances[neighbor] = newDistance;
                    parents[neighbor] = currVertex;
                }
            }
            visited.add(currVertex);
            currVertex = this.vertexWithMinDistance(distances, visited);
        }
    }

    vertexWithMinDistance(distances, visited) {
        let minDistance = Infinity,
            minVertex = null;
        for (let v in distances) {
            let distance = distances[v];
            if (distance < minDistance && !visited.has(v)) {
                minDistance = distance;
                minVertex = v;
            }
        }
        return minVertex;
    }
}
