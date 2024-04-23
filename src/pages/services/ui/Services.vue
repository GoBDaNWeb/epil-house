<script setup>
import ServiceList from './ServiceList.vue';

import { Hero } from '@/widgets/hero';

import { ConsultationForm } from '@/features/consultation-form';

import { breadcrumbsList } from '../config';
</script>

<template>
	<main>
		<Hero
			:breadcrumbs="breadcrumbsList"
			title="услуги"
			text="В Эпилхаус работают профессионалы высокого уровня в области косметологии. Специалисты проводят популярные и востребованные эстетические процедуры и операции, уникальные коррекции."
		/>
		<ServiceList />
		<ConsultationForm />
	</main>
</template>

<style lang="scss" scoped></style>
