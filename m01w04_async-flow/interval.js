let chickenArmy = '🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔';

console.log(chickenArmy);

setInterval(() => {
	console.log(chickenArmy);
}, 1000);

chickenArmy = '🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖';

// FLOW:
// 1. Define chickenArmy with chicken
// 2. Log to the console the content of the variable
// 3. Start an interval that will log the content of chickenArmy
// 4. Change the content of chickenArmy to robots
// 5. Callback of setInterval gets executed
//		We log the chickenArmy variable

// By the time we start logging inside the interval, the chickenArmy is already changed
