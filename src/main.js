
import Vue from 'vue'
import app from './app.vue'
import router from './router'
import { Swipe,SwipeItem, MessageBox, Button } from 'mint-ui';
import VueScroller from 'vue-scroller'


Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(MessageBox.name,MessageBox)
Vue.use(VueScroller)
new Vue({
  el: '#app',
  render:h=>h(app),
  router
})
