<script setup>
import { computed, ref, watch } from 'vue';
import { TheMask } from 'vue-the-mask';

const props = defineProps(['type', 'placeholder', 'value', 'modelValue', 'error', 'modelValue']);
const emit = defineEmits(['update:modelValue']);
const value = computed({
	get: () => props.modelValue,
	set: val => emit('update:modelValue', val)
});
defineExpose({ value });
</script>

<template>
	<input
		v-if="type === 'tel'"
		v-mask="'+7 (###) ###-##-##'"
		class="input"
		:class="error ? 'error' : ''"
		:type="type"
		:placeholder="placeholder"
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
	/>
	<input
		v-else-if="type === 'text'"
		class="input"
		:class="error ? 'error' : ''"
		:type="type"
		:placeholder="placeholder"
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
	/>
	<label v-else-if="type === 'file'" class="input file">
		<input :class="error ? 'error' : ''" :type="type" />
		<p>{{ placeholder }}</p>
	</label>
</template>

<style lang="scss" scoped>
.input::placeholder {
	color: var(--gray-color);
	text-transform: none;
	opacity: 1;
}
.input.error {
	border-color: var(--pink-back-color) !important;
}
.input.file {
	border-color: var(--gray-color);
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
	cursor: pointer;
	transition: var(--trs-300);
	&:hover {
		background: var(--pink-color);
		border-color: var(--pink-color);
		p {
			color: var(--white-color);
		}
	}
	&:active {
		box-shadow: var(--shadow-inset);
	}
	input {
		display: none;
	}
	p {
		transition: var(--trs-300);

		color: var(--gray-color);
		text-transform: none;
		opacity: 1;
		font-weight: 600;
		font-size: 15px;
		line-height: 19px;
		text-transform: uppercase;
	}
}
.input {
	outline: none;
	background: var(--white-color);
	border: none;
	font-size: 16px;
	line-height: 20px;
	font-weight: 400;
	width: 100%;
	padding: 19px 24px;
	height: 50px;
	border-radius: 10px;
	color: var(--gray-color);
}
</style>
