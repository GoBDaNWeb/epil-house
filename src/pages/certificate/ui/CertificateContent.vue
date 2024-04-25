<script setup>
import { reactive, ref, watch } from 'vue';

import { Button, Input, Radio, Title } from '@/shared/ui';

import { addressList, nominalList } from '../config';

const formValues = reactive({
	nominalValue: nominalList[0],
	ownNominalValue: '',
	addressValue: addressList[0],
	nameValue: '',
	emailValue: '',
	phoneValue: ''
});

watch(
	() => formValues.ownNominalValue,
	() => {
		if (formValues.ownNominalValue.length > 0) {
			formValues.nominalValue = '';
		}
	}
);
watch(
	() => formValues.nominalValue,
	() => {
		if (formValues.nominalValue.length > 0) {
			formValues.ownNominalValue = '';
		}
	}
);
</script>

<template>
	<div class="certificate-content">
		<div class="certificate-content-inner container">
			<form>
				<Title variant="h5">
					Сертификат будет действовать <br />
					<span>3 месяца с момента выдачи</span>
				</Title>
				<div class="nominal">
					<Title variant="h6">Выберите номинал сертификата</Title>
					<div class="nominal-list">
						<Radio
							v-model="formValues.nominalValue"
							v-for="(nominal, index) in nominalList"
							:key="index"
							name="nominal"
							:value="nominal"
							:checked="index === 0"
						>
							{{ nominal }}
						</Radio>
					</div>
					<Input v-model="formValues.ownNominalValue" type="text" placeholder="Своя сумма" />
				</div>
				<div class="address">
					<Title variant="h6">получить сертификат</Title>
					<div class="address-list">
						<Radio
							v-model="formValues.addressValue"
							v-for="(address, index) in addressList"
							:key="index"
							name="address"
							:value="address"
							:checked="index === 0"
						>
							{{ address }}
						</Radio>
					</div>
				</div>
				<div class="data">
					<Title variant="h6">данные покупателя</Title>
					<div class="data-inputs">
						<Input v-model="formValues.nameValue" type="text" placeholder="Ваше имя" />
						<div class="row">
							<Input v-model="formValues.emailValue" type="text" placeholder="E-mail" />
							<Input v-model="formValues.phoneValue" type="tel" placeholder="+7 (ХХХ) ХХХ-ХХ-ХХ" />
						</div>
						<div class="row">
							<Button variable="primary">заказать сертификат</Button>
							<p>
								Нажимая кнопку «Заказать сертификат» вы даёте своё согласие с
								<a href="#" target="_blank">политикой обработки персональных данных</a>
							</p>
						</div>
					</div>
				</div>
				<div class="info">
					<p>
						После оплаты сертификата наш менеджер свяжется с вами, чтобы обсудить возможность
						доставки печатного сертификата.
					</p>
				</div>
			</form>
			<div class="image-block">
				<div class="image-wrapper">
					<img src="/images/certificate/certificate.jpg" alt="certificate" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.certificate-content {
	padding-bottom: 88px;
	position: relative;
	@media (max-width: $tab) {
		padding-bottom: 80px;
	}
	&::after {
		content: '';
		position: absolute;
		bottom: -20px;
		height: 20px;
		background: var(--white-color);
		border-radius: 0 0 20px 20px;
		width: 100%;
	}
	.certificate-content-inner {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 30px;
		margin-top: 40px;
		@media (max-width: $tab) {
			grid-template-columns: repeat(1, 1fr);
		}
		form {
			@media (max-width: $tab) {
				order: 1;
			}
			h5 {
				span {
					color: var(--pink-color);
				}
			}
			input {
				border: 1px solid var(--gray-line-color);
			}
			.nominal {
				margin-top: 50px;
				@media (max-width: $tab) {
					margin-top: 35px;
				}
				.nominal-list {
					display: flex;
					align-items: center;
					gap: 5px;
					margin-top: 20px;
					margin-bottom: 20px;
					flex-wrap: wrap;
				}
				input {
					max-width: 323px;
					width: 100%;
				}
			}
			.address {
				margin-top: 50px;
				@media (max-width: $tab) {
					margin-top: 35px;
				}
				.address-list {
					margin-top: 20px;
					display: flex;
					flex-wrap: wrap;
					gap: 5px;
				}
			}
			.data {
				margin-top: 50px;
				padding-bottom: 35px;
				border-bottom: 1px solid var(--gray-line-color);
				border-radius: 0 0 20px 0;
				@media (max-width: $tab) {
					margin-top: 35px;
				}
				.data-inputs {
					margin-top: 20px;
					display: flex;
					flex-direction: column;
					gap: 20px;

					.row {
						display: grid;
						grid-template-columns: repeat(2, 1fr);
						gap: 20px;
						@media (max-width: $tab) {
							grid-template-columns: repeat(1, 1fr);
						}
						p {
							font-weight: 400;
							font-size: 14px;
							line-height: 16px;
							@media (max-width: $tab) {
								font-size: 12px;
							}
							a {
								text-decoration: underline;
							}
						}
					}
				}
			}
			.info {
				margin-top: 50px;
				@media (max-width: $tab) {
					margin-top: 30px;
				}
				p {
					color: var(--pink-color);
					font-weight: 700;
					font-size: 16px;
					line-height: 22px;
					@media (max-width: $tab) {
						font-size: 15px;
						line-height: 21px;
					}
				}
			}
		}
		.image-block {
			position: relative;
			@media (max-width: $tab) {
				order: 0;
			}
			.image-wrapper {
				padding-bottom: 75%;
				position: sticky;
				top: 100px;
				border-radius: 20px;
				overflow: hidden;
				img {
					position: absolute;
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
	}
}
</style>
