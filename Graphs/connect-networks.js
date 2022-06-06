// There are n computers numbered from 0 to n - 1 connected by ethernet cables connections forming a network where connections[i] = [ai, bi] represents a connection between computers ai and bi. Any computer can reach any other computer directly or indirectly through the network.

// You are given an initial computer network connections. You can extract certain cables between two directly connected computers, and place them between any pair of disconnected computers to make them directly connected.

// Return the minimum number of times you need to do this in order to make all the computers connected. If it is not possible, return -1.

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
	// the number of operations = the number of connected network - 1

	if (connections.length < n - 1) return -1;

	let graph = Array.from(new Array(n), () => new Set()),
		visited = new Array(n).fill(0);

	// build the graph
	for (let [i, j] of connections) {
		graph[i].add(j);
		graph[j].add(i);
	}

	// use dfs to count the number of connected networks
	let networks = 0;

	for (let i = 0; i < n; i++) {
		networks += dfs(graph, visited, i);
	}

	return networks - 1;
};

var dfs = function (graph, visited, i) {
	if (visited[i]) return 0;

	// mark it visited
	visited[i] = 1;

	// visit its neighbour
	let count = 0,
		iterator = graph[i].values();
	while (count < graph[i].size) {
		count++;
		dfs(graph, visited, iterator.next().value);
	}

	return 1;
};

console.log(
	makeConnected(4, [
		[0, 1],
		[0, 2],
		[1, 2],
	])
);
