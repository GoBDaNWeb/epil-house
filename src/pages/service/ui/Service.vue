<script setup>
import ServiceAbout from './ServiceAbout.vue';
import ServiceEquipments from './ServiceEquipments.vue';
import ServiceFaq from './ServiceFaq.vue';
import ServiceGallery from './ServiceGallery.vue';
import ServiceInfo from './ServiceInfo.vue';
import ServiceMedication from './ServiceMedication.vue';
import ServiceSubscribe from './ServiceSubscribe.vue';
import { onMounted, ref } from 'vue';

import { Hero } from '@/widgets/hero';

import { ConsultationForm } from '@/features/consultation-form';

import { breadcrumbsList, heroImages } from '../config';
</script>

<template>
	<main>
		<Hero
			title="ботулинотерапия"
			text="Метод инъекционного омоложения и оздоровления кожи препаратами на основе гиалуроновой кислоты."
			:breadcrumbs="breadcrumbsList"
			:imgs="heroImages"
			btnText="записаться"
			:hasForm="true"
		/>
		<ServiceAbout />
		<ServiceSubscribe />
		<ServiceInfo />
		<ServiceEquipments />
		<ServiceMedication />
		<ServiceFaq />
		<ServiceGallery />
		<ConsultationForm />
	</main>
</template>

<style lang="scss" scoped></style>
