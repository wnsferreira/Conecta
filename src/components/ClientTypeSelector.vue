<template>
  <form class="row g-3 needs-validation" novalidate>
    <div class="col-md-6">
      <div class="form-check form-check-inline">
        <input
          v-model="partner"
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="true"
        />
        <label class="form-check-label" for="inlineRadio1">Parceiro</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          v-model="partner"
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="false"
          @change="check($event)"
        />
        <label class="form-check-label" for="inlineRadio2">Cliente</label>
      </div>
    </div>
    <SignUpClient v-if="!partner" />
    <SignUpPartner v-else />
  </form>
</template>

<script>
import SignUpPartner from "./SignUpPartner.vue";
import SignUpClient from "./SignUpClient.vue";

export default {
  name: "ClientTypeSelector",
  components: { SignUpClient, SignUpPartner },
  data() {
    return {
      partner: false,
    };
  },
  methods: {
    check() {
        location.reload()
    },
  },

};

</script>