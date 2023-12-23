import React, { useEffect, useState } from 'react';

const DocumentTitle = () => {
	const [counter, setCounter] = useState(0);
	const [counter2, setCounter2] = useState(0);

	const increment = () => {
		setCounter(counter + 1);
	};

	const decrement = () => {
		setCounter(counter - 1);
	};

	const increment2 = () => {
		setCounter2(counter2 + 1);
	};

	const decrement2 = () => {
		setCounter2(counter2 - 1);
	};
	console.log('Hello!');

	// useEffect(() => {
	// 	console.log('Render one time only at load');
	// 	document.title = `Counter: ${counter}`;
	// }, []);

	useEffect(() => {
		console.log('Everytime a render or re-render happens');
		const intervalRef = setInterval(() => {
			console.log('This runs every 2 seconds');
		}, 2000);

		const cleanup = () => {
			console.log('Clearing interval');
			clearInterval(intervalRef);
		};

		return cleanup;
	});

	// useEffect(() => {
	// 	console.log('Runs everytime counter updates');
	// 	document.title = `Counter: ${counter}`;
	// }, [counter, counter2]);

	return (
		<div>
			<h1>Hello</h1>
			<p>The count is: {counter}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<hr />
			<p>The count 2 is: {counter2}</p>
			<button onClick={increment2}>Increment</button>
			<button onClick={decrement2}>Decrement</button>
		</div>
	);
};

export default DocumentTitle;
