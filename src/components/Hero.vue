<template>
<div id="hero" class="d-flex justify-content-center align-items-center flex-wrap">
  <div id="box-hero" class="w-75 h-75 row pe-lg-0 pt-lg-5 rounded-3 border shadow-lg bg-light">
      <div id="hero-img" class="col-lg-4 p-2 mb-3">
          <img class="w-50 align-middle" src="../assets/Logo-Conecta.svg" alt="" max-width="720">
      </div>
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3" id="hero-content">
        <div id="hero-text">
        <h1 id="title-conecta" class="display-4 fw-bold lh-1">Chegou o Conecta</h1>
        <p class="lead" id="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur libero amet ex asperiores, vero veniam! Consequuntur cum aspernatur fugiat atque necessitatibus quidem ea! Praesentium labore officiis repellendus.</p>
        </div>
        <div id="hero-btns" class="d-grid gap-2 d-md-flex justify-content-center m-5">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2" @click="$router.push('/cadastro')">Cadastre-se</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4" @click="$router.push('/login')">Faça Login</button>
        </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
@media (max-width: 1199px) {
  #desc {
    display: none;
  }

  #title-conecta{
    font-size: 2rem;
  }

  #hero-btns{
    display: flex !important;
    flex-direction: row;
    margin: 25px 0 0 0 !important;
  }
}
  
@media (max-width: 960px ) {
  #hero-text {
    display: none;
  }

  #hero-img{
    display: none;
  }

  #hero{
    height: 200px;
    overflow: hidden;
  }

  #hero-btns{
    display: flex !important;
    flex-direction: row;
  }

  #box-hero{
    background-color: rgba(255, 255, 255, 0) !important;
    border: none !important;
    box-shadow: none !important;
  }

  #box-hero .btn-outline-secondary{
    color: #ffffff;
    border: 1px solid #ffffff;
  }

}
 #hero{
   background-image: url('../assets/HeroImg.jpg');
   background-repeat: no-repeat;
   background-size: 100%;
 }

 #box-hero{
   opacity: 0.90;
   margin: 40px 0px !important;
 }
</style>