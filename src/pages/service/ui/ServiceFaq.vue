<script setup>
import { reactive } from 'vue';

import { Accordion, Title } from '@/shared/ui';

import { questionsList } from '../config';

const questions = reactive(questionsList);
</script>

<template>
	<div class="service-faq">
		<div class="service-faq-inner container">
			<div class="title-block">
				<Title variant="h4"> Вопрос-ответ </Title>
			</div>
			<div class="questions-block">
				<Accordion :questions="questions" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.service-faq {
	margin-top: 100px;
	@media (max-width: $tab) {
		margin-top: 80px;
	}
	.service-faq-inner {
		display: grid;
		grid-template-columns: 0.4fr 1fr;
		gap: 30px;
		@media (max-width: $tab-sm) {
			grid-template-columns: 1fr;
			gap: 20px;
		}
		.title-block {
			position: relative;
			h4 {
				text-align: left;
				position: sticky;
				top: 150px;
				@media (max-width: $tab) {
					top: 100px;
				}
			}
		}
		.questions-block {
			display: flex;
			flex-direction: column;
		}
	}
}
</style>
