<script setup>
import { TourIcon } from '@/shared/icons';
import { Button, Title } from '@/shared/ui';

defineProps(['contact']);
</script>

<template>
	<div class="contacts-item">
		<Title variant="h4">{{ contact.title }}</Title>
		<div class="image-wrapper">
			<img :src="contact.img" alt="contact" />
			<Button><TourIcon /></Button>
		</div>
		<div class="info">
			<a :href="`tel:${contact.phone}`" class="phone">{{ contact.phone }}</a>
			<div class="timetable">
				<p>{{ contact.start }}</p>
				<img src="/images/arrow-right.svg" alt="arrow" />
				<p>{{ contact.end }}</p>
			</div>
			<div class="address">{{ contact.address }}</div>
			<a href="#" target="_blank" class="map-link">на карте</a>
		</div>
	</div>
</template>

<style lang="scss">
.contacts-item {
	.image-wrapper {
		button {
			svg {
				ellipse {
					transition: var(--trs-300);
				}
				path {
					transition: var(--trs-300);
				}
			}
			&:hover {
				svg {
					ellipse {
						fill: var(--pink-color);
					}
					path {
						stroke: var(--white-color);
					}
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
.contacts-item {
	h4 {
		text-align: left;
		margin-bottom: 30px;
	}
	.image-wrapper {
		position: relative;
		padding-bottom: 75%;
		border-radius: 12px;
		overflow: hidden;
		& > img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		button {
			position: absolute;
			top: 20px;
			z-index: 2;
			right: 20px;
		}
	}
	.info {
		margin-top: 30px;
		.phone {
			font-weight: 700;
			font-size: 20px;
			line-height: 28px;
		}
		.timetable {
			display: flex;
			align-items: center;
			gap: 10px;
			p {
				font-weight: 400;
				font-size: 20px;
				line-height: 28px;
			}
		}
		.address {
			margin-top: 35px;
			font-weight: 400;
			font-size: 20px;
			line-height: 28px;
		}
		.map-link {
			font-weight: 600;
			font-size: 15px;
			line-height: 19px;
			color: var(--pink-color);
			border: 1px solid var(--pink-color);
			border-radius: 10px;
			width: 111px;
			height: 35px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 15px;
		}
	}
}
</style>
