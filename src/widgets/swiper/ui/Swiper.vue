<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { onMounted, ref, watch } from 'vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const props = defineProps([
	'prev',
	'next',
	'navigation',
	'pagination',
	'spaceBetween',
	'slidesPerView',
	'breakpoints',
	'centeredSlides',
	'loop',
	'allowTouchMove',
	'setSwiperRef',
	'autoplay'
]);

const modules = ref([Navigation, Pagination, Autoplay]);

const autoplayObj = props.autoplay
	? {
			delay: props.autoplay,
			disableOnInteraction: false
		}
	: {
			delay: 1000000000,
			disableOnInteraction: false
		};
console.log(autoplayObj);
</script>

<template>
	<Swiper
		:centeredSlides="centeredSlides"
		:spaceBetween="spaceBetween"
		:slidesPerView="slidesPerView"
		:navigation="{
			prevEl: prev,
			nextEl: next
		}"
		:pagination="{
			el: pagination,
			clickable: true
		}"
		:autoplay="autoplayObj"
		:speed="600"
		:modules="modules"
		class="swiper"
		@swiper="setSwiperRef"
		:breakpoints="breakpoints"
		:loop="loop"
		:allowTouchMove="allowTouchMove"
	>
		<slot></slot>
	</Swiper>
</template>
