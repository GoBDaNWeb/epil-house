<script setup>
import { SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { Swiper } from '@/widgets/swiper';

import { StockItem } from '@/entities/stock-item';
import { TrainingItem } from '@/entities/training-item';

import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';
import { Button, Title } from '@/shared/ui';

import { trainingList } from '../config';

const router = useRouter();

const prev = ref(null);
const next = ref(null);
</script>

<template>
	<div class="training">
		<div class="container">
			<div class="top">
				<Title variant="h3">обучение</Title>
				<div class="navigation">
					<Button variable="outline" @click="router.push(PATH_PAGE.training)">
						все курсы <ArrowRightIcon />
					</Button>
					<div class="swiper-navigation">
						<button ref="prev"><ArrowLeftIcon /></button>
						<button ref="next"><ArrowRightIcon /></button>
					</div>
				</div>
			</div>
			<div class="training-swiper-wrapper">
				<Swiper
					:slides-per-view="1.3"
					:centered-slides="false"
					:prev="prev"
					:next="next"
					:spaceBetween="0"
					:allowTouchMove="true"
					:pagination="null"
					:scrollbar="null"
					:breakpoints="{ 0: { slidesPerView: 1.1 } }"
				>
					<SwiperSlide v-for="(training, index) in trainingList" :key="index">
						<TrainingItem :training="training" />
					</SwiperSlide>
				</Swiper>
			</div>
			<div class="btn-mob">
				<Button variable="outline"> все курсы <ArrowRightIcon /> </Button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.training {
	overflow: hidden;

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
	.training-swiper-wrapper {
		margin-top: 30px;
		@media (max-width: $tab) {
			margin-right: -20px;
			margin-left: -20px;
		}
		.swiper {
			overflow: visible;
		}
	}
	.btn-mob {
		display: none;
		margin-top: 20px;
		@media (max-width: $tab) {
			display: block;
		}
	}
}
</style>
