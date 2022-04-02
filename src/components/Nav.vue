<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"  @click="$router.push('/')">
        <img src="../assets/Logo-Conecta-Hor.svg" alt="" style="height: 35px" />
      </a>
      <!-- <span class="navbar-toggler-icon"></span> -->
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
      </div>
    </div>
  </nav>
</template>
<script>
export default {
	name: "NavVue",
	
}
</script>