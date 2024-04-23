<script setup>
defineProps(['placeholder']);
</script>

<template>
	<textarea class="textarea" :placeholder="placeholder"></textarea>
</template>

<style lang="scss" scoped>
.textarea {
	resize: none;
	height: 162px;
	padding: 20px 24px;
	border-radius: 10px;
	border: 1px solid var(--gray-line-color);
	width: 100%;
	outline: none;
	font-size: 16px;
	line-height: 20px;
	font-family: 'Vela Sans', sans-serif;
	color: var(--gray-color);
	&::placeholder {
		font-weight: 400;
		color: var(--gray-color);
		font-size: 16px;
		line-height: 20px;
		font-family: 'Vela Sans', sans-serif;
		opacity: 1;
	}
}
</style>
