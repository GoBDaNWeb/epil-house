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
.about {
	margin-top: 100px;
	padding-bottom: 70px;
	border-radius: 0 0 20px 20px;
	border-bottom: 1px solid var(--gray-line-color);
	.about-inner {
		display: grid;
		grid-template-columns: 1fr 0.51fr;
		gap: 55px;
		.left {
			.top {
				display: flex;
				align-items: baseline;
				gap: 41px;
			}
			.content {
				display: flex;
				gap: 90px;
				align-items: center;
				.image {
					display: flex;
					align-items: center;
					.image-wrapper {
						position: relative;
						width: 255px;
						height: 320px;
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
					}
					p {
						font-weight: 400;
						font-size: 16px;
						line-height: 22px;
						max-width: 380px;
						margin-bottom: 10px;
					}
				}
			}
		}
		.right {
			margin-top: 60px;
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
			}
			p {
				margin-top: 25px;
				font-weight: 400;
				font-size: 16px;
				line-height: 22px;
			}
		}
	}
}
</style>
