<script setup>
import { watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Menu } from '@/widgets/menu';

import { Map } from '@/entities/map';
import { useServiceStore } from '@/entities/service-store';

import {
	MapModal,
	OrderModal,
	ReviewModal,
	SeasonTicketModal,
	SpecialistModal,
	SuccessModal,
	useMapModalStore,
	useOrderModalStore,
	useSpecialistModalStore
} from '@/shared/ui';

const mapModal = useMapModalStore();
const serviceStore = useServiceStore();
const specialistModal = useSpecialistModalStore();
const orderModal = useOrderModalStore();

const router = useRoute();

watch(router, () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'instant'
	});
	orderModal.setSpecialist({});
	serviceStore.setService({});
});
</script>

<template>
	<Header />
	<Menu />
	<RouterView />
	<Footer />
	<SpecialistModal :specialist="specialistModal.specialistInfo" />
	<OrderModal />
	<SuccessModal />
	<ReviewModal />
	<SeasonTicketModal />
	<MapModal>
		<template #map>
			<Map :coords="mapModal.mapInfo.coords" :id="mapModal.mapInfo.id" />
		</template>
	</MapModal>
</template>
