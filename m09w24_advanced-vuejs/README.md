# Intro to Vue.js

### To Do

- [x] What is Vue.js?
- [x] The Vue Instance
- [x] Vue Lifecycle Methods
- [x] Event Handling
- [x] Custom Events

### Vue.js

- The [official docs](https://vuejs.org/) describe Vue as being Approachable, Versatile, and Performant
- Approachable
  - It's just HTML, CSS, and JS (can be used effectively with TypeScript and SASS)
  - Minimal API to learn
- Versatile
  - Vue is a "progressive" web framework meaning that it can comprise a small part of an application or be a fully featured Vue web app, or anything in between
- Performant
  - Smaller file sizes than Angular or React
  - Small file size means faster loading in browsers
- Component-based framework (similar to React)
- Reactive: When the data (state) changes, the view re-renders

### The Vue Instance

- Every component is its own Vue instance

```js
const { createApp } = Vue;

createApp({
	data() {
		return {
			myString: 'something relevant',
		};
	},
}).mount('#app');
```

- The `data` property returns an object that contains any state controlled by the component

### Vue Lifecycle Hooks

- A lifecycle hook is a particular stage in the life of a component
- Vue exposes several lifecycle hooks that we can write behaviour for
- `beforeCreate` => `created` => `beforeMount` => `mounted` => `beforeUpdate` => `updated` => `beforeUnmount` => `unmounted`
- Which lifecycle hook to use depends on what you are trying to accomplish
  - Fetch data in the _created_ or _mounted_ hooks
  - Perform any clean up needed in the _beforeUnmount_ hook
- Each hook is a function on the Vue instance

```js
createApp({
	data() {
		return {
			sports: [],
		};
	},
	created() {
		// Perform some data fetching operation when the component is created
		fetch('SOME_URL')
			.then(res => res.json())
			.then(data => (this.sports = data));
	},
});
```

### Event Handling

- Any DOM event can be handled by adding a listener to the particular element
- The syntax is `v-on:<event>="functionToCall"`

```html
<button v-on:click="onButtonClick">Click Me!</button>

<!-- there's also a short hand for v-on -->
<button @click="onButtonClick">Click Me!</button>
```

### Custom Events

- In Vue, it's _data down, events up_
- This means that you pass props down from parent to child (just like React)
- Props are accepted via the `props` key in the child component
- But you don't pass down behaviour (eg. React callback functions)
- Instead, the child emits a custom event which the parent listens for

```js
// inside child component
export default {
	name: 'ChildComponent',
	data() {
		return {
			childMessage: '',
		};
	},
	// accept props from parent
	props: ['msg', 'propTwo'],
	methods: {
		sendToParent() {
			// emit a custom event named "message-stored" with a payload of data
			this.$emit('message-stored', this.childMessage);
		},
	},
};
```

```html
<!-- inside parent component -->
<!-- attach an event handler to the child component and pass down props -->
<ChildComponent
	msg="Welcome to Your Vue.js App"
	propTwo="how are you?"
	@message-stored="messageReceivedFromChild"
/>
```

### Useful Links

- [Framework Popularity](https://gist.github.com/tkrotoff/b1caa4c3a185629299ec234d2314e190)
- [Vue Lifecycle](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram)
- [Vue Props](https://vuejs.org/guide/components/props.html)
- [Vue Custom Events](https://vuejs.org/guide/components/events.html)
- [Nuxt, the Next.js of Vue](https://nuxt.com/docs/getting-started/introduction)
