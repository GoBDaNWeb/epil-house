<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { onMounted, ref, watch } from 'vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

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
	'setSwiperRef'
]);

const modules = ref([Navigation, Pagination]);
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
