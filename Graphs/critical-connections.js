// There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network where connections[i] = [ai, bi] represents a connection between servers ai and bi. Any server can reach other servers directly or indirectly through the network.

// A critical connection is a connection that, if removed, will make some servers unable to reach some other server.

// Return all critical connections in the network in any order.

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function (n, connections) {
	// an edge is a critical connection iff it's not in a cycle
	// hence, Tarjan's Bridge-Finding Algorithm (TBFA).

	// build an edge map
	let edgeMap = {};
	for (let i = 0; i < n; i++) edgeMap[i] = [];
	for (let [a, b] of connections) edgeMap[a].push(b), edgeMap[b].push(a);

	// disc: discovery time
	// low: lowest future node
	// time: a time counter
	let disc = Array(n),
		low = Array(n),
		time = 1,
		ans = [];

	// DFS
	const dfs = (curr, prev) => {
		// each newly-visited node should set its initial value for both disc and low to the current value of time counter incremented
		disc[curr] = low[curr] = time++;

		// call dfs on each of curr's neighbours
		for (let next of edgeMap[curr]) {
			// check if the neighbour has been discovered before
			if (!disc[next]) {
				dfs(next, curr);

				// update the lowest future node
				low[curr] = Math.min(low[curr], low[next]);
			} else if (next !== prev) low[curr] = Math.min(low[curr], disc[next]);
			if (low[next] > disc[curr]) ans.push([curr, next]);
		}
	};

	// since the graph is connected, we just need to start from 0
	dfs(0, -1);
	return ans;
};

console.log(
	criticalConnections(4, [
		[0, 1],
		[1, 2],
		[2, 0],
		[1, 3],
	])
);

console.log(
	criticalConnections(5, [
		[1, 0],
		[2, 0],
		[3, 2],
		[4, 2],
		[4, 3],
		[3, 0],
		[4, 0],
	])
);
