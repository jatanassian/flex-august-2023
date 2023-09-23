const generators = require('./generators');

const returnRejectedPromise = generators.returnRejectedPromise;
const returnPromise = generators.returnPromise;

// const promise = returnRejectedPromise('promise one');
const promiseTwo = returnPromise('promise two');

// console.log(promise);

// promise.catch(err => {
// 	console.log(err);
// });

promiseTwo
	.then(data => {
		console.log(data);
		return returnRejectedPromise('promise three');
	})
	.then(data => {
		console.log(data);
	})
	.then(data => {
		console.log(data);
	})
	.then(data => {
		console.log(data);
	})
	.catch(err => {
		console.log('an error occurred', err);
	});
