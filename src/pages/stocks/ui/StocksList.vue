<script setup>
import { reactive, ref } from 'vue';

import { StockItem } from '@/entities/stock-item';

import { Tab } from '@/shared/ui';

import { stockList, tabs } from '../config';

const currentTab = reactive({ tab: 0 });

const handleSelectTab = index => {
	currentTab.tab = index;
};

const hadleShowStocks = tab => {
	return tab.includes(currentTab.tab.toString());
};
</script>

<template>
	<div class="stock-list">
		<div class="stock-list-inner container">
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
		}
		.list {
			margin-top: 30px;
			display: flex;
			flex-wrap: wrap;
			gap: 30px;
			.stock-item {
				border: 1px solid var(--gray-line-color);
				height: auto;
				&:nth-child(7n + 1) {
					flex: 1 1 49%;
				}
				&:nth-child(7n + 2),
				&:nth-child(7n + 3) {
					flex: 1 1 23%;
				}

				&:nth-child(7n + 4),
				&:nth-child(7n + 5),
				&:nth-child(7n + 6),
				&:nth-child(7n + 7) {
					flex: 1 1 23%;
				}
			}
		}
	}
}
</style>
