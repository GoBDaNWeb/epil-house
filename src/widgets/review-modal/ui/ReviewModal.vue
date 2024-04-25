<script setup>
import { reactive, watch } from 'vue';

import { useReviewModalStore } from '@/entities/review-modal-store';
import { useSuccessModalStore } from '@/entities/success-modal-store';

import { CloseIcon } from '@/shared/icons';
import { Button, Input, Select, Textarea, Title } from '@/shared/ui';

import { selectList } from '../config';

const reviewModal = useReviewModalStore();
const successModal = useSuccessModalStore();

const formValues = reactive({
	nameValue: '',
	phoneValue: '',
	courseValue: '',
	fileValue: '',
	fileNameValue: ''
});

watch(
	() => reviewModal.modalActive,
	() => {
		if (reviewModal.modalActive) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.removeAttribute('style');
		}
	}
);

const handleSubmitForm = () => {
	reviewModal.handleOpenModal();
	successModal.handleOpenModal();
};

const handleChangeFile = e => {
	var files = e.target.files || e.dataTransfer.files;
	if (!files.length) {
		return;
	}
	console.log(files[0]);
	formValues.fileNameValue = files[0].name;
	formValues.fileValue = files[0];
};

const clearFile = () => {
	formValues.fileNameValue = '';
	formValues.fileValue = '';
};
</script>

<template>
	<transition name="modal">
		<div
			class="review-modal"
			@click.stop="reviewModal.handleOpenModal"
			v-if="reviewModal.modalActive"
		>
			<div class="close-btn">
				<Button variable="square" @click.stop="reviewModal.handleOpenModal">
					<CloseIcon />
				</Button>
			</div>
			<div class="review-modal-content" @click.stop>
				<Title variant="h4">Оставить отзыв</Title>
				<form @submit.prevent="handleSubmitForm()">
					<div class="row">
						<Input v-model="formValues.nameValue" type="text" placeholder="Ваше имя" />
						<Input v-model="formValues.phoneValue" type="tel" placeholder="+7 (ХХХ) ХХХ-ХХ-ХХ" />
					</div>
					<Select
						v-model="formValues.courseValue"
						:options="selectList"
						name="course"
						placeholder="Выберите курс"
					/>
					<Textarea placeholder="Ваш отзыв" />
					<div class="row file">
						<Input @change="handleChangeFile" type="file" placeholder="выбрать фото" />
						<div class="file-wrapper" v-if="formValues.fileNameValue">
							<Button @click="clearFile"><CloseIcon /></Button>
							<p>{{ formValues.fileNameValue }}</p>
						</div>
					</div>
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
.review-modal {
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
	.review-modal-content {
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
			.row.file {
				display: flex;
				align-items: center;
				gap: 30px;
				label {
					max-width: 205px;
					width: 100%;
				}
			}
			.file-wrapper {
				display: flex;
				align-items: center;
				gap: 18px;
			}
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
	.review-modal-content {
		transform: translateX(-100%);
	}
}
</style>
