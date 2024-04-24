<script setup>
import { watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Menu } from '@/widgets/menu';
import { OrderModal } from '@/widgets/order-modal';
import { ReviewModal } from '@/widgets/review-modal';
import { SeasonTicketModal } from '@/widgets/season-ticket-modal';
import { SpecialistModal } from '@/widgets/specialist-modal';
import { SuccessModal } from '@/widgets/success-modal';

import { useSpecialistModalStore } from '@/entities/specialist-modal-store';

const modal = useSpecialistModalStore();

const router = useRoute();

watch(router, () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'instant'
	});
});
</script>

<template>
	<Header />
	<Menu />
	<RouterView />
	<Footer />
	<SpecialistModal :specialist="modal.specialistInfo" />
	<OrderModal />
	<SuccessModal />
	<ReviewModal />
	<SeasonTicketModal />
</template>
