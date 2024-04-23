<script setup>
import { ref } from 'vue';

const props = defineProps(['variant']);

const Tag = ref(props.variant);
</script>

<template>
	<Tag :class="`title-${variant}`"><slot></slot></Tag>
</template>

<style lang="scss">
.title-h1 {
	font-weight: 500;
	font-size: 50px;
	line-height: 50px;
	text-align: center;
	text-transform: uppercase;
}
.title-h3 {
	font-weight: 500;
	font-size: 50px;
	line-height: 50px;
	text-align: center;
	text-transform: uppercase;
}
.title-h4 {
	font-weight: 500;
	font-size: 40px;
	line-height: 40px;
	text-align: center;
	text-transform: uppercase;
}
.title-h5 {
	font-weight: 500;
	font-size: 30px;
	line-height: 30px;
	text-transform: uppercase;
}
.title-h6 {
	font-weight: 500;
	font-size: 20px;
	line-height: 23px;
	text-transform: uppercase;
}
</style>
