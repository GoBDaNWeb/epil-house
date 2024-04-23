<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { onMounted, ref, watch } from 'vue';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const props = defineProps([
	'prev',
	'next',
	'navigation',
	'spaceBetween',
	'slidesPerView',
	'breakpoints',
	'centeredSlides',
	'loop',
	'allowTouchMove',
	'setSwiperRef'
]);

const modules = ref([Navigation]);
const navigationObj = ref({
	prevEl: props.prev,
	nextEl: props.next
});
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
