<script setup>
import ContactsList from './ContactsList.vue';

import { HeroSm } from '@/widgets/hero-sm';

import { breadcrumbsList } from '../config';
</script>

<template>
	<main>
		<HeroSm :breadcrumbsList="breadcrumbsList" title="контакты" />
		<ContactsList />
	</main>
</template>

<style lang="scss" scoped></style>
