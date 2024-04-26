<script setup>
import ServiceAbout from './ServiceAbout.vue';
import ServiceEquipments from './ServiceEquipments.vue';
import ServiceFaq from './ServiceFaq.vue';
import ServiceGallery from './ServiceGallery.vue';
import ServiceInfo from './ServiceInfo.vue';
import ServiceMedication from './ServiceMedication.vue';
import ServiceResult1 from './ServiceResult1.vue';
import ServiceResult2 from './ServiceResult2.vue';
import ServiceSubscribe from './ServiceSubscribe.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import { Hero } from '@/widgets/hero';

import { ConsultationForm } from '@/features/consultation-form';

import { useServiceStore } from '@/entities/service-store';

import { services } from '@/shared/config';

import { breadcrumbsList, heroImages } from '../config';

const serviceStore = useServiceStore();
const route = useRoute();
const currentService = ref({});

onMounted(() => {
	const filteredServices = services.filter(service => {
		return service.url.includes(route.params.slug);
	});
	currentService.value = filteredServices[0];
	serviceStore.setService(filteredServices[0]);
});
</script>

<template>
	<main>
		<Hero
			:title="currentService.title || 'Услуга'"
			text="Метод инъекционного омоложения и оздоровления кожи препаратами на основе гиалуроновой кислоты."
			:breadcrumbs="breadcrumbsList"
			:imgs="heroImages"
			btnText="записаться"
			:hasForm="true"
		/>
		<ServiceAbout />
		<ServiceSubscribe />
		<ServiceInfo />
		<ServiceResult1 />
		<ServiceResult2 />
		<ServiceEquipments />
		<ServiceMedication />
		<ServiceFaq />
		<ServiceGallery />
		<ConsultationForm />
	</main>
</template>

<style lang="scss" scoped></style>
