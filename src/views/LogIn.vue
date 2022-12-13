<template>
    <div class="showcase-top">
        <img src="@/assets/logo.png" alt="Logo">
        
        <router-link class="btn-back" to="/"><i class="fa fa-arrow-left"></i> Back Home</router-link>
			
    </div>
    
    <section class="containerr forms">
        <div class="form login">
            <div class="form-content">
                <header>Login</header>
                    <form action="#">
                        <div class="field input-field">
                            <input type="email" placeholder="Email" class="input">
                        </div>

                        <div class="field input-field">
                            <input type="password" placeholder="Password" class="password">
                            <i class='fa fa-hide eye-icon'></i>
                        </div>

                        <div class="form-link">
                            <a href="#" class="forgot-pass">Forgot password?</a>
                        </div>

                        <div class="field button-field">
                            <router-link to="/welcome"><button>  Login </button></router-link>
                        </div>
                    </form>

                    <div class="form-link">
                        <span>Don't have an account? <router-link class="link signup-link" :to="{name:'sign up'}"> Signup</router-link></span>
                    </div>
            </div>

            <div class="line"></div>

            <div class="media-options">
                    <a href="#" class="field facebook">
                        <i class='bx bxl-facebook facebook-icon'></i>
                        <span>Login with Facebook</span>
                    </a>
            </div>

            <div class="media-options">
                    <a href="#" class="field google">
                        <img src="images/google.png" alt="" class="google-img">
                        <span>Login with Google</span>
                    </a>
            </div>
        </div>
    </section>
</template>

<!-- <script>
export default {
    name: 'logIn'
}
</script> -->