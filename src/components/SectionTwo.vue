<template>
    <section>
        <div class="container">
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
                    <div v-for="(item, inde) in store.section[1].cards" class="col-lg-4 sium ">
                    <div class=" cards">
                        <div class="immagine">
                            <img :src="'./'+item.img+'.jpg'" alt="">
                        </div>
                        <div class="card-text">
                            <div>
                                <span class="text-uppercase">{{item.name}}</span><br>
                                <span class="text-capitalize">{{item.profession}}</span>
                            </div>
                            
                            <p>{{item.paragraph}}</p>
                            <div class="d-flex">
                                <div v-for="(item, index) in item.social">
                                    <!-- <span><a :href="item.link"><i :class="'fa-brands '+item.social"></i></a></span> -->
                                    <div v-if="item.social === 'fa-facebook-f'" class="social facebook">
                                        <span><a :href="item.link"><i :class="'fa-brands '+item.social"></i></a></span>
                                    </div>
                                    <div v-else-if="item.social === 'fa-twitter'" class="social twitter">
                                        <span><a :href="item.link"><i :class="'fa-brands '+item.social"></i></a></span>
                                    </div>
                                    <div v-else-if="item.social === 'fa-instagram'" class="social instagram">
                                        <span><a :href="item.link"><i :class="'fa-brands '+item.social"></i></a></span>
                                    </div>
                                </div>
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
        },
    }

</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.sium{
    padding: 30px;
}
.cards{
        margin: 0 10px;
        background-color: $white;
        
        img{
            width: 100%;
        }
        .card-text{
            
            padding: 10px;
        }
    }
    .immagine{
        transition: box-shadow 0.2s;
    }
    .immagine:hover{
        box-shadow: 10px  10px 5px #dedede,
              -10px -10px 5px #dedede,
               10px -10px 5px #dedede,
              -10px  10px 5px #dedede;
    }
</style>