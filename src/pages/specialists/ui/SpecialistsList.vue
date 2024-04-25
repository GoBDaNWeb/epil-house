<script setup>
import { onMounted, ref, watch } from 'vue';

import { SpecialistItem } from '@/entities/specialist-item';

import { ArrowDownIcon } from '@/shared/icons';
import { Button, Pagination } from '@/shared/ui';

import { specialistsList } from '../config';

const props = defineProps(['currentTabs']);

const currentSpecialists = ref([]);

const handleShowSpecialist = tabs => {
	if (props.currentTabs.length === 0) {
		return true;
	}
	const filtered = tabs.filter(tab => {
		return props.currentTabs.includes(+tab);
	});
	return filtered.length > 0;
};

const handleLoadMore = () => {
	const length = currentSpecialists.value.length;
	currentSpecialists.value = [...specialistsList.slice(0, length + 4)];
};

const handleShowMoreBtn = () => {
	return (
		currentSpecialists.value.length < specialistsList.length ||
		currentSpecialists.value.length === 0
	);
};

onMounted(() => {
	currentSpecialists.value = [...specialistsList.slice(0, 12)];
});
watch(
	() => props.currentTabs,
	() => {
		currentSpecialists.value = [...specialistsList.slice(0, 12)];
	}
);
</script>

<template>
	<div class="specialists-list">
		<div class="specialists-list-inner">
			<SpecialistItem
				v-for="(specialist, index) in currentSpecialists"
				:key="index"
				:specialist="specialist"
				v-show="handleShowSpecialist(specialist.tab)"
			/>
		</div>
		<div class="navigation">
			<Button variable="outline" @click="handleLoadMore" v-show="handleShowMoreBtn()">
				показать ещё
				<ArrowDownIcon />
			</Button>
			<Pagination />
		</div>
	</div>
</template>

<style lang="scss">
@import '@/shared/styles/vars';

.specialists-list {
	.specialists-list-inner {
		.specialist-item {
			.content {
				.btns {
					@media (max-width: $mob) {
						flex-direction: column;
						gap: 5px;
						align-items: flex-start;
					}
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
@import '@/shared/styles/vars';

.specialists-list {
	margin-top: 30px;
	.specialists-list-inner {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		column-gap: 30px;
		row-gap: 80px;
		@media (max-width: $tab) {
			grid-template-columns: repeat(3, 1fr);
			column-gap: 20px;
			row-gap: 50px;
		}
		@media (max-width: $tab-sm) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	.navigation {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 50px;
		gap: 30px;
	}
}
</style>
