<script setup>
import { watch } from 'vue';

import { useSuccessModalStore } from '@/entities/success-modal-store';

import { CloseIcon } from '@/shared/icons';
import { Button, Title } from '@/shared/ui';

const modal = useSuccessModalStore();

watch(
	() => modal.modalActive,
	() => {
		if (modal.modalActive) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.removeAttribute('style');
		}
	}
);
</script>

<template>
	<transition name="modal">
		<div class="success-modal" @click.stop="modal.handleOpenModal" v-if="modal.modalActive">
			<div class="close-btn">
				<Button variable="square" @click.stop="modal.handleOpenModal">
					<CloseIcon />
				</Button>
			</div>
			<div class="success-modal-content" @click.stop>
				<Title variant="h4">
					ваша заявка <br />
					успешно отправлена
				</Title>
				<p>
					Наш менеджер свяжется с вами в ближайшее время и рассчитает стоимость абонемента со
					скидкой 20%
				</p>
			</div>
		</div>
	</transition>
</template>

<style lang="scss" scoped>
.success-modal {
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
	.success-modal-content {
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
		p {
			margin-top: 30px;
			font-weight: 400;
			font-size: 20px;
			line-height: 28px;
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
	.success-modal-content {
		transform: translateX(-100%);
	}
}
</style>
