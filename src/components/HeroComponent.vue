<template>
    <section class="d-flex align-items-center">
        <div class="al-container">
            <div class="hero">
                <h1 class="text-capitalize">carling <span class="blue-text">for life</span></h1>
                <p>Kind words can be short and easy to speack, but their echoes are truly endless. Avada Health focuses on you as if it was our own family</p>
                <button class="blue">{{store.btn[1]}}</button>
            </div>
        </div>
    </section>
</template>

<script>
    import {store} from '../store';
    export default {
        name:'HeroComponent',
        data() {
            return {
                store,
            }
        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
    section{
        color: $white;
        background-image: url('./../assets/images/header-image-homepage.jpg');
        // background-position: center;
        background-size: cover;
        height: 82vh;
        .blue-text{
            color: $blue-light;
        }
        div.hero{
            width: 60%;
        }

    }
</style>