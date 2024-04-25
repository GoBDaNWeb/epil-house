<script setup>
import { SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';

import { Swiper } from '@/widgets/swiper';

import { ReviewItem } from '@/entities/review-item';
import { useReviewModalStore } from '@/entities/review-modal-store';

import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';
import { Button, Title } from '@/shared/ui';

import { reviewsList } from '../config';

const modal = useReviewModalStore();

const prev = ref(null);
const next = ref(null);
const pagination = ref(null);
</script>

<template>
	<div class="training-reviews">
		<div class="top container">
			<Title variant="h4">отзывы</Title>
			<div class="navigation">
				<Button variable="primary" @click="modal.handleOpenModal"> оставить отзыв </Button>
				<div class="swiper-navigation">
					<button ref="prev"><ArrowLeftIcon /></button>
					<button ref="next"><ArrowRightIcon /></button>
				</div>
			</div>
		</div>
		<div class="reviews-swiper-wrapper">
			<div class="reviews-swiper-wrapper-inner container">
				<Swiper
					:slides-per-view="1.4"
					:centered-slides="false"
					:prev="prev"
					:next="next"
					:spaceBetween="30"
					:allowTouchMove="true"
					:pagination="pagination"
					:breakpoints="{
						0: {
							slidesPerView: 1,
							spaceBetween: 20
						},
						767: {
							slidesPerView: 1.2,
							spaceBetween: 20
						},
						1024: {
							slidesPerView: 1.4,
							spaceBetween: 30
						}
					}"
				>
					<SwiperSlide v-for="(review, index) in reviewsList" :key="index">
						<ReviewItem :review="review" />
					</SwiperSlide>
				</Swiper>
				<div ref="pagination" class="swiper-pagination"></div>
			</div>
		</div>
		<div class="btn-mob container">
			<Button variable="primary" @click="modal.handleOpenModal"> оставить отзыв </Button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.training-reviews {
	padding-top: 130px;
	background: var(--pink-light-back-color);
	padding-bottom: 100px;
	border-radius: 0 0 20px 20px;
	@media (max-width: $tab) {
		padding-top: 80px;
		padding-bottom: 30px;
	}
	.top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		h3 {
			text-align: left;
		}
		.navigation {
			display: flex;
			align-items: center;
			gap: 30px;
			@media (max-width: $tab) {
				display: none;
			}
		}
	}
	.reviews-swiper-wrapper {
		margin-top: 41px;
		overflow: hidden;

		.swiper {
			overflow: visible;
		}
	}
	.btn-mob {
		display: none;
		margin-top: 30px;
		@media (max-width: $tab) {
			display: block;
		}
	}
}
</style>
