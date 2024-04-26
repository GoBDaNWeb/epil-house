<script setup>
import { reactive, watch } from 'vue';

import { useSeasonTicketModalStore } from '@/entities/season-ticket-modal-store';
import { useSuccessModalStore } from '@/entities/success-modal-store';

import { CloseIcon } from '@/shared/icons';
import { Button, Input, Radio, Textarea, Title } from '@/shared/ui';
import { hasError, setError } from '@/shared/utils';

import { procedureList } from '../config';

const seasonTicketModal = useSeasonTicketModalStore();
const successModal = useSuccessModalStore();

const formErrors = reactive({
	nameError: false,
	phoneError: false
});
const formValues = reactive({
	nameValue: '',
	phoneValue: '',
	procedureValue: ''
});

const handleSetError = () => {
	formErrors.phoneError = setError(formValues.phoneValue);
	formErrors.nameError = setError(formValues.nameValue);
};

const handleSubmitForm = () => {
	if (!hasError(formErrors)) {
		seasonTicketModal.handleOpenModal();
		successModal.handleOpenModal();
	}
};

watch(
	() => [formValues.phoneValue, formValues.nameValue],
	() => {
		handleSetError();
	}
);

watch(
	() => seasonTicketModal.modalActive,
	() => {
		if (seasonTicketModal.modalActive) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.removeAttribute('style');
		}
	}
);
</script>

<template>
	<transition name="modal">
		<div
			class="season-ticket-modal"
			@click.stop="seasonTicketModal.handleOpenModal"
			v-if="seasonTicketModal.modalActive"
		>
			<div class="close-btn">
				<Button variable="square" @click.stop="seasonTicketModal.handleOpenModal">
					<CloseIcon />
				</Button>
			</div>
			<div class="season-ticket-modal-content" @click.stop>
				<div class="image-wrapper">
					<img src="/images/ticket.png" alt="ticket" />
				</div>
				<Title variant="h4">заказать абонемент</Title>
				<form @submit.prevent="handleSubmitForm()">
					<div class="radio-row">
						<Radio
							v-model="formValues.procedureValue"
							v-for="(procedure, index) in procedureList"
							:key="index"
							name="procedure"
							:value="procedure"
							:checked="index === 0"
						>
							{{ procedure }}
						</Radio>
					</div>
					<div class="row">
						<Input
							v-model="formValues.nameValue"
							:error="formErrors.nameError"
							type="text"
							placeholder="Ваше имя"
						/>
						<Input
							v-model="formValues.phoneValue"
							:error="formErrors.phoneError"
							type="tel"
							placeholder="+7 (ХХХ) ХХХ-ХХ-ХХ"
						/>
					</div>
					<Textarea
						placeholder="Укажите желаемые услуги, которые необходимо включить в абонемент"
					/>

					<div class="row">
						<Button variable="primary" @click="handleSetError">отправить</Button>
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
@import '@/shared/styles/vars';

.season-ticket-modal {
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
		@media (max-width: $tab) {
			top: 20px;
			right: 20px;
		}
		@media (max-width: $pre-mob) {
			z-index: 2;
		}
	}
	.season-ticket-modal-content {
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
		@media (max-width: $tab) {
			padding: 20px;
		}
		@media (max-width: $tab-sm) {
			width: 65vw;
		}
		@media (max-width: $pre-mob) {
			width: 100vw;
			border-radius: 0;
		}
		.image-wrapper {
			width: 200px;
			height: 155px;
			position: relative;
			@media (max-width: $tab) {
				width: 150px;
				height: 116px;
			}
			img {
				position: absolute;
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}
		h4 {
			text-align: left;
		}
		form {
			margin-top: 50px;
			display: flex;
			flex-direction: column;
			gap: 30px;
			@media (max-width: $tab) {
				gap: 20px;
				margin-top: 30px;
			}
			.radio-row {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				max-width: 80%;
				gap: 10px;
				.custom-radio {
					height: 50px;
				}
			}
			.row {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				gap: 30px;
				@media (max-width: $tab) {
					grid-template-columns: repeat(1, 1fr);
					gap: 20px;
				}
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
	.season-ticket-modal-content {
		transform: translateX(-100%);
	}
}
</style>
