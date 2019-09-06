import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MoviePage from '../components/pages/movie/MoviePage'
import CityList from '../components/CityList'
import Cinema from '../components/pages/cinema/Cinema'
import Mine from '../components/pages/my/Mine'
import Cinemadetail from '../components/pages/cinema/Cinemadetail'
import Movieinfo from '../components/pages/movie/Movieinfo'
import MovieDetail from '../components/pages/movie/MovieDetail'
import ComingList from '../components/pages/movie/ComingList'
import Search from '../components/Search'
import Map from '../components/pages/cinema/Map'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MoviePage',
      component: MoviePage
    },
     {
       path: '/citylist',
       name: 'CityList',
       component: CityList
     },
    {
      path: '/search',
      name: 'Search',
      component: Search,

    },
     {
       path: '/cinema',
       name: 'Cinema',
       component: Cinema
     },
     {
       path: '/my',
       name: 'Mine',
       component: Mine
     },
      {
        path: '/moviepage',
        name: 'MoviePage',
        component: MoviePage,
      }, 
      {
        path: '/movieinfo/:name/:id',
        name: 'Movieinfo',
        component: Movieinfo,
      },
      {
        path: '/movieinfo/:name/:id/moviedetail',
        name: 'MovieDetail',
        component: MovieDetail
      },
      {
        path: '/cinemadetail/:name/:id',
        name: 'Cinemadetail',
        component: Cinemadetail,
       
      },
 
      {
        path: '/cominglist',
        name: 'ComingList',
        component: ComingList,

      },
      {
        path: '/mapPage',
        name: 'Map',
        component: Map,
  
      },
        
  ]
})
