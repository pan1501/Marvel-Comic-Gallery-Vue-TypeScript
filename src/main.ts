import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowLeft)
library.add(faSearch)

createApp(App)
  .use(store)
  .component('faArrowLeft', faArrowLeft)
  .component('faSearch', faSearch)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
