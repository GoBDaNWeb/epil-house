<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { onMounted, ref, watch } from 'vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

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
	'scrollbar'
]);

const modules = ref([Navigation, Pagination, Scrollbar]);

const scrollbarObj = props.scrollbar ? { hide: false } : null;
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
		:scrollbar="{
			el: scrollbar,
			hide: false
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
