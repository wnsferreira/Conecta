<template>
    <NavVue/>
    <main class="container">
        <div class="row align-items-center">
                <div class="col">
                    <form>
                        <img class="mb-4" src="../assets/Logo-Conecta.png" alt="" width="70" height="70">
                            <h1 class="h3 mb-3 fw-normal">Faça Login</h1>

                            <div class="form-floating">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div class="checkbox mb-3">
                                <label>
                                <input type="checkbox" value="remember-me"> Remember me
                                </label>
                            </div>
                            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                            <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
                    </form>
                </div>
                <div class="col img-container">
                    <img src="../assets/LoginImg.jpg">
                </div>
            </div>
    </main>
    <FooterVue/>
</template>

<script>
import NavVue from '../components/Nav.vue'
import FooterVue from '../components/FooterVue.vue';

export default {
    components: { NavVue, FooterVue }
}
</script>

<style>
/* .img-container{
    height: 50%;
} */
</style>