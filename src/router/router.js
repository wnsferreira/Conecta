import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Sorte from '../views/Sorte.vue'
import Cadastro from '../views/Cadastro.vue'
import Login from '../views/Login.vue'


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
	{
		path: '/cadastro',
		name: 'cadastro',
		component: Cadastro
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	},
]
const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
  })

export default router