<script setup>
import { ContactsItem } from '@/entities/contacts-item';

import { contactsList } from '@/shared/config';
</script>

<template>
	<div class="contacts">
		<div class="contacts-inner container">
			<ContactsItem v-for="(contact, index) in contactsList" :key="index" :contact="contact" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.contacts {
	margin-top: 108px;
	padding-bottom: 130px;
	position: relative;
	@media (max-width: $tab) {
		margin-top: 80px;
		padding-bottom: 80px;
	}
	&:after {
		content: '';
		height: 20px;
		position: absolute;
		bottom: -20px;
		background: var(--white-color);
		width: 100%;
		border-radius: 0 0 20px 20px;
	}
	.contacts-inner {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 30px;
		@media (max-width: $tab) {
			grid-template-columns: repeat(1, 1fr);
			gap: 60px;
		}
	}
}
</style>
