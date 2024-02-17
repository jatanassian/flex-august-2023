<template>
	<div>
		<input type="text" v-model="animal" />
		<button @click="formSubmit">Add animal</button>
	</div>
</template>

<script>
export default {
	name: 'MyForm',
	data() {
		return {
			animal: '',
		};
	},
	methods: {
		formSubmit() {
			console.log(this.animal);
			this.$emit('submitAnimal', { animal: this.animal });
		},
	},
};
</script>
