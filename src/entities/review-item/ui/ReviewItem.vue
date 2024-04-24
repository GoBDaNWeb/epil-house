<script setup>
import { Title } from '@/shared/ui';

defineProps(['review']);
</script>

<template>
	<div class="review-item">
		<div class="text-block">
			<div class="top">
				<Title variant="h6">{{ review.name }}</Title>
				<span>{{ review.course }}</span>
			</div>
			<div class="text">
				<p>{{ review.text }}</p>
			</div>
		</div>
		<div class="image-wrapper">
			<img :src="review.img" alt="image" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.review-item {
	display: grid;
	grid-template-columns: 1fr 0.7fr;
	gap: 30px;
	background: var(--white-color);
	border-radius: 15px;
	padding: 50px;
	.text-block {
		.top {
			padding-bottom: 35px;
			border-bottom: 1px solid var(--gray-line-color);
			border-radius: 0 0 20px 0;
			span {
				color: var(--pink-color);
				margin-top: 20px;
				display: block;
				font-weight: 400;
				font-size: 14px;
				line-height: 16px;
			}
		}
		.text {
			margin-top: 30px;
			p {
				font-weight: 400;
				font-size: 16px;
				line-height: 22px;
			}
		}
	}
	.image-wrapper {
		padding-bottom: 100%;
		position: relative;
		border-radius: 20px;
		overflow: hidden;
		img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
}
</style>
