<script setup>
import { SwiperSlide } from 'swiper/vue';
import { onMounted, ref, watch } from 'vue';

import { TRUE } from 'sass';

import { Swiper } from '@/widgets/swiper';

import { Breadcrumbs, Button, Input, Title } from '@/shared/ui';

const phone = ref('');
const phoneError = ref(false);

watch(phone, () => {
	phoneError.value = false;
});
const handleSuccessForm = () => {
	if (!phoneError.value) {
		console.log('success');
	}
};

const handleSetError = () => {
	phone.value.length === 0 ? (phoneError.value = true) : (phoneError.value = false);
	return;
};
const swiperRef = ref(null);
const setSwiperRef = swiper => {
	swiperRef.value = swiper;
};
onMounted(() => {
	if (swiperRef.value) {
		swiperRef.value.activeIndex = 1;
	}
});
defineProps(['breadcrumbs', 'title', 'text', 'btnText', 'imgs', 'hasForm']);
</script>

<template>
	<div class="hero">
		<div class="hero-inner container">
			<Breadcrumbs :breadcrumbs="breadcrumbs" />
			<Title variant="h1">{{ title }}</Title>
			<p>{{ text }}</p>
			<form @submit.prevent="handleSuccessForm" v-if="hasForm">
				<Input v-model="phone" :error="phoneError" type="tel" placeholder="+7 (ХХХ) ХХХ-ХХ-ХХ" />
				<Button @click="handleSetError" variable="primary">{{ btnText }}</Button>
			</form>
			<div class="hero-swiper-wrapper" v-if="imgs">
				<Swiper
					:slides-per-view="'auto'"
					:centered-slides="true"
					:prev="null"
					:next="null"
					:spaceBetween="10"
					:allowTouchMove="true"
					:setSwiperRef="setSwiperRef"
					:breakpoints="{
						0: {
							slidesPerView: 1,
							allowTouchMove: true,
							centeredSlides: false
						},
						767: {
							slidesPerView: 'auto',
							allowTouchMove: false
						}
					}"
				>
					<SwiperSlide v-for="(img, index) in imgs" :key="index">
						<div class="image-wrapper">
							<img :src="img" alt="image" />
						</div>
					</SwiperSlide>
				</Swiper>
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

		p {
			max-width: 909px;
			font-weight: 400;
			font-size: 20px;
			line-height: 28px;
			text-align: center;
			margin-top: 50px;
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
			@media (max-width: $tab-sm) {
				width: 100%;
			}
			.swiper {
				.swiper-slide {
					height: auto;
					display: flex;
					align-items: flex-end;
					position: relative;
					@media (max-width: $tab-sm) {
						width: 100% !important;
						.image-wrapper {
							padding-bottom: 75% !important;
							height: auto !important;
						}
					}
					@media (max-width: $pre-mob) {
						.image-wrapper {
							padding-bottom: 100% !important;
						}
					}
					&:nth-child(1) {
						width: 323px;
						.image-wrapper {
							height: 423px;
						}
					}
					&:nth-child(2) {
						width: 676px;
						.image-wrapper {
							height: 504px;
						}
					}
					&:nth-child(3) {
						width: 323px;

						.image-wrapper {
							height: 423px;
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
