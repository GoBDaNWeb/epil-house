<script setup>
import { InfoIcon } from '@/shared/icons';
import { Button, Title } from '@/shared/ui';

defineProps(['specialist']);
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
				<Button variable="primary">записаться</Button>
				<Button variable="square"><InfoIcon /></Button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
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
		.info {
			margin-top: 20px;
			p {
				font-weight: 400;
				font-size: 16px;
				line-height: 22px;
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
		}
	}
}
</style>
