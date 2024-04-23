<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { computed, ref, watch } from 'vue';

const format = date => {
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	return `${day}/${month}/${year}`;
};

const emit = defineEmits(['update:modelValue']);
const value = computed({
	get: () => props.modelValue,
	set: val => emit('update:modelValue', val)
});

defineExpose({ value });
</script>

<template>
	{{ modelValue }}
	<VueDatePicker
		:format="format"
		:placeholder="placeholder"
		@input="$emit('update:modelValue', $event.target.value)"
		auto-apply
		:time-picker="false"
	>
		<template #input-icon>
			<img class="input-slot-image" src="/images/date.svg" />
		</template>
	</VueDatePicker>
</template>

<style lang="scss" scoped></style>
