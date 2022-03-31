<template>
    <NavVue />
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-8">
                    <h2>Crie Sua Conta</h2>
                    <SignUpClient />
                </div>
                <div class="col-4">
                    <img class="w-100" style="height:800px" src="../assets/cadastroimg.png">
                </div>
            </div>
        </div>
    </main>
    <FooterVue />
</template>

<script>
import NavVue from '../components/Nav.vue'
import FooterVue from '../components/FooterVue.vue';
import SignUpClient from '../components/SignUpClient.vue'

    export default {
        components: { NavVue, FooterVue, SignUpClient}
    }

</script>

<style>
</style>