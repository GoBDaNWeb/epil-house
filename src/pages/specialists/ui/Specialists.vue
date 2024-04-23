<script setup>
import SpecialistContent from './SpecialistContent.vue';
import SpecialistsList from './SpecialistsList.vue';

import { HeroSm } from '@/widgets/hero-sm';

import { breadcrumbsList } from '../config';
</script>

<template>
	<main>
		<HeroSm :breadcrumbsList="breadcrumbsList" title="специалисты" />
		<SpecialistContent />
	</main>
</template>

<style lang="scss" scoped></style>
