<script setup>
import { EquipmentItem } from '@/entities/equipment-item';

import { Title } from '@/shared/ui';

import { medicationList } from '../config';
</script>

<template>
	<div class="medication-equipments">
		<div class="medication-equipments-inner container">
			<div class="title-block">
				<Title variant="h4"> препараты </Title>
			</div>
			<div class="medication-block">
				<EquipmentItem
					v-for="(medication, index) in medicationList"
					:key="index"
					:equipment="medication"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.medication-equipments {
	margin-top: 100px;
	@media (max-width: $tab) {
		margin-top: 80px;
	}
	.medication-equipments-inner {
		display: grid;
		grid-template-columns: 0.4fr 1fr;
		gap: 30px;
		@media (max-width: $tab-sm) {
			grid-template-columns: 1fr;
			gap: 20px;
		}
		.title-block {
			position: relative;
			h4 {
				text-align: left;
				position: sticky;
				top: 150px;
				@media (max-width: $tab) {
					top: 100px;
				}
			}
		}
		.medication-block {
			display: flex;
			flex-direction: column;
			gap: 30px;
			@media (max-width: $tab) {
				gap: 20px;
			}
		}
	}
}
</style>
