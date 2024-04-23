<script setup>
import StocksList from './StocksList.vue';

import { HeroSm } from '@/widgets/hero-sm';

import { breadcrumbsList } from '../config';
</script>

<template>
	<main>
		<HeroSm :breadcrumbsList="breadcrumbsList" title="акции" />
		<StocksList />
	</main>
</template>

<style lang="scss" scoped></style>
