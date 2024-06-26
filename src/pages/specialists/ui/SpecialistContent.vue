<script setup>
import SpecialistsList from './SpecialistsList.vue';
import { useWindowSize } from '@vueuse/core';
import { reactive, ref } from 'vue';

import { SpecialistItem } from '@/entities/specialist-item';

import { CloseIcon } from '@/shared/icons';
import { Button, Tab } from '@/shared/ui';
import { scroll } from '@/shared/utils';

import { tabs } from '../config';

const { width } = useWindowSize();

const tabsList = reactive({
	selectTab: '',
	currentTabs: []
});

const handleSelectTab = index => {
	if (!tabsList.currentTabs.includes(index)) {
		tabsList.selectTab = index;
		tabsList.currentTabs.push(index);

		const filterTabs = tabsList.currentTabs.filter((tab, index, self) => {
			return self.indexOf(tab) === index;
		});
		tabsList.currentTabs = [...filterTabs];
		tabsList.selectTab = '';
	} else {
		const filterTabs = tabsList.currentTabs.filter(tab => {
			return tab !== index;
		});
		tabsList.currentTabs = [...filterTabs];
		tabsList.selectTab = '';
	}
};

const handleResetTabs = () => {
	tabsList.currentTabs = [];
};

const isActiveTab = index => {
	return tabsList.currentTabs.includes(index);
};
</script>

<template>
	<div class="specialists-content">
		<div class="specialists-content-inner container">
			<div class="top">
				<div class="tabs" @mouseenter="e => scroll(e, width)">
					<Tab
						v-for="tab in tabs"
						:key="tab.tab"
						@click="handleSelectTab(tab.tab)"
						:isActive="isActiveTab(tab.tab)"
					>
						{{ tab.title }}
					</Tab>
				</div>
				<Button variable="outline-reset" @click="handleResetTabs"><CloseIcon />Сбросить</Button>
			</div>
			<SpecialistsList :currentTabs="tabsList.currentTabs" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.specialists-content {
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
	.specialists-content-inner {
		.top {
			.tabs {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				gap: 10px;
				margin-top: 40px;
				margin-bottom: 20px;
				@media (max-width: $tab) {
					padding-left: 20px;
					padding-right: 20px;
					margin-left: -20px;
					margin-right: -20px;
					flex-wrap: nowrap;
					overflow: auto;
					scrollbar-width: thin;
					scrollbar-color: rgba(73, 84, 104, 0) rgba(0, 0, 0, 0);
					&::-webkit-scrollbar {
						height: 0px;
					}
				}
			}
			& > button {
				height: 42px;
				text-transform: none;
			}
		}
	}
}
</style>
