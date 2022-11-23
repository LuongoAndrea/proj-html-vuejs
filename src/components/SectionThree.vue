<template>
    <section>
        <div class="container">
            <div class="row g-0 text-center d-flex justify-content-center">
                <div class="col-10">
                    <div class="header">
                        <div>
                            <img :src="'./'+store.section[2].img+'.png'" alt="">
                        </div>
                        
                        <h2 class="text-capitalize">{{store.section[2].title}}</h2>
                        <div class="br">
                            <img :src="'./'+store.section[2].br+'.png'" alt="">
                        </div>
                        
                        <p>{{store.section[2].paragraph}}</p>
                    </div>
                </div>
                <div class="d-flex flex-wrap "> 
                    <div v-for="(item, inde) in store.section[2].cards" class="col-lg-4 cards">
                        <div class="img">
                            <img :src="'./'+item.img+'.png'" alt="">
                        </div>
                        <div class="card-text">
                            <div class="title">
                                <span class="text-uppercase">{{item.title}}</span>
                            </div>
                            
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
        name:'SectionThree',
        data() {
            return {
                store,
            }
        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.header{
    padding-bottom: 30px;
}
.cards{
    padding: 15px;
    cursor: pointer;
}
.img{
    // width: 80px;
    
    img{
        width: 70px;
    }
}
.card-text{
    span{
        // font-size: 0.8rem;
    }
    p{
        font-size: 0.8rem;
    }
}
.title{
    transition: color 0.5s;
}
.cards:hover .title{
    color: $blue-light;
}
</style>