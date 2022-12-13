<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <img src="@/assets/logo.png" alt="Turnr Library">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li class="nav-item"><router-link to="/welcome" class="nav-link">Home</router-link></li>
                        <li class="nav-item"><router-link to="/categories" class="nav-link">Categories</router-link></li>
                        <!-- <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li> -->
                        <li class="nav-item"><router-link to="/" class="nav-link">Logout <i class="fa fa-power-off fa-lg"></i></router-link></li>
                    </ul>
                </div>
            </div>
    </nav>
    </header>
</template>

<script>
export default {
    name:'Header'
}
</script>
