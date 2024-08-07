import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Multiselect from 'vue-multiselect'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faBusinessTime,
  faDownload,
  faChevronDown,
  faSearch,
  faPlay,
  faBackward,
  faForward
} from '@fortawesome/free-solid-svg-icons'
import { faCalendar, faEdit } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(
  faBusinessTime,
  faDownload,
  faChevronDown,
  faCalendar,
  faSearch,
  faEdit,
  faPlay,
  faBackward,
  faForward
)

const app = createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('vue-multiselect', Multiselect)

app.use(createPinia())
app.use(router)

app.mount('#app')
