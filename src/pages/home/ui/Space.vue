<script setup>
import { Gallery } from '@/widgets/gallery';

import { galleryList } from '@/shared/config';
import { Title } from '@/shared/ui';
</script>

<template>
	<div class="space">
		<Gallery :imgs="galleryList" title="комфортное пространство" titleVariant="h3" />
		<div class="about container">
			<img src="/images/home/space/space.svg" alt="" />
			<Title variant="h4"
				>Мы специализируемся на оказании качественных и безболезненных процедур на современном
				оборудовании.</Title
			>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.space {
	margin-top: 115px;
	padding-bottom: 105px;
	position: relative;
	&:after {
		content: '';
		width: 100%;
		height: 20px;
		border-radius: 0 0 20px 20px;
		background: var(--white-color);
		bottom: -20px;
		position: absolute;
		z-index: 2;
	}

	.about {
		display: flex;
		align-items: center;
		gap: 52px;
		justify-content: center;
		margin-top: 105px;
		h4 {
			text-align: left;
			max-width: 790px;
		}
	}
}
</style>
