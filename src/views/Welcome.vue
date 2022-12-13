<template>
    <Header />
    
    <div class="#">
        <div class="showcase-content">
            <h1>Let's get you enlightened.</h1>
            <p>Unlimited Resources At Your Fingertips</p>    
        </div>
          <form action="">
            <input type="text" name="search" id="search" placeholder="Find a book">
            <button class="btn-submit" type="submit"><i class="fa fa-search"> Search </i></button>
          </form>
    </div>

    <div class="container categories ">
            <h4> Recommended for you <i class="fa fa-thumbs-up fa-lg"></i> </h4>

            <div class="row box-container py-4">
              <div class="box col-lg-4">
                <div class="">
                    <a href="#"><img src="@/assets/reommended.png" alt=""></a>
                </div>
                <div class="content">
                  <a class="price" href="#" download="Creative Thinking"> Learning French </a>
                </div>
              </div>

              <div class="box col-lg-4">
                <div class="">
                    <img src="@/assets/reommended.png" alt="">
                </div>
                <div class="content">
                  <a class="price" href="#" download="Creative Thinking"> Learning French </a>
                </div>
              </div>

              <div class="box col-lg-4">
                <div class="">
                    <img src="@/assets/reommended.png" alt="">
                </div>
                <div class="content">
                  <a class="price" href="#" download="Creative Thinking"> Learning French </a>
                </div>
              </div>

              <!-- <div class="box col-lg-4">
                <i class="fa fa-chevron-right fa-lg"></i>
                <br>
                <router-link :to="{name:'categories'}"> <div> See all categories</div> </router-link>
              </div> -->
            </div>
    
        </div>
        
    <Footer />
  </template>
  
  <script>
  // @ is an alias to /src
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: 'HomeView',
    components: {
      Footer,
      Header
    }
    }
  </script>