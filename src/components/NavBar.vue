<template>
    
    <nav>
        <div class="row g-0 text-center">
            <div class="col-12 d-flex justify-content-between">
                <div>
                    <img :src="'./'+store.logo+'.png'" alt="">
                </div>
                <div class="d-flex">
                    <ul class="d-flex align-items-center">
                        <li v-for="(item, index) in store.navUl" @click="this.activeLi(index), this.pages(index)"><a :href="item.url" v-bind:class="{  active: store.navUl[index].isActive }" class="text-uppercase">{{item.name}}</a></li>
                    </ul>
                    <button class="blue">{{store.btn[0]}}</button>
                    
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import {store} from '../store';
    export default {
        name:'NavBar',
        data() {
        return {
            store,
        }
    },
    methods:{
        activeLi(i){
            for (let index = 0; index < store.navUl.length; index++) {
                store.navUl[index].isActive=false
            }
            if(store.navUl[i].index == i){
                store.navUl[i].isActive= true
            }
            else{
                store.navUl[i].isActive= false
            }
        },
        pages(i){
            store.index = i
            console.log(store.index)
        },
    }
    }
    
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;
    .active{
        color: $blue-light;
    }
    nav{
        z-index: 1000;
        width: 100%;
        height: 80px;
        background-color: $transparent;
        position: absolute;
        padding: 20px 0;
        div{
            height: 100%;
            img{
                height: 100%;
            }
            ul{
                height: 100%;
                li{
                
                    margin: 0 20px;
                    
                    a{
                        color: $white;
                    }
                
            }
            }
            button{
                margin: 0 0 0 20px;
            }
            
        }
    }
</style>