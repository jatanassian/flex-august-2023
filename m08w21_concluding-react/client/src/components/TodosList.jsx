import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodosList = () => {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');

	useEffect(() => {
		axios.get('http://localhost:8080/todos').then(({ data }) => {
			setTodos(data);
		});
	}, []);

	const handleClick = id => {
		// .find() way
		// const results = [...todos];
		// const found = results.find(todo => {
		// 	return todo.id === id;
		// });
		// found.done = !found.done;
		// setTodos(results);

		axios.post(`http://localhost:8080/todos/${id}/checkoff`).then(res => {
			const results = todos.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						done: !todo.done,
					};
				}
				return todo;
			});
			setTodos(results);
		});
	};

	const handleDelete = id => {
		axios.post(`http://localhost:8080/todos/${id}/delete`).then(res => {
			const results = todos.filter(todo => todo.id !== id);
			setTodos(results);
		});
		// const results = todos.filter(todo => {
		// 	// if (todo.id !== id) {
		// 	// 	return true;
		// 	// }
		// 	// return false;
		// 	return todo.id !== id;
		// });
	};

	const handleChange = e => {
		console.log(e.target.value);
		setInput(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		const newTodo = {
			task: input,
			done: false,
			id: Math.random(Math.floor * 3),
		};

		axios
			.post(`http://localhost:8080/todos/add`, { todo: newTodo })
			.then(res => {
				console.log(res.data);

				setTodos([...todos, newTodo]);
				setInput('');
			});
	};

	return (
		<div>
			<h1>Todos List</h1>
			{todos.map(({ id, task, done }) => {
				return (
					<div key={id}>
						<p onClick={() => handleClick(id)}>
							{task} {done ? '✔️' : '🟢'}
						</p>
						<button onClick={() => handleDelete(id)}>Delete</button>
					</div>
				);
			})}

			<form onSubmit={handleSubmit}>
				<label>Add todo</label>
				<input type='text' onChange={handleChange} value={input} />
				<button>Add</button>
			</form>
		</div>
	);
};

export default TodosList;
