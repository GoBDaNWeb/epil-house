<script setup>
import { SwiperSlide } from 'swiper/vue';
import { ref, watch } from 'vue';

import { Swiper } from '@/widgets/swiper';

import { useOrderModalStore } from '@/entities/order-modal-store';
import { useSpecialistModalStore } from '@/entities/specialist-modal-store';

import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';
import { CloseIcon } from '@/shared/icons';
import { Button, Title } from '@/shared/ui';

const specialistModal = useSpecialistModalStore();
const orderModal = useOrderModalStore();
const prev = ref(null);
const next = ref(null);

watch(
	() => specialistModal.modalActive,
	() => {
		if (specialistModal.modalActive) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.removeAttribute('style');
		}
	}
);

const handleOpenOrderModal = () => {
	specialistModal.handleOpenModal();
	orderModal.handleOpenModal();
};
defineProps(['specialist']);
</script>

<template>
	<transition name="modal">
		<div
			class="specialist-modal"
			v-if="specialistModal.modalActive"
			@click.stop="specialistModal.handleOpenModal"
		>
			<div class="close-btn">
				<Button variable="square" @click.stop="specialistModal.handleOpenModal">
					<CloseIcon />
				</Button>
			</div>
			<div class="specialist-modal-content" @click.stop>
				<div class="image-block">
					<div class="image-wrapper">
						<img :src="specialist.img" alt="specialist" />
					</div>
					<div class="address">
						<p>
							{{ specialist.address1 }}
						</p>
						<p>
							{{ specialist.address2 }}
						</p>
					</div>
					<Button variable="primary" @click="handleOpenOrderModal">записаться</Button>
				</div>
				<div class="info">
					<Title variant="h3">{{ specialist.name }}</Title>
					<div class="about">
						<p>{{ specialist.experience }}</p>
						<p>{{ specialist.post }}</p>
					</div>
					<div class="specialist-about">
						<Title variant="h5">О специалисте</Title>
						<p>{{ specialist.description }}</p>
						<ul>
							<li v-for="(infoItem, index) in specialist.infoList" :key="index">{{ infoItem }}</li>
						</ul>
					</div>
					<div class="specialist-certificates">
						<div class="top">
							<Title variant="h5">дипломы и сертификаты</Title>
							<div class="swiper-navigation">
								<button ref="prev"><ArrowLeftIcon /></button>
								<button ref="next"><ArrowRightIcon /></button>
							</div>
						</div>
						<div class="specialist-certificates-swiper-wrapper">
							<Swiper
								:slides-per-view="2"
								:centered-slides="false"
								:prev="prev"
								:next="next"
								:spaceBetween="30"
								:allowTouchMove="true"
							>
								<SwiperSlide v-for="(certificate, index) in specialist.certificates" :key="index">
									<div class="image-wrapper">
										<img :src="certificate" alt="certificate" />
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<style lang="scss" scoped>
.specialist-modal {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 120;
	background: rgba(242, 233, 229, 0.5);
	backdrop-filter: blur(15px);
	transition: var(--trs-300);
	.close-btn {
		position: absolute;
		top: 30px;
		right: 30px;
	}
	.specialist-modal-content {
		width: 65vw;
		background: var(--white-color);
		padding: 30px;
		border-radius: 0 20px 20px 0;
		position: absolute;
		bottom: 0;
		top: 0;
		left: 0;
		display: grid;
		grid-template-columns: 0.4fr 1fr;
		gap: 30px;
		transition: var(--trs-300);
		.image-block {
			.image-wrapper {
				padding-bottom: 125%;
				position: relative;
				overflow: hidden;
				border-radius: 20px;
				img {
					position: absolute;
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
			.address {
				margin-top: 30px;
				margin-bottom: 25px;
				display: flex;
				flex-direction: column;
				p {
					color: var(--pink-color);
					font-weight: 400;
					font-size: 16px;
					line-height: 22px;
				}
			}
		}
		.info {
			overflow: auto;
			scrollbar-width: thin;
			scrollbar-color: rgba(73, 84, 104, 0.3) rgba(0, 0, 0, 0);
			height: 100%;
			padding-right: 20px;
			&::-webkit-scrollbar {
				height: 0px;
			}
			h3 {
				text-align: left;
			}
			.about {
				margin-top: 25px;
				p {
					font-weight: 400;
					font-size: 16px;
					line-height: 22px;
				}
			}
			.specialist-about {
				margin-top: 50px;
				p {
					font-weight: 400;
					font-size: 16px;
					line-height: 22px;
					margin-top: 30px;
				}
				ul {
					margin-top: 30px;
					display: flex;
					flex-direction: column;
					gap: 10px;
					li {
						padding-left: 33px;
						position: relative;
						font-weight: 400;
						font-size: 16px;
						line-height: 22px;
						&:before {
							content: '';
							position: absolute;
							background: var(--pink-back-color);
							width: 8px;
							height: 10px;
							border-radius: 50%;
							left: 0;
							top: 5px;
						}
					}
				}
			}
			.specialist-certificates {
				margin-top: 65px;
				.top {
					display: flex;
					align-items: center;
					justify-content: space-between;
				}
				.specialist-certificates-swiper-wrapper {
					max-width: 700px;
					margin-top: 20px;
					.swiper-slide {
						background: var(--beige-back-color);
						border-radius: 20px;
						padding: 10px;
						.image-wrapper {
							position: relative;
							padding-bottom: 100%;
							img {
								width: 100%;
								height: 100%;
								position: absolute;
								object-fit: contain;
							}
						}
					}
				}
			}
		}
	}
}
.modal-enter-active,
.modal-leave-active {
	transition: var(--trs-300);
}

.modal-enter-from,
.modal-leave-to {
	opacity: 0;
	.specialist-modal-content {
		transform: translateX(-100%);
	}
}
</style>
