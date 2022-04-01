<template>
    <div>
        {{getUsers}}
    </div>
</template>

<script>
export default {
    computed: {
        getUsers() {
            return this.$store.getters.getUser
        }
    }
}
</script>

