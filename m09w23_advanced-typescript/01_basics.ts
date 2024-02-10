let myNum = 5;

let username: string | number | boolean = 'Julien';
username = 'Bob';
username = 10;
// username = false; // error

const numbers: (number | string)[] = [];
numbers.push(5);
numbers.push('hello');
// numbers.push(undefined); //error

const output = numbers.pop();
