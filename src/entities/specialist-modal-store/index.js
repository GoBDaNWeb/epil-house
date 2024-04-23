import { computed, ref } from 'vue';

import { defineStore } from 'pinia';

export const useSpecialistModalStore = defineStore('specialist-modal', {
	state: () => {
		return { modalActive: false, specialistInfo: {} };
	},

	actions: {
		handleOpenModal() {
			this.modalActive = !this.modalActive;
		},
		setInfo(specialist) {
			this.specialistInfo = specialist;
		}
	}
});
