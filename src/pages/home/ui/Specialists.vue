<script setup>
import { SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { Swiper } from '@/widgets/swiper';

import { SpecialistItem } from '@/entities/specialist-item';

import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';
import { Button, Title } from '@/shared/ui';

import { specialistsList } from '../config';

const router = useRouter();
const prev = ref(null);
const next = ref(null);
</script>

<template>
	<div class="specialists">
		<div class="specialists-inner container">
			<div class="top">
				<Title variant="h3">акции</Title>
				<div class="navigation">
					<Button @click="router.push('/about')" variable="outline">
						все специалисты <ArrowRightIcon />
					</Button>
					<div class="swiper-navigation">
						<button ref="prev"><ArrowLeftIcon /></button>
						<button ref="next"><ArrowRightIcon /></button>
					</div>
				</div>
			</div>
			<div class="specialists-swiper-wrapper">
				<Swiper
					:slides-per-view="4"
					:centered-slides="false"
					:prev="prev"
					:next="next"
					:spaceBetween="30"
					:allowTouchMove="true"
				>
					<SwiperSlide v-for="(specialist, index) in specialistsList" :key="index">
						<SpecialistItem :specialist="specialist"
					/></SwiperSlide>
				</Swiper>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.specialists {
	margin-top: 100px;
	margin-bottom: 100px;
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
	.specialists-swiper-wrapper {
		margin-top: 30px;
		.swiper-slide {
			height: auto;
		}
	}
}
</style>
