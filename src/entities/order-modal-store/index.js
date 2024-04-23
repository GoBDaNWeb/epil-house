import { computed, ref } from 'vue';

import { defineStore } from 'pinia';

export const useOrderModalStore = defineStore('order-modal', {
	state: () => {
		return { modalActive: false };
	},

	actions: {
		handleOpenModal() {
			this.modalActive = !this.modalActive;
		}
	}
});
