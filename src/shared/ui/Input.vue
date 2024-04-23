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
		v-else
		class="input"
		:class="error ? 'error' : ''"
		:type="type"
		:placeholder="placeholder"
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
	/>
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
.input {
	outline: none;
	background: var(--white-color);
	border: 1px solid rgba(255, 255, 255, 0.2);
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
