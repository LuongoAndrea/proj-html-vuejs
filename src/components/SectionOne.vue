<template>
    <section>
        <div class="container">
            <div class="row g-0 text-center d-flex justify-content-center ">
                <div class="col-10">
                    <div>
                        <h2 class="text-capitalize">{{store.section[0].title}}</h2>
                        <p>{{store.section[0].paragraph}}</p>
                    </div>
                </div>
                <div class="d-flex ">
                    <div v-for="(item, inde) in store.section[0].cards" class="col-lg-3 p-4 cursor">
                        <div>
                            <img :src="'./'+item.img+'.png'" alt="">
                        </div>
                        <div class="card-text">
                            <span class="text-uppercase title">{{item.title}}</span>
                            <p>{{item.paragraph}}</p>
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

    img{
        width: 70px;
    }
    .card-text{
        span{
            font-size: 1.2rem;
        }
    }
    .title{
        transition: color 0.5s;
    }
    .cursor:hover .title{
        color: $blue-light;
    }
</style>