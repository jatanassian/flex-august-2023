// Asynchronous Flow

// Synchronous
// const bob = 'Robert';
// console.log(`Hi ${bob}`);

// console.log('Yo!');

// setTimeout(() => {
// 	console.log("Hey what's up?");
// }, 5000);

// setTimeout(() => {
// 	console.log('Not much, you?');
// }, 5000);

// console.log('Goodbye');

// const word = 'HELLOOO';
// for (let i = 0; i < word.length; i++) {
// 	const letter = word[i];

// 	setTimeout(() => {
// 		console.log(letter);
// 	}, 1000 * (i + 1));
// }

// Add water to the pot, put pot on stove on max, wait 10.5min => BAD
// Add water to the pot, put pot on stove on max, wait until boiling => GOOD

// External content: read/write from other files (excluding require)
// External content: waiting for terminal (npm init for example)
// External content: events
// External content: remote content

// Traps to pay attention to:

const errorProbably = name => {
	console.log(name);
};

const dangerFunction = () => {
	const name = 'bob';

	errorProbably(name);
};

dangerFunction();
