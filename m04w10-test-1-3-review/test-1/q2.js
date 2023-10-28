/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by median. Do not alter.
const round = function (number) {
	return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

const median = function (arr) {
	arr.sort((a, b) => a - b);

	const middleIndex = arr.length / 2;

	if (arr.length % 2 === 0) {
		const firstNumber = arr[middleIndex - 1];
		const secondNumber = arr[middleIndex];

		return round((firstNumber + secondNumber) / 2);
	}

	return round(arr[middleIndex - 0.5]);
};

// Don't change below:
module.exports = { median };
