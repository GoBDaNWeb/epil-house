<script setup>
import { EquipmentItem } from '@/entities/equipment-item';

import { ArrowRightIcon } from '@/shared/icons';
import { Button, Title } from '@/shared/ui';

import { equipments } from '../config';
</script>

<template>
	<div class="equipments container">
		<div class="top">
			<Title variant="h3">оборудование</Title>
			<Button variable="outline">все оборудование <ArrowRightIcon /></Button>
		</div>
		<div class="content">
			<EquipmentItem v-for="(equipment, index) in equipments" :key="index" :equipment="equipment" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.equipments {
	margin-bottom: 100px;
	.top {
		display: flex;
		justify-content: space-between;
	}
	.content {
		display: grid;
		grid-template-areas: 'A B' 'A C';
		column-gap: 30px;
		row-gap: 81px;
		margin-top: 30px;

		.equipment-item {
			&:nth-child(1) {
				grid-area: A;
			}
			&:nth-child(2) {
				grid-area: B;
			}
			&:nth-child(3) {
				grid-area: C;
			}
		}
	}
}
</style>
