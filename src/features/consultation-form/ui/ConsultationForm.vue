<script setup>
import { ref, watch } from 'vue';

import { Button, Input, Title } from '@/shared/ui';

const phone = ref('');
const phoneError = ref(false);
const name = ref('');
const nameError = ref(false);

watch([phone, name], () => {
	phoneError.value = false;
	nameError.value = false;
});
const handleSuccessForm = () => {
	if (!phoneError.value) {
		console.log('success');
	}
};

const handleSetError = () => {
	phone.value.length === 0 ? (nameError.value = true) : (nameError.value = false);
	name.value.length === 0 ? (phoneError.value = true) : (phoneError.value = false);
	return;
};
</script>

<template>
	<div class="consultation-form">
		<div class="consultation-form-inner container">
			<div class="alert">
				<div class="image-wrapper">
					<img src="/images/consultation.png" alt="consultation" />
				</div>
				<Title variant="h4">Получить консультацию</Title>
			</div>
			<form @submit.prevent="handleSuccessForm">
				<div class="inputs">
					<Input v-model="name" :error="nameError" placeholder="Ваше имя" />
					<Input v-model="phone" :error="phoneError" type="tel" placeholder="+7 (ХХХ) ХХХ-ХХ-ХХ" />
					<Button variable="primary" @click="handleSetError">отправить</Button>
				</div>
				<p>
					Нажимая кнопку «Отправить» вы даёте своё согласие с
					<a href="#" target="_blank">политикой обработки персональных данных</a>
				</p>
			</form>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.consultation-form {
	padding-top: 90px;
	padding-bottom: 60px;
	background: var(--pink-light-back-color);
	position: relative;
	@media (max-width: $tab) {
		padding-top: 80px;
		padding-bottom: 80px;
	}
	&:after {
		content: '';
		position: absolute;
		bottom: -20px;
		height: 20px;
		width: 100%;
		border-radius: 0 0 20px 20px;
		background: var(--pink-light-back-color);
	}
	.consultation-form-inner {
		display: grid;
		grid-template-columns: 0.4fr 1fr;
		align-items: center;
		gap: 110px;
		@media (max-width: $tab) {
			grid-template-columns: 1fr;
			gap: 30px;
		}
		.alert {
			display: flex;
			align-items: center;
			gap: 30px;
			@media (max-width: $tab-sm) {
				flex-direction: column;
				gap: 20px;
				align-items: flex-start;
			}
			.image-wrapper {
				position: relative;
				width: 120px;
				height: 150px;
				min-width: 120px;
				min-height: 150px;
				max-width: 120px;
				max-height: 150px;
				@media (max-width: $tab-sm) {
					min-width: 93px;
					min-height: 116px;
					max-width: 93px;
					max-height: 116px;
				}
				img {
					position: absolute;
					width: 100%;
					height: 100%;
				}
			}
			h4 {
				text-align: left;
			}
		}
		form {
			display: flex;
			flex-direction: column;
			gap: 20px;
			@media (max-width: $tab) {
				align-items: center;
				max-width: 500px;
				margin: auto;
			}
			.inputs {
				display: grid;
				grid-template-columns: 1fr 0.65fr 0.65fr;
				gap: 30px;
				@media (max-width: $desktop-sm) {
					gap: 15px;
					grid-template-columns: 1fr 0.65fr;
				}
				@media (max-width: $tab) {
					width: 100%;
					gap: 20px;
					grid-template-columns: 1fr;
				}
			}
			p {
				font-weight: 400;
				font-size: 14px;
				line-height: 16px;
				@media (max-width: $tab) {
					font-size: 12px;
					line-height: 16px;
				}
				a {
					text-decoration: underline;
				}
			}
		}
	}
}
</style>
