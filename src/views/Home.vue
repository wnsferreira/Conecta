<template>
	<NavVue />
  <main>
	<section>
		<Hero />
	</section>
    <section id="filter-content">
      <h2 class="m-4">Categorias</h2>
        <div id="filter-btns">
          <button @click="this.categoria = 'Hotelaria'" type="button" class="categ-btn btn btn-lg btn-outline-primary m-2 col-2">
            Hotelaria
          </button>
          <button @click="this.categoria = 'Gastronomia'" type="button" class="categ-btn btn btn-lg btn-outline-primary m-2 col-2">
            Gastronomia
          </button>
          <button @click="this.categoria = 'Guia'" type="button" class="categ-btn btn btn-lg btn-outline-primary m-2 col-2">
            Guia Turístico
          </button>
          <button @click="this.categoria = 'Transporte'" type="button" class="categ-btn btn btn-lg btn-outline-primary m-2 col-2">
            Transporte
          </button>
        </div>
          <button @click="this.categoria = ''" type="button" class="categ-btn btn btn-lg btn-outline-secondary m-2 col-2">
            limpar filtro
          </button>
    </section>
    <section>
		<button @click="$router.push('sorte')" type="button" class="categ-btn btn btn-lg btn-success m-3 w-25">
			Estou com Sorte
		</button>
    </section>
    <section>
      <h2 class="m-4">Serviços</h2>
      <div v-if="this.categoria == 'Hotelaria'" class="d-flex flex-wrap justify-content-center mb-5">
		<Card v-for="c in filterCategory" :card="c" :key="c.id" />
      </div>
      <div v-else-if="this.categoria == 'Guia'" class="d-flex flex-wrap justify-content-center mb-5">
		<Card v-for="c in filterCategory" :card="c" :key="c.id" />
      </div>
      <div v-else-if="this.categoria == 'Transporte'" class="d-flex flex-wrap justify-content-center mb-5">
		<Card v-for="c in filterCategory" :card="c" :key="c.id" />
      </div>
      <div v-else-if="this.categoria == 'Gastronomia'" class="d-flex flex-wrap justify-content-center mb-5">
		<Card v-for="c in filterCategory" :card="c" :key="c.id" />
      </div>
      <div v-else class="d-flex flex-wrap justify-content-center mb-5">
		<Card v-for="c in listCards" :card="c" :key="c.id" />
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
	name: 'Home',
	components: { NavVue, Hero, Card, FooterVue },
	data() {
		return {
			categoria: ''	
		}
	},
	computed: {
    listCards() {
		return this.$store.getters.getServices
    }, 
	filterCategory() {
		let makeThisFilter = this.listCards
		return  makeThisFilter.filter(c => c.service == this.categoria)
		}
	},
}
</script>

<style scoped>

@media (max-width: 992px){
  #filter-btns {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .categ-btn{
    width: 45% !important;
  }
}

</style>
