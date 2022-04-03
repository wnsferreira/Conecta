<template>
  <div class="card mb-3 me-3" style="max-width: 540px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="card.image"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{card.name}}</h5>
          <p class="card-text">{{card.abstract}}</p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
			<span class="badge bg-danger">{{ card.service }}</span>
			<span class="badge bg-info text-dark">{{ card.local }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'Card',
	props: ["card"]
}
</script>

<style scoped>
</style>