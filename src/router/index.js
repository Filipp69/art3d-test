import { createRouter, createWebHistory } from 'vue-router';
import ChartPage from '../pages/ChartPage.vue'
import FormPage from '../pages/FormPage.vue'

const routes = [
  {
    path: '/',
    name: 'chart',
    component: ChartPage
  },
  {
    path: '/form',
    name: 'form',
    component: FormPage
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})