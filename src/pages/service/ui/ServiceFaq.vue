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
.service-faq {
	margin-top: 100px;
	.service-faq-inner {
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
		.questions-block {
			display: flex;
			flex-direction: column;
		}
	}
}
</style>
