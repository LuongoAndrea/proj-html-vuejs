<template>
    <header>
        <NavBar/>
        <div v-if="store.index === 0">
            <HeroHome/>
        </div>
        <div v-else-if="store.index === 1">
            <HeroAbout/>
        </div>
        <div v-else-if="store.index === 2">
            <HeroDepartment/>
        </div>
        <div v-else-if="store.index === 3">
            <HeroArticle/>
        </div>
    </header>
 
    <main>
        <div v-if="store.index === 0">
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <FormComponent/>
            <SliderComponent/>
        </div>
        <div v-else-if="store.index === 1">
            <SectionTwo/>
        </div>
        <div v-else-if="store.index === 2">
            <SectionFive/>
        </div>
        <div v-else-if="store.index === 3">
            <FormComponent/>
            <SectionFive/>
        </div>
    </main>

    <footer>
        <FooterComponent/>
        <CopyrightComponent/>
    </footer>
</template>

<script>
import {store} from './store';
import NavBar from './components/NavBar.vue';
import HeroHome from './components/HeroHome.vue';
import HeroAbout from './components/HeroAbout.vue';
import SectionOne from './components/SectionOne.vue';
import SectionTwo from './components/SectionTwo.vue';
import SectionThree from './components/SectionThree.vue';
import SectionFour from './components/SectionFour.vue';
import SectionFive from './components/SectionFive.vue';
import FormComponent from './components/FormComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import CopyrightComponent from './components/CopyrightComponent.vue';
import SliderComponent from './components/SliderComponent.vue';
import HeroDepartment from './components/HeroDepartment.vue';
import HeroArticle from './components/HeroArticle.vue';




    export default {
    components:{
    NavBar,
    HeroHome,
    HeroAbout,
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
    FormComponent,
    FooterComponent,
    CopyrightComponent,
    SliderComponent,
    HeroDepartment,
    HeroArticle
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
