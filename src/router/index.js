import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/user'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthView.vue')
    },
    {
      path: '/callback',
      name: 'callback',
      component: () => import('../views/Callback.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/Gallery.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: { requiresAuth: true },
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/new',
      name: 'new',
      meta: { requiresAuth: true },
      component: () => import('../views/AddImgView.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  const store = useUserStore()
  if (to.meta.requiresAuth && !store.id) {
    return {
      path: '/auth',
      query: {
        redirect: to.fullPath
      }
    }
  }
})

export default router
