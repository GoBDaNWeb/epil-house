<script setup>
import { watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Menu } from '@/widgets/menu';

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
</template>
