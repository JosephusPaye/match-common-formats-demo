import 'focus-visible';
import './index.css';

import * as emojicon from 'emojicon';
import { createApp } from 'vue';

import App from './App.vue';

emojicon.set('🔎');

createApp(App).mount('#app');
