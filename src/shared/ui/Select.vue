<script setup>
import { computed, ref } from 'vue';

const props = defineProps(['options', 'modelValue', 'placeholder']);
const selected = ref(null);
const isActive = ref(null);

const selectedValue = ref('');

const emit = defineEmits(['update:modelValue']);
const value = computed({
	get: () => props.modelValue,
	set: val => emit('update:modelValue', val)
});

defineExpose({ value });

const handleOpenSelect = () => {
	isActive.value = !isActive.value;
};
const handleCloseSelect = () => {
	isActive.value = false;
};

const handleSelectValue = index => {
	selectedValue.value = props.options[index].label;
	isActive.value = false;
};
</script>

<template>
	<div class="selector" @mouseleave="handleCloseSelect" :class="isActive ? 'active' : ''">
		<button type="button" @click="handleOpenSelect" class="selector-btn">
			<p>{{ selectedValue ? selectedValue : placeholder }}</p>
			<span>
				<svg
					width="17"
					height="10"
					viewBox="0 0 17 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M1 1.25L8.5 8.75L16 1.25" stroke="#5C5151" />
				</svg>
			</span>
		</button>
		<div class="selector-content">
			<div class="selector-list">
				<label @click="handleSelectValue(index)" v-for="(option, index) in options" :key="index">
					<input
						type="radio"
						@input="$emit('update:modelValue', option.value)"
						value="{{option.value}}"
						:name="name"
					/>
					<span>{{ option.label }}</span>
				</label>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.selector.active {
	z-index: 120 !important;
	button {
		span {
			svg {
				path {
					stroke: var(--pink-color);
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
@import '@/shared/styles/vars';

.selector.active {
	button {
		span {
			transform: rotate(180deg);
		}
	}
	.selector-content {
		opacity: 1;
		pointer-events: all;
		transform: translateY(0);
	}
}
.selector {
	outline: none;
	width: 100%;
	transition: all var(--trs-300);
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;
	box-sizing: border-box;
	position: relative;
	z-index: 100;
	@media (max-width: $tab) {
		min-width: 100%;
	}
	.selector-btn {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		padding: 19px 24px;
		justify-content: space-between;
		align-items: center;
		z-index: 3;
		margin-top: 0;
		gap: 20px;
		color: var(--gray-color);
		border: 1px solid var(--gray-line-color);
		border-radius: 10px;
		background: var(--white-color);
		height: 50px;
		p {
			font-weight: 400;
			font-size: 16px;
			line-height: 22px;
			color: var(--gray-color);
			font-family: 'Vremena Grotesk', sans-serif;
		}
		span {
			transition: var(--trs-300);
		}
	}

	.selector-content {
		z-index: 2;
		position: absolute;
		background: #fff;
		min-width: 100%;
		opacity: 0;
		transform: translateY(-20%);
		pointer-events: none;
		transition: var(--trs-300);
		box-shadow: var(--shadow);
		padding: 25px;
		border-radius: 10px;

		.selector-list {
			display: flex;
			flex-direction: column;
			gap: 15px;
			label {
				display: flex;
				align-items: center;
				gap: 10px;
				cursor: pointer;
				transition: var(--trs-300);
				&:hover {
					span {
						color: var(--pink-color);
					}
				}
				input {
					display: none;
				}
				span {
					color: #626262;
					font-size: 16px;
					font-weight: 400;
					line-height: 22px;
					transition: var(--trs-300);
				}
			}
		}
	}
}
</style>
