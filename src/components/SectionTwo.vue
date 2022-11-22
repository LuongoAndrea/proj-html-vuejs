<template>
    <section>
        <div class="al-container">
            <div class="row g-0 text-center d-flex justify-content-center">
                <div class="col-10">
                    <div>
                        <div>
                            <img :src="'./'+store.section[1].img+'.png'" alt="">
                        </div>
                        
                        <h2 class="text-capitalize">{{store.section[1].title}}</h2>
                        <div class="br">
                            <img :src="'./'+store.section[1].br+'.png'" alt="">
                        </div>
                        
                        <p>{{store.section[1].paragraph}}</p>
                    </div>
                </div>
                <div class="d-flex"> 
                    <div v-for="(item, inde) in store.section[1].cards" class="col-lg-4 cards">
                        <div>
                            <img :src="'./'+item.img+'.jpg'" alt="">
                        </div>
                        <div class="card-text">
                            <div>
                                <span class="text-uppercase">{{item.name}}</span>
                                <span class="text-capitalize">{{item.profession}}</span>
                            </div>
                            
                            <p>{{item.paragraph}}</p>
                            <div>
                                <div v-for="(item, index) in item.social">
                                    <span><i :class="'fa-brands '+item"></i></span>
                                </div>
                            </div>
                            
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
        name:'sectionOne',
        data() {
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
    .cards{
        padding: 10px;
        
        img{
            width: 100%;
        }
        .card-text{
            background-color: $white;
            padding: 10px;
        }
    }
</style>