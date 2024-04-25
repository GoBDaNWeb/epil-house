<script setup>
import { RouterLink } from 'vue-router';

import { PlusIcon } from '@/shared/icons';
import { Button, Title } from '@/shared/ui';

defineProps(['service']);
</script>

<template>
	<div class="service-info-item">
		<div class="image-wrapper">
			<img :src="service.img" alt="service" />
		</div>
		<div class="content">
			<RouterLink :to="service.url">
				<Title variant="h3">{{ service.title }}</Title>
			</RouterLink>
			<div class="info-list">
				<RouterLink v-for="(item, index) in service.list" :key="index" :to="item.url">
					<div class="text">
						<div class="icon">
							<img src="/images/services/icon.svg" alt="icon" />
						</div>
						<p>{{ item.title }}</p>
					</div>
					<Button variable="square">
						<PlusIcon />
					</Button>
				</RouterLink>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.service-info-item {
	.content {
		a {
			svg {
				path {
					transition: var(--trs-300);
				}
			}
			&:hover {
				button {
					border-color: var(--pink-color);

					svg {
						path {
							stroke: var(--pink-color);
							fill: var(--pink-color);
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

.service-info-item {
	display: grid;
	grid-template-columns: 0.48fr 1fr;
	gap: 30px;
	align-items: flex-start;
	@media (max-width: $desktop-sm) {
		grid-template-columns: 0.6fr 1fr;
	}
	@media (max-width: $tab) {
		grid-template-columns: 1fr;
	}
	.image-wrapper {
		padding-bottom: 75%;
		position: relative;
		border-radius: 20px;
		overflow: hidden;
		img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.content {
		display: flex;
		flex-direction: column;
		gap: 30px;
		padding-top: 30px;
		border-top: 1px solid var(--gray-line-color);
		border-radius: 20px 0 0 0;
		@media (max-width: $tab) {
			gap: 20px;
			padding-top: 0;
			padding-bottom: 45px;
			border-top: none;
			border-bottom: 1px solid var(--gray-line-color);
			border-radius: 0 0 0 20px;
		}
		& > a {
			&:hover {
				h3 {
					color: var(--pink-color);
				}
			}
		}
		h3 {
			text-align: left;
			transition: var(--trs-300);
		}
		.info-list {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			column-gap: 30px;
			row-gap: 10px;
			@media (max-width: $tab-sm) {
				grid-template-columns: repeat(1, 1fr);
				gap: 5px;
			}
			a {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 15px;
				&:hover {
					p {
						color: var(--pink-color);
					}
				}
				.text {
					display: flex;
					align-items: center;
					gap: 20px;
					.icon {
						width: 40px;
						height: 50px;
						border-radius: 50%;
						display: flex;
						align-items: center;
						justify-content: center;
						background: var(--pink-light-back-color);
					}
					p {
						font-weight: 700;
						font-size: 20px;
						line-height: 28px;
						transition: var(--trs-300);
					}
				}
				button {
					width: 30px;
					height: 30px;
				}
			}
		}
	}
}
</style>
