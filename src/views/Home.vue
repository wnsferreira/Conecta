<template>
	<NavVue />
  <main>
	<section>
		<Hero />
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
		<button @click="$router.push('sorte')" type="button" class="btn-lg btn-outline-primary mt-3">
			Estou com Sorte
		</button>
    </section>
    <section>
      <h2>Serviços</h2>
      <div class="d-flex flex-wrap justify-content-center">
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
import FooterVue from '../components/FooterVue.vue';
export default {
	components: { NavVue, Hero, Card, FooterVue }
}
</script>

<style scoped>
</style>
