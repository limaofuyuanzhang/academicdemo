import { createRouter, createWebHistory } from 'vue-router'
import Editor from '../views/Editor.vue'
import Assistant from '../views/Assistant.vue'
import Other from '../views/Other.vue'
import Account from '../views/Account.vue'
import Report from '../views/Report.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/editor'
    },
    {
      path: '/editor',
      component: Editor
    },
    {
      path: '/assistant',
      component: Assistant
    },
    {
      path: '/other',
      component: Other
    },
    {
      path: '/account',
      component: Account
    },
    {
      path: '/report',
      component: Report
    }
  ]
})

export default router
