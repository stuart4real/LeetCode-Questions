// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	// maxCur: current maximum value
	// maxSoFar: maximum value found so far
	let maxCur = 0,
		maxSoFar = 0;

	for (let i = 1; i < prices.length; i++) {
		maxCur += prices[i] - prices[i - 1];
		maxCur = Math.max(0, maxCur);
		maxSoFar = Math.max(maxCur, maxSoFar);
	}

	return maxSoFar;
};

// On each day, you may decide to buy and/or sell the stock.

// You can only hold at most one share of the stock at any time.

// However, you can buy it then immediately sell it on the same day.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function (prices) {
	let i = 0,
		n = prices.length - 1,
		buy = 0,
		sell = 0,
		profit = 0;

	while (i < n) {
		// find the last continuous day that the price is the smallest
		while (i < n && prices[i + 1] <= prices[i]) i++;
		buy = prices[i];

		// find the last continuous day that the price is the largest
		while (i < n && prices[i + 1] > prices[i]) i++;
		sell = prices[i];

		// update the profit
		profit += sell - buy;
	}

	return profit;
};
