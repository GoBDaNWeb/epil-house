<script setup>
import { SwiperSlide } from 'swiper/vue';
import { useRouter } from 'vue-router';

import { EquipmentItem } from '@/entities/equipment-item';

import { PATH_PAGE } from '@/shared/config';
import { ArrowRightIcon } from '@/shared/icons';
import { Button, Swiper, Title } from '@/shared/ui';

import { equipments, equipmentsMob } from '../config';

const router = useRouter();
</script>

<template>
	<div class="equipments container">
		<div class="top">
			<Title variant="h3">оборудование</Title>
			<Button variable="outline" @click="router.push(PATH_PAGE.equipments)">
				все оборудование <ArrowRightIcon />
			</Button>
		</div>
		<div class="content">
			<EquipmentItem v-for="(equipment, index) in equipments" :key="index" :equipment="equipment" />
		</div>
		<div class="equipments-swiper-wrapper">
			<Swiper
				:slides-per-view="2.5"
				:centered-slides="false"
				:prev="null"
				:next="null"
				:spaceBetween="30"
				:allowTouchMove="true"
				:pagination="null"
				:scrollbar="null"
				:breakpoints="{
					0: {
						slidesPerView: 1.2,
						spaceBetween: 20
					},
					767: {
						slidesPerView: 2.2,
						spaceBetween: 20
					},
					1024: {
						slidesPerView: 2.5,
						spaceBetween: 30
					}
				}"
			>
				<SwiperSlide v-for="(equipment, index) in equipmentsMob" :key="index">
					<EquipmentItem :equipment="equipment" />
				</SwiperSlide>
			</Swiper>
		</div>
		<div class="btn-mob">
			<Button variable="outline" @click="router.push(PATH_PAGE.equipments)">
				все оборудование <ArrowRightIcon />
			</Button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.equipments {
	margin-bottom: 100px;
	overflow: hidden;

	@media (max-width: $tab) {
		margin-bottom: 80px;
	}
	.top {
		display: flex;
		justify-content: space-between;
		button {
			@media (max-width: $tab) {
				display: none;
			}
		}
	}
	.content {
		display: grid;
		grid-template-areas: 'A B' 'A C';
		column-gap: 30px;
		row-gap: 81px;
		margin-top: 30px;
		@media (max-width: $desktop-sm) {
			display: none;
		}
		.equipment-item {
			&:nth-child(1) {
				grid-area: A;
			}
			&:nth-child(2) {
				grid-area: B;
			}
			&:nth-child(3) {
				grid-area: C;
			}
		}
	}
	.equipments-swiper-wrapper {
		margin-top: 30px;
		display: none;
		@media (max-width: $desktop-sm) {
			display: block;
		}
		.swiper {
			overflow: visible;
			.swiper-slide {
				height: auto;
			}
		}
	}
	.btn-mob {
		display: none;
		margin-top: 30px;
		@media (max-width: $tab) {
			display: block;
		}
	}
}
</style>
