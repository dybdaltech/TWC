<template>
    <div>
        <div v-if="isNav">
            <form action="submit" class="form-inline my-2 my-lg-0">
                <input type="text" class="form-control mr-sm-2" placeholder="Username" v-model="username">
                <input type="password" class="form-control mr-sm-2" placeholder="Password" v-model="password"> 
                <button>Log in</button>
            </form>
        </div>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Login
        </button>
        <div v-if="!isNav">
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form action="submit" class="form-inline my-2 my-lg-0">
                                <input type="text" class="form-control mr-sm-2" placeholder="Username" v-model="username">
                                <input type="password" class="form-control mr-sm-2" placeholder="Password" v-model="password"> 
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {

    name: 'LoginComponent',
    data () {
        return {
            isNav: false,
            username: "",
            password: ""
        }
    },
    created(){
        
    }
}
</script>
