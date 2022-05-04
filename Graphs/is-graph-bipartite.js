// There is an undirected graph with n nodes, where each node is numbered between 0 and n - 1.
// You are given a 2D array graph, where graph[u] is an array of nodes that node u is adjacent to.
// More formally, for each v in graph[u], there is an undirected edge between node u and node v.
// The graph has the following properties:

// There are no self-edges (graph[u] does not contain u).
// There are no parallel edges (graph[u] does not contain duplicate values).
// If v is in graph[u], then u is in graph[v] (the graph is undirected).
// The graph may not be connected, meaning there may be two nodes u and v such that there is no path between them.
// A graph is bipartite if the nodes can be partitioned into two independent sets A and B such that every edge in the graph connects a node in set A and a node in set B.

// Return true if and only if it is bipartite.

// Try to use two colors to color the graph and see if there are any adjacent nodes having the same color
// Graphs with adjacent nodes having the same color cannot be bipartite
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
	// 0 is uncolored, 1 is red, -1 is blue
	var colors = new Array(graph.length).fill(0);

	// check each unvisited node and color it red
	for (var i = 0; i < graph.length; i++) {
		if (colors[i] === 0 && !validColor(graph, colors, 1, i)) return false;
	}

	return true;
};

/**
 * Return true iff the current node is colored and its adjacent nodes are colored differently
 *
 * @param {number[][]} graph
 * @param {number[]} colors
 * @param {number} color
 * @param {number} node
 * @returns {boolean}
 */
var validColor = function (graph, colors, color, node) {
	// check if the color matches if the current node's already been colored
	if (colors[node] != 0) return colors[node] === color;

	// color the current node
	colors[node] = color;

	// check the current node's neightbours
	for (var i = 0; i < graph[node].length; i++) {
		var next = graph[node][i];

		// return false once the adjacent node cannot have a different color
		if (!validColor(graph, colors, -color, next)) return false;
	}

	// return true if all the neighbours have the same color as the current node
	return true;
};
