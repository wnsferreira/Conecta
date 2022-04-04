<template>
  <ToggleNav id="navbarToggleExternalContent" />
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"  @click="$router.push('/')">
        <img src="../assets/Logo-Conecta-Hor.svg" alt="" style="height: 35px" />
      </a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mb-auto me-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" @click="$router.push('/')">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="$router.push('/sorte')">Estou com Sorte</a>
          </li>
        </ul>
        <form class="d-flex me-auto w-50">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Digite o que procura"
            aria-label="Busca"
          />
          <button class="btn btn-outline-primary" type="submit">Buscar</button>
        </form>
          <Deslogado v-if="userState" />
          <Logado v-else />
      </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    </div>
  </nav>
</template>
<script>
import Logado from './Logado.vue'
import Deslogado from './Deslogado.vue'
import ToggleNav from './ToggleNav.vue'
export default {
	name: "NavVue",
  components: { Logado, Deslogado, ToggleNav },

  methods: {
    userState() {
      return this.$store.isLogged
    }
  }
	
}
</script>

<style scoped>

</style>