<template>
	<ul class="navbar-nav mb-auto mb-2 mb-lg-0">
		<li class="nav-item">
		<a class="nav-link active" aria-current="page" href="#">Contato</a>
		</li>
		<li class="nav-item">
		<a class="nav-link" href="#">Ajuda</a>
		</li>
		<li class="nav-item">
		<a class="nav-link" href="#" 
			><i class="fa-solid fa-user me-2" style="color:#007bc3"></i>User</a
		>
		</li>
		<li class="nav-item">
		<a class="nav-link" href="#" @click="$router.push('/')"
			><i class="fa-solid fa-arrow-right-from-bracket me-2" style="color:#007bc3"></i>Sair</a
		>
		</li>
	</ul>
</template>

<script>
	export default {
		name: "Logado"
		
	}
</script>

<style scoped>

</style>