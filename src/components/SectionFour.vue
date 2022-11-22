<template>
    <section>
        <div class="al-container">
            <div class="row g-0 text-center d-flex justify-content-center">
                <div class="col-10">
                    <div class="header">
                        <div>
                            <img :src="'./'+store.section[3].img+'.png'" alt="">
                        </div>
                        
                        <h2 class="text-capitalize">{{store.section[3].title}}</h2>
                        <div class="br">
                            <img class="white" :src="'./'+store.section[3].br+'.png'" alt="">
                        </div>
                        
                        <p>{{store.section[3].paragraph}}</p>

                        <div class="player">
                            <img :src="'./'+store.section[3].imgPlay+'.png'" alt="">
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    </section>
</template>

<script>
    import {store} from '../store';
    export default {
        name:'SectionFour',
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
        background-image: url(./../assets/images/paralax-bg-tour-facilities.jpg);
        background-size: cover;
        background-position: center;
        color: $white;
    }
    .player{
        img{
            width: 50px;
        }
    }
    .white{
        filter: invert(100%);
    }
</style>