<template>
    <section>
        <div class="al-container">
            <div class="row g-0 text-center d-flex justify-content-center">
                <div class="col-10">
                    <div class="header">
                        
                        <h2 class="text-capitalize">{{store.section[5].title}}</h2>
                        <div class="br">
                            <img class="white" :src="'./'+store.section[5].br+'.png'" alt="">
                        </div>
                        
                        <p>{{store.section[5].paragraph}}</p>
                    </div>
                    <div class="container text-center">
                        <div class="row gx-5">
                            <div class="col">
                                <input type="text" class="formAl" placeholder="Name">
                            </div>
                            <div class="col">
                                <input type="email" class="formAl"  placeholder="Email">
                            </div>
                        </div>
                        <div class="row gx-5">
                            <div class="col">
                                <input type="text" class="formAl"  placeholder="Phone Number">
                            </div>
                            <div class="col">
                                <input type="text" class="formAl" placeholder="Appointment Date">
                            </div>
                        </div>
                        <div class="row gx-5">
                            <textarea class="formAl" placeholder="How can we help?" rows="3"></textarea>
                        </div>
                        <button class="blue">{{store.btn[0]}}</button>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </section>
</template>

<script>
    import {store} from '../store';
    export default {
        name:'FormComponent',
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
        background-image: url(./../assets/images/make-an-appointment.jpg);
        background-size: cover;
        color: $white;
    }
    .white{
        filter: invert(100%);
    }
    .formAl{
        background-color: $transparent;
        border: 1px solid $white;
        color: $white;
        width: 100%;
        padding: 0.5rem;
        margin: 1rem;
    }
    button{
        width: 100%;
    }
</style>