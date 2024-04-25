<script setup>
import { Title } from '@/shared/ui';
</script>

<template>
	<div class="direction-info">
		<div class="direction-info-inner container">
			<div class="title-block">
				<Title variant="h4">инъекционная косметология сегодня доступна всем</Title>
			</div>
			<div class="text-block">
				<Title variant="h5">текстовые блоки</Title>
				<p>
					Перед процедурой обязательно проконсультируйтесь с квалифицированным врачом-косметологом,
					чтобы оценить вашу кожу и определить наилучший план лечения.
					<br />
					<br />
					Если у вас есть какие-либо аллергии или вы принимаете какие-либо лекарства, обязательно
					сообщите об этом своему врачу.
					<br />
					<br />
					Перед процедурой избегайте приема аспирина или других препаратов, которые могут увеличить
					риск кровотечения и синяков.
					<br />
					<br />
					Воздержитесь от употребления алкоголя за несколько дней до процедуры, чтобы снизить риск
					отеков и синяков.
					<br />
					<br />
					Подготовьтеся к тому, что результаты ботулинотерапии могут не проявиться сразу и требовать
					нескольких дней или недель для полного развития.
				</p>
				<Title variant="h5">заголовок текстового блока</Title>
				<p>
					Постарайтесь избегать массажа лица или манипуляций, которые могут повредить область ввода
					инъекций в течение нескольких дней после процедуры.
					<br />
					<br />
					В первые несколько часов после процедуры избегайте излишней физической активности и
					пребывания в сауне или на солнце, чтобы предотвратить расширение кровеносных сосудов и
					уменьшить риск появления синяков и отеков.
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.direction-info {
	margin-top: 100px;
	padding-bottom: 110px;
	position: relative;
	z-index: 2;
	@media (max-width: $tab) {
		margin-top: 80px;
		padding-bottom: 80px;
	}
	&::after {
		content: '';
		position: absolute;
		bottom: -20px;
		height: 20px;
		background: var(--white-color);
		border-radius: 0 0 20px 20px;
		width: 100%;
	}
	.direction-info-inner {
		display: grid;
		grid-template-columns: 0.5fr 1fr;
		gap: 30px;
		position: relative;
		@media (max-width: $tab-sm) {
			grid-template-columns: 1fr;
		}
		.title-block {
			position: relative;

			h4 {
				position: sticky;
				top: 150px;
				text-align: left;
			}
		}
		.text-block {
			h5 {
				margin-bottom: 30px;
				@media (max-width: $tab) {
					margin-bottom: 20px;
				}
			}
			p {
				margin-bottom: 50px;
				font-weight: 400;
				font-size: 16px;
				line-height: 22px;
				@media (max-width: $tab) {
					font-size: 15px;
					line-height: 21px;
				}
			}
		}
	}
}
</style>
