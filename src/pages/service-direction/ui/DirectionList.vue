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
@import '@/shared/styles/vars';

.direction-list {
	padding-top: 100px;
	@media (max-width: $tab) {
		padding-top: 80px;
	}
	.direction-list-inner {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 30px;
		row-gap: 80px;
		@media (max-width: $tab) {
			grid-template-columns: repeat(2, 1fr);
			row-gap: 50px;
			column-gap: 20px;
		}
		@media (max-width: $pre-mob) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
}
</style>
