import { createApp } from 'vue';
// import VueAwesomeSwiper from 'vue-awesome-swiper';
// import 'swiper/css/swiper.css'
import 'lib-flexible';
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App);
app.config.globalProperties.$http = () => {
    console.log(1234,"http")
}
app.use(router).use(store).mount('#app')
