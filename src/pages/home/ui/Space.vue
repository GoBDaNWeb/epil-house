<script setup>
import { SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';

import { Swiper } from '@/widgets/swiper';

import { TrainingItem } from '@/entities/training-item';

import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';
import { Button, Title } from '@/shared/ui';

import { spaceList } from '../config';

const prev = ref(null);
const next = ref(null);
</script>

<template>
	<div class="space">
		<div class="top container">
			<Title variant="h3">комфортное пространство</Title>
			<div class="swiper-navigation">
				<button ref="prev"><ArrowLeftIcon /></button>
				<button ref="next"><ArrowRightIcon /></button>
			</div>
		</div>
		<div class="space-swiper-wrapper">
			<div class="space-swiper-wrapper-inner container">
				<Swiper
					:slides-per-view="2.5"
					:centered-slides="false"
					:prev="prev"
					:next="next"
					:spaceBetween="30"
					:allowTouchMove="true"
				>
					<SwiperSlide v-for="(img, index) in spaceList" :key="index">
						<div class="image-wrapper">
							<img :src="img" alt="space" />
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
		<div class="about container">
			<img src="/images/home/space/space.svg" alt="" />
			<Title variant="h4"
				>Мы специализируемся на оказании качественных и безболезненных процедур на современном
				оборудовании.</Title
			>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.space {
	margin-top: 115px;
	padding-bottom: 105px;
	position: relative;
	&:after {
		content: '';
		width: 100%;
		height: 20px;
		border-radius: 0 0 20px 20px;
		background: var(--white-color);
		bottom: -20px;
		position: absolute;
		z-index: 2;
	}
	.top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		h3 {
			text-align: left;
		}
	}
	.space-swiper-wrapper {
		overflow: hidden;
		margin-top: 30px;
		.swiper {
			overflow: visible;
		}
		.swiper-slide {
			&:nth-child(2n + 1) {
				.image-wrapper {
					padding-bottom: 100%;
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
	.about {
		display: flex;
		align-items: center;
		gap: 52px;
		justify-content: center;
		margin-top: 105px;
		h4 {
			text-align: left;
			max-width: 790px;
		}
	}
}
</style>
