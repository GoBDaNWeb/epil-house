<script setup>
import { SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';

import { Swiper } from '@/widgets/swiper';

import { StockItem } from '@/entities/stock-item';
import { TrainingItem } from '@/entities/training-item';

import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';
import { Button, Title } from '@/shared/ui';

import { trainingList } from '../config';

const prev = ref(null);
const next = ref(null);
</script>

<template>
	<div class="training">
		<div class="top container">
			<Title variant="h3">обучение</Title>
			<div class="navigation">
				<Button variable="outline"> все курсы <ArrowRightIcon /> </Button>
				<div class="swiper-navigation">
					<button ref="prev"><ArrowLeftIcon /></button>
					<button ref="next"><ArrowRightIcon /></button>
				</div>
			</div>
		</div>
		<div class="training-swiper-wrapper">
			<Swiper
				:slides-per-view="1.5"
				:centered-slides="false"
				:prev="prev"
				:next="next"
				:spaceBetween="0"
				:allowTouchMove="true"
			>
				<SwiperSlide v-for="(training, index) in trainingList" :key="index">
					<TrainingItem :training="training" />
				</SwiperSlide>
			</Swiper>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.training {
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
		}
	}
	.training-swiper-wrapper {
		margin-top: 30px;
	}
}
</style>
