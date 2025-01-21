import { createApp } from 'vue'
import './defaultStyle.css'
import App from './App.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiLinkedin, MdEmail } from "oh-vue-icons/icons";

addIcons(BiLinkedin, MdEmail);

const app = createApp(App);
app.component('v-icon', OhVueIcon);
app.mount('#app');
