import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import BookCity from '../views/BookCity.vue'
import Bookcase from '../views/Bookcase.vue'
import search from '../views/search.vue'
import classification from '../views/classification.vue'
import classlist from '../views/classification/classlist.vue'
import femaleclass from '../views/classification/femaleclass.vue'
import maleclass from '../views/classification/maleclass.vue'
import pictureclass from '../views/classification/pictureclass.vue'
import pressclass from '../views/classification/pressclass.vue'
import bookinfo1 from '../views/classification/bookinfo1.vue'
import bookinfo2 from '../views/classification/bookinfo2.vue'
// import bookinfo3 from '../views/classification/bookinfo3.vue'
import read from '../views/read/read.vue'
import ranking from '../views/ranking.vue'
import BookList from '../views/BookCity/booklist/BookList.vue'
import BookListDetails from '../views/BookCity/booklist/BookListDetails.vue'
import PersonalCenter from '../views/PersonalCenter/PersonalCenter.vue'
import Login from '../views/PersonalCenter/Login.vue'
import  Setting from '../views/PersonalCenter/Setting.vue'
import Feedback from  '../views/PersonalCenter/Feedback.vue'
import Finding from '../views/Finding.vue'






import bookinfo3 from '../views/classification/bookinfo3.vue'
import catalog from '../views/read/Catalog.vue'

Vue.use(VueRouter)

const routes = [
  {
      path:'/',
      redirect: '/BookCity'
  },
  {
    path: '/BookCity',
    // name: 'home',
    component:BookCity
  },
  {
    path: '/Bookcase',
    name: 'Bookcase',
    component:Bookcase
  },
  {
    path: '/Bookcase/search',
    name: 'search',
    component:search
  },
  {
    path: '/classification',
    name: 'classification',
    component:classification
  },
  {
    path: '/classlist/:name/:class',
    name: '/classlist',
    component:classlist
  },
  {
    path: '/femaleclass/:id/:num',
    name: '/femaleclass',
    component:femaleclass
  },
  {
    path: '/maleclass/:id/:num',
    name: '/maleclass',
    component:maleclass
  },
  {
    path: '/pictureclass/:id/:num',
    name: '/pictureclass',
    component:pictureclass
  },
  {
    path: '/pressclass/:id/:num',
    name: '/pressclass',
    component:pressclass
  },
  {
    path: '/bookinfo1/:id/:author',
    name: '/bookinfo1',
    component:bookinfo1
  },
  {
    path: '/bookinfo2/:id/:author',
    name: '/bookinfo2',
    component:bookinfo2
  },
  {
    path: '/read/:id',
    name: 'read',
    component:read
  },
  {
    path: '/ranking',
    name: 'ranking',
    component:ranking
  },
  {
    path:'/booklist',
    name: 'BookList',
    component: BookList
  },
  // {
  //   path: '/bookinfo3/:id/:author/:idx',
  //   name: '/bookinfo3',
  //   component:bookinfo3
  // },
  {
    path:'/BookListDetails/:id',
    name:'BookListDetails',
    component:BookListDetails
  },
  {
    path:'/PersonalCenter',
    name:'PersonalCenter',
    component:PersonalCenter
  },
  {
    path:'/Login',
    name:'Login',
    component:Login
  },
  {
    path:'/Setting',
    name:'Setting',
    component:Setting
  },
  {
    path:'/Feedback',
    name:'Feedback',
    component:Feedback
  },
{
  path:'/Finding',
  name:'Finding',
  component:Finding
},
{
  path: '/bookinfo3/:id/:author/:idx',
  name: '/bookinfo3',
  component:bookinfo3
},
{
  path: '/catalog/:id',
  name: 'catalog',
  component:catalog
},

  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
