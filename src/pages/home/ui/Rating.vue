<script setup>
import { SwiperSlide } from 'swiper/vue';

import { RatingItem } from '@/entities/rating-item';

import { Swiper, Title } from '@/shared/ui';

import { ratingList } from '../config';
</script>

<template>
	<div class="rating">
		<div class="rating-inner container">
			<div class="top"><Title variant="h3">высокие рейтинги</Title></div>

			<div class="rating-swiper-container">
				<Swiper
					:slides-per-view="4"
					:centered-slides="false"
					:prev="null"
					:next="null"
					:spaceBetween="30"
					:allowTouchMove="true"
					:pagination="null"
					:scrollbar="null"
					:breakpoints="{
						0: {
							slidesPerView: 1.2,
							spaceBetween: 20
						},
						767: {
							slidesPerView: 2.2,
							spaceBetween: 20
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 30
						}
					}"
				>
					<SwiperSlide v-for="(rating, index) in ratingList" :key="index">
						<RatingItem :rating="rating" />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.rating {
	padding-top: 115px;
	background: var(--pink-light-back-color);
	padding-bottom: 30px;
	border-radius: 0 0 20px 20px;
	overflow: hidden;

	@media (max-width: $tab) {
		padding-top: 80px;
		padding-bottom: 20px;
	}
	.rating-inner {
		.top {
			h3 {
				text-align: left;
			}
		}
		.rating-swiper-container {
			margin-top: 30px;
			.swiper {
				overflow: visible;
			}
		}
	}
}
</style>
