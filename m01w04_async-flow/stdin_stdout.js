const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// On the event of a new line (pressing enter), execute the callback
rl.on('line', line => console.log(`You said: ${line}`));
