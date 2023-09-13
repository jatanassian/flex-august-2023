// Asynchronous Flow

// Synchronous
const bob = 'Robert';
console.log(`Hi ${bob}`);

// Example of asynchronous
// Output: Yo > Goodbye > What's up > Not much
console.log('Yo!');

setTimeout(() => {
	console.log("Hey what's up?");
}, 5000);

setTimeout(() => {
	console.log('Not much, you?');
}, 5000);

console.log('Goodbye');

// Exercise: print letters one by one with a 1 second delay between each letter
const word = 'HELLOOO';
for (let i = 0; i < word.length; i++) {
	const letter = word[i];

	setTimeout(() => {
		console.log(letter);
	}, 1000 * (i + 1)); // If we don't increase the delay, all the letters would appear after 1 second
}

// Add water to the pot, put pot on stove on max, wait 10.5min => BAD
// Add water to the pot, put pot on stove on max, wait until boiling => GOOD

// External content: read/write from other files (excluding require)
// External content: waiting for terminal (npm init for example)
// External content: events
// External content: remote content

// Traps to pay attention to:

const errorProbably = () => {
	console.log(name);
};

const dangerFunction = () => {
	const name = 'bob';

	errorProbably(name);
};

// Make sure to pass name as a variable
