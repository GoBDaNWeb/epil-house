<script setup>
import { useWindowSize } from '@vueuse/core';
import { reactive, ref } from 'vue';

import { StockItem } from '@/entities/stock-item';

import { Tab } from '@/shared/ui';
import { scroll } from '@/shared/utils';

import { stockList, tabs } from '../config';

const currentTab = reactive({ tab: [0] });
const { width } = useWindowSize();

const handleSelectTab = index => {
	if (!currentTab.tab.includes(index)) {
		currentTab.tab.push(index);

		const filterTabs = currentTab.tab.filter((tab, index, self) => {
			return self.indexOf(tab) === index;
		});
		currentTab.tab = [...filterTabs];
	} else {
		if (currentTab.tab.length > 1) {
			const filterTabs = currentTab.tab.filter(tab => {
				return tab !== index;
			});
			currentTab.tab = [...filterTabs];
		} else {
			return;
		}
	}
};

const hadleShowStocks = tab => {
	const filtered = currentTab.tab.filter(tabItem => {
		return tab.includes(tabItem.toString());
	});
	if (filtered.length > 0) {
		return true;
	} else {
		return false;
	}
	return currentTab.tab.includes(+tab);
};

const isActiveTab = index => {
	return currentTab.tab.includes(index);
};
</script>

<template>
	<div class="stock-list">
		<div class="stock-list-inner container">
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
			<div class="list">
				<StockItem
					:stock="stock"
					v-for="(stock, index) in stockList"
					:key="index"
					v-show="hadleShowStocks(stock.tab)"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.stock-list {
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
	.stock-list-inner {
		.tabs {
			display: flex;
			align-items: center;
			gap: 10px;
			justify-content: center;
			margin-top: 40px;
			@media (max-width: $tab) {
				justify-content: flex-start;
				flex-wrap: nowrap;
				overflow: auto;
				scrollbar-width: thin;
				scrollbar-color: rgba(73, 84, 104, 0) rgba(0, 0, 0, 0);
				&::-webkit-scrollbar {
					height: 0px;
				}
			}
		}
		.list {
			margin-top: 30px;
			display: flex;
			flex-wrap: wrap;
			gap: 30px;
			@media (max-width: $tab) {
				flex-direction: column;
				gap: 20px;
			}
			.stock-item {
				border: 1px solid var(--gray-line-color);
				height: auto;
				&:nth-child(7n + 1) {
					flex: 1 1 49%;
					@media (max-width: $tab) {
						flex: auto;
					}
				}
				&:nth-child(7n + 2),
				&:nth-child(7n + 3) {
					flex: 1 1 23%;
					@media (max-width: $tab) {
						flex: auto;
					}
				}

				&:nth-child(7n + 4),
				&:nth-child(7n + 5),
				&:nth-child(7n + 6),
				&:nth-child(7n + 7) {
					flex: 1 1 23%;
					@media (max-width: $tab) {
						flex: auto;
					}
				}
			}
		}
	}
}
</style>
