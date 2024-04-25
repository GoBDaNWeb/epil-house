<script setup>
import { ref } from 'vue';

const props = defineProps(['variant']);

const Tag = ref(props.variant);
</script>

<template>
	<Tag :class="`title-${variant}`"><slot></slot></Tag>
</template>

<style lang="scss">
@import '@/shared/styles/vars';

.title-h1 {
	font-weight: 500;
	font-size: 50px;
	line-height: 50px;
	text-align: center;
	text-transform: uppercase;
	@media (max-width: $tab) {
		font-size: 36px;
		line-height: 39px;
	}
}
.title-h3 {
	font-weight: 500;
	font-size: 50px;
	line-height: 50px;
	text-align: center;
	text-transform: uppercase;
	@media (max-width: $tab) {
		font-size: 36px;
		line-height: 39px;
	}
}
.title-h4 {
	font-weight: 500;
	font-size: 40px;
	line-height: 40px;
	text-align: center;
	text-transform: uppercase;
	@media (max-width: $tab) {
		font-size: 30px;
		line-height: 33px;
	}
}
.title-h5 {
	font-weight: 500;
	font-size: 30px;
	line-height: 30px;
	text-transform: uppercase;
	@media (max-width: $tab) {
		font-size: 20px;
		line-height: 22px;
	}
}
.title-h6 {
	font-weight: 500;
	font-size: 20px;
	line-height: 23px;
	text-transform: uppercase;
	@media (max-width: $tab) {
		font-size: 16px;
		line-height: 18px;
	}
}
</style>
