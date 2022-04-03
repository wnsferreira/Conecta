<template>
    <div>
        {{getUsers}}
        
    </div>
    <br>
    <div>{{getServices}}</div>
</template>

<script>
export default {
    computed: {
        getUsers() {
            return this.$store.getters.getUser
        },
        getServices() {
            return this.$store.getters.getServices
        }
    }
}
</script>

