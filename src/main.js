import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/index.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
  confirmButtonColor: '#527853',
  cancelButtonColor: '#527853',
};

createApp(App).use(VueSweetalert2, options).use(store).use(router).mount('#app')
