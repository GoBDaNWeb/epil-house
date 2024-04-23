<script setup>
import { ParadigmaIcon } from '@/shared/icons';
import { Title } from '@/shared/ui';
</script>

<template>
	<footer class="footer">
		<div class="footer-inner container">
			<div class="top">
				<img src="/images/footer/logo.svg" alt="logo" />
				<Title variant="h3">сеть салонов красоты <br />«эпилхаус»</Title>
			</div>
			<div class="bottom">
				<div class="policy">© 2011 - 2024, ООО Фирма «Ларэнт». <br />Все права защищены.</div>
				<div class="info">
					ИП Арзуманян Илона Саркисовна <br />ОГРНИП 318502900033068 <br />ИНН 501820142865
					<br />Москва, ул. Цюрупы, 28А
				</div>
				<div class="documents">
					<a href="#" target="_blank">Оказание косметических услуг</a>
					<a href="#" target="_blank">Возможно еще лицензия</a>
					<a href="#" target="_blank">Политика конфиденциальности</a>
				</div>
				<div class="paradigma">
					<a href="https://paradigma-digital.ru/" target="_blank"
						>Разработка сайта – Paradigma <ParadigmaIcon
					/></a>
				</div>
			</div>
		</div>
	</footer>
</template>

<style lang="scss">
.footer {
	.footer-inner {
		.paradigma {
			a {
				svg {
					path {
						transition: var(--trs-300);
					}
				}
				&:hover {
					svg {
						path {
							stroke: var(--pink-back-color);
						}
					}
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
.footer {
	background: var(--gray-color);
	.footer-inner {
		padding-top: 65px;
		padding-bottom: 26px;
		display: flex;
		flex-direction: column;
		gap: 146px;
		.top {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			h3 {
				text-align: right;
				color: var(--white-color);
			}
		}
		.bottom {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			gap: 30px;
			align-items: flex-end;
			.policy {
				color: var(--white-color);
				font-weight: 600;
				font-size: 15px;
				line-height: 19px;
			}
			.info {
				color: var(--white-color);
				font-weight: 600;
				font-size: 15px;
				line-height: 19px;
			}
			.documents {
				display: flex;
				flex-direction: column;
				a {
					color: var(--white-color);
					font-weight: 600;
					font-size: 15px;
					line-height: 19px;
					transition: var(--trs-300);
					&:hover {
						color: var(--pink-back-color);
					}
				}
			}
			.paradigma {
				a {
					display: flex;
					align-items: center;
					gap: 10px;
					color: var(--white-color);
					font-weight: 600;
					font-size: 15px;
					line-height: 19px;
					transition: var(--trs-300);

					&:hover {
						color: var(--pink-back-color);
					}
				}
			}
		}
	}
}
</style>
