// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
	let n = graph.length,
		stack = [[0, [0]]],
		paths = [];

	while (stack.length != 0) {
		let [node, path] = stack.pop();

		// destination check
		if (node === n - 1) paths.push(path);

		// traverse the rest
		for (let neighbour of graph[node])
			stack.push([neighbour, path.concat([neighbour])]);
	}

	return paths;
};

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
