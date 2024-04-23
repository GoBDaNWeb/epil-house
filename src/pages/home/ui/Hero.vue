<script setup>
import { SwiperSlide } from 'swiper/vue';
import { onMounted, ref } from 'vue';

import { Swiper } from '@/widgets/swiper';

import { Title } from '@/shared/ui';

import { advantages, heroSwiper } from '../config';

const swiperRef = ref(null);
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
					:prev="null"
					:next="null"
					:spaceBetween="10"
					:allowTouchMove="false"
					:setSwiperRef="setSwiperRef"
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
				</Swiper>
			</div>
		</div>
		<div class="advantages container">
			<Title variant="h4">преимущества</Title>
			<div class="advantages-list">
				<div class="advantage-item" v-for="(advantage, index) in advantages" :key="index">
					<div class="icon">
						<img :src="advantage.icon" alt="icon" />
					</div>
					<p>
						{{ advantage.text }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.hero {
	padding-top: 170px;
	background: var(--beige-back-color);
	border-radius: 0 0 20px 20px;
	.hero-main {
		.hero-swiper-wrapper {
			margin-top: 30px;
			.swiper {
				.swiper-slide {
					height: auto;
					display: flex;
					align-items: flex-end;
					position: relative;
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
		.advantages-list {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 37px;
			.advantage-item {
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
					max-width: 200px;
				}
			}
		}
	}
}
</style>
