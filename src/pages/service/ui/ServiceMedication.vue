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
.medication-equipments {
	margin-top: 100px;
	.medication-equipments-inner {
		display: grid;
		grid-template-columns: 0.4fr 1fr;
		gap: 30px;
		.title-block {
			position: relative;
			h4 {
				text-align: left;
				position: sticky;
				top: 150px;
			}
		}
		.medication-block {
			display: flex;
			flex-direction: column;
			gap: 30px;
		}
	}
}
</style>
