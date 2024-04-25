<script setup>
import { Collapse } from 'vue-collapsed';

import { PlusIcon } from '@/shared/icons';
import { Button, Title } from '@/shared/ui';

const props = defineProps(['questions']);
function handleAccordion(selectedIndex) {
	props.questions.forEach((_, index) => {
		props.questions[index].isExpanded =
			index === selectedIndex ? !props.questions[index].isExpanded : false;
	});
}
</script>

<template>
	<div
		class="accordion"
		:class="{ active: question.isExpanded }"
		v-for="(question, index) in questions"
		:key="question.title"
	>
		<div class="btn-wrapper" @click="() => handleAccordion(index)">
			<Button variable="square">
				<PlusIcon />
			</Button>
			<Title variant="h6">
				{{ question.title }}
			</Title>
		</div>
		<Collapse :when="questions[index].isExpanded" class="collapse">
			<p>
				{{ question.answer }}
			</p>
		</Collapse>
	</div>
</template>

<style lang="scss">
.accordion.active {
	.btn-wrapper {
		button {
			border-color: var(--pink-color);
			svg {
				transform: rotate(45deg);

				path {
					stroke: var(--pink-color);
					fill: var(--pink-color);
				}
			}
		}
		h6 {
			color: var(--pink-color);
		}
	}
}
.accordion {
	.btn-wrapper {
		&:hover {
			button {
				border-color: var(--pink-color);
				svg {
					path {
						stroke: var(--pink-color);
						fill: var(--pink-color);
					}
				}
			}
			h6 {
				color: var(--pink-color);
			}
		}
	}
}
</style>
<style lang="scss" scoped>
@import '@/shared/styles/vars';

.accordion {
	display: flex;
	flex-direction: column;
	padding: 25px 0;
	border-top: 1px solid var(--gray-line-color);
	@media (max-width: $tab) {
		padding: 20px 0;
	}
	&:last-child {
		border-bottom: 1px solid var(--gray-line-color);
	}
	.btn-wrapper {
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 20px;
		@media (max-width: $tab) {
			gap: 15px;
		}
		button {
			width: 40px;
			height: 40px;
			min-width: 40px;
			min-height: 40px;
			max-width: 40px;
			max-height: 40px;
			@media (max-width: $tab) {
				width: 35px;
				height: 35px;
				min-width: 35px;
				min-height: 35px;
				max-width: 35px;
				max-height: 35px;
			}
			svg {
				transition: var(--trs-300);
			}
		}
		h6 {
			transition: var(--trs-300);
		}
	}
	.collapse {
		padding-top: 20px;
		p {
			padding-left: 60px;
			font-weight: 400;
			font-size: 16px;
			line-height: 22px;
			@media (max-width: $tab) {
				padding-left: 55px;
				font-size: 15px;
				line-height: 21px;
			}
		}
	}
}
</style>
