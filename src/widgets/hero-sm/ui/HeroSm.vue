<script setup>
import { Breadcrumbs, Title } from '@/shared/ui';

defineProps(['breadcrumbsList', 'title']);
</script>

<template>
	<div class="hero container">
		<Breadcrumbs :breadcrumbs="breadcrumbsList" />
		<Title variant="h1">{{ title }}</Title>
	</div>
</template>

<style lang="scss" scoped>
.hero {
	padding-top: 140px;
}
</style>
