<template>
    <Header />
    <section class="container categories" id="categories">
        
        <h1 class="heading"> Categories </h1>
        
        <div class="box-container row py-5">
        
            <div class="box col-lg-3" data-aos="fade-up">
                <div class="">
                    <img src="@/assets/reommended.png" alt="">
                    <!-- <h3> <i class="fas fa-map-marker-alt"></i> mumbai </h3> -->
                </div>
                <div class="content">
                    <router-link :to="{name:'CompEngr'}" class="price"> Computer Engineering </router-link>
                    <!-- <a href="#" class="btn"> Select </a> -->
                </div>
            </div>
        
            <div class="box col-lg-3" data-aos="fade-up">
                <div class="">
                    <img src="@/assets/reommended.png" alt="">
                </div>
                <div class="content">
                    <router-link :to="{name:'ElectEngr'}" class="price"> Electrical & Electronics Engineering </router-link>
                    <!-- <a href="#" class="btn"> Select </a> -->
                </div>
            </div>
        
            <div class="box col-lg-3" data-aos="fade-up">
                <div class="">
                    <img src="@/assets/reommended.png" alt="">
                </div>
                <div class="content">
                    <router-link :to="{name:'MechEngr'}" class="price"> Mechanical Engineering </router-link>
                    <!-- <a href="#" class="btn"> Select </a> -->
                </div>
            </div>
        
            <div class="box col-lg-3" data-aos="fade-up">
                <div class="">
                    <img src="@/assets/reommended.png" alt="">
                    <!-- <h3> <i class="fas fa-map-marker-alt"></i> mumbai </h3> -->
                </div>
                <div class="content">
                    <router-link :to="{name:'Vocational'}" class="price"> Vocational Knowledge </router-link>
                    <!-- <a href="#" class="btn"> Select </a> -->
                </div>
            </div>
        
            <div class="box col-lg-3" data-aos="fade-up">
                <div class="image">
                    <img src="@/assets/reommended.png" alt="">
                </div>
                <div class="content">
                    <router-link :to="{name:'English'}" class="price"> English Language </router-link>
                    <!-- <a href="#" class="btn"> Select </a> -->
                </div>
            </div>
        
            <div class="box col-lg-3" data-aos="fade-up">
                <div class="image">
                    <img src="@/assets/reommended.png" alt="">
                </div>
                <div class="content">
                    <router-link :to="{name:'GenKnowledge'}" class="price"> General Knowledge </router-link>
                    <!-- <a href="#" class="btn"> Select </a> -->
                </div>
            </div>
        
            <input type="submit" value="See more suggestions" class="btn">
        
        </div>
        
    </section>
        
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    name: 'Categories',

    components:{
        Header
    }
}
</script>

