<script setup>
import { SwiperSlide } from 'swiper/vue';
import { onMounted, ref, watch } from 'vue';

import { Swiper } from '@/widgets/swiper';

import { useSuccessModalStore } from '@/entities/success-modal-store';

import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';
import { Breadcrumbs, Button, Input, Title } from '@/shared/ui';

const phone = ref('');
const phoneError = ref(false);
const successModal = useSuccessModalStore();
const next = ref(null);
const prev = ref(null);
const paginationHero = ref(null);
const swiperRef = ref(null);

const handleSuccessForm = () => {
	if (!phoneError.value) {
		successModal.handleOpenModal();
		phone.value = '';
	}
};

const handleSetError = () => {
	phone.value.length === 0 ? (phoneError.value = true) : (phoneError.value = false);
	return;
};
const setSwiperRef = swiper => {
	swiperRef.value = swiper;
};

watch(phone, () => {
	phoneError.value = false;
});
// onMounted(() => {
// 	if (swiperRef.value) {
// 		swiperRef.value.activeIndex = 1;
// 	}
// });
defineProps(['breadcrumbs', 'title', 'text', 'btnText', 'imgs', 'hasForm']);
</script>

<template>
	<div class="hero">
		<div class="hero-inner">
			<div class="container">
				<Breadcrumbs :breadcrumbs="breadcrumbs" />
				<Title variant="h1">{{ title }}</Title>
				<p>{{ text }}</p>
				<form @submit.prevent="handleSuccessForm" v-if="hasForm">
					<Input v-model="phone" :error="phoneError" type="tel" placeholder="+7 (ХХХ) ХХХ-ХХ-ХХ" />
					<Button @click="handleSetError" variable="primary">{{ btnText }}</Button>
				</form>
			</div>

			<div class="hero-swiper-wrapper" v-if="imgs">
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
					<SwiperSlide v-for="(img, index) in imgs" :key="index">
						<div class="image-wrapper">
							<img :src="img" alt="image" />
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
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.hero {
	padding-top: 140px;
	background: var(--beige-back-color);
	padding-bottom: 50px;
	border-radius: 0 0 20px 20px;
	@media (max-width: $tab-sm) {
		padding-top: 100px;
		padding-bottom: 30px;
	}
	.hero-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: hidden;

		p {
			max-width: 909px;
			font-weight: 400;
			font-size: 20px;
			line-height: 28px;
			text-align: center;
			margin: 50px auto 0;
			@media (max-width: $tab) {
				margin-top: 30px;
				font-size: 18px;
				line-height: 25px;
			}
		}
		form {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 30px;
			margin-top: 30px;
			@media (max-width: $tab-sm) {
				flex-direction: column;
				gap: 20px;
			}
			button,
			input {
				max-width: 323px;
				width: 100%;
			}
		}
		.hero-swiper-wrapper {
			margin-top: 50px;
			width: 100%;
			@media (max-width: $tab-sm) {
				width: 100%;
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
						transition: var(--trs-600);
					}
				}
				.swiper-slide {
					height: auto;
					display: flex;
					align-items: flex-end;
					position: relative;
					transition: var(--trs-600);
					& > .image-wrapper {
						height: 415px;
						@media (max-width: $desktop-md) {
							height: 315px;
						}
						@media (max-width: $desktop-sm) {
							height: 215px;
						}
						transition: var(--trs-600);
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
				}
			}
		}
	}
}
</style>
