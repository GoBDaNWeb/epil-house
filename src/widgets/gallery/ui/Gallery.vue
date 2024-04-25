<script setup>
import { SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';

import { Swiper } from '@/widgets/swiper';

import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';
import { Button, Title } from '@/shared/ui';

const prev = ref(null);
const next = ref(null);

defineProps(['imgs', 'title', 'titleVariant']);
</script>

<template>
	<div class="gallery">
		<div class="top container">
			<Title :variant="titleVariant">{{ title }}</Title>
			<div class="swiper-navigation">
				<button ref="prev"><ArrowLeftIcon /></button>
				<button ref="next"><ArrowRightIcon /></button>
			</div>
		</div>
		<div class="gallery-swiper-wrapper">
			<div class="gallery-swiper-wrapper-inner container">
				<Swiper
					:slides-per-view="2.5"
					:centered-slides="false"
					:prev="prev"
					:next="next"
					:spaceBetween="30"
					:allowTouchMove="true"
					:pagination="null"
					:breakpoints="{
						0: {
							slidesPerView: 1.2,
							spaceBetween: 20
						},
						767: {
							slidesPerView: 2.2
						},
						1024: {
							slidesPerView: 2.5,
							spaceBetween: 30
						}
					}"
				>
					<SwiperSlide v-for="(img, index) in imgs" :key="index">
						<div class="image-wrapper">
							<img :src="img" alt="img" />
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.gallery {
	.top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		h4,
		h3 {
			text-align: left;
		}
	}
	.gallery-swiper-wrapper {
		overflow: hidden;
		margin-top: 30px;
		.swiper {
			overflow: visible;
		}
		.swiper-slide {
			&:nth-child(2n + 1) {
				.image-wrapper {
					padding-bottom: 100%;
					@media (max-width: $tab) {
						padding-bottom: 75%;
					}
				}
			}
			&:nth-child(2n + 2) {
				.image-wrapper {
					padding-bottom: 75%;
				}
			}

			.image-wrapper {
				position: relative;
				border-radius: 10px;
				overflow: hidden;
				img {
					position: absolute;
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
	}
}
</style>
