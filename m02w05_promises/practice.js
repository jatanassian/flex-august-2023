const generators = require('./generators');

const returnPromise = generators.returnPromise;

const myPromise = returnPromise('promise one');

console.log(myPromise);

// setTimeout(() => {
// 	console.log(myPromise);
// }, 2000);

// (err, data) => {}

return myPromise
	.then(data => {
		console.log('data is ->', data);
		// return 42;
		// return { username: 'bob' };

		// const secondPromise = returnPromise('promise two');
		// return secondPromise;

		return returnPromise('promise two');
	})
	.then(data => {
		console.log('number two', data);
		return 42;
	})
	.then(data => {
		console.log('number three', data);
		return;
	})
	.then(data => {
		console.log('number four', data);
	})
	.then(data => {
		console.log('number five', data);
	});
