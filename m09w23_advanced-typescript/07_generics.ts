interface Container<T, S> {
	name: string;
	content: T;
	moreContent: S;
}

const stringContainer: Container<string, number> = {
	name: 'string container',
	content: 'hello',
	moreContent: 456,
};

const numberContainer: Container<number, boolean> = {
	name: 'number container',
	content: 123,
	moreContent: false,
};
