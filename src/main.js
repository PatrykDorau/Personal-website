import { createApp } from 'vue'
import App from './App.vue'
import {MotionPlugin} from '@vueuse/motion'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add( fas )


const app = createApp(App);

app.use(MotionPlugin);

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
