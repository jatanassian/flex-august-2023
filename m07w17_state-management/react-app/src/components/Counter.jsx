import React, { useState } from 'react';

const Counter = () => {
	const [state, setState] = useState({
		counter: 0,
		isClicked: false,
	});

	const increment = () => {
		setState(prev => {
			console.log(prev);
			return {
				...prev,
				counter: prev.counter + 1,
			};
		});
	};

	const decrement = () => {
		setState(prev => {
			return {
				...prev,
				counter: prev.counter - 1,
			};
		});
	};

	const changeClick = () => {
		setState(prev => {
			return {
				...prev,
				isClicked: !prev.isClicked,
			};
		});
	};

	return (
		<div>
			<h1>Counter: {state.counter}</h1>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<h1>Is Clicked: {state.isClicked.toString()}</h1>
			<button onClick={changeClick}>Update clicked</button>
		</div>
	);
};

export default Counter;
