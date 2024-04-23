<script setup>
import { RouterLink } from 'vue-router';

defineProps(['breadcrumbs']);
</script>

<template>
	<div class="breadcrumbs container">
		<RouterLink :to="breadcrumb.url" v-for="breadcrumb in breadcrumbs" :key="breadcrumb.title">
			{{ breadcrumb.title }}
			<div class="icon"><img src="/images/breadcrumb-arrow.svg" alt="arrow" /></div>
		</RouterLink>
	</div>
</template>

<style lang="scss" scoped>
.breadcrumbs {
	margin-bottom: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	overflow: auto;
	scrollbar-width: thin;
	scrollbar-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
	height: 100%;
	&::-webkit-scrollbar {
		width: 0px;
	}

	a {
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		display: flex;
		align-items: center;
		gap: 10px;
		white-space: nowrap;
		color: var(--gray-color);
		opacity: 0.4;
		.icon {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		&:last-child {
			pointer-events: none;
			.icon {
				display: none;
			}
		}
	}
}
</style>
