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
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: () => import('../views/ForgotView.vue')
    },
    {
      path: '/reset',
      name: 'reset',
      component: () => import('../views/ResetView.vue')
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
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      meta: {
        title: '無頁面'
      },
      component: () => import('../views/404.vue')
    },
  ]
})

router.beforeEach((to, from) => {
  const store = useUserStore()
  if (to.meta.requiresAuth && !store.id) {
    return {
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    }
  }
})

export default router
