<template>
    <div>
<brewery-button></brewery-button>
<brewery-list></brewery-list>
    </div>
</template>

<script>
import BreweryButton from './BreweryButton.vue'
import BreweryList from './BreweryList.vue'
    export default {
        name: "home-content",
        components: {
            BreweryButton,
            BreweryList,
        },
    
        methods: {
            get_info() {
                this.$store.dispatch('get_info');
            }
        },
    }
</script>

<style scoped>

</style>