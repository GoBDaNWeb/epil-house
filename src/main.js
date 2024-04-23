import App from './app/App.vue';
import { createApp } from 'vue';
import VueTheMask from 'vue-the-mask';

import { createPinia } from 'pinia';

import router from './app/router';
import './shared/styles/index.scss';

const app = createApp(App);
app.use(VueTheMask);

app.use(createPinia());
app.use(router);

app.mount('#app');
