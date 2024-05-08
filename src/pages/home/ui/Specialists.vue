<script setup>
import { SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { SpecialistItem } from '@/entities/specialist-item';

import { PATH_PAGE } from '@/shared/config';
import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';
import { Button, Swiper, Title } from '@/shared/ui';

import { specialistsList } from '../config';

const router = useRouter();
const prev = ref(null);
const next = ref(null);
</script>

<template>
	<div class="specialists">
		<div class="specialists-inner container">
			<div class="top">
				<Title variant="h3">специалисты</Title>
				<div class="navigation">
					<Button @click="router.push(PATH_PAGE.specialists)" variable="outline">
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
					<SwiperSlide v-for="(specialist, index) in specialistsList" :key="index">
						<SpecialistItem :specialist="specialist" />
					</SwiperSlide>
				</Swiper>
			</div>
			<div class="btn-mob">
				<Button @click="router.push(PATH_PAGE.specialists)" variable="outline">
					все специалисты <ArrowRightIcon />
				</Button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.specialists {
	margin-top: 100px;
	margin-bottom: 100px;
	@media (max-width: $tab) {
		margin-top: 80px;
		margin-bottom: 80px;
		overflow: hidden;
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
	.specialists-swiper-wrapper {
		margin-top: 30px;
		.swiper {
			@media (max-width: $tab) {
				overflow: visible;
			}
		}
		.swiper-slide {
			height: auto;
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
