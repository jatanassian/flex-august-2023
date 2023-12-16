import React, { useReducer } from 'react';

const Reducer = () => {
	const initialState = {
		counter: 0,
		username: 'Julien',
		userData: ['First', 'Second', 'Third'],
	};

	const reducer = (state, action) => {
		if (action.type === 'increment') {
			// const newState = {
			// 	...state,
			// 	counter: state.counter + 1,
			// };
			// return newState;
			return {
				...state,
				counter: state.counter + 1,
			};
		}
		if (action.type === 'decrement') {
			return {
				...state,
				counter: state.counter - 1,
			};
		}
		if (action.type === 'update') {
			return {
				...state,
				username: 'John',
			};
		}
		if (action.type === 'update_again') {
			return {
				...state,
				username: 'Julien',
			};
		}
		if (action.type === 'add') {
			return {
				...state,
				userData: [
					'New message before',
					...state.userData,
					'New message after',
				],
			};
		}
		return { ...state };
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	const increment = () => {
		dispatch({ type: 'increment' });
	};

	const decrement = () => {
		dispatch({ type: 'decrement' });
	};

	const update = () => {
		dispatch({ type: 'update' });
	};
	const updateAgain = () => {
		dispatch({ type: 'update_again' });
	};

	const add = () => {
		dispatch({ type: 'add' });
	};

	return (
		<div>
			<h1>Reducer</h1>
			<p>Count: {state.counter}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<p>Username: {state.username}</p>
			<button onClick={update}>Update</button>
			<button onClick={updateAgain}>Update again</button>
			<br />
			<button onClick={add}>Add message</button>
			{state.userData.map((data, index) => {
				return <p key={index}>{data}</p>;
			})}
		</div>
	);
};

export default Reducer;
