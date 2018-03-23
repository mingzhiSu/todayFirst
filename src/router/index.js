import Vue from 'vue'
import Router from 'vue-router'
import contents from '@/components/contents/contents'
import videos from '@/components/videos/videos'
import wtit from '@/components/wtit/wtit'
import litvideo from '@/components/litvideo/litvideo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'contents',
      component: contents
    },
    {
      path: '/videos',
      name: 'videos',
      component: videos
    },
      {
      path: '/wtit',
      name: 'wtit',
      component: wtit
    },
      {
      path: '/litvideo',
      name: 'litvideo',
      component: litvideo
    }
  ]
})
