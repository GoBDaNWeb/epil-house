import { computed, ref } from 'vue';

import { defineStore } from 'pinia';

export const useReviewModalStore = defineStore('review-modal', {
	state: () => {
		return { modalActive: false };
	},

	actions: {
		handleOpenModal() {
			this.modalActive = !this.modalActive;
		}
	}
});
