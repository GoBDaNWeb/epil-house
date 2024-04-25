import { computed, ref } from 'vue';

import { defineStore } from 'pinia';

export const useOrderModalStore = defineStore('order-modal', {
	state: () => {
		return { modalActive: false, specialist: {} };
	},

	actions: {
		handleOpenModal() {
			this.modalActive = !this.modalActive;
		},
		setSpecialist(specialist) {
			this.specialist = specialist;
		}
	}
});
