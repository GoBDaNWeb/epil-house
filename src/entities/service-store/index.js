import { computed, ref } from 'vue';

import { defineStore } from 'pinia';

export const useServiceStore = defineStore('service', {
	state: () => {
		return { service: false };
	},

	actions: {
		setService(service) {
			this.service = service;
		}
	}
});
