// Map
// Filter
// Reduce

// Includes
const arr = [1, 3, 4, 2, 5];

const isThere4 = arr.includes(4);
console.log(isThere4); // true

// Find
const found = arr.find(num => num % 2 === 0);
console.log(found); // 4

// Some
const arr2 = [
	{
		name: 'Julien',
		num: 10,
		isAdmin: true,
	},
	{
		name: 'Sarah',
		num: 20,
		isAdmin: false,
	},
];

const someResult = arr2.some(user => {
	if (user.isAdmin) {
		return true;
	}
});
console.log(someResult); // true
