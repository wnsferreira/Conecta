<template>
  <form class="row g-3 needs-validation" novalidate>
    <div class="col-md-6">
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
        <label class="form-check-label" for="inlineRadio1">Cliente</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
        <label class="form-check-label" for="inlineRadio2">Parceiro</label>
      </div>
    </div>
      <div class="col-md-6">
        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
          <option selected>Tipo de Serviço</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
                          <div class="col-md-6">
                          <label for="validateName" class="form-label">Nome da Empresa</label>
                          <input type="text" class="form-control" id="validationCustom01" value="" required>
                          <div class="valid-feedback">
                            Looks good!
                          </div>
                        </div>
                        <div class="col-md-6">
                          <label for="validateCPF" class="form-label">CNPJ</label>
                          <input type="text" class="form-control" id="validationCustom02" value="" required>
                          <div class="valid-feedback">
                            Looks good!
                          </div>
                        </div>
                        <div class="col-md-6">
                          <label for="validateEmail" class="form-label">E-Mail</label>
                            <input type="email" class="form-control" id="validationCustom02" value="" required>
                            <div class="invalid-feedback">
                              Please choose a username.
                            </div>
                          </div>
                        <div class="col-md-6">
                          <label for="validationCustom03" class="form-label">Telefone de Contato</label>
                          <input type="text" class="form-control" id="validationCustom03" required>
                          <div class="invalid-feedback">
                            Please provide a valid city.
                          </div>
                        </div>
                        <div class="col-md-6">
                          <label for="validationCustom04" class="form-label">Senha</label>
                            <input type="password" class="form-control" id="validationCustom03" required>
                          <div class="invalid-feedback">
                            Please select a valid state.
                          </div>
                        </div>
                        <div class="col-md-6">
                          <label for="validationCustom05" class="form-label">Confirmar Senha</label>
                          <input type="password" class="form-control" id="validationCustom03" required>
                          <div class="invalid-feedback">
                            Please provide a valid zip.
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
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
  name: "SignUpPartner"
};
</script>