<script setup>
import { useOrderModalStore } from '@/entities/order-modal-store';

import { DownloadIcon } from '@/shared/icons';
import { Button, Title } from '@/shared/ui';

const modal = useOrderModalStore();
defineProps(['training']);
</script>

<template>
	<div class="training-item">
		<div class="image-wrapper">
			<img :src="training.img" alt="training" />
		</div>
		<div class="content">
			<div class="main-info">
				<Title variant="h5">{{ training.title }}</Title>
				<div class="info">
					<span>{{ training.start }}</span>
					<span>{{ training.duration }}</span>
				</div>
				<p>
					{{ training.text }}
				</p>
			</div>
			<div class="additional-info">
				<p>{{ training.price }}</p>
				<div class="btns">
					<Button variable="secondary"><DownloadIcon /> программа</Button>
					<Button variable="primary" @click="modal.handleOpenModal">записаться</Button>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.training-item {
	display: grid;
	grid-template-columns: 0.5fr 1fr;
	align-items: center;
	gap: 30px;
	padding: 30px;
	border-radius: 20px;
	border: 1px solid var(--gray-line-color);
	@media (max-width: $tab) {
		grid-template-columns: 1fr;
		gap: 20px;
		padding: 20px;
	}
	.image-wrapper {
		padding-bottom: 100%;
		border-radius: 10px;
		overflow: hidden;
		position: relative;
		@media (max-width: $tab) {
			padding-bottom: 50%;
		}
		@media (max-width: $tab-sm) {
			padding-bottom: 75%;
		}
		img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
		.main-info {
			.info {
				margin-top: 20px;
				display: flex;
				flex-direction: column;
				gap: 10px;
				@media (max-width: $tab) {
					gap: 0;
					margin-top: 10px;
				}
				span {
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
			p {
				font-weight: 400;
				font-size: 16px;
				line-height: 22px;
				margin-top: 20px;
				@media (max-width: $tab) {
					display: none;
				}
			}
		}
		.additional-info {
			display: flex;
			align-items: center;
			gap: 30px;
			margin-top: 25px;
			@media (max-width: $tab) {
				flex-direction: column;
				gap: 15px;
				align-items: flex-start;
			}
			p {
				font-weight: 700;
				font-size: 20px;
				line-height: 28px;
				@media (max-width: $tab) {
					font-size: 18px;
					line-height: 25px;
				}
			}
			.btns {
				display: flex;
				align-items: center;
				gap: 10px;
				@media (max-width: $tab) {
					button {
						padding: 0 16px;
					}
				}
			}
		}
	}
}
</style>
