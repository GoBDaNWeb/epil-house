<script setup>
import { RouterLink } from 'vue-router';

import { PlusIcon } from '@/shared/icons';
import { Button, Title } from '@/shared/ui';

defineProps(['service']);
</script>

<template>
	<RouterLink :to="service.url" class="service-direction-item">
		<div class="image-wrapper">
			<img :src="service.img" alt="" />
		</div>
		<div class="content">
			<div class="text">
				<Title variant="h5">{{ service.title }}</Title>
				<p>{{ service.text }}</p>
			</div>
			<div class="btn-wrapper">
				<Button variable="square"><PlusIcon /></Button>
				<p>подробнее</p>
			</div>
		</div>
	</RouterLink>
</template>

<style lang="scss">
.service-direction-item {
	&:hover {
		.content {
			.text {
				h5 {
					color: var(--pink-color);
				}
			}
			.btn-wrapper {
				button {
					border-color: var(--pink-color);
					svg {
						path {
							stroke: var(--pink-color);
							fill: var(--pink-color);
						}
					}
				}
				p {
					color: var(--pink-color);
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
@import '@/shared/styles/vars';

.service-direction-item {
	height: 100%;
	display: flex;
	flex-direction: column;
	.image-wrapper {
		position: relative;
		padding-bottom: 100%;
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
		margin-top: 32px;
		padding-bottom: 45px;
		border-bottom: 1px solid var(--gray-line-color);
		border-radius: 0 0 20px 0;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@media (max-width: $tab) {
			padding-bottom: 35px;
		}
		.text {
			h5 {
				transition: var(--trs-300);
			}
			p {
				margin-top: 20px;
				font-size: 16px;
				line-height: 22px;
				font-weight: 400;
				@media (max-width: $tab) {
					margin-top: 20px;
					font-size: 15px;
					line-height: 21px;
				}
			}
		}

		.btn-wrapper {
			display: flex;
			align-items: center;
			gap: 15px;
			margin-top: 30px;
			@media (max-width: $tab) {
				margin-top: 20px;
			}
			p {
				font-size: 15px;
				line-height: 19px;
				font-weight: 600;
				text-transform: uppercase;
				transition: var(--trs-300);
				@media (max-width: $tab) {
					font-size: 13px;
					line-height: 16px;
				}
			}
		}
	}
}
</style>
