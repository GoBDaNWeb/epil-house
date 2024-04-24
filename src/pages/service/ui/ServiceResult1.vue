<script setup>
import { SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';

import { Swiper } from '@/widgets/swiper';

import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';
import { Button, Title } from '@/shared/ui';

import { resutList1 } from '../config';

const prev = ref(null);
const next = ref(null);
</script>

<template>
	<div class="service-result-1">
		<div class="service-result-1-inner container">
			<div class="top">
				<Title variant="h4">результаты процедуры - вариант 1</Title>
				<div class="swiper-navigation">
					<button ref="prev"><ArrowLeftIcon /></button>
					<button ref="next"><ArrowRightIcon /></button>
				</div>
			</div>
			<div class="swiper-service-result-wrapper">
				<Swiper
					:slides-per-view="2"
					:centered-slides="false"
					:prev="prev"
					:next="next"
					:spaceBetween="30"
					:allowTouchMove="true"
				>
					<SwiperSlide v-for="(resut, index) in resutList1" :key="index">
						<div class="image-container" v-for="(item, index) in resut" :key="index">
							<div class="image-wrapper">
								<img :src="item.img" alt="image" />
							</div>
							<p>{{ item.text }}</p>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.service-result-1 {
	padding-top: 127px;
	background: var(--beige-back-color);
	padding-bottom: 103px;
	border-radius: 0 0 20px 20px;
	.service-result-1-inner {
		.top {
			display: flex;
			align-items: center;
			justify-content: space-between;
			h3 {
				text-align: left;
			}
		}
		.swiper-service-result-wrapper {
			margin-top: 40px;
			.swiper-slide {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				align-items: center;
				gap: 30px;
				border-radius: 15px;
				background: var(--white-color);
				padding: 30px;
				.image-container {
					padding-bottom: 12px;
					border-bottom: 1px solid var(--gray-line-color);
					border-radius: 0 0 20px 20px;
					.image-wrapper {
						padding-bottom: 125%;
						border-radius: 15px;
						overflow: hidden;
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
}
</style>
