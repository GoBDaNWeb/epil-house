<script setup>
import { DownloadIcon } from '@/shared/icons';
import { Button, Title } from '@/shared/ui';

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
					<Button variable="primary">записаться</Button>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.training-item {
	display: grid;
	grid-template-columns: 0.4fr 1fr;
	align-items: center;
	gap: 30px;
	padding: 30px;
	border-radius: 20px;
	border: 1px solid var(--gray-line-color);
	.image-wrapper {
		padding-bottom: 100%;
		border-radius: 10px;
		overflow: hidden;
		position: relative;
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
				span {
					color: var(--pink-color);
					font-weight: 700;
					font-size: 16px;
					line-height: 22px;
				}
			}
			p {
				font-weight: 400;
				font-size: 16px;
				line-height: 22px;
				margin-top: 20px;
			}
		}
		.additional-info {
			display: flex;
			align-items: center;
			gap: 30px;
			p {
				font-weight: 700;
				font-size: 20px;
				line-height: 28px;
			}
			.btns {
				display: flex;
				align-items: center;
				gap: 10px;
			}
		}
	}
}
</style>
