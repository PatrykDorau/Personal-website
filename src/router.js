import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '',
    name: 'Welcome',
    component: () => import('@/components/WelcomePage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/components/About.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('@/components/Portfolio.vue')
  },
  {
    path: '/portfolio/:name',
    name: 'PortfolioElement',
    props: true,
    component: () => import('@/components/PortfolioElement.vue')
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('@/components/Skills.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/components/Contact.vue')
  },
]
const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router