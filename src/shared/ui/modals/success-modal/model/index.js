import { computed, ref } from 'vue';

import { defineStore } from 'pinia';

export const useSuccessModalStore = defineStore('success-modal', {
	state: () => {
		return { modalActive: false };
	},

	actions: {
		handleOpenModal() {
			this.modalActive = !this.modalActive;
		}
	}
});
