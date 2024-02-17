<script>
import HelloWorld from './components/HelloWorld.vue';
import MyForm from './components/MyForm.vue';

export default {
	name: 'App',
	components: {
		HelloWorld,
		MyForm,
	},
	data() {
		return {
			msg: "You did it! You're the best!",
		};
	},
	methods: {
		onSubmit(payload) {
			console.log('Submit!', payload.animal);
		},
	},
};
</script>

<template>
	<div>
		<HelloWorld :msg="msg" />
		<MyForm @submitAnimal="onSubmit" />
	</div>
</template>

<style scoped>
header {
	line-height: 1.5;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	.logo {
		margin: 0 2rem 0 0;
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}
}
</style>
