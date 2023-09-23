const myPromise = new Promise((resolve, reject) => {
	// Some long running process
	// if (err) {
	// 	reject() // trigger .catch
	// } else {
	// 	resolve() // trigger .then
	// }

	// resolve([{ username: 'bob' }, { username: 'alice' }]);
	reject('oops something terrible happened!');
});

myPromise
	.then(data => {
		console.log(data);
	})
	.catch(err => {
		console.log(err);
	});
