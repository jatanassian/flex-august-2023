const fs = require('fs');

const writeToFile = data => {
	fs.writeFile('./potato2.txt', `${data}\n${data}`, err => {
		if (err) {
			console.log('OOPS');
		} else {
			console.log('File was written succesfully');
		}
	});
};

const actionWhenDoneReading = (err, data) => {
	console.log('err ->', err);
	console.log('data ->', data);

	writeToFile(data);
};

fs.readFile('./potato.txt', 'utf-8', actionWhenDoneReading);

// FLOW:
// 	readFile
// 		actionWhenDoneReading
// 			console
// 			console
// 			writeToFile
// 				fs.writeFile
// 					console
// Order of operation is about nesting, not top to bottom
