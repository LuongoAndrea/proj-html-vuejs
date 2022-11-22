<template>
    <header>
        <NavBar/>
        <HeroComponent/>
    </header>
 
    <main>
        <SectionOne/>
        <SectionTwo/>
    </main>
</template>

<script>
import {store} from './store';
import NavBar from './components/NavBar.vue';
import HeroComponent from './components/HeroComponent.vue';
import SectionOne from './components/SectionOne.vue';
import SectionTwo from './components/SectionTwo.vue';

    export default {
    components:{
    NavBar,
    HeroComponent,
    SectionOne,
    SectionTwo
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
