<script setup>
import { useWindowSize } from '@vueuse/core';
import { reactive, ref } from 'vue';

import { PriceItem } from '@/entities/price-item';

import { DownloadIcon } from '@/shared/icons';
import { Tab } from '@/shared/ui';
import { scroll } from '@/shared/utils';

import { priceList, tabs } from '../config';

const currentTab = reactive({ tab: 0 });
const { width } = useWindowSize();

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
			<div class="tabs" @mouseenter="e => scroll(e, width)">
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
@import '@/shared/styles/vars';

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
		.content {
			display: grid;
			grid-template-columns: 1fr 0.6fr;
			margin-top: 30px;
			gap: 30px;
			@media (max-width: $tab) {
				grid-template-columns: 1fr;
				gap: 50px;
			}
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
					@media (max-width: $tab) {
						padding-bottom: 75%;
					}
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
						@media (max-width: $tab) {
							gap: 15px;
						}
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
							@media (max-width: $tab) {
								font-size: 16px;
								line-height: 18px;
							}
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
