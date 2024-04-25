<script setup>
import { SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';

import { Swiper } from '@/widgets/swiper';

import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';
import { Button, Title } from '@/shared/ui';

import { resutList2 } from '../config';

const prev = ref(null);
const next = ref(null);
</script>

<template>
	<div class="service-result-2">
		<div class="service-result-2-inner container">
			<div class="top">
				<Title variant="h4">результаты процедуры - вариант 2</Title>
				<div class="swiper-navigation">
					<button ref="prev"><ArrowLeftIcon /></button>
					<button ref="next"><ArrowRightIcon /></button>
				</div>
			</div>
			<div class="swiper-service-result-wrapper">
				<Swiper
					:slides-per-view="3"
					:centered-slides="false"
					:prev="prev"
					:next="next"
					:spaceBetween="30"
					:allowTouchMove="true"
					:breakpoints="{
						0: {
							slidesPerView: 1,
							spaceBetween: 20
						},
						767: {
							slidesPerView: 2,
							spaceBetween: 20
						},
						1024: {
							slidesPerView: 3,

							spaceBetween: 30
						}
					}"
				>
					<SwiperSlide v-for="(resut, index) in resutList2" :key="index">
						<div class="image-wrapper" v-for="(img, index) in resut" :key="index">
							<img :src="img" alt="image" />
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.service-result-2 {
	padding-top: 127px;
	background: var(--beige-back-color);
	padding-bottom: 103px;
	border-radius: 0 0 20px 20px;
	@media (max-width: $tab) {
		padding-top: 80px;
		padding-bottom: 80px;
	}
	.service-result-2-inner {
		.top {
			display: flex;
			align-items: center;
			justify-content: space-between;
			h4 {
				text-align: left;
			}
		}
		.swiper-service-result-wrapper {
			margin-top: 40px;
			.swiper-slide {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				align-items: center;
				border-radius: 15px;
				overflow: hidden;
				.image-wrapper {
					padding-bottom: 150%;
					position: relative;
					img {
						position: absolute;
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}
				p {
					text-align: center;
					margin-top: 10px;
					font-weight: 400;
					font-size: 16px;
					line-height: 22px;
				}
			}
		}
	}
}
</style>
