<script setup>
import { reactive } from 'vue';

import { useSuccessModalStore } from '@/entities/success-modal-store';

import { Button, Input, Title } from '@/shared/ui';

const successModal = useSuccessModalStore();

const formValues = reactive({
	nameValue: '',
	phoneValue: ''
});

const handleSuccessForm = () => {
	successModal.handleOpenModal();
	formValues.nameValue = '';
	formValues.phoneValue = '';
};
</script>

<template>
	<div class="service-subscribe">
		<div class="service-subscribe-inner container">
			<div class="title-block-wrapper">
				<div class="title-block">
					<Title variant="h4"> записаться <br />на процедуру </Title>
					<p>
						Уважаемые посетители! Обращаем ваше внимание, что окончательная стоимость зависит от
						индивидуальных особенностей клиента и формируется после консультации и осмотра
						специалистом.
					</p>
				</div>
			</div>
			<div class="form-block">
				<form @submit.prevent="handleSuccessForm">
					<div class="form-info">
						<div class="info-item">
							<span> 9 600 руб. </span>
							<p>Королёв, ул. Калинина 6А</p>
						</div>
						<div class="info-item">
							<span> 9 600 руб. </span>
							<p>Королёв, ул. Калинина 6А</p>
						</div>
						<div class="info-item">
							<span> 9 600 руб. </span>
							<p>Мытищи, ул. Рождественская, 11</p>
						</div>
					</div>
					<div class="form-inputs">
						<Input v-model="formValues.nameValue" type="text" placeholder="Ваше имя" />
						<Input v-model="formValues.phoneValue" type="tel" placeholder="+7 (ХХХ) ХХХ-ХХ-ХХ" />
						<Button variable="primary">отправить</Button>
					</div>
					<p>
						Нажимая кнопку «Отправить» вы даёте своё согласие с
						<a href="#" target="_blank">политикой обработки персональных данных</a>
					</p>
				</form>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.service-subscribe {
	margin-top: 100px;
	@media (max-width: $tab) {
		margin-top: 80px;
	}
	.service-subscribe-inner {
		display: grid;
		grid-template-columns: 0.4fr 1fr;
		gap: 30px;
		@media (max-width: $tab-sm) {
			grid-template-columns: 1fr;
			gap: 20px;
		}
		.title-block-wrapper {
			position: relative;
			.title-block {
				position: sticky;
				top: 150px;
				@media (max-width: $tab) {
					top: 100px;
				}
				h4 {
					text-align: left;
				}
				p {
					margin-top: 30px;
					font-weight: 400;
					font-size: 16px;
					line-height: 22px;
					@media (max-width: $tab) {
						font-size: 15px;
						line-height: 21px;
						margin-top: 20px;
					}
				}
			}
		}
		.form-block {
			form {
				background: var(--beige-back-color);
				border-radius: 15px;
				padding: 60px;
				display: flex;
				flex-direction: column;
				@media (max-width: $tab) {
					padding: 20px 30px;
				}
				.form-info {
					margin-bottom: 50px;
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					gap: 20px;
					@media (max-width: $tab-sm) {
						grid-template-columns: repeat(1, 1fr);
						margin-bottom: 20px;
					}
					.info-item {
						display: flex;
						flex-direction: column;
						span {
							font-weight: 700;
							font-size: 20px;
							line-height: 28px;
							@media (max-width: $tab) {
								font-size: 18px;
								line-height: 25px;
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
						}
					}
				}
				.form-inputs {
					display: grid;
					grid-template-columns: 1fr 0.55fr 0.55fr;
					gap: 30px;
					@media (max-width: $desktop-sm) {
						grid-template-columns: 1fr 1fr;
						gap: 20px;
					}
					@media (max-width: $tab-sm) {
						grid-template-columns: 1fr;
						gap: 20px;
					}
				}
				& > p {
					margin-top: 20px;
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
}
</style>
