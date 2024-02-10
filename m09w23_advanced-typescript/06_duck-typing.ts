interface PotentialUser {
	username: string;
	password: string;
}

const login = (user: PotentialUser): boolean => {
	// console.log(user.age); // error
	return false;
};

const myUser = {
	username: 'Candice',
	password: '1234',
	age: 42,
	friends: [],
};

login(myUser);
