// Pure function
const add = (num1, num2) => {
	return num1 + num2;
};

// Pure
const sayHello = name => {
	return `Hello ${name}`;
};

let num = 10; // 11

// Impure
const addImpure = (num1, num2) => {
	console.log('Hello');
	num++;
	return num1 + num2;
};

// Pure functional component
const UserCard = props => {
	return (
		<div>
			<img src={props.avatar} />
			<h1>{props.username}</h1>
			<p>{props.bio}</p>
		</div>
	);
};

const defaultAvatar = '/public/avatar.png';
// Impure
const NewUserCard = props => {
	return (
		<div>
			<img src={props.avatar || defaultAvatar} />
			<h1>{props.username}</h1>
			<p>{props.bio}</p>
		</div>
	);
};
