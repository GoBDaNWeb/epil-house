<script setup>
import { ServiceDirectionItem } from '@/entities/service-direction-item';

defineProps(['list']);
</script>

<template>
	<div class="direction-list">
		<div class="direction-list-inner container">
			<ServiceDirectionItem v-for="(service, index) in list" :key="index" :service="service" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.direction-list {
	padding-top: 100px;
	.direction-list-inner {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 30px;
		row-gap: 80px;
	}
}
</style>
