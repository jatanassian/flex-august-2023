// Server API
const PORT = 8080;
const app = require('express')(); // npm i express
const express = require('express');
const cors = require('cors'); // npm i cors
const uniqid = require('uniqid'); // npm i uniqid
const morgan = require('morgan'); // npm i morgan

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/sports', (req, res) => {
	res.json([
		{ id: 1, name: 'Tennis' },
		{ id: 2, name: 'Hiking' },
		{ id: 3, name: 'Karting' },
	]);
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
