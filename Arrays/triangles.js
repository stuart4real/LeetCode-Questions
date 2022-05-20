// Given an integer numRows, return the first numRows of Pascal's triangle.

var generate = function (numRows) {
	let result = [];

	result[0] = [1];

	for (let i = 1; i < numRows; i++) {
		// construct the sub-array
		let subarray = new Array(i + 1).fill(1),
			temp1 = result[i - 1].concat([0]),
			temp2 = [0].concat(result[i - 1]);

		// calculate the values based on the offset sum of the previous row
		for (let j = 0; j < i + 1; j++) {
			subarray[j] = temp1[j] + temp2[j];
		}

		result.push(subarray);
	}

	return result;
};

console.log(generate(5));
