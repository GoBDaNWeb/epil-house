import { PATH_PAGE } from '@/shared/config';

export const services = [
	{
		img: '/images/services/1.jpg',
		title: 'Инъекционная косметология',
		url: `${PATH_PAGE.services}/injectable-cosmetology`,
		list: [
			{
				title: 'Биоревитализация',
				url: `${PATH_PAGE.services}/injectable-cosmetology/biorevitalization`
			},
			{ title: 'Мезотерапия', url: `${PATH_PAGE.services}/injectable-cosmetology/mesotherapy` },
			{
				title: 'Увеличение губ',
				url: `${PATH_PAGE.services}/injectable-cosmetology/lip-augmentation`
			},
			{
				title: 'Ботулинотерапия (ботокс)',
				url: `${PATH_PAGE.services}/injectable-cosmetology/botulinum-therapy`
			},
			{ title: 'Плазмотерапия', url: `${PATH_PAGE.services}/injectable-cosmetology/plasma-therapy` }
		]
	},
	{
		img: '/images/services/2.jpg',
		title: 'Эстетическая косметология',
		url: `${PATH_PAGE.services}/aesthetic-cosmetology`,
		list: [
			{ title: 'Пилинги', url: `${PATH_PAGE.services}/aesthetic-cosmetology/peels` },
			{
				title: 'Уходовые процедуры',
				url: `${PATH_PAGE.services}/aesthetic-cosmetology/care-procedures`
			},
			{ title: 'Чистка лица', url: `${PATH_PAGE.services}/aesthetic-cosmetology/facial-cleansing` },
			{ title: 'Массаж лица', url: `${PATH_PAGE.services}/aesthetic-cosmetology/facial-massage` }
		]
	},
	{
		img: '/images/services/3.jpg',
		title: 'Аппаратная косметология',
		url: `${PATH_PAGE.services}/hardware-cosmetology`,
		list: [
			{ title: 'LPG-массаж', url: `${PATH_PAGE.services}/hardware-cosmetology/LPG-massage` },
			{
				title: 'Фотоомоложение',
				url: `${PATH_PAGE.services}/hardware-cosmetology/photo-rejuvenation`
			},
			{ title: 'RSL-массаж', url: `${PATH_PAGE.services}/hardware-cosmetology/RSL-massage` },
			{ title: 'Прессотерапия', url: `${PATH_PAGE.services}/hardware-cosmetology/pressotherapy` },
			{ title: 'RF-лифтинг', url: `${PATH_PAGE.services}/hardware-cosmetology/RF-lifting` },
			{ title: 'Микротоки', url: `${PATH_PAGE.services}/hardware-cosmetology/microcurrents` },
			{ title: 'SMAS-лифтинг', url: `${PATH_PAGE.services}/hardware-cosmetology/SMAS-lifting` },
			{ title: 'Кавитация', url: `${PATH_PAGE.services}/hardware-cosmetology/cavitation` }
		]
	},
	{
		img: '/images/services/4.jpg',
		title: 'эпиляция',
		url: `${PATH_PAGE.services}/hair-removal`,
		list: [
			{ title: 'Лазерная эпиляция', url: `${PATH_PAGE.services}/hair-removal/laser-hair-removal` },
			{ title: 'Шугаринг / воск', url: `${PATH_PAGE.services}/hair-removal/sugaring-wax` },
			{ title: 'Электроэпиляция', url: `${PATH_PAGE.services}/hair-removal/electroepilation` },
			{ title: 'Skins', url: `${PATH_PAGE.services}/hair-removal/skins` }
		]
	}
];

export const additionServices = [
	{
		text: 'ногтевой сервис',
		img: '/images/home/services/5.png',
		url: `${PATH_PAGE.services}/nail service`
	},
	{
		text: 'РЕСНИЦЫ И БРОВИ',
		img: '/images/home/services/6.png',
		url: `${PATH_PAGE.services}/eyelashes-and-etebrows`
	},
	{
		text: 'Массаж',
		img: '/images/home/services/7.png',
		url: `${PATH_PAGE.services}/massage`
	}
];
