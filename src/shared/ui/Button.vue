<script setup>
const props = defineProps(['title', 'variable', 'click', 'type', 'disabled']);
</script>

<template>
	<button :type="type" :class="[variable]" @click="click" :disabled="disabled">
		<slot></slot>
	</button>
</template>

<style lang="scss">
@import '@/shared/styles/vars';

button.primary {
	background: var(--gray-color);
	border-radius: 10px;
	height: 50px;
	padding: 0 35px;
	text-align: center;
	font-weight: 600;
	font-size: 15px;
	text-transform: uppercase;
	line-height: 19px;
	color: var(--white-color);
	transition: var(--trs-300);
	&:hover {
		background: var(--pink-color);
	}
	&:active {
		box-shadow: var(--shadow-inset);
	}
}
button.primary-white {
	background: var(--white-color);
	border-radius: 10px;
	height: 50px;
	padding: 0 35px;
	text-align: center;
	font-weight: 600;
	font-size: 15px;
	text-transform: uppercase;
	line-height: 19px;
	color: var(--gray-color);
	transition: var(--trs-300);
	&:hover {
		background: var(--pink-color);
		color: var(--white-color);
	}
	&:active {
		box-shadow: var(--shadow-inset);
	}
}
button.primary-beige {
	background: var(--beige-back-color);
	border-radius: 10px;
	height: 50px;
	padding: 0 35px;
	text-align: center;
	font-weight: 600;
	font-size: 15px;
	text-transform: uppercase;
	line-height: 19px;
	color: var(--gray-color);
	transition: var(--trs-300);
	&:hover {
		background: var(--pink-color);
		color: var(--white-color);
	}
	&:active {
		box-shadow: var(--shadow-inset);
	}
}
button.secondary {
	background: var(--pink-light-back-color);
	border-radius: 10px;
	height: 50px;
	padding: 0 35px;
	display: flex;
	align-items: center;
	gap: 10px;
	text-align: center;
	font-weight: 600;
	font-size: 15px;
	text-transform: uppercase;
	line-height: 19px;
	transition: var(--trs-300);
	color: var(--gray-color);
	svg {
		path,
		line {
			transition: var(--trs-300);
		}
	}
	&:hover {
		background: var(--pink-color);
		color: var(--white-color);
		svg {
			path,
			line {
				stroke: var(--white-color);
			}
		}
	}
	&:active {
		box-shadow: var(--shadow-inset);
	}
}
button.burger {
	background: var(--white-color);
	border-radius: 10px;
	height: 45px;
	padding: 15px 20px;
	text-align: center;
	font-weight: 600;
	transition: var(--trs-300);
	svg {
		line {
			transition: var(--trs-300);
		}
	}
	&:hover {
		background: var(--pink-color);
		svg {
			line {
				stroke: var(--white-color);
			}
		}
	}
	&:active {
		box-shadow: var(--shadow-inset);
	}
}
button.burger-beige {
	background: var(--beige-back-color);
	border-radius: 10px;
	height: 45px;
	padding: 15px 20px;
	text-align: center;
	font-weight: 600;
	transition: var(--trs-300);
	svg {
		line {
			transition: var(--trs-300);
		}
	}
	&:hover {
		background: var(--pink-color);
		svg {
			line {
				stroke: var(--white-color);
			}
		}
	}
	&:active {
		box-shadow: var(--shadow-inset);
	}
}
button.square {
	border-radius: 10px;
	height: 50px;
	width: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: var(--trs-300);
	border: 1px solid var(--gray-color);
	svg {
		path {
			transition: var(--trs-300);
		}
	}
	&:hover {
		border-color: var(--pink-color);
		svg {
			path {
				stroke: var(--pink-color);
				fill: var(--pink-color);
			}
		}
	}
}
button.outline {
	border-radius: 10px;
	border: 1px solid var(--gray-color);
	height: 50px;
	padding: 0 35px;
	text-align: center;
	font-weight: 600;
	font-size: 15px;
	text-transform: uppercase;
	line-height: 19px;
	display: flex;
	align-items: center;
	gap: 10px;
	transition: var(--trs-300);
	color: var(--gray-color);
	svg {
		path {
			transition: var(--trs-300);
		}
	}
	&:hover {
		background: var(--pink-color);
		border-color: var(--pink-color);
		color: var(--white-color);
		svg {
			path {
				stroke: var(--white-color);
			}
		}
	}
	&:active {
		box-shadow: var(--shadow-inset);
	}
}
</style>
