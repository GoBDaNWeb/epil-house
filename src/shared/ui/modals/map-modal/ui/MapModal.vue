<script setup>
import { watch } from 'vue';

import { CloseIcon } from '@/shared/icons';
import { Button, Title } from '@/shared/ui';

import { useMapModalStore } from '../model';

const modal = useMapModalStore();

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
		<div class="map-modal" @click.stop="modal.handleOpenModal" v-if="modal.modalActive">
			<div class="close-btn">
				<Button variable="square" @click.stop="modal.handleOpenModal">
					<CloseIcon />
				</Button>
			</div>
			<div class="map-modal-content" @click.stop>
				<Title variant="h4">
					{{ modal.mapInfo.title }}
				</Title>
				<Title variant="h6">
					{{ modal.mapInfo.address }}
				</Title>
				<slot name="map" />
			</div>
		</div>
	</transition>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.map-modal {
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
			z-index: 2;
		}
	}
	.map-modal-content {
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
			width: 100vw;
			border-radius: 0;
		}

		h4 {
			margin-bottom: 20px;
		}
		h6 {
			margin-bottom: 30px;
			text-align: center;
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
	.map-modal-content {
		transform: translateX(-100%);
	}
}
</style>
