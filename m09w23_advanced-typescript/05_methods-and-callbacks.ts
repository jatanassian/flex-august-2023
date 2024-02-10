interface Dog {
	name: string;
	breed: string;
	goForWalk: (distance: number) => boolean;
}

const myDog: Dog = {
	name: 'Kimi',
	breed: 'Australian Shepherd',
	goForWalk: (distanceLength: number) => {
		return true;
	},
};

const higherOrderFunction = (
	callback: (name: string, a: boolean) => void,
	something?: number[]
): boolean => {
	callback('hello', true);
	return true;
};
