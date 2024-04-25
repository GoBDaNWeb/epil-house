<script setup>
import { Title } from '@/shared/ui';

defineProps(['price']);
</script>

<template>
	<div class="price-item">
		<Title variant="h5">{{ price.title }}</Title>
		<ul class="service-price-list">
			<li v-for="(priceService, index) in price.services" :key="index">
				<p>{{ priceService.title }}</p>
				<span>{{ priceService.price }}</span>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.price-item {
	padding-top: 35px;
	border-top: 1px solid var(--gray-line-color);
	border-radius: 0 20px 0 0;
	.service-price-list {
		margin-top: 25px;
		display: flex;
		flex-direction: column;
		gap: 25px;
		@media (max-width: $tab) {
			margin-top: 20px;
			gap: 15px;
		}
		li {
			display: flex;
			align-items: center;
			justify-content: space-between;
			p {
				font-weight: 400;
				font-size: 20px;
				line-height: 28px;
				@media (max-width: $tab) {
					font-size: 15px;
					line-height: 21px;
				}
			}
			span {
				font-weight: 600;
				font-size: 20px;
				line-height: 28px;
				@media (max-width: $tab) {
					font-size: 15px;
					line-height: 21px;
				}
			}
		}
	}
}
</style>
