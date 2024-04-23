<script setup>
import { reactive, ref } from 'vue';

import { EquipmentItem } from '@/entities/equipment-item';

import { Tab } from '@/shared/ui';

import { equipmentsList, tabs } from '../config';

const currentTab = reactive({ tab: 0 });

const handleSelectTab = index => {
	currentTab.tab = index;
};

const hadleShowEquipment = tab => {
	return tab.includes(currentTab.tab.toString());
};
</script>

<template>
	<div class="equipments-list">
		<div class="equipments-list-inner container">
			<div class="tabs">
				<Tab
					v-for="tab in tabs"
					:key="tab.tab"
					@click="handleSelectTab(tab.tab)"
					:isActive="currentTab.tab === tab.tab"
				>
					{{ tab.title }}
				</Tab>
			</div>
			<div class="list">
				<EquipmentItem
					v-for="(equipment, index) in equipmentsList"
					:key="index"
					:equipment="equipment"
					v-show="hadleShowEquipment(equipment.tab)"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.equipments-list {
	padding-bottom: 80px;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		bottom: -20px;
		height: 20px;
		background: var(--white-color);
		border-radius: 0 0 20px 20px;
		width: 100%;
	}
	.equipments-list-inner {
		.tabs {
			display: flex;
			align-items: center;
			gap: 10px;
			justify-content: center;
			margin-top: 40px;
		}
		.list {
			margin-top: 30px;
			display: flex;
			flex-direction: column;
			gap: 30px;
		}
	}
}
</style>
