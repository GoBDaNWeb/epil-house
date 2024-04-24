import { PATH_PAGE } from '@/shared/config';

export const services = [
	{
		img: '/images/services/1.jpg',
		title: 'Инъекционная косметология',
		url: `${PATH_PAGE.services}/injectable-cosmetology`,
		list: [
			{ title: 'Биоревитализация', url: '/' },
			{ title: 'Мезотерапия', url: '/' },
			{ title: 'Увеличение губ', url: '/' },
			{ title: 'Ботулинотерапия (ботокс)', url: '/' },
			{ title: 'Плазмотерапия', url: '/' }
		]
	},
	{
		img: '/images/services/2.jpg',
		title: 'Эстетическая косметология',
		url: `${PATH_PAGE.services}/aesthetic-cosmetology`,
		list: [
			{ title: 'Пилинги', url: '/' },
			{ title: 'Уходовые процедуры', url: '/' },
			{ title: 'Чистка лица', url: '/' },
			{ title: 'Массаж лица', url: '/' }
		]
	},
	{
		img: '/images/services/3.jpg',
		title: 'Аппаратная косметология',
		url: `${PATH_PAGE.services}/hardware-cosmetology`,
		list: [
			{ title: 'LPG-массаж', url: '/' },
			{ title: 'Фотоомоложение', url: '/' },
			{ title: 'RSL-массаж', url: '/' },
			{ title: 'Прессотерапия', url: '/' },
			{ title: 'RF-лифтинг', url: '/' },
			{ title: 'Микротоки', url: '/' },
			{ title: 'SMAS-лифтинг', url: '/' },
			{ title: 'Кавитация', url: '/' }
		]
	},
	{
		img: '/images/services/4.jpg',
		title: 'эпиляция',
		url: `${PATH_PAGE.services}/hair-removal`,
		list: [
			{ title: 'Лазерная эпиляция', url: '/' },
			{ title: 'Шугаринг / воск', url: '/' },
			{ title: 'Электроэпиляция', url: '/' },
			{ title: 'Skins', url: '/' }
		]
	}
];

export const additionServices = [
	{
		text: 'ногтевой сервис',
		img: '/images/home/services/5.png',
		url: '/'
	},
	{
		text: 'РЕСНИЦЫ И БРОВИ',
		img: '/images/home/services/6.png',
		url: '/'
	},
	{
		text: 'МАССАЖ',
		img: '/images/home/services/7.png',
		url: '/'
	}
];
