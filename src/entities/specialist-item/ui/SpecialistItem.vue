<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';

import { InfoIcon } from '@/shared/icons';
import { Button, Title, useOrderModalStore, useSpecialistModalStore } from '@/shared/ui';

const props = defineProps(['specialist']);
const route = useRoute();
const specialistModal = useSpecialistModalStore();
const orderModal = useOrderModalStore();

const hadleOpenSpecialistModal = () => {
	specialistModal.handleOpenModal();
	specialistModal.setInfo(props.specialist);
};
const hadleOpenOrderModal = () => {
	orderModal.handleOpenModal();
	orderModal.setSpecialist(props.specialist);
};

watch(route.path, () => {
	orderModal.setSpecialist(null);
});
</script>

<template>
	<div class="specialist-item">
		<div class="image-wrapper">
			<img :src="specialist.img" alt="specialist" />
		</div>
		<div class="content">
			<div class="text">
				<Title variant="h6">{{ specialist.name }}</Title>
				<div class="info">
					<p>{{ specialist.post }}</p>
					<p>{{ specialist.experience }}</p>
				</div>
			</div>

			<div class="btns">
				<Button variable="primary" @click="hadleOpenOrderModal()">записаться</Button>
				<Button variable="square" @click="hadleOpenSpecialistModal()"><InfoIcon /></Button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.specialist-item {
	height: 100%;
	display: flex;
	flex-direction: column;
	.image-wrapper {
		position: relative;
		padding-bottom: 120%;
		border-radius: 10px;
		overflow: hidden;
		img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.content {
		margin-top: 25px;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@media (max-width: $tab) {
			margin-top: 20px;
		}
		.info {
			margin-top: 20px;
			p {
				font-weight: 400;
				font-size: 16px;
				line-height: 22px;
				@media (max-width: $tab) {
					font-size: 15px;
					line-height: 21px;
				}
			}
		}
		.btns {
			margin-top: 25px;
			display: flex;
			align-items: center;
			gap: 10px;
			padding-bottom: 40px;
			border-bottom: 1px solid var(--gray-line-color);
			border-radius: 0 0 12px 0;
			.primary {
				@media (max-width: $tab) {
					padding: 0 20px;
				}
			}
			.square {
				@media (max-width: $tab) {
					width: 50px;
					height: 50px;
				}
			}
			@media (max-width: $tab) {
				margin-top: 30px;
			}
		}
	}
}
</style>
