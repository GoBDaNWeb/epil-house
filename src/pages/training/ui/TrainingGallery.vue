<script setup>
import { Gallery } from '@/widgets/gallery';

import { galleryList } from '@/shared/config';
</script>

<template>
	<div class="training-gallery">
		<Gallery :imgs="galleryList" title="Как проходит обучение" titleVariant="h4" />
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.training-gallery {
	margin-top: 120px;
	padding-bottom: 100px;
	z-index: 2;
	position: relative;
	@media (max-width: $tab) {
		margin-top: 80px;
		padding-bottom: 80px;
	}
	&::after {
		content: '';
		position: absolute;
		bottom: -20px;
		height: 20px;
		background: var(--white-color);
		border-radius: 0 0 20px 20px;
		width: 100%;
	}
}
</style>
