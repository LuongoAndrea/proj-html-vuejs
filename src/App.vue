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
        <SectionFive/>
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
import SectionFive from './components/SectionFive.vue';


    export default {
    components:{
    NavBar,
    HeroComponent,
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
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
