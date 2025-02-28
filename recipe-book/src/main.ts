import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import localSynchroPlugin from '@/plugins/pinia/localSynchroPlugin'

import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia()

app.use(pinia);
app.use(router);
pinia.use(localSynchroPlugin)

app.mount('#app');
