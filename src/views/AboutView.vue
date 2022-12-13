<template>
  <Header />
  <div class="container py-5 px-lg-5">
    <div class="row g-5 align-items-center">
      <div class="col-lg-6">
        <img class="img-fluid wow fadeInUp" data-wow-delay="0.5s" src="Assets/06.png">
      </div>
        
      <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
        <h6 class="text-primary-gradient fw-medium">LET ME INTRODUCE MYSELF</h6>
        <h2 class="text-primary-gradient fw-medium">About Me</h2>
        <h6 class="mb-4">A story of Hardwork and Perseverence</h6>
        <p class="mb-4">Hi, I'm Timilehin Alabi. I have a strong passsion for design and creativity in general. I specialize in Web Design and Development and my passion is all about building elegant, professional and responsive user interfaces and websites. I also do branding and identity design such as logo design, letterhead and business card, along with customized clothing, picture frames and other graphic design services</p>
          <div class="row mb-4">
            <h6>Contact</h6>
            <p class="mb-4">Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.</p>
            <!-- <a href="#">alabitimilehin580@gmail.com</a> -->
          </div>
          <a data-bs-toggle="modal" href="#hireme" class="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill mt-3">HIRE ME</a>
          <!-- <textarea  id="text"></textarea>
          <input type="button" id="btn" value="download"> -->
          <a href="Assets/resume.pdf" download="Timilehin Alabi's CV" class="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill mt-3">DOWNLOAD CV</a>
          <!-- <button id="cv">DOWNLOAD CV</button> -->
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'about',

  components:{
    Header,
    Footer
  }
}
</script>