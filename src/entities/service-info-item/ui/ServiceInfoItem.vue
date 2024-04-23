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
			<Title variant="h3">{{ service.title }}</Title>
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
.service-info-item {
	display: grid;
	grid-template-columns: 0.48fr 1fr;
	gap: 30px;
	align-items: flex-start;
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
		h3 {
			text-align: left;
		}
		.info-list {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			column-gap: 30px;
			row-gap: 10px;

			a {
				display: flex;
				align-items: center;
				justify-content: space-between;
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
