<template>
 <NavBar/>
 <HeroComponent/>
</template>

<script>
import {store} from './store';
import NavBar from './components/NavBar.vue';
import HeroComponent from './components/HeroComponent.vue';

    export default {
    components:{
    NavBar,
    HeroComponent
},
data() {
    return {
        store,
    }
},
}
</script>

<style scoped>

</style>
