<template>
	<div class="collapse container">
		<ul class="navbar-nav mb-auto me-3">
			<li class="nav-item">
			<a class="nav-link active" aria-current="page" href="#" @click="$router.push('/')">Home</a>
			</li>
			<li class="nav-item">
			<a class="nav-link" href="#" @click="$router.push('/sorte')">Estou com Sorte</a>
			</li>
			<Deslogado />
		</ul>
	</div>
</template>

<script>
import Deslogado from './Deslogado.vue'
	export default {
		name: 'ToggleNav',
		components: { Deslogado }
	}
</script>

<style scoped>

</style>