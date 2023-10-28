'use strict';

/* Question 01
Convert an array of arrays into an object.
This is the inverse of the previous question.
Arrays will only have two elements: [key, value]
To keep this simple, the values will only be primitive types (number, string, etc.) and not other objects or array.
Furthermore, assume that the input is always clean/accurate. In other words, don't worry about handling edge cases.
Examples:
- arrayToObject([['a', 1], ['b', 2], ['c', 3]])
  => { a: 1, b: 2, c: 3 }
- arrayToObject([['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]])
  => {name: 'Dave', role: 'Instructor', yearsOfExperience: 10}
*/

const arrayToObject = function (arr) {
	const result = {};

	for (const subArray of arr) {
		const key = subArray[0];
		const value = subArray[1];

		result[key] = value;
	}

	return result;

	// return Object.fromEntries(arr);
};

// Don't change below:
module.exports = { arrayToObject };
