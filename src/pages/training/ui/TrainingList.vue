<script setup>
import { TrainingItem } from '@/entities/training-item';

import { Title } from '@/shared/ui';

import { trainingList } from '../config';
</script>

<template>
	<div class="training-list">
		<div class="training-list-inner container">
			<Title variant="h4">обучение</Title>
			<div class="list">
				<TrainingItem v-for="(training, index) in trainingList" :key="index" :training="training" />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.training-list {
	padding-bottom: 100px;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		bottom: -20px;
		height: 20px;
		background: var(--white-color);
		border-radius: 0 0 20px 20px;
		width: 100%;
	}
	.training-list-inner {
		.training-item {
			padding: 0;
			border: none;
			.content {
				border-top: 1px solid var(--gray-line-color);
				border-radius: 20px 0 0 0;
				padding-top: 30px;
				margin-top: 0;
				padding-left: 42px;
				position: relative;
				&:before {
					content: '';
					position: absolute;
					width: 12px;
					height: 15px;
					background: var(--pink-back-color);
					border-radius: 50%;
					top: 35px;
					left: 0;
				}
				h5 {
					position: relative;
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
.training-list {
	margin-top: 100px;
	.training-list-inner {
		h4 {
			text-align: left;
		}
		.list {
			margin-top: 30px;
			display: flex;
			flex-direction: column;
			gap: 100px;
		}
	}
}
</style>
