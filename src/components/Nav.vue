<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/Logo-Conecta.png" alt="" style="width: 30px" />
      </a>
      <!-- <span class="navbar-toggler-icon"></span> -->
      <div class="collapse navbar-collapse">
        <form class="d-flex me-auto">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
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
              ><i class="fa-solid fa-user-plus"></i>Signup</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="$router.push('/login')"
              ><i class="fa-solid fa-right-to-bracket"></i>Signin</a
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