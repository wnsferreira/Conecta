<template>
	<ul class="navbar-nav mb-auto mb-2 mb-lg-0">
		<li class="nav-item">
			<a class="nav-link active" aria-current="page" href="#">Contato</a>
			</li>
			<li class="nav-item">
			<a class="nav-link" href="#">Ajuda</a>
			</li>
			<li class="nav-item">
			<a class="nav-link" href="#" @click="$router.push('/cadastro')"
				><i class="fa-solid fa-user-plus me-2" style="color:#007bc3"></i>Cadastro</a
			>
			</li>
			<li class="nav-item">
			<a class="nav-link" href="#" @click="$router.push('/login')"
				><i class="fa-solid fa-right-to-bracket me-2" style="color:#007bc3"></i>Login</a
			>
		</li>
	</ul> 
</template>

<script>
	export default {
		name: 'Deslogado'
		
	}
</script>

<style scoped>

</style>