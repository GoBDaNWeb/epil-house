<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { reactive, watch } from 'vue';

import { useOrderModalStore } from '@/entities/order-modal-store';
import { useSuccessModalStore } from '@/entities/success-modal-store';

import { CloseIcon } from '@/shared/icons';
import { Button, DatePicker, Input, Select, Textarea, Title } from '@/shared/ui';

import { selectList } from '../config';

const format = date => {
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	return `${day}.${month}.${year}`;
};

const formValues = reactive({
	nameValue: '',
	phoneValue: '',
	serviceValue: '',
	specialistValue: '',
	dateValue: '',
	timeValue: ''
});
const orderModal = useOrderModalStore();
const successModal = useSuccessModalStore();

watch(
	() => orderModal.modalActive,
	() => {
		if (orderModal.modalActive) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.removeAttribute('style');
		}
	}
);

const handleSubmitForm = () => {
	orderModal.handleOpenModal();
	successModal.handleOpenModal();
};
</script>

<template>
	<transition name="modal">
		<div class="order-modal" v-if="orderModal.modalActive" @click.stop="orderModal.handleOpenModal">
			<div class="close-btn">
				<Button variable="square" @click.stop="orderModal.handleOpenModal"><CloseIcon /></Button>
			</div>
			<div class="order-modal-content" @click.stop>
				<Title variant="h4">онлайн запись</Title>
				<form @submit.prevent="handleSubmitForm()">
					<div class="row">
						<Input v-model="formValues.nameValue" type="text" placeholder="Ваше имя" />
						<Input v-model="formValues.phoneValue" type="tel" placeholder="+7 (ХХХ) ХХХ-ХХ-ХХ" />
					</div>
					<Select
						v-model="formValues.serviceValue"
						:options="selectList"
						name="service"
						placeholder="Выберите услугу"
					/>
					<Select
						v-model="formValues.specialistValue"
						:options="selectList"
						name="specialist"
						placeholder="Выберите мастера"
					/>
					<div class="row">
						<VueDatePicker
							:format="format"
							placeholder="Выбрать дату"
							v-model="formValues.dateValue"
							auto-apply
							:time-picker="false"
						>
							<template #input-icon>
								<img class="input-slot-image" src="/images/date.svg" />
							</template>
						</VueDatePicker>
						<Select
							v-model="formValues.timeValue"
							:options="selectList"
							name="time"
							placeholder="Выбрать время"
						/>
					</div>
					<Textarea placeholder="Комментарий" />
					<div class="row">
						<Button variable="primary">отправить</Button>
						<p>
							Нажимая кнопку «Отправить» вы даёте своё согласие с
							<a href="#" target="_blank"> политикой обработки персональных данных </a>
						</p>
					</div>
				</form>
			</div>
		</div>
	</transition>
</template>

<style lang="scss" scoped>
.order-modal {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 120;
	background: rgba(242, 233, 229, 0.5);
	backdrop-filter: blur(15px);
	transition: var(--trs-300);
	.close-btn {
		position: absolute;
		top: 30px;
		right: 30px;
	}
	.order-modal-content {
		width: 50vw;
		background: var(--white-color);
		padding: 30px;
		border-radius: 0 20px 20px 0;
		position: absolute;
		bottom: 0;
		top: 0;
		left: 0;
		transition: var(--trs-300);
		display: flex;
		flex-direction: column;
		justify-content: center;
		h4 {
			text-align: left;
		}
		form {
			margin-top: 50px;
			display: flex;
			flex-direction: column;
			gap: 30px;
			.row {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				gap: 30px;
				.selector {
					z-index: 8;
				}
				p {
					font-weight: 400;
					font-size: 14px;
					line-height: 16px;
					a {
						text-decoration: underline;
					}
				}
			}
			input {
				border: 1px solid var(--gray-line-color);
			}
			.selector {
				z-index: 100;
			}
		}
	}
}

.modal-enter-active,
.modal-leave-active {
	transition: var(--trs-300);
}

.modal-enter-from,
.modal-leave-to {
	opacity: 0;
	.order-modal-content {
		transform: translateX(-100%);
	}
}
</style>
