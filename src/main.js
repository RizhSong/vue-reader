import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueRouter from 'vue-router'
import top from './components/top.vue'
import top1 from './components/top1.vue'
import bottom from './components/bottom.vue'
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui';
import { Search } from 'mint-ui';
import MintUI from 'mint-ui'
 //import { Tabbar, TabbarItem } from 'vant';
// // import { Popup } from 'vant';
// import { NavBar } from 'vant';
// import { Button } from 'vant';
// import { Swipe, SwipeItem } from 'vant';
// import { Tab, Tabs } from 'vant';
// import { Sidebar, SidebarItem } from 'vant';
// import { Icon } from 'vant';
// import { Rate } from 'vant';
// import { Tag } from 'vant';
// import { Row, Col } from 'vant';
// Vue.use(NavBar)
// Vue.use(Popup);
// Vue.use(Tabbar).use(TabbarItem);
// Vue.use(Button);
// Vue.use(Swipe).use(SwipeItem);
Vue.component(Search.name, Search);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
Vue.component('top', top);
Vue.component('top1', top1);
Vue.component('bottom', {bottom})
Vue.config.productionTip = false
// Vue.use(Sidebar);
// Vue.use(SidebarItem);
// Vue.use(Tab).use(Tabs);
 //Vue.use(Icon);
// Vue.use(Rate);
// Vue.use(Tag);
// Vue.use(Row).use(Col);
Vue.use(MintUI)
Vue.use(VueRouter)
Vue.component(Search.name, Search);
Vue.component(Header.name, Header);




import { Swipe, SwipeItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Actionsheet } from 'mint-ui';
 import "../lib/mui/css/mui.css"
import "../lib/mui/css/iconfont.css"
import "./font/iconfont.js"
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
Vue.component(Actionsheet.name, Actionsheet);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(VueRouter)
Vue.component(Search.name, Search);

Vue.component(Header.name, Header);


Vue.filter('wordParseInt', function (value) {
  if (!value) return ''
  
  return parseInt(value/1000) 
})
Vue.filter('wordToFixed', function (value) {
  if (!value) return ''
  
  return value.toFixed(1)
})
Vue.filter('wordCeil', function (value) {
  if (!value) return ''
  
  return Math.ceil(value);
})
new Vue({
  router,
  store,
  render: h => h(App),
  router:router
}).$mount('#app')



