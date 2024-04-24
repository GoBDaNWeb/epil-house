<script setup>
import { EquipmentItem } from '@/entities/equipment-item';

import { Title } from '@/shared/ui';

import { equipmentList } from '../config';
</script>

<template>
	<div class="service-equipments">
		<div class="service-equipments-inner container">
			<div class="title-block">
				<Title variant="h4"> оборудование </Title>
			</div>
			<div class="equipments-block">
				<EquipmentItem
					v-for="(equipment, index) in equipmentList"
					:key="index"
					:equipment="equipment"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.service-equipments {
	margin-top: 100px;
	.service-equipments-inner {
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
		.equipments-block {
			display: flex;
			flex-direction: column;
			gap: 30px;
		}
	}
}
</style>
