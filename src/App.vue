<template>
    <header>
        <NavBar/>
        <HeroComponent/>
    </header>
 
    <main>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
    </main>
</template>

<script>
import {store} from './store';
import NavBar from './components/NavBar.vue';
import HeroComponent from './components/HeroComponent.vue';
import SectionOne from './components/SectionOne.vue';
import SectionTwo from './components/SectionTwo.vue';
import SectionThree from './components/SectionThree.vue';
import SectionFour from './components/SectionFour.vue';

    export default {
    components:{
    NavBar,
    HeroComponent,
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour
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
