<script setup>
import { useWindowSize } from '@vueuse/core';
import { SwiperSlide } from 'swiper/vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import { Swiper } from '@/widgets/swiper';

import { StockItem } from '@/entities/stock-item';

import { PATH_PAGE } from '@/shared/config';
import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';
import { Button, Title } from '@/shared/ui';

import { stockItem, stockList, stockList2 } from '../config';

const { width } = useWindowSize();
const router = useRouter();
const prev = ref(null);
const next = ref(null);
</script>

<template>
	<div class="stocks">
		<div class="top container">
			<Title variant="h3">акции</Title>
			<div class="navigation">
				<Button @click="router.push(PATH_PAGE.stocks)" variable="outline">
					все акции <ArrowRightIcon />
				</Button>
				<div class="swiper-navigation">
					<button ref="prev"><ArrowLeftIcon /></button>
					<button ref="next"><ArrowRightIcon /></button>
				</div>
			</div>
		</div>
		<div class="stocks-swiper-container container">
			<div class="big-stock-wrapper">
				<StockItem :stock="stockItem" />
			</div>
			<div class="stocks-swiper-wrapper">
				<Swiper
					:slides-per-view="'auto'"
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
						1024: {
							slidesPerView: 'auto',
							spaceBetween: 30
						}
					}"
				>
					<SwiperSlide
						v-for="(stock, index) in width <= 1024 ? stockList2 : stockList"
						:key="index"
						:class="stock.content ? 'full' : ''"
					>
						<StockItem :stock="stock" />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>

		<div class="btn-mob container">
			<Button @click="router.push(PATH_PAGE.stocks)" variable="outline">
				все акции <ArrowRightIcon />
			</Button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.stocks {
	background: var(--beige-back-color);
	padding-top: 110px;
	padding-bottom: 100px;
	border-radius: 0 0 20px 20px;
	@media (max-width: $tab) {
		padding-top: 80px;
		padding-bottom: 23px;
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
	.stocks-swiper-container {
		display: flex;
		align-items: stretch;
		gap: 30px;
		margin-top: 30px;
		.big-stock-wrapper {
			@media (max-width: $tab) {
				display: none;
			}
		}
		.stocks-swiper-wrapper {
			width: 50%;
			height: auto;
			@media (max-width: $tab) {
				width: 100%;
			}
			.swiper {
				height: 100%;
				@media (max-width: $tab) {
					overflow: visible;
				}
				.swiper-slide.full {
					width: 675px;
					@media (max-width: $tab) {
						width: auto;
					}
				}
				.swiper-slide {
					height: auto;
					width: 322px;
					@media (max-width: $tab) {
						width: auto;
					}
				}
			}
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
