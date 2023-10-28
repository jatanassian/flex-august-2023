'use strict';

/* Question 00
Convert a given object into an array of arrays.
Given an object, create an array which contains arrays with the key/value pairs.
To keep this simple, the values will only be primitive types (number, string, etc.) and not other objects or array.
Furthermore, assume that the input is always clean/accurate. In other words, don't worry about handling edge cases.
Examples
- objectToArray({ a: 1, b: 2, c: 3 })
  => [['a', 1], ['b', 2], ['c', 3]]
- objectToArray({name: 'Dave', role: 'Instructor', yearsOfExperience: 10})
  => [['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]]
*/

const objectToArray = function (obj) {
	const result = [];

	for (const key in obj) {
		const value = obj[key];

		const subArray = [key, value];

		result.push(subArray);
	}

	return result;

	// return Object.entries(obj);
};

// Don't change below:
module.exports = { objectToArray };
