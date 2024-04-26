<script setup>
import { onMounted, ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

import { useMenuStore } from '@/entities/menu-store';
import { useOrderModalStore } from '@/entities/order-modal-store';

import { PATH_PAGE } from '@/shared/config';
import { BurgerIcon, LogoIcon, MailIcon, PhoneIcon, WhatsappIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';

import { routes } from '../config';

const menu = useMenuStore();
const modal = useOrderModalStore();
const route = useRoute();

const active = ref(false);
const beige = ref(false);

const controlNavbar = () => {
	if (typeof window !== 'undefined') {
		if (window.scrollY > 0) {
			active.value = true;
		} else {
			active.value = false;
		}
	}
};

const handleBeigeHeader = () => {
	if (
		route.name === 'contacts' ||
		route.name === 'price' ||
		route.name === 'equipments' ||
		route.name === 'specialists' ||
		route.name === 'stocks'
	) {
		beige.value = true;
	} else {
		beige.value = false;
	}
};

onMounted(() => {
	handleBeigeHeader();
});
watch(route, () => {
	handleBeigeHeader();
});

window.addEventListener('scroll', controlNavbar);
</script>

<template>
	<header :class="{ active: active, beige: beige }" class="header">
		<div class="header-inner container">
			<div class="navigation">
				<div class="burger">
					<Button
						@click="menu.handleOpenMenu"
						:variable="active || beige ? 'burger-beige' : 'burger'"
					>
						<BurgerIcon />
					</Button>
				</div>
				<nav>
					<RouterLink v-for="(route, index) in routes" :key="index" :to="route.url">
						{{ route.title }}
					</RouterLink>
				</nav>
			</div>
			<div class="center">
				<RouterLink class="logo" :to="PATH_PAGE.home">
					<LogoIcon />
				</RouterLink>
			</div>
			<div class="info">
				<div class="time">10:00-22:00</div>
				<a href="#" target="_blank"><WhatsappIcon /></a>
				<div class="btns">
					<Button :variable="active || beige ? 'primary-beige' : 'primary-white'">позвонить</Button>
					<Button variable="primary" @click="modal.handleOpenModal">записаться</Button>
				</div>
			</div>
			<div class="info-mob">
				<Button :variable="active || beige ? 'square-beige' : 'square-white'"
					><a href="#"><PhoneIcon /></a
				></Button>
				<Button variable="square-primary">
					<a href="#"><MailIcon /></a
				></Button>
			</div>
		</div>
	</header>
</template>

<style lang="scss">
@import '@/shared/styles/vars';

.header {
	.header-inner {
		.center {
			.logo {
				svg {
					path {
						transition: var(--trs-300);
					}
				}
				&:hover {
					svg {
						path {
							fill: var(--pink-color);
						}
					}
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
@import '@/shared/styles/vars';

.header.active {
	background: var(--white-color);
	box-shadow: var(--shadow);
}
.header {
	z-index: 100;
	height: 90px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	transition: var(--trs-300);
	@media (max-width: $tab-sm) {
		height: 60px;
	}
	.header-inner {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		height: 100%;
		@media (max-width: $tab) {
			align-items: center;
		}
		.navigation {
			display: flex;
			align-items: center;
			gap: 30px;
			padding-bottom: 13px;
			@media (max-width: $tab) {
				padding-bottom: 0;
			}
			nav {
				display: flex;
				align-items: center;
				gap: 30px;
				@media (max-width: $desktop-sm) {
					display: none;
				}
				a {
					text-transform: uppercase;
					transition: var(--trs-300);
					font-weight: 600;
					font-size: 15px;
					line-height: 19px;
					&:hover {
						color: var(--pink-color);
					}
				}
			}
		}
		.center {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			.logo {
				margin-left: 115px;
				width: 150px;
				height: 70px;
				@media (max-width: $desktop-sm) {
					margin-left: 35px;
				}
				@media (max-width: $tab-sm) {
					width: 85px;
					height: 40px;
				}
				svg {
					width: 100%;
					height: 100%;
				}
			}
		}
		.info-mob {
			display: none;
			align-items: center;
			gap: 5px;
			padding-bottom: 13px;
			@media (max-width: $desktop-sm) {
				display: flex;
			}
			@media (max-width: $tab) {
				padding-bottom: 0;
			}
		}
		.info {
			display: flex;
			align-items: center;
			gap: 30px;
			padding-bottom: 13px;
			@media (max-width: $desktop-sm) {
				display: none;
			}

			.time {
				font-weight: 600;
				font-size: 15px;
				line-height: 19px;
			}
			.btns {
				display: flex;
				align-items: center;
				gap: 5px;
			}
		}
	}
}
</style>
