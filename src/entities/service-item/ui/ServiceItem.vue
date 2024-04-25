<script setup>
import { RouterLink } from 'vue-router';

import { PlusIcon } from '@/shared/icons';
import { Button, Title } from '@/shared/ui';

defineProps(['service']);
</script>

<template>
	<RouterLink class="service-item" :to="service.url">
		<div class="image-wrapper">
			<img :src="service.img" alt="" />
		</div>
		<div class="content">
			<Title variant="h5">{{ service.text }}</Title>
			<Button variable="square">
				<PlusIcon />
			</Button>
		</div>
	</RouterLink>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.service-item {
	height: 250px;
	position: relative;
	border-radius: 20px;
	overflow: hidden;
	@media (max-width: $tab) {
		height: 350px;
	}
	@media (max-width: $tab-sm) {
		height: 150px;
	}
	.image-wrapper {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 1;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			@media (max-width: $tab) {
				object-position: left;
			}
		}
	}
	.content {
		padding: 50px;
		height: 100%;
		z-index: 2;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		@media (max-width: $tab) {
			padding: 30px;
		}
		h5 {
			max-width: 170px;
			@media (max-width: $tab) {
				margin-bottom: 10px;
			}
		}
	}
}
</style>
