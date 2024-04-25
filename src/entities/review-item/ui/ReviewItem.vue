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
@import '@/shared/styles/vars';

.review-item {
	display: grid;
	grid-template-columns: 1fr 0.7fr;
	gap: 30px;
	background: var(--white-color);
	border-radius: 15px;
	padding: 50px;
	@media (max-width: $tab) {
		grid-template-columns: 1fr;
		padding: 30px 20px 20px;
	}
	.text-block {
		.top {
			padding-bottom: 35px;
			border-bottom: 1px solid var(--gray-line-color);
			border-radius: 0 0 20px 0;
			@media (max-width: $tab) {
				padding-bottom: 15px;
			}
			span {
				color: var(--pink-color);
				margin-top: 20px;
				display: block;
				font-weight: 400;
				font-size: 14px;
				line-height: 16px;
				@media (max-width: $tab) {
					margin-top: 10px;
					font-size: 12px;
				}
			}
		}
		.text {
			margin-top: 30px;
			@media (max-width: $tab) {
				margin-top: 2rem;
			}
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
	}
	.image-wrapper {
		padding-bottom: 100%;
		position: relative;
		border-radius: 20px;
		overflow: hidden;
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
}
</style>
