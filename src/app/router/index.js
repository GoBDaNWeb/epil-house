import { createRouter, createWebHistory } from 'vue-router';

import { Certificate } from '@/pages/certificate';
import { Contacts } from '@/pages/contacts';
import { Equipments } from '@/pages/equipments';
import { Home } from '@/pages/home';
import { Price } from '@/pages/price';
import { Service } from '@/pages/service';
import { ServiceDirection } from '@/pages/service-direction';
import { Services } from '@/pages/services';
import { Specialists } from '@/pages/specialists';
import { Stocks } from '@/pages/stocks';
import { Training } from '@/pages/training';

import { PATH_PAGE } from '@/shared/config';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: PATH_PAGE.home,
			name: 'home',
			component: Home
		},
		{
			path: PATH_PAGE.services,
			name: 'services',
			component: Services
		},
		{
			path: PATH_PAGE.price,
			name: 'price',
			component: Price
		},
		{
			path: PATH_PAGE.contacts,
			name: 'contacts',
			component: Contacts
		},
		{
			path: PATH_PAGE.equipments,
			name: 'equipments',
			component: Equipments
		},
		{
			path: PATH_PAGE.stocks,
			name: 'stocks',
			component: Stocks
		},
		{
			path: PATH_PAGE.certificate,
			name: 'certificate',
			component: Certificate
		},
		{
			path: PATH_PAGE.specialists,
			name: 'specialists',
			component: Specialists
		},
		{
			path: `${PATH_PAGE.services}/:slug`,
			name: 'service-direction',
			component: ServiceDirection
		},
		{
			path: `${PATH_PAGE.services}/:slug/:slug`,
			name: 'service',
			component: Service
		},
		{
			path: PATH_PAGE.training,
			name: 'training',
			component: Training
		}
	]
});

export default router;
