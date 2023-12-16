const user = {
	name: 'Julien',
	isSleepy: true,
	parents: {
		name: 'Bob',
		parents: {
			name: 'Trudy',
		},
	},
};

const user2 = {
	...user,
	name: 'Steve',
	parents: {
		...user.parents,
		name: 'Betty',
	},
};

// user2.name = 'Steve';
// user2.parents.name = 'Betty';

console.log(user2);
console.log(user);
// const userString = 'Julien';
// let userString2 = userString;
// userString2 = 'Steve';
// console.log(userString);

const arr = [1, 2, 3, 4];
const newArr = ['hello'];
const arr2 = [-1, 0, ...arr, 5, ...newArr, 6];
console.log(arr2);
