<script setup>
import { computed, ref, watch } from 'vue';

const input = ref('');

const props = defineProps(['name', 'value', 'checked', 'modelValue']);

const emit = defineEmits(['update:modelValue']);
function handleChange(event) {
	emit('update:modelValue', event.target.value);
}
watch(
	() => props.modelValue,
	() => {
		if (input) {
			if (props.modelValue.length === 0) {
				input.value.checked = false;
			}
		}
	}
);
</script>

<template>
	<label :class="{ active: input.checked }" class="custom-radio">
		<input
			ref="input"
			type="radio"
			@change="handleChange"
			:name="name"
			:value="value"
			:checked="checked"
		/>
		<slot></slot>
	</label>
</template>

<style lang="scss" scoped>
.custom-radio.active {
	background: var(--pink-color);
	border-color: var(--pink-color);
	color: var(--white-color);
}
.custom-radio {
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 400;
	font-size: 16px;
	line-height: 22px;
	height: 42px;
	border-radius: 10px;
	border: 1px solid var(--gray-color);
	padding: 0 20px;
	cursor: pointer;
	transition: var(--trs-300);
	input {
		display: none;
	}
}
</style>
