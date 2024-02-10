const sayHello = (name: string, age: number = 42): string => {
	return `Hello ${name}`;
};

// sayHello(123);
// sayHello('Julien', 50)
// sayHello();
const returnValue = sayHello('Julien');
