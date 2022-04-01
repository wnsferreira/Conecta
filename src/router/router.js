import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Sorte from '../views/Sorte.vue'
import Cadastro from '../views/Cadastro.vue'
import Usuarios from '../components/Usuarios.vue'


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
		path: '/usuarios',
		name: 'usuarios',
		component: Usuarios
	},
]
const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
  })

export default router