<script setup>
import PriceList from './PriceList.vue';

import { HeroSm } from '@/widgets/hero-sm';

import { breadcrumbsList } from '../config';
</script>

<template>
	<main>
		<HeroSm :breadcrumbsList="breadcrumbsList" title="прайс-лист" />
		<PriceList />
	</main>
</template>

<style lang="scss" scoped></style>
