<script setup>
import { Title } from '@/shared/ui';
</script>

<template>
	<div class="about">
		<div class="about-inner container">
			<div class="left">
				<div class="top">
					<Title variant="h3">Современный подход</Title>
					<img src="/images/home/about/about.svg" alt="" />
				</div>
				<div class="content">
					<div class="image">
						<div class="image-wrapper">
							<img src="/images/home/about/image1.png" alt="" />
						</div>
					</div>
					<div class="text">
						<Title variant="h3">к каждому клиенту</Title>
						<p>Кандидат медицинских наук и потомственный врач-стоматолог.</p>
						<p>
							Специалист широкого профиля, хирург-имплантолог с общеклиническим стажем более 18 лет,
							владею современными методами обследования, диагностики и лечения.
						</p>
						<p>
							В третьем поколении закончил Московский государственный медико-стоматологический
							университет.
						</p>
						<p>
							Обучался в крупнейших зарубежных клиниках – в Германии, Италии, Болгарии и Франции.
						</p>
						<p>
							Благодаря полученным знаниям, смог внедрить новейшие компьютерные технологии (Cad/Cam)
							протезирования в области диагностики и профилактики стоматологических заболеваний.
						</p>
					</div>
				</div>
			</div>
			<div class="right">
				<div class="image-wrapper">
					<img src="/images/home/about/person.jpg" alt="person" />
				</div>
				<Title variant="h5">контстантинопольский <br />александр александрович</Title>
				<p>Руководитель, главный врач клиники <br />Стаж 25 лет</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.about {
	margin-top: 100px;
	padding-bottom: 70px;
	border-radius: 0 0 20px 20px;
	border-bottom: 1px solid var(--gray-line-color);
	@media (max-width: $tab) {
		margin-top: 80px;
		padding-bottom: 80px;
	}
	.about-inner {
		display: grid;
		grid-template-columns: 1fr 0.51fr;
		gap: 55px;
		@media (max-width: $tab) {
			grid-template-columns: 1fr 1fr;
		}
		@media (max-width: $tab-sm) {
			grid-template-columns: 1fr;
			gap: 40px;
		}
		.left {
			.top {
				display: flex;
				align-items: baseline;
				gap: 41px;
				@media (max-width: $tab) {
					flex-direction: column-reverse;
					gap: 30px;
				}
				h3 {
					@media (max-width: 1439px) {
						font-size: 30px;
						line-height: 30px;
					}
					@media (max-width: $desktop-sm) {
						font-size: 24px;
						line-height: 24px;
					}
					@media (max-width: $tab-sm) {
						max-width: 150px;
						text-align: left;
					}
				}
				img {
					@media (max-width: $tab) {
						width: 93px;
						height: 110px;
					}
				}
			}
			.content {
				display: flex;
				gap: 90px;
				align-items: center;
				.image {
					display: flex;
					align-items: center;
					@media (max-width: $tab) {
						display: none;
					}
					.image-wrapper {
						position: relative;
						width: 255px;
						height: 320px;
						@media (max-width: $desktop-sm) {
							width: 155px;
							height: 220px;
						}
						img {
							position: absolute;
							width: 100%;
							height: 100%;
							object-fit: contain;
						}
					}
				}
				.text {
					h3 {
						text-align: left;
						margin-bottom: 46px;
						@media (max-width: 1439px) {
							font-size: 30px;
							line-height: 30px;
							margin-bottom: 25px;
						}
						@media (max-width: $desktop-sm) {
							font-size: 24px;
							line-height: 24px;
						}
						@media (max-width: $tab-sm) {
							max-width: 150px;
							text-align: left;
						}
					}
					p {
						font-weight: 400;
						font-size: 16px;
						line-height: 22px;
						max-width: 380px;
						margin-bottom: 10px;
						@media (max-width: $tab-sm) {
							max-width: 100%;
						}
					}
				}
			}
		}
		.right {
			margin-top: 60px;
			@media (max-width: $tab) {
				margin-top: 0;
			}
			.image-wrapper {
				padding-bottom: 120%;
				position: relative;
				border-radius: 10px;
				overflow: hidden;
				img {
					position: absolute;
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
			h5 {
				margin-top: 25px;
				@media (max-width: $tab) {
					margin-top: 20px;
				}
			}
			p {
				margin-top: 25px;
				font-weight: 400;
				font-size: 16px;
				line-height: 22px;
				@media (max-width: $tab) {
					margin-top: 10px;
					font-size: 15px;
					line-height: 21px;
				}
			}
		}
	}
}
</style>
