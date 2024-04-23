<script setup>
import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';
</script>

<template>
	<div class="pagination-wrapper">
		<div class="pagination">
			<button v-for="(_, index) in [...Array(9)]" :key="index">{{ index + 1 }}</button>
		</div>
		<div class="navigation">
			<button ref="prev"><ArrowLeftIcon /></button>
			<button ref="next"><ArrowRightIcon /></button>
		</div>
	</div>
</template>

<style lang="scss">
.pagination-wrapper {
	.navigation {
		button {
			&:hover {
				svg {
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
.pagination-wrapper {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	.pagination {
		display: flex;
		align-items: center;
		gap: 50px;
		button {
			font-weight: 600;
			font-size: 20px;
			line-height: 23px;
			transition: var(--trs-300);
			color: var(--gray-color);
			&:hover {
				color: var(--pink-color);
			}
		}
	}
	.navigation {
		display: flex;
		align-items: center;
		border: 1px solid var(--gray-line-color);
		border-radius: 10px;
		button {
			background: var(--white-color);
			transition: var(--trs-300);
			height: 50px;
			width: 50px;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			svg {
				path {
					transition: var(--trs-300);
				}
			}
			&:hover {
				background: var(--pink-color);
			}
			&:first-child {
				border-radius: 10px 0 0 10px;
				&:after {
					content: '';
					position: absolute;
					width: 1px;
					height: 30px;
					background: var(--gray-line-color);
					right: 0;
					top: 0;
					bottom: 0;
					margin: auto;
				}
			}
			&:last-child {
				border-radius: 0 10px 10px 0;
			}
		}
	}
}
</style>
