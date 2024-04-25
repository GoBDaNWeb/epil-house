<script setup>
import { Button } from '@/shared/ui';

defineProps(['rating']);
</script>

<template>
	<div class="rating-item">
		<div class="image-block">
			<div class="image-wrapper">
				<img :src="rating" alt="rating" />
			</div>
		</div>

		<div class="content">
			<div class="stars">
				<img
					v-for="(_, index) in [...Array(5)]"
					:key="index"
					src="/images/home/rating/star.svg"
					alt="star"
				/>
			</div>
			<p>Рейтинг 5 из 5</p>
			<Button variable="outline">Смотреть отзывы</Button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.rating-item {
	background: var(--white-color);
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 30px 50px;
	.image-block {
		padding-bottom: 30px;
		width: 100%;
		border-bottom: 1px solid var(--gray-line-color);
		border-radius: 0 0 12px 12px;
		.image-wrapper {
			position: relative;
			padding-bottom: 20%;
			width: 100%;
			img {
				position: absolute;
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}
	}

	.content {
		width: 100%;
		.stars {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 35px;
			@media (max-width: $tab) {
				margin-top: 20px;
			}
		}
		p {
			text-align: center;
			font-size: 14px;
			font-weight: 400;
			line-height: 19px;
			margin-top: 10px;
			margin-bottom: 33px;
			@media (max-width: $tab) {
				font-size: 12px;
				line-height: 16px;
				margin-bottom: 20px;
			}
		}
		button {
			margin: auto;
			font-size: 15px;
			line-height: 19px;
			padding: 0;
			text-align: center;
			width: 100%;
			display: flex;
			justify-content: center;
		}
	}
}
</style>
