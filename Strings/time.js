// You are given two strings current and correct representing two 24-hour times.

// 24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.

// In one operation you can increase the time current by 1, 5, 15, or 60 minutes. You can perform this operation any number of times.

// Return the minimum number of operations needed to convert current to correct.

var convertTime = function (current, correct) {
	var toMin = function (time) {
		return (
			time.charAt(0) * 600 +
			time.charAt(1) * 60 +
			time.charAt(3) * 10 +
			time.charAt(4) * 1
		);
	};

	let diff = toMin(correct) - toMin(current);

	return (
		Math.floor(diff / 60) +
		Math.floor((diff % 60) / 15) +
		Math.floor((diff % 15) / 5) +
		(diff % 5)
	);
};

console.log(convertTime("02:30", "04:35"));
