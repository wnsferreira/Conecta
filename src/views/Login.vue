<template>
    <NavVue/>
    <div class="col img-container">
        <img id="login-img" src="../assets/LoginImg.jpg">
    </div>
    <main class="container">
        <div class="row justify-content-center">
                <div class="col-6">
                    <form @submit.prevent="logar">
                            <h1 class="h3 m-4 fw-normal">Faça Login</h1>

                            <div class="form-floating m-3">
                                <input type="email" class="form-control" v-model="email" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating m-3">
                                <input type="password" class="form-control" v-model="password" id="floatingPassword" placeholder="Password">
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div class="checkbox m-3">
                                <label>
                                <input type="checkbox" value="remember-me"> Lembrar
                                </label>
                            </div>
                            <div class="d-flex flex-column align-items-center">
                                <button class="w-50 btn btn-lg btn-primary m-2" type="submit">Entrar</button>
                                <button class="w-30 btn btn-md btn-link" type="button" @click="$router.push('/')">Voltar</button>
                            </div>
                    </form>
                </div>
            </div>
    </main>
    <FooterVue />
</template>

<script>
import NavVue from '../components/Nav.vue'
import FooterVue from '../components/FooterVue.vue';

export default {
    
    components: { NavVue, FooterVue },

    data() {
        return{
            email: "",
            password: ""
        } 
    },

    methods: {
        logar() {
 
            let users = [] 
            let partners = []
            let allUsers = []

            users = this.$store.getters.getUser
            partners = this.$store.getters.getPartner
            allUsers = [ ...users, ...partners]

            for(let i in allUsers){

                if (allUsers[i].email == this.email && allUsers[i].password == this.password) {
                    this.$store.dispatch('commitLogin')
                    console.log(this.$store.getters.getIsLoged)
                    return this.$router.push('/')

                }    
            }
                
            window.alert("Senha ou usuário inválidos")

            }
            
        }
    }



</script>

<style>
.img-container{
    max-height: 400px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
}
</style>