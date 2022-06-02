// There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

// When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

// Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
	let n = rooms.length,
		stack = [0],
		seen = new Array(n).fill(false);

	// mark the first room visited
	seen[0] = true;

	while (stack.length != 0) {
		let room = stack.pop();

		// visit all the neighbours
		for (let neighbour of rooms[room]) {
			if (!seen[neighbour]) {
				seen[neighbour] = true;

				stack.push(neighbour);
			}
		}
	}

	for (let v of seen) if (!v) return false;

	return true;
};

console.log(canVisitAllRooms([[1], [2], [3], []]));
