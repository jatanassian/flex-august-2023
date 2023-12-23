import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetData = () => {
	// Dog state
	// const [counter, setCounter] = useState(0);
	// const [data, setData] = useState('');
	// const [isLoaded, setIsLoaded] = useState(false);
	const [dogState, setDogState] = useState({
		data: '',
		isLoaded: false,
		counter: 0,
	});

	// Cat state
	const [counter2, setCounter2] = useState(0);
	const [data2, setData2] = useState('');
	const [isLoaded2, setIsLoaded2] = useState(false);

	const increment = () => {
		setDogState(prev => {
			return {
				...prev,
				counter: prev.counter + 1,
			};
		});
	};

	const decrement = () => {
		setDogState(prev => {
			return {
				...prev,
				counter: prev.counter - 1,
			};
		});
	};

	const increment2 = () => {
		setCounter2(counter2 + 1);
	};

	const decrement2 = () => {
		setCounter2(counter2 - 1);
	};

	useEffect(() => {
		axios.get('https://dog.ceo/api/breeds/image/random').then(({ data }) => {
			// setData(data.message);
			// setIsLoaded(true);
			setDogState(prev => {
				return {
					...prev,
					isLoaded: true,
					data: data.message,
				};
			});
		});
	}, [dogState.counter]);

	useEffect(() => {
		axios.get('https://catfact.ninja/fact').then(({ data }) => {
			console.log(data.fact);
			setData2(data.fact);
			setIsLoaded2(true);
		});
	}, [counter2]);

	return (
		<div>
			<h1>Get me some data!</h1>
			<div>
				<p>Number of dog pics: {dogState.counter}</p>
				<div>
					<button onClick={increment}>Increment</button>
					<button onClick={decrement}>Decrement</button>
				</div>
			</div>
			<div>
				<p>Cat fact #{counter2}</p>
				<div>
					<button onClick={increment2}>Increment</button>
					<button onClick={decrement2}>Decrement</button>
				</div>
			</div>

			{isLoaded2 && <p>{data2}</p>}
			{dogState.isLoaded && <img src={dogState.data} alt='Dog' />}
		</div>
	);
};

export default GetData;
