import { computed, ref } from 'vue';

import { defineStore } from 'pinia';

export const useMapModalStore = defineStore('map-modal', {
	state: () => {
		return { modalActive: false, mapInfo: {} };
	},

	actions: {
		handleOpenModal() {
			this.modalActive = !this.modalActive;
		},
		setMapInfo(info) {
			this.mapInfo = info;
		}
	}
});
