import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Sorte from '../views/Sorte.vue'


const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/sorte',
		name: 'sorte',
		component: Sorte
	},
]
const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
  })

export default router