<script setup></script>

<template>
	<div class="badge">
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped>
.badge {
	font-weight: 400;
	font-size: 16px;
	line-height: 22px;
	border-radius: 10px;
	border: 1px solid var(--gray-color);
	padding: 0 20px;
	height: 42px;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
