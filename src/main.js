import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import "primevue/resources/primevue.min.css";

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
