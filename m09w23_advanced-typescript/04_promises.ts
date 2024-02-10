const myPromise = (num: number): Promise<number> => {
	return new Promise(resolve => {
		resolve(num);
	});
};

myPromise(42).then(data => {});
