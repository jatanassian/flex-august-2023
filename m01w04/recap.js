// Functions
// Function definition
function someFunction() {
	// ... do something
	console.log('hellooooo');
}

// Function expression (function declarations)
const someOtherFunction = function () {
	// Do something...
	console.log('hellooooo');
};

// Arrow functions (function declaration)
const myArrowFunction = () => {
	// Do something...
};

// Method (not a type of function)
const object = {
	test: 'pizza',
	someFunction() {
		console.log(this.test); // Wouldn't work with arrow function
	},
};

// Callbacks => relationship status
// Higher order function => Function that needs another function as a parameter

const doubleUp = number => number * 2;

const homemadeForEach = (array, action) => {
	for (const element of array) {
		action(element);
	}
};

homemadeForEach([1, 2, 3], element => console.log(element));
