interface User {
	id?: number;
	username: string;
	password: string;
	age: number;
}

const user: User = {
	username: 'Julien',
	password: '123123123',
	age: 50,
};

const user2: User = {
	id: 0,
	username: 'Alice',
	password: 'test',
	age: 40,
};

const user3: User = {} as User;

const users: User[] = [];
users.push(user);
users.push({
	username: 'Jack',
	password: 'something',
	age: 30,
});
// users.push(true);
// users.push({})
