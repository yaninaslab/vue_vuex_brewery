<template>
    <div>
<button @click="get_info">Get Info</button>
    </div>
</template>

<script>
    export default {
        name: "brewery-button",
        methods: {
            get_info() {
                this.$store.dispatch('get_info');
            }
        },
    }
</script>

<style scoped>

</style>