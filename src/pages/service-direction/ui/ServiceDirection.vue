<script setup>
import DirectionInfo from './DirectionInfo.vue';
import DirectionList from './DirectionList.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import { Hero } from '@/widgets/hero';

import { ConsultationForm } from '@/features/consultation-form';

import { breadcrumbsList, servicesDirectionList } from '../config';

const route = useRoute();

const direction = ref({});
const breadcrumbs = ref([]);

onMounted(() => {
	const filteredDirections = servicesDirectionList.filter(direction => {
		return direction.url === route.path;
	});

	direction.value = filteredDirections[0];
	breadcrumbs.value = [
		...breadcrumbsList,
		{ url: direction.value.url, title: direction.value.title }
	];
});
</script>

<template>
	<main>
		<Hero
			:title="direction.title"
			:breadcrumbs="breadcrumbs"
			text="Коррекция возрастных изменений и иных недостатков с помощью введения в мягкие ткани медицинских или лекарственных препаратов иглой или канюлей."
			btnText="консультация"
			:hasForm="true"
		/>
		<DirectionList :list="direction.services" />
		<DirectionInfo />
		<ConsultationForm />
	</main>
</template>

<style lang="scss" scoped></style>
