<script setup>
import TrainigAbout from './TrainigAbout.vue';
import TrainingGallery from './TrainingGallery.vue';
import TrainingList from './TrainingList.vue';
import TrainingReviews from './TrainingReviews.vue';

import { Hero } from '@/widgets/hero';

import { breadcrumbsList, heroImages } from '../config';
</script>

<template>
	<main>
		<Hero
			title="школа эпилхаус"
			text="Профессиональное обучение, услугам дале еще текст, который будет описывать плюсы, преимущества школы."
			:breadcrumbs="breadcrumbsList"
			:imgs="heroImages"
			:hasForm="false"
		/>
		<TrainigAbout />
		<TrainingList />
		<TrainingReviews />
		<TrainingGallery />
	</main>
</template>

<style lang="scss" scoped></style>
