// Server API
const PORT = 8080;
const app = require('express')(); // npm i express
const express = require('express');
const cors = require('cors'); // npm i cors
const uniqid = require('uniqid'); // npm i uniqid
const morgan = require('morgan'); // npm i morgan

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

let data = [
	{ id: uniqid(), task: 'buy milk', done: false },
	{ id: uniqid(), task: 'wash dishes', done: false },
	{ id: uniqid(), task: 'clean up', done: true },
];

app.get('/todos', (req, res) => {
	res.json(data);
});

app.post('/todos/:id/checkoff', (req, res) => {
	const { id } = req.params;
	console.log(id);

	const results = data.map(todo => {
		if (todo.id === id) {
			return {
				...todo,
				done: !todo.done,
			};
		}
		return todo;
	});
	data = results;

	res.send('You have updated correctly!');
});

app.post('/todos/:id/delete', (req, res) => {
	const { id } = req.params;
	const results = data.filter(todo => todo.id !== id);
	data = results;
	res.send('You have deleted an item');
});

app.post('/todos/add', (req, res) => {});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
