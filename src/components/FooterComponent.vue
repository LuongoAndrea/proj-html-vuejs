<template>
    <section>
        <div class="px-4 ">
            <div class="row gx-5">
                <div class="col-4 px-5 position-relative">
                    <div class="padding-bottom">
                        <img class="img" :src="'./'+store.footer[0].img+'.png'" alt="">
                        <p>{{store.footer[0].paragraph}}</p>
                    </div>
                    <div class="social-footer">
                        <h3 class="text-uppercase">{{store.footer[0].social}}</h3>
                        <div class="d-flex ">
                                <div v-for="(item, index) in store.social">
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
                                    <div v-else-if="item.social === 'fa-youtube'" class="social youtube">
                                        <span><a :href="item.link"><i :class="'fa-brands '+item.social"></i></a></span>
                                    </div>
                                </div>
                            </div>
                    </div>

                </div>
            
                <div class="col-4 px-5 position-relative">
                    <h2 class="text-uppercase">{{store.footer[1].title}}</h2>
                    <!-- <img class="rotate" :src="'./'+store.footer[1].img+'.png'" alt=""> -->
                    <div class="pad">
                        <span>{{store.footer[1].position}}</span><br>
                        <span>{{store.footer[1].number}}</span>
                        <div class="privacy position-bootom">
                            <p>{{store.footer[1].privacy}}</p>
                            <button class="blue">{{store.btn[3]}}</button>
                        </div>
                    </div>
                </div>
                
                <div class="col-4 px-5 position-relative">
                    <h2 class="text-uppercase">{{store.footer[1].title}}</h2>
                    <ul>
                        <li v-for="(item,index) in store.footer[2].options" class="d-flex">
                            <div class="circle">
                                <span><i class="fa-solid fa-check"></i></span>
                            </div>
                            <div>
                                <span class="text-capitalize">{{item}}</span>
                            </div>
                        </li>
                    </ul>
                    <button class="blue last position-bootom">{{store.btn[2]}}</button>
                </div> 
            </div>
        </div>
           
    </section>
    
</template>

<script>
    import {store} from '../store';
    export default {
        name:'FooterComponent',
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
        padding: 4rem 2rem;
        h3{
            font-size: 1.2rem;
        }
        .rotate{
            transform: rotate(90deg);
            position: relative;
            bottom: 80px;
            left: 100px;
            // width: 30px;
        }
        .img{
            width: 300px;
        }
        .padding-bottom{
            padding-bottom: 2rem;
        }
    }
    .pad{
        padding-top: 2.5rem;
    }
    .privacy{
        padding: 30px;
        text-align: center;
        background-color: $privacy;
    }
    .circle{
        background-color: $blue-light;
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        color: $white;
        transform: translate(-50%,30%);
        span i{
            transform: translate(30%,-50%);
        }
    }
    button.last{
        width: 90%;
    }
    .position-bootom{
        position: absolute;
        bottom: 0;
    }
    
</style>