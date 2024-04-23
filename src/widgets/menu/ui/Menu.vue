<script setup>
import { watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

import { useMenuStore } from '@/entities/menu-store';

import { PATH_PAGE } from '@/shared/config';
import { CloseIcon, LogoIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';

import { routes } from '../config';

const menu = useMenuStore();
const route = useRoute();

watch(route, () => {
	menu.isActive ? menu.handleOpenMenu() : null;
});

watch(
	() => menu.isActive,
	() => {
		if (menu.isActive) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.removeAttribute('style');
		}
	}
);
</script>

<template>
	<div class="menu" @click.stop="menu.handleOpenMenu" :class="menu.isActive ? 'active' : ''">
		<div class="close-btn">
			<Button variable="square" @click.stop="menu.handleOpenMenu"><CloseIcon /></Button>
		</div>
		<div class="menu-content" @click.stop>
			<RouterLink :to="PATH_PAGE.home" class="logo">
				<LogoIcon />
			</RouterLink>
			<nav>
				<RouterLink v-for="(route, index) in routes" :key="index" :to="route.url">
					{{ route.title }}
				</RouterLink>
			</nav>
			<div class="contacts">
				<div class="contact-item">
					<a href="tel:8 (926) 860-32-32">8 (926) 860-32-32</a>
					<p>Мытищи, Рождественская ул., 11</p>
				</div>
				<div class="contact-item">
					<a href="tel:8 (925) 866-30-32">8 (925) 866-30-32</a>
					<p>Королёв, Калинина 6А</p>
				</div>
				<div class="contact-item">
					<a href="tel:8 (968) 866-32-32">8 (968) 866-32-32</a>
					<p>Королёв, Подмосковная 7</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.menu.active {
	opacity: 1;
	pointer-events: all;
	.menu-content {
		opacity: 1;
		transform: translateX(0);
		pointer-events: all;
	}
}
.menu {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 120;
	background: rgba(242, 233, 229, 0.5);
	backdrop-filter: blur(15px);
	opacity: 0;
	pointer-events: none;
	transition: var(--trs-300);
	.close-btn {
		position: absolute;
		top: 30px;
		right: 30px;
	}
	.menu-content {
		width: 25vw;
		background: var(--white-color);
		padding: 30px;
		border-radius: 0 20px 20px 0;
		position: absolute;
		bottom: 0;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		transform: translateX(-100%);
		opacity: 0;
		transition: var(--trs-300);
		pointer-events: none;
		.logo {
			width: 150px;
			height: 70px;
			svg {
				width: 100%;
				height: 100%;
			}
		}
		nav {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 30px;
			a {
				text-transform: uppercase;
				font-weight: 600;
				font-size: 20px;
				line-height: 23px;
				transition: var(--trs-300);
				&:hover {
					color: var(--pink-color);
				}
			}
		}
		.contacts {
			padding-top: 25px;
			border-top: 1px solid var(--gray-line-color);
			border-radius: 0 20px 0 0;
			display: flex;
			flex-direction: column;
			gap: 25px;
			.contact-item {
				a {
					font-weight: 700;
					font-size: 16px;
					line-height: 22px;
					transition: var(--trs-300);
					&:hover {
						color: var(--pink-color);
					}
				}
				p {
					font-weight: 400;
					font-size: 14px;
					line-height: 16px;
				}
			}
		}
	}
}
</style>
