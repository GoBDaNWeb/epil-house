<script setup>
import { RouterLink } from 'vue-router';

import { ServiceItem } from '@/entities/service-item';

import { PlusIcon } from '@/shared/icons';
import { Button, Title } from '@/shared/ui';

import { services } from '../config';
</script>

<template>
	<div class="services">
		<div class="container">
			<Title variant="h3">услуги</Title>
			<div class="services-list">
				<ServiceItem v-for="(service, index) in services" :key="index" :service="service" />
			</div>
			<div class="services-about">
				<img src="/images/home/services/about.svg" alt="" />
				<Title variant="h4">Процедуры экологичны <br />и абсолютно безболезненны</Title>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.services {
	.services-list {
		.service-item {
			&:hover {
				.content {
					button {
						border-color: var(--pink-color);
						svg {
							path {
								stroke: var(--pink-color);
							}
						}
					}
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
@import '@/shared/styles/vars';

.services {
	margin-top: 100px;
	background: var(--white-color);
	position: relative;
	padding-bottom: 105px;
	@media (max-width: $tab) {
		margin-top: 80px;
		padding-bottom: 80px;
	}
	&:after {
		content: '';
		bottom: -20px;
		position: absolute;
		border-radius: 0 0 20px 20px;
		width: 100%;
		height: 20px;
		background: var(--white-color);
	}
	& h3 {
		text-align: left;
		margin-bottom: 25px;
		@media (max-width: $tab) {
			text-align: center;
			margin-bottom: 30px;
		}
	}

	.services-list {
		display: flex;
		flex-wrap: wrap;
		gap: 30px;
		@media (max-width: $tab) {
			flex-direction: column;
			flex-wrap: nowrap;
			gap: 10px;
		}
		.service-item {
			height: 250px;
			position: relative;
			@media (max-width: $tab-sm) {
				height: 150px;
			}
			&:nth-child(7n + 1),
			&:nth-child(7n + 2),
			&:nth-child(7n + 3),
			&:nth-child(7n + 4) {
				flex: 1 1 45%;
				@media (max-width: $tab) {
					flex: auto;
				}
			}
			&:nth-child(7n + 5),
			&:nth-child(7n + 6),
			&:nth-child(7n + 7) {
				flex: 1 1 30%;
				@media (max-width: $tab) {
					flex: auto;
				}
			}
		}
	}
	.services-about {
		display: flex;
		align-items: center;
		gap: 52px;
		justify-content: center;
		margin-top: 105px;
		@media (max-width: $tab) {
			flex-direction: column;
			margin-top: 50px;
			gap: 30px;
			align-items: flex-start;
		}
		h4 {
			text-align: left;
		}
	}
}
</style>
