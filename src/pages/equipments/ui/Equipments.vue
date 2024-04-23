<script setup>
import EquipmentsList from './EquipmentsList.vue';

import { HeroSm } from '@/widgets/hero-sm';

import { breadcrumbsList } from '../config';
</script>

<template>
	<main>
		<HeroSm :breadcrumbsList="breadcrumbsList" title="Оборудование и препараты" />
		<EquipmentsList />
	</main>
</template>

<style lang="scss" scoped></style>
