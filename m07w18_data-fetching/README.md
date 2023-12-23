# M07W18 - Data Fetching & Other Side Effects

### To Do

- [x] Rules for Hooks
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [ ] Cleanup
- [ ] Dependencies
- [ ] _useEffect_ Flow

### Rules for a hook

- It must start with `use`
- You can't put a hook in a loop, condition or nested function

### Pure functions

- Always returns the same value if called with the same arguments,if we pass the same information
- Side effects: printing something, fetching data, using the DOM

### useEffect

- Multiple ways

```js
useEffect(() => {
	console.log('Inside of useEffect');
});
```

```js
useEffect(() => {
	console.log('Inside of useEffect');
}, []);
```

```js
useEffect(() => {
	console.log('Runs everytime counter updates');
}, [counter, counter2]);
```
