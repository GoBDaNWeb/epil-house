import { computed, ref } from 'vue';

import { defineStore } from 'pinia';

export const useSeasonTicketModalStore = defineStore('season-ticket-modal', {
	state: () => {
		return { modalActive: false };
	},

	actions: {
		handleOpenModal() {
			this.modalActive = !this.modalActive;
		}
	}
});
