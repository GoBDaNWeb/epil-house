<script setup>
import { SwiperSlide } from 'swiper/vue';
import { onMounted, ref } from 'vue';

import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';
import { Swiper, Title } from '@/shared/ui';

import { advantages, heroSwiper } from '../config';

const swiperRef = ref(null);
const next = ref(null);
const prev = ref(null);
const paginationHero = ref(null);
const paginationAdvantages = ref(null);
const setSwiperRef = swiper => {
	swiperRef.value = swiper;
};
</script>

<template>
	<div class="hero">
		<div class="hero-main">
			<Title variant="h1">Сеть салонов красоты «Эпилхаус»</Title>
			<div class="hero-swiper-wrapper">
				<Swiper
					:slides-per-view="4.5"
					:centered-slides="true"
					:prev="prev"
					:next="next"
					:spaceBetween="10"
					:allowTouchMove="false"
					:setSwiperRef="setSwiperRef"
					:pagination="paginationHero"
					:loop="true"
					:autoplay="4600"
					:breakpoints="{
						0: {
							slidesPerView: 1,
							allowTouchMove: true
						},
						767: {
							slidesPerView: 1.5,
							allowTouchMove: true
						},
						1024: {
							slidesPerView: 3.5
						},
						1280: {
							slidesPerView: 4.5,
							allowTouchMove: true
						},
						1600: {
							slidesPerView: 4.5,
							allowTouchMove: true
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
							<p v-html="slide.content"></p>
						</div>
					</SwiperSlide>
				</Swiper>
				<div class="navigation container">
					<div class="pagination-wrapper">
						<div ref="paginationHero" class="swiper-pagination-progress"></div>
					</div>

					<div class="swiper-navigation">
						<button ref="prev"><ArrowLeftIcon /></button>
						<button ref="next"><ArrowRightIcon /></button>
					</div>
				</div>
			</div>
		</div>
		<div class="advantages container">
			<Title variant="h4">преимущества</Title>
			<div class="advantages-swiper-wrapper">
				<Swiper
					:slides-per-view="4"
					:prev="null"
					:next="null"
					:spaceBetween="20"
					:allowTouchMove="false"
					:pagination="paginationAdvantages"
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
							allowTouchMove: false
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

<style lang="scss">
.hero {
	.hero-main {
		.hero-swiper-wrapper {
			.season-ticket {
				p {
					span {
						color: var(--pink-color);
					}
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
@import '@/shared/styles/vars';
.hero {
	padding-top: 170px;
	background: var(--beige-back-color);
	border-radius: 0 0 20px 20px;
	@media (max-width: $tab) {
		padding-top: 100px;
	}
	.hero-main {
		.hero-swiper-wrapper {
			margin-top: 30px;
			position: relative;
			@media (max-width: $tab-sm) {
				margin-right: 20px;
				margin-left: 20px;
			}
			.navigation {
				display: flex;
				margin-top: 20px;
				justify-content: space-between;
				.pagination-wrapper {
					width: 100%;
					display: flex;
					justify-content: center;
					margin-left: 90px;
					@media (max-width: $tab) {
						margin-left: 0;
					}
				}
				.swiper-navigation {
					display: flex;
					@media (max-width: $tab) {
						display: none;
					}
				}
			}
			.swiper {
				height: 650px;
				@media (max-width: $desktop-md) {
					height: 520px;
				}
				@media (max-width: $desktop-sm) {
					height: 420px;
				}
				@media (max-width: $tab-sm) {
					height: auto;
				}
				.swiper-slide-next,
				.swiper-slide-prev {
					& > .image-wrapper {
						height: 520px !important;
						@media (max-width: $desktop-md) {
							height: 420px !important;
						}
						@media (max-width: $desktop-sm) {
							height: 320px !important;
						}
					}
				}
				.swiper-slide-active {
					& > .image-wrapper {
						height: 640px !important;
						@media (max-width: $desktop-md) {
							height: 520px !important;
						}
						@media (max-width: $desktop-sm) {
							height: 420px !important;
						}
					}
					.season-ticket {
						opacity: 1 !important;
						transition: height var(--trs-600);
					}
				}
				.swiper-slide {
					height: auto;
					display: flex;
					align-items: flex-end;
					position: relative;
					transition: height var(--trs-600);
					& > .image-wrapper {
						height: 415px;
						@media (max-width: $desktop-md) {
							height: 315px;
						}
						@media (max-width: $desktop-sm) {
							height: 215px;
						}
						transition: height var(--trs-600);
					}
					@media (max-width: $tab-sm) {
						width: 100% !important;
						& > .image-wrapper {
							padding-bottom: 125% !important;
							height: auto !important;
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
						padding: 15px 30px;
						border-radius: 15px;
						opacity: 0;
						transition: var(--trs-100);
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
							font-size: 16px;
							line-height: 18px;
							text-transform: uppercase;
							@media (max-width: $desktop-md) {
								font-size: 14px;
								line-height: 16px;
							}
							@media (max-width: $tab) {
								font-size: 14px;
								line-height: 16px;
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
		.advantages-swiper-wrapper {
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
@keyframes slidein {
	from {
		width: 0;
	}
	to {
		width: 100%;
	}
}
</style>
