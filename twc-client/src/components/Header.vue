<template>
    <div id="Header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a href="#" class="navbar-brand">{{siteName}}</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link to="/">Home </router-link>
                    </li>
                    <p></p>
                    <li class="nav-item">
                        <router-link to="/about"> About </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/register">Register user (WIP)</router-link>
                    </li>
                </ul>
                <LoginComponent />
            </div>

        </nav>
    </div>
</template>
<script>
import LoginComponent from '@/components/LoginComponent.vue';
export default {

    name: 'Header',
    data () {
        return{
            siteName: 'Zeay'
        }
    },
    components: {
        LoginComponent
    }
}
</script>
<style>
    .nav-item{
        padding-left: 1em;
        padding-right: 1em;
        
        }
    .navbar{
        background-color: #92b3d1;
    }
</style>
<!--#92b3d1>