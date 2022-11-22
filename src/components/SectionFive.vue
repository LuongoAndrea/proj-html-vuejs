<template>
    <div class="text-center white">
        <div class="row">
            <div v-for="(item,index) in store.section[4].cards" :class="'col-4 '+item.class">
                <div>
                    <h3 class="text-capitalize">{{item.title}}</h3>
                    <img :src="'./'+item.img+'.png'" alt="">
                    <p>{{item.paragraph}}</p>
                    <button class="transparent">{{store.btn[1]}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {store} from '../store';
    export default {
        name:'SectionFive',
        data() {
            return {
                store,
            }
        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
span, p{
        line-height: 40px;
    }
.white{
    color: $white;
}
.primo{
    background-color: $blue-light;
    padding: 4rem 2rem;
}
.secondo{
    background-color: $blue;
    padding: 4rem 2rem;
}
.terzo{
    background-color: $blue-strong;
    padding: 4rem 2rem;
}
</style>