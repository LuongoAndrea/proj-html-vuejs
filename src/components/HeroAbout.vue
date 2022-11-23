<template>
    <section class="d-flex align-items-center">
        <div class="container">
            <div class="hero">
                <h1 class="text-capitalize">{{store.hero[store.index].title}} <span class="blue-text">{{store.hero[store.index].titleColor}}</span></h1>
                <p>{{store.hero[store.index].p}}</p>
                <button class="blue">{{store.btn[1]}}</button>
            </div>
        </div>
    </section>
</template>

<script>
    import {store} from '../store';
    export default {
        name:'HeroAbout',
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
        background-image: url('./../assets/images/grano-photoaidcom-darken.jpg');
        overflow: hidden;
        // background-position: center;
        background-size: cover;
        height: 82vh;

        .blue-text{
            color: $blue-light;
        }
        div.hero{
            width: 50%;
        }
        
    }
</style>