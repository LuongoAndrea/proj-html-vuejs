<template>
    <div class="pad-x">
        <span>{{store.footer[3].copy}}</span>
    </div>
</template>

<script>
    import {store} from '../store';
    export default {
        name:'CopyrightComponent',
        data() {
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.pad-x {
    padding: 1.5rem 5rem;
    background-color: $copy;
}
</style>