<script setup>
import { ContactsItem } from '@/entities/contacts-item';

import { contactsList } from '@/shared/config';
</script>

<template>
	<div class="contacts-list">
		<div class="contacts-list-inner container">
			<ContactsItem v-for="(contact, index) in contactsList" :key="index" :contact="contact" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.contacts-list {
	margin-top: 40px;
	padding-bottom: 117px;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		bottom: -20px;
		height: 20px;
		background: var(--white-color);
		border-radius: 0 0 20px 20px;
		width: 100%;
	}
	.contacts-list-inner {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 26px;
	}
}
</style>
