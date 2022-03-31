<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="" style="width: 30px" />
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
            <a class="nav-link" href="#"
              ><i class="fa-solid fa-user-plus"></i>Signup</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><i class="fa-solid fa-right-to-bracket"></i>Signin</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main>
    <section>
      <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/a.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../assets/b.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../assets/c.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <section>
      <h2>Categorias</h2>
      <button type="button" class="btn-lg btn-outline-primary me-2">
        Hotelaria
      </button>
      <button type="button" class="btn-lg btn-outline-warning me-2">
        Gastronomia
      </button>
      <button type="button" class="btn-lg btn-outline-success me-2">
        Guia Turístico
      </button>
      <button type="button" class="btn-lg btn-outline-danger">
        Transporte
      </button>
    </section>
    <section>
      <button type="button" class="btn-lg btn-outline-primary mt-3">
        Estou com Sorte
      </button>
    </section>
    <section>
      <h2>Serviços</h2>
      <div class="d-flex flex-wrap justify-content-center">
        <div class="card mb-3 me-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="../assets/cardimg.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3 me-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="../assets/cardimg.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3 me-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="../assets/cardimg.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3 me-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="../assets/cardimg.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3 me-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="../assets/cardimg.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3 me-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="../assets/cardimg.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  </main>
  <footer>
    <div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias saepe, labore iusto voluptates.</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
