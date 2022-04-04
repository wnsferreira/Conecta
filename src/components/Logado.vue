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
			><i class="fa-solid fa-user me-2" style="color:#007bc3"></i>Usuário</a
		>
		</li>
		<li class="nav-item">
		<a class="nav-link" href="#" @click="logout"
			><i class="fa-solid fa-arrow-right-from-bracket me-2" style="color:#007bc3"></i>Sair</a
		>
		</li>
	</ul>
</template>

<script>
	export default {
		name: "Logado",
		methods: {
			logout() {
				this.$store.dispatch('commitLogin') 
				window.alert('Usuario deslogado!')
				return this.$router.push('/') 
			},
			
		}
	}
</script>

<style scoped>

</style>