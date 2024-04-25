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

<style lang="scss">
@import '@/shared/styles/vars';

.contacts-list {
	.contacts-list-inner {
		.contacts-item {
			@media (max-width: $tab) {
				.info {
					display: flex;
					flex-direction: column;
					align-items: center;
					.address {
						text-align: center;
					}
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
@import '@/shared/styles/vars';

.contacts-list {
	margin-top: 40px;
	padding-bottom: 117px;
	position: relative;
	@media (max-width: $tab) {
		margin-top: 50px;
		padding-bottom: 80px;
	}
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
		@media (max-width: $tab) {
			grid-template-columns: repeat(1, 1fr);
			gap: 50px;
		}
	}
}
</style>
