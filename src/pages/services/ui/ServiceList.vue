<script setup>
import { ServiceInfoItem } from '@/entities/service-info-item';
import { ServiceItem } from '@/entities/service-item';

import { additionServices, services } from '../config';
</script>

<template>
	<div class="service-list">
		<div class="service-list-inner container">
			<div class="main-services">
				<ServiceInfoItem v-for="(service, index) in services" :key="index" :service="service" />
			</div>
			<div class="additional-services">
				<ServiceItem v-for="(service, index) in additionServices" :key="index" :service="service" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.service-list {
	margin-top: 100px;
	padding-bottom: 100px;
	position: relative;
	z-index: 2;
	&:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 20px;
		bottom: -20px;
		border-radius: 0 0 20px 20px;
		background: var(--white-color);
	}
	.main-services {
		display: flex;
		flex-direction: column;
		gap: 100px;
		margin-bottom: 100px;
	}
	.additional-services {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 30px;
	}
}
</style>
