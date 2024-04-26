<script setup>
import { SwiperSlide } from 'swiper/vue';
import { onMounted, ref } from 'vue';

import { Swiper } from '@/widgets/swiper';

import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';
import { Title } from '@/shared/ui';

import { advantages, heroSwiper } from '../config';

const swiperRef = ref(null);
const scrollbar = ref(null);
const paginationAdvantages = ref(null);
const prev = ref(null);
const next = ref(null);
const setSwiperRef = swiper => {
	swiperRef.value = swiper;
};
onMounted(() => {
	swiperRef.value.activeIndex = 2;
});
</script>

<template>
	<div class="hero">
		<div class="hero-main">
			<Title variant="h1">Сеть салонов красоты «Эпилхаус»</Title>
			<div class="hero-swiper-wrapper">
				<Swiper
					:slides-per-view="'auto'"
					:centered-slides="true"
					:prev="prev"
					:next="next"
					:spaceBetween="10"
					:allowTouchMove="false"
					:setSwiperRef="setSwiperRef"
					:pagination="false"
					:scrollbar="scrollbar"
					:breakpoints="{
						0: {
							slidesPerView: 1,
							allowTouchMove: true
						},
						767: {
							slidesPerView: 'auto',
							allowTouchMove: false
						}
					}"
				>
					<SwiperSlide v-for="(slide, index) in heroSwiper" :key="index">
						<div class="image-wrapper">
							<img :src="slide.img" alt="" />
						</div>
						<div v-if="slide.content" class="season-ticket">
							<div class="image-wrapper">
								<img src="/images/home/hero/season-ticket.jpg" alt="season-ticket" />
							</div>
							<p>
								Абонементы <br />на 3/6/12 процедур <br />
								<span> со скидкой 20% </span>
							</p>
						</div>
					</SwiperSlide>
					<div class="navigation container">
						<div ref="scrollbar" class="swiper-scrollbar"></div>

						<div class="swiper-navigation">
							<button ref="prev"><ArrowLeftIcon /></button>
							<button ref="next"><ArrowRightIcon /></button>
						</div>
					</div>
				</Swiper>
			</div>
		</div>
		<div class="advantages container">
			<Title variant="h4">преимущества</Title>
			<div class="advantages-swiper-swarpper">
				<Swiper
					:slides-per-view="4"
					:prev="null"
					:next="null"
					:spaceBetween="20"
					:allowTouchMove="false"
					:pagination="paginationAdvantages"
					:scrollbar="null"
					:breakpoints="{
						0: {
							slidesPerView: 2,
							allowTouchMove: true
						},
						767: {
							slidesPerView: 3,
							allowTouchMove: true
						},
						1024: {
							slidesPerView: 4,
							allowTouchMove: true
						}
					}"
				>
					<SwiperSlide v-for="(advantage, index) in advantages" :key="index">
						<div class="icon">
							<img :src="advantage.icon" alt="icon" />
						</div>
						<p>
							{{ advantage.text }}
						</p>
					</SwiperSlide>
				</Swiper>
				<div ref="paginationAdvantages" class="swiper-pagination"></div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';
.hero {
	padding-top: 170px;
	background: var(--beige-back-color);
	border-radius: 0 0 20px 20px;
	.hero-main {
		.hero-swiper-wrapper {
			margin-top: 30px;
			position: relative;
			@media (max-width: $tab-sm) {
				margin-right: 20px;
				margin-left: 20px;
			}
			.swiper {
				.navigation {
					display: flex;
					align-items: flex-start;
					.swiper-navigation {
						margin-top: 20px;
					}
				}
				.swiper-slide {
					height: auto;
					display: flex;
					align-items: flex-end;
					position: relative;
					@media (max-width: $tab-sm) {
						width: 100% !important;
						& > .image-wrapper {
							padding-bottom: 125% !important;
							height: auto !important;
						}
					}
					&:nth-child(1) {
						width: 205px;

						.image-wrapper {
							height: 300px;
						}
					}
					&:nth-child(2) {
						width: 440px;
						.image-wrapper {
							height: 400px;
						}
					}
					&:nth-child(3) {
						width: 440px;

						.image-wrapper {
							height: 550px;
						}
					}
					&:nth-child(4) {
						width: 205px;

						.image-wrapper {
							height: 300px;
						}
					}
					&:nth-child(5) {
						width: 440px;
						.image-wrapper {
							height: 440px;
						}
					}
					.image-wrapper {
						border-radius: 20px;
						overflow: hidden;
						position: relative;
						width: 100%;
						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
							position: absolute;
						}
					}
					.season-ticket {
						position: absolute;
						bottom: 10px;
						right: 10px;
						left: 10px;
						background: var(--white-color);
						display: flex;
						gap: 20px;
						align-items: center;
						padding: 30px;
						border-radius: 15px;
						@media (max-width: $tab) {
							padding: 20px;
							gap: 10px;
						}
						.image-wrapper {
							width: 100px;
							height: 70px;
							border-radius: 0;
							img {
								width: 100%;
								height: 100%;
								object-fit: contain;
							}
						}
						p {
							font-weight: 600;
							font-size: 20px;
							line-height: 23px;
							text-transform: uppercase;
							@media (max-width: $tab) {
								font-size: 16px;
								line-height: 18px;
							}
							span {
								color: var(--pink-color);
							}
						}
					}
				}
			}
		}
	}
	.advantages {
		margin-top: 100px;
		padding-bottom: 100px;
		@media (max-width: $tab) {
			margin-top: 80px;
			padding-bottom: 80px;
		}
		.advantages-swiper-swarpper {
			margin-top: 37px;
			@media (max-width: $tab) {
				margin-top: 30px;
			}
			.swiper-slide {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 20px;
				.icon {
					width: 70px;
					height: 87px;
					background: var(--white-color);
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				p {
					font-weight: 600;
					font-size: 20px;
					line-height: 23px;
					text-align: center;
					max-width: 220px;
					text-transform: uppercase;
					@media (max-width: $tab) {
						font-size: 16px;
						line-height: 18px;
					}
				}
			}
		}
	}
}
</style>
