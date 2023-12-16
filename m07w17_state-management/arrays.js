const arr = [1, 2, 3, 4, 5];

// Map
const mapArr = arr.map(num => num * 2);
// const mapArr = arr.map(num => {
// 	return num * 2;
// });

console.log(mapArr);

// Filter
// const filterArr = arr.filter(num => {
// 	if (num % 2 === 0) {
// 		return true;
// 	}
// });
const filterArr = arr.filter(num => num % 2 === 0);

console.log(filterArr);

// Reduce
const sumNum = arr.reduce((acc, num) => {
	// console.log('acc before ->', acc);
	acc += num;
	// console.log('acc after ->', acc);
	return acc;
}, 0);
console.log(sumNum);

const arr2 = [1, 1, 2, 2, 3, 3, 3, 4];

// {
// 	1: 2,
// 	2: 2,
// 	3: 3,
// 	4: 1
// }

const countObject = arr2.reduce((acc, num) => {
	// console.log('before ->', acc);
	if (acc[num]) {
		acc[num] += 1;
	} else {
		acc[num] = 1;
	}
	// console.log('after ->', acc);
	return acc;
}, {});
