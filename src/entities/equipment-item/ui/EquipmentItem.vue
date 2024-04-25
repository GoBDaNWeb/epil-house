<script setup>
import { Badge, Title } from '@/shared/ui';

defineProps(['equipment']);
</script>

<template>
	<div class="equipment-item" :class="equipment.direction">
		<div class="image-wrapper">
			<img :src="equipment.img" alt="equipment" />
		</div>
		<div class="content">
			<Title variant="h5">{{ equipment.title }}</Title>
			<div class="text" v-html="equipment.text"></div>
			<div class="badges" v-if="equipment.badges">
				<Badge v-for="badge in equipment.badges" :key="badge">{{ badge }}</Badge>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.equipment-item.top {
	flex-direction: column;
	height: 100%;
	.content {
		border-bottom: 1px solid var(--gray-line-color);
		border-radius: 0 0 0 12px;
		padding-bottom: 19px;
		flex: 1;
	}
}
.equipment-item.right {
	flex-direction: row-reverse;
	display: grid;
	grid-template-columns: 1fr 0.6fr;
	.image-wrapper {
		order: 1;
	}
	.content {
		order: 0;
		border-top: 1px solid var(--gray-line-color);
		border-radius: 12px 0 0 0;
		padding-top: 19px;
		&:before {
			top: 20px;
		}
	}
}
.equipment-item.left {
	display: grid;
	grid-template-columns: 0.6fr 1fr;
	flex-direction: row;
	@media (max-width: $tab) {
		display: flex;
		flex-direction: column;
	}
	.content {
		border-top: 1px solid var(--gray-line-color);
		border-radius: 12px 0 0 0;
		padding-top: 19px;
		@media (max-width: $tab) {
			padding-left: 23px;
			padding-top: 0;
			padding-bottom: 30px;
			border-top: none;
			border-bottom: 1px solid var(--gray-line-color);
			border-radius: 0 0 0 12px;
		}
		&:before {
			top: 20px;
			@media (max-width: $tab) {
				top: 0;
			}
		}
	}
}
.equipment-item {
	display: flex;
	gap: 30px;
	height: fit-content;
	.image-wrapper {
		padding-bottom: 75%;
		position: relative;
		border-radius: 10px;
		overflow: hidden;
		img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.content {
		position: relative;
		padding-left: 45px;
		&:before {
			content: '';
			position: absolute;
			width: 12px;
			height: 15px;
			background: var(--pink-color);
			border-radius: 50%;
			top: 0;
			left: 0;
		}
		.text {
			margin-top: 20px;
			display: flex;
			flex-direction: column;
			gap: 10px;
			p {
				font-weight: 400;
				font-size: 1px;
				line-height: 22px;
			}
		}
		.badges {
			display: flex;
			align-items: center;
			gap: 5px;
			margin-top: 35px;
		}
	}
}
</style>
