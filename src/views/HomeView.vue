<template>
  <header class="showcase">
        <div class="showcase-top">
            <img src="@/assets/logo.png" alt="Logo">
            
            <router-link class="btn-go" to="/login">Sign In</router-link>
			
        </div>
        <div class="showcase-content">
            <h1>Welcome to the library.</h1>
            <p>Unlimited Resources At Your Fingertips</p>
            <span> ⚠️ Currently Under Maintenence ⚠️</span>
        </div>
        <!-- <div class="register container">
            <form action="">
                <input class="email" id="email" type="email" placeholder="Enter Email">
                <router-link :to="{name:'stepOne'}">  <button class="submit" id="submit" type="submit">Get Started <i class="fa fa-chevron-right"></i></button></router-link>
            </form>
            
        </div> -->
        <Footer />
    </header>
    
</template>

<script>
import Footer from '@/components/Footer.vue';
export default {
  name: 'welcome',

  components:{
    Footer
  }
}
</script>

<style scoped>
</style>