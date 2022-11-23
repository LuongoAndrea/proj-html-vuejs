<template>
    <div class="slider">
        <div class="container d-flex">
            <div v-for="(item,index) in store.section[6].img" class="col-lg-3">
                <img :src="'./'+item+'.png'" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import {store} from '../store';
    export default {
        name:'SliderComponent',
        data() {
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
.slider{
    background-image: url(./../assets/images/rgb-gradient-bar-for-logo-carrasel.jpg);
}
</style>