<script setup>
import { RatingItem } from '@/entities/rating-item';

import { Title } from '@/shared/ui';

import { ratingList } from '../config';
</script>

<template>
	<div class="rating">
		<div class="rating-inner container">
			<div class="top"><Title variant="h3">высокие рейтинги</Title></div>
			<div class="content">
				<RatingItem v-for="(rating, index) in ratingList" :key="index" :rating="rating" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.rating {
	padding-top: 115px;
	background: var(--pink-light-back-color);
	padding-bottom: 30px;
	border-radius: 0 0 20px 20px;
	.rating-inner {
		.top {
			h3 {
				text-align: left;
			}
		}
		.content {
			display: flex;
			align-items: center;
			gap: 30px;
			margin-top: 30px;
		}
	}
}
</style>
