<template>
  <div >
    <header>
            <!-- Main Menu Start -->
            <div class="site-navigation main_menu menu-2" id="mainmenu-area">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src="@/assets/images/logo-dark.png" alt="Edutim" class="img-fluid">
                        </a>
                        <!-- Toggler -->
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu"
                            aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="fa fa-bars"></span>
                        </button>

                        <!-- Collapse -->
                        <div class="collapse navbar-collapse" id="navbarMenu">
                            

                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item ">
                                  <router-link to="/" class="nav-link">Home</router-link>
                                </li>
                                <li class="nav-item ">
                                   <router-link to="/shopping-cart" class="nav-link">Checkout</router-link>
                                </li>
                            </ul>
                        </div> 
                    </div>
                </nav>
            </div>
        </header>
  </div>
  <router-view/>
</template>

<style>

</style>