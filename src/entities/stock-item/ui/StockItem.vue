<script setup>
import { Button, useOrderModalStore, useSeasonTicketModalStore } from '@/shared/ui';

const seasonTicketModal = useSeasonTicketModalStore();
const orderModal = useOrderModalStore();
const props = defineProps(['stock']);

const handleOpenModal = () => {
	if (props.stock.btnFnType === 'order') {
		orderModal.handleOpenModal();
	} else {
		seasonTicketModal.handleOpenModal();
	}
};
</script>

<template>
	<div class="stock-item" :class="stock.content ? 'full' : ''">
		<div class="top">
			<div class="image-wrapper">
				<img :src="stock.img" alt="" />
				<div class="badge">
					{{ stock.date }}
				</div>
			</div>
			<img class="ticket" src="/images/home/stock/ticket.png" alt="ticket" v-if="stock.content" />
		</div>

		<div class="content">
			<div class="text-wrapper">
				<div class="title" v-html="stock.title"></div>
				<div class="text" v-html="stock.text"></div>
				<div class="address" v-if="stock.address1">
					<p>{{ stock.address1 }}</p>
					<p v-if="stock.address2">{{ stock.address2 }}</p>
				</div>
				<div class="price" v-if="stock.currentPrice || stock.oldPrice">
					<p>{{ stock.currentPrice }}</p>
					<span>{{ stock.oldPrice }}</span>
				</div>
			</div>

			<Button variable="primary" v-if="stock.btn" @click="handleOpenModal">{{ stock.btn }}</Button>
		</div>
	</div>
</template>

<style lang="scss">
@import '@/shared/styles/vars';

.stock-item {
	.content {
		.title {
			span {
				color: var(--pink-color);
			}
		}
		.text {
			p {
				font-weight: 400;
				font-size: 16px;
				line-height: 22px;
				@media (max-width: $tab) {
					font-size: 15px;
					line-height: 21px;
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
@import '@/shared/styles/vars';

.stock-item.full {
	.content {
		.title {
			margin-bottom: 25px;
		}
	}
}
.stock-item {
	padding: 10px 10px 30px 10px;
	background: var(--white-color);
	border-radius: 15px;
	height: 100%;
	display: flex;
	flex-direction: column;
	@media (max-width: $tab) {
		padding: 10px 10px 20px 10px;
	}
	.top {
		position: relative;
		.ticket {
			position: absolute;
			width: 290px;
			height: 205px;
			right: 10px;
			top: 10px;
			bottom: 10px;
			@media (max-width: $tab) {
				width: 130px;
				height: 92px;
				top: auto;
				bottom: 10px;
			}
		}
		.image-wrapper {
			position: relative;
			height: 225px;
			border-radius: 15px;
			overflow: hidden;

			@media (max-width: $tab-sm) {
				height: 180px;
			}

			img {
				position: absolute;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
			.badge {
				padding: 0 10px;
				height: 20px;
				border-radius: 5px;
				background: var(--pink-color);
				text-transform: uppercase;
				font-weight: 500;
				font-size: 11px;
				line-height: 14px;
				position: absolute;
				top: 16px;
				left: 20px;
				display: flex;
				align-items: center;
				color: var(--white-color);
				@media (max-width: $tab) {
					top: 10px;
					left: 10px;
				}
			}
		}
	}

	.content {
		margin-top: 30px;
		padding: 0 20px;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		@media (max-width: $tab) {
			padding: 0 10px;
			margin-top: 20px;
		}
		.title {
			margin-bottom: 15px;
		}
		.address {
			margin-top: 20px;

			display: flex;
			flex-direction: column;
			p {
				color: var(--pink-color);
				font-weight: 400;
				font-size: 14px;
				line-height: 16px;
				max-width: 250px;
			}
		}

		.price {
			display: flex;
			align-items: baseline;
			gap: 15px;
			margin-top: 27px;
			border-radius: 0 10px 0 0;
			border-top: 1px solid var(--gray-line-color);
			padding-top: 20px;
			p {
				font-weight: 600;
				font-size: 20px;
				line-height: 24px;
			}
			span {
				font-weight: 500;
				font-size: 16px;
				line-height: 19px;
				text-decoration: line-through;
				color: var(--pink-color);
			}
		}
		button {
			margin-top: 33px;
		}
	}
}
</style>
