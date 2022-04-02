<template>
  <form @submit.prevent="addUser" class="row g-3 needs-validation" novalidate>
      <div class="col-md-6">
        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
          <option selected>Tipo de Serviço</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
                          <div class="col-md-6">
                          <label for="validateName" class="form-label">Nome Completo</label>
                          <input v-model="form.name" type="text" class="form-control" id="validationCustom01" required>
                          <div class="valid-feedback">
                            Looks good!
                          </div>
                        </div>
                        <div class="col-md-6">
                          <label for="validateCPF" class="form-label">CPF</label>
                          <input v-model="form.cpf" type="text" class="form-control" id="validationCustom02" required>
                          <div class="valid-feedback">
                            Looks good!
                          </div>
                        </div>
                        <div class="col-md-6">
                          <label for="validateEmail" class="form-label">E-Mail</label>
                            <input v-model="form.email" type="email" class="form-control" id="validationCustom03" required>
                            <div class="invalid-feedback">
                              Please choose a username.
                            </div>
                          </div>
                        <div class="col-md-6">
                          <label for="validationCustom03" class="form-label">Celular</label>
                          <input v-model="form.phone" type="text" class="form-control" id="validationCustom04" required>
                          <div class="invalid-feedback">
                            Please provide a valid city.
                          </div>
                        </div>
                        <div class="col-md-6">
                          <label for="validationCustom04" class="form-label">Senha</label>
                            <input v-model="form.password" type="password" class="form-control" id="validationCustom05" required>
                          <div class="invalid-feedback">
                            Please select a valid state.
                          </div>
                        </div>
                        <div class="col-md-6">
                          <label for="validationCustom05" class="form-label">Confirmar Senha</label>
                          <input v-model="form.password" type="password" class="form-control" id="validationCustom06" required>
                          <div class="invalid-feedback">
                            Please provide a valid zip.
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-check">
                            <input v-model="form.agreement" class="form-check-input" type="checkbox" id="invalidCheck" required>
                            <label class="form-check-label" for="invalidCheck">
                              Li e estou de acordo com os termos.
                            </label>
                            <div class="invalid-feedback">
                              You must agree before submitting.
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <button class="btn btn-primary" type="submit">Confirmar</button>
                        </div>
                      </form>
</template>

<script>
export default {
  name: "SignUpClient",
  data() {
    return {
      form: {
        name: "",
        cpf: "",
        email: "",
        phone: "",
        password: "",
        agreement: "",
      }
    }
  },
  methods: {
    addUser() {
      this.$store.dispatch('commitUser', {
        name:this.form.name,
        cpf:this.form.cpf,
        email:this.form.email,
        phone:this.form.phone,
        password:this.form.password,
        agreement:this.form.agreement,
      })
      this.$router.push('/usuarios')
    },
  }
}
</script>