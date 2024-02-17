const { createApp } = Vue;

const app = createApp({
	data() {
		return {
			name: 'Mike',
			lastName: 'Wazowski',
			sports: [
				{ id: 1, name: 'baseball' },
				{ id: 2, name: 'volleyball' },
				{ id: 3, name: 'soccer' },
			],
			tooltip: 'PEEKA BOO!',
			isVisible: false,
			counter: 0,
			form: {
				username: '',
				password: '',
			},
		};
	},
	created() {
		fetch('http://localhost:8080/sports')
			.then(res => res.json())
			.then(sports => (this.sports = [...this.sports, ...sports]));

		// setInterval(() => (this.isVisible = !this.isVisible), 2000);
	},
	methods: {
		onClick() {
			alert('I got clicked');
		},
		increment() {
			this.counter++;
			const divApp = document.getElementById('app');
			console.log(divApp);
		},
		decrement() {
			this.counter--;
		},
		updateCounter(num) {
			this.counter += num;
		},
		login() {
			console.log(this.form);
		},
	},
	computed: {
		fullname() {
			return `${this.name} ${this.lastName}`;
		},
	},
	watch: {
		'form.username': function (value, prevValue) {
			console.log('value ->', value);
			console.log('prevValue ->', prevValue);
			this.name = value;
		},
	},
});

app.mount('#app');
