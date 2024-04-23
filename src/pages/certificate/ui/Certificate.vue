<script setup>
import CertificateContent from './CertificateContent.vue';

import { HeroSm } from '@/widgets/hero-sm';

import { breadcrumbsList } from '../config';
</script>

<template>
	<main>
		<HeroSm :breadcrumbsList="breadcrumbsList" title="подарите сертификат" />
		<CertificateContent />
	</main>
</template>

<style lang="scss" scoped></style>
