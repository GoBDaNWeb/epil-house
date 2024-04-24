<script setup>
import { Title } from '@/shared/ui';
</script>

<template>
	<div class="service-about">
		<div class="service-about-inner container">
			<div class="title-block">
				<Title variant="h4">
					Как работает <br />
					ботулинотерапия?
				</Title>
			</div>
			<div class="text-block">
				<div class="text">
					<p>
						Препараты Ботокс, Диспорт, Ксеомин - воздействуют на сверхактивные мышцы таким образом,
						что они расслабляются и выравнивают морщины на коже.
					</p>
					<p>
						Расслаблением мышц устраняется основная проблема образования морщин - активная
						мимическая мускулатура. Мимика и естественное выражение лица при этом сохраняются.
					</p>
					<p>
						Длительное расслабление напряженных мимических мышц приводит к разглаживанию мимических
						морщин, а также дает возможность привыкнуть контролировать выражение лица и движение
						лицевой мускулатуры, что способствует предотвращению их формирования и используется в
						профилактических целях.
					</p>
				</div>
				<div class="recommendations">
					<div class="recommendations-item">
						<Title variant="h5">Показания</Title>
						<ul>
							<li>морщины между бровями и на лбу</li>
							<li>складки на спинке носа</li>
							<li>морщины вокруг глаз</li>
							<li>платизмарные тяжи на шее</li>
							<li>губоподбородочные морщины</li>
							<li>опущенные уголки губ</li>
							<li>нечеткий овал лица</li>
							<li>возрастные изменения области декольте</li>
							<li>гипергидроз</li>
						</ul>
					</div>
					<div class="recommendations-item">
						<Title variant="h5">Противопоказания</Title>
						<ul>
							<li>острые инфекционные и воспалительные заболевания кожи</li>
							<li>сахарный диабет</li>
							<li>онкология</li>
							<li>заболевания крови</li>
							<li>беременность и период лактации</li>
							<li>индивидуальная непереносимость ботулотоксина</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.service-about {
	padding-top: 100px;
	.service-about-inner {
		display: grid;
		grid-template-columns: 0.4fr 1fr;
		gap: 30px;
		.title-block {
			position: relative;
			h4 {
				text-align: left;
				position: sticky;
				top: 150px;
			}
		}
		.text-block {
			.text {
				display: flex;
				flex-direction: column;
				gap: 10px;
				p {
					font-weight: 400;
					font-size: 16px;
					line-height: 22px;
				}
			}
			.recommendations {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				gap: 30px;
				margin-top: 50px;
				.recommendations-item {
					border: 1px solid var(--gray-line-color);
					border-radius: 15px;
					padding: 50px;
					height: 100%;
					display: flex;
					flex-direction: column;
					gap: 25px;
					ul {
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
			}
		}
	}
}
</style>
