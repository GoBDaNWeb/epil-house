<script setup>
import { ref, watch } from 'vue';

import { Breadcrumbs, Button, Input, Title } from '@/shared/ui';

const phone = ref('');
const phoneError = ref(false);

watch(phone, () => {
	phoneError.value = false;
});
const handleSuccessForm = () => {
	if (!phoneError.value) {
		console.log('success');
	}
};

const handleSetError = () => {
	phone.value.length === 0 ? (phoneError.value = true) : (phoneError.value = false);
	return;
};

defineProps(['breadcrumbs', 'title', 'text']);
</script>

<template>
	<div class="hero">
		<div class="hero-inner container">
			<Breadcrumbs :breadcrumbs="breadcrumbs" />
			<Title variant="h1">{{ title }}</Title>
			<p>{{ text }}</p>
			<form @submit.prevent="handleSuccessForm">
				<Input v-model="phone" :error="phoneError" type="tel" placeholder="+7 (ХХХ) ХХХ-ХХ-ХХ" />
				<Button @click="handleSetError" variable="primary">консультация</Button>
			</form>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.hero {
	padding-top: 140px;
	background: var(--beige-back-color);
	padding-bottom: 50px;
	border-radius: 0 0 20px 20px;
	.hero-inner {
		display: flex;
		flex-direction: column;
		align-items: center;

		p {
			max-width: 909px;
			font-weight: 400;
			font-size: 20px;
			line-height: 28px;
			text-align: center;
			margin-top: 50px;
		}
		form {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 30px;
			margin-top: 30px;
			button,
			input {
				max-width: 323px;
				width: 100%;
			}
		}
	}
}
</style>
