<template>
	<NavVue />
	<main>
		<section class="container">
			<div id="sorte-content" class="row align-items-center d-flex flex-wrap">
				<h2>Sugestões Perto de Você</h2>
				<div class="col">
					<h3>Hospedagem</h3>
					<div v-if="this.categoria == 'Hotelaria'" class="d-flex flex-wrap justify-content-center mb-5">
						<Card v-for="c in filterCategory" :card="c" :key="c.id" />
					</div>
				</div>
				<div class="col">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.274614911874!2d-43.181127484401806!3d-22.9032397435039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5e7db1b2d3%3A0x4f7d475eaa18788f!2sR.%20do%20Ros%C3%A1rio%2C%20128%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020041-002!5e0!3m2!1spt-BR!2sbr!4v1637536468497!5m2!1spt-BR!2sbr" width="620" height="570" allowfullscreen="" loading="lazy"></iframe>
					<button class="btn btn-danger" @click="$router.push('/')">
						Voltar	
					</button>
				</div>
			</div>
		</section>
		<section>

		</section>
	</main>
	<FooterVue />
</template>

<script>
import NavVue from '../components/Nav.vue'
import Card from '../components/Card.vue'
import FooterVue from '../components/FooterVue.vue';
	export default {
		components: { NavVue, Card, FooterVue},
		data() {
			return {
				categoria: 'Hotelaria'	
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

@media (max-width: 960px ) {
 #sorte-content{
	display: flex;
	flex-direction:column;
 } 
 
 iframe {
	width: 100%;
  }
}
</style>