<script setup>
defineProps(['isActive']);
</script>

<template>
	<button class="tab" :class="{ active: isActive }">
		<slot></slot>
	</button>
</template>

<style lang="scss" scoped>
.tab.active {
	color: var(--white-color);
	background: var(--pink-color);
	border-color: var(--pink-color);
}
.tab {
	font-weight: 400;
	font-size: 16px;
	line-height: 22px;
	border: 1px solid var(--gray-color);
	height: 42px;
	padding: 0 20px;
	transition: var(--trs-300);
	border-radius: 10px;
	color: var(--gray-color);
}
</style>
