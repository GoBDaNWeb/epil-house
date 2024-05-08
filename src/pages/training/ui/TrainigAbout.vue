<script setup>
import { SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';

import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';
import { Swiper, Title } from '@/shared/ui';

import { aboutSwiper, advantages } from '../config';

const prev = ref(null);
const next = ref(null);
const pagination = ref(null);
</script>

<template>
	<div class="training-about container">
		<div class="text-block">
			<Title variant="h4">
				экспертный центр <br />
				«эпил хаус»
			</Title>
			<Title variant="h6">
				Наша компания - это экспертный центр, специализирующийся на проведении экспертиз и оценок в
				различных областях.
			</Title>
			<p>
				Наша высококвалифицированная команда специалистов осуществляет тщательный анализ и оценку
				объектов и ситуаций с целью предоставления объективной и точной экспертной информации.
				<br />
				<br />
				Мы уделяем особое внимание качеству и надежности наших услуг, чтобы быть уверенными в том,
				что наши клиенты могут полностью доверять нашим результатам и рекомендациям.
			</p>
			<div class="advantages-list">
				<div class="advantage-item" v-for="(advantage, index) in advantages" :key="index">
					<div class="icon">
						<img :src="advantage.icon" alt="icon" />
					</div>
					<p v-html="advantage.text"></p>
				</div>
			</div>
		</div>
		<div class="training-about-swiper-wrapper">
			<Swiper
				:slides-per-view="1"
				:centered-slides="false"
				:prev="prev"
				:next="next"
				:spaceBetween="0"
				:allowTouchMove="true"
				:scrollbar="null"
				:pagination="pagination"
			>
				<SwiperSlide v-for="(img, index) in aboutSwiper" :key="index">
					<div class="image-wrapper">
						<img :src="img" alt="image" />
					</div>
				</SwiperSlide>
			</Swiper>
			<div class="swiper-navigation">
				<button ref="prev"><ArrowLeftIcon /></button>
				<button ref="next"><ArrowRightIcon /></button>
			</div>
			<div ref="pagination" class="swiper-pagination pink"></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.training-about {
	display: flex;
	gap: 30px;
	margin-top: 100px;
	@media (max-width: $tab-sm) {
		margin-top: 80px;
		flex-direction: column;
	}
	.text-block {
		width: 48%;
		@media (max-width: $tab) {
			width: 100%;
		}
		h4 {
			text-align: left;
			margin-bottom: 30px;
			@media (max-width: $tab) {
				margin-bottom: 20px;
			}
		}
		h6 {
			margin-bottom: 30px;
			text-align: left;
			@media (max-width: $tab) {
				margin-bottom: 20px;
			}
		}
		p {
			font-weight: 400;
			font-size: 16px;
			line-height: 22px;
			@media (max-width: $tab) {
				font-size: 15px;
				line-height: 21px;
			}
		}
		.advantages-list {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			margin-top: 50px;
			gap: 20px;
			@media (max-width: $tab-sm) {
				grid-template-columns: repeat(1, 1fr);
				margin-top: 30px;
				gap: 15px;
			}
			.advantage-item {
				display: flex;
				align-items: center;
				gap: 16px;
				.icon {
					width: 70px;
					height: 87px;
					background: var(--pink-light-back-color);
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					@media (max-width: $tab) {
						width: 40px;
						height: 50px;
						img {
							width: 60%;
							height: 80%;
						}
					}
				}
				p {
					font-weight: 600;
					font-size: 20px;
					line-height: 23px;
					max-width: 200px;
					@media (max-width: $tab) {
						font-size: 16px;
						line-height: 18px;
					}
				}
			}
		}
	}
	.training-about-swiper-wrapper {
		width: 48%;
		border-radius: 20px;
		overflow: hidden;
		position: relative;
		height: fit-content;
		@media (max-width: $tab) {
			width: 100%;
		}
		.swiper-slide {
			padding-bottom: 80%;
			position: relative;
			border-radius: 20px;
			overflow: hidden;
			.image-wrapper {
				height: 100%;
				img {
					width: 100%;
					height: 100%;
					position: absolute;
					object-fit: cover;
				}
			}
		}
		.swiper-navigation {
			position: absolute;
			bottom: 10px;
			right: 10px;
			z-index: 2;
			border: none;
		}
	}
}
</style>
