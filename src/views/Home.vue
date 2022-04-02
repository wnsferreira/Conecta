<template>
	<NavVue />
  <main>
	<section>
		<Hero />
	</section>
    <section>
      <h2 class="m-4">Categorias</h2>
        <div>
          <button type="button" class="btn btn-lg btn-outline-primary m-2 col-2">
            Hotelaria
          </button>
          <button type="button" class="btn btn-lg btn-outline-primary m-2 col-2">
            Gastronomia
          </button>
          <button type="button" class="btn btn-lg btn-outline-primary m-2 col-2">
            Guia Turístico
          </button>
          <button type="button" class="btn btn-lg btn-outline-primary m-2 col-2">
            Transporte
          </button>
        </div>
    </section>
    <section>
		<button @click="$router.push('sorte')" type="button" class="btn btn-lg btn-success m-3 w-25">
			Estou com Sorte
		</button>
    </section>
    <section>
      <h2 class="m-4">Serviços</h2>
      <div class="d-flex flex-wrap justify-content-center mb-5">
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
      </div>
    </section>
  </main>
  <footer>
	<FooterVue />
  </footer>
</template>

<script>
import NavVue from '../components/Nav.vue'
import Hero from '../components/Hero.vue'
import Card from '../components/Card.vue'
import FooterVue from '../components/FooterVue.vue'

export default {
	components: { NavVue, Hero, Card, FooterVue }
}
</script>

<style scoped>
</style>
