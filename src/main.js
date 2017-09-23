
import Vue from 'vue'
import app from './app.vue'
import router from './router'
import { Swipe,SwipeItem,} from 'mint-ui';
import VueScroller from 'vue-scroller'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(VueScroller)
new Vue({
  el: '#app',
  render:h=>h(app),
  router
})
