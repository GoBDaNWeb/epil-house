<script setup>
import { reactive, ref } from 'vue';

import { PriceItem } from '@/entities/price-item';

import { DownloadIcon } from '@/shared/icons';
import { Tab } from '@/shared/ui';

import { priceList, tabs } from '../config';

const currentTab = reactive({ tab: 0 });

const handleSelectTab = index => {
	currentTab.tab = index;
};

const handleShowPrice = tab => {
	return tab.includes(currentTab.tab.toString());
};
</script>

<template>
	<div class="price-list">
		<div class="price-list-inner container">
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
			<div class="content">
				<div class="list">
					<PriceItem
						v-for="(price, index) in priceList"
						:key="index"
						:price="price"
						v-show="handleShowPrice(price.tab)"
					/>
				</div>
				<div class="image-block">
					<div class="image-wrapper">
						<img src="/images/price/price.jpg" alt="price" />
						<button>
							<DownloadIcon />
							<p>скачать полный <br />прайс-лист</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.price-list {
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
	.price-list-inner {
		.tabs {
			display: flex;
			align-items: center;
			gap: 10px;
			justify-content: center;
			margin-top: 40px;
		}
		.content {
			display: grid;
			grid-template-columns: 1fr 0.6fr;
			margin-top: 30px;
			gap: 30px;
			.list {
				display: flex;
				flex-direction: column;
				gap: 50px;
			}
			.image-block {
				position: relative;
				.image-wrapper {
					padding-bottom: 100%;
					position: sticky;
					top: 100px;
					border-radius: 20px;
					overflow: hidden;
					button {
						position: absolute;
						background: var(--white-color);
						padding: 10px;
						bottom: 10px;
						right: 10px;
						left: 10px;
						display: flex;
						align-items: center;
						gap: 30px;
						z-index: 2;
						width: 96%;
						border-radius: 15px;
						svg {
							width: 60px;
							height: 80px;
						}
						p {
							font-weight: 600;
							font-size: 20px;
							line-height: 23px;
							text-align: left;
							color: var(--gray-color);
							text-transform: uppercase;
						}
					}
					img {
						position: absolute;
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}
			}
		}
	}
}
</style>
