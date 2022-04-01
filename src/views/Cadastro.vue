<template>
    <NavVue />
    <main class="container-fluid">
            <div class="container-half d-flex flex-column justify-content-center">
                <h2 class="mb-5">Crie Sua Conta</h2>
                <SignUpClient class="w-75 align-self-center"/>
            </div>
            <div class="container-half img-half vh-100">
                    <!-- <img src="../assets/cadastroimg.png"> -->
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

<style scoped>

.container-fluid{
    display:flex;
}

.container-half {
    flex: 1;
}

.img-half {
    overflow: hidden;
    background-color:aquamarine
}

</style>