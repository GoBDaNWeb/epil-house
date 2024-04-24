<script setup>
import { reactive } from 'vue';

import { Button, Input, Title } from '@/shared/ui';

const formValues = reactive({
	nameValue: '',
	phoneValue: ''
});
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
				<form>
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
.service-subscribe {
	margin-top: 100px;
	.service-subscribe-inner {
		display: grid;
		grid-template-columns: 0.4fr 1fr;
		gap: 30px;
		.title-block-wrapper {
			position: relative;
			.title-block {
				position: sticky;
				top: 150px;
				h4 {
					text-align: left;
				}
				p {
					margin-top: 30px;
					font-weight: 400;
					font-size: 16px;
					line-height: 22px;
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
				.form-info {
					margin-bottom: 50px;
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					.info-item {
						display: flex;
						flex-direction: column;
						span {
							font-weight: 700;
							font-size: 20px;
							line-height: 28px;
						}
						p {
							font-weight: 400;
							font-size: 14px;
							line-height: 16px;
						}
					}
				}
				.form-inputs {
					display: grid;
					grid-template-columns: 1fr 0.55fr 0.55fr;
					gap: 30px;
				}
				& > p {
					margin-top: 20px;
					font-weight: 400;
					font-size: 14px;
					line-height: 16px;
					a {
						text-decoration: underline;
					}
				}
			}
		}
	}
}
</style>
