<template>
    <div class="breweries_list">
        <article v-for="brewery in breweries" :key="brewery.id">
        <h4>{{ brewery.brewery_type }}</h4>
        <h4>{{ brewery.name }}</h4>
        <h6>{{ brewery.state }}</h6>
</article>
    </div>
</template>

<script>
    export default {
        name: "brewery-list", 
        props: {
           brewery: Object
        },
        computed: {
            breweries() {
                return this.$store.state['breweries']; 
            }
        },
    }
    
</script>

<style scoped>
.breweries_list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 30px;
}
article {
    border: solid;
}

</style>