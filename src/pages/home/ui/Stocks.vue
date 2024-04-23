<script setup>
import { SwiperSlide } from 'swiper/vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import { Swiper } from '@/widgets/swiper';

import { StockItem } from '@/entities/stock-item';

import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';
import { Button, Title } from '@/shared/ui';

import { stockList } from '../config';

const router = useRouter();
const prev = ref(null);
const next = ref(null);
</script>

<template>
	<div class="stocks">
		<div class="container">
			<div class="top">
				<Title variant="h3">акции</Title>
				<div class="navigation">
					<Button @click="router.push('/about')" variable="outline">
						все акции <ArrowRightIcon />
					</Button>
					<div class="swiper-navigation">
						<button ref="prev"><ArrowLeftIcon /></button>
						<button ref="next"><ArrowRightIcon /></button>
					</div>
				</div>
			</div>
			<div class="stocks-swiper-wrapper">
				<Swiper
					:slides-per-view="'auto'"
					:centered-slides="false"
					:prev="prev"
					:next="next"
					:spaceBetween="30"
					:allowTouchMove="true"
				>
					<SwiperSlide
						v-for="(stock, index) in stockList"
						:key="index"
						:class="stock.content ? 'full' : ''"
					>
						<StockItem :stock="stock" />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.stocks {
	background: var(--beige-back-color);
	padding-top: 110px;
	padding-bottom: 100px;
	border-radius: 0 0 20px 20px;
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
	.stocks-swiper-wrapper {
		margin-top: 30px;
		.swiper {
			.swiper-slide.full {
				width: 675px;
			}
			.swiper-slide {
				height: auto;
				width: 322px;
			}
		}
	}
}
</style>
