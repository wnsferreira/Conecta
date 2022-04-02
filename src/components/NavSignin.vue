<template>
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
        <ul class="navbar-nav mb-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Contato</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Ajuda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" 
              ><i class="fa-solid fa-user-chef" style="color:#007bc3"></i>NomeUsuario</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="$router.push('/')"
              ><i class="fa-solid fa-arrow-right-from-bracket" style="color:#007bc3"></i>Sair</a
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

  data() {
    return {
      isShow: false
    }
  }
	
}
</script>