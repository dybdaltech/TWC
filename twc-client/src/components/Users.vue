<template>
    <div class="Component-container">
        <h2>Hello</h2>
        <ul id="userUL">
            <li :key="user.id" v-for="user in userList">
                {{user.accountname}}
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Users',
    data(){
        return{
            userList: []
        }
    },
    created() {
        this.fetchUsers();
    },
    methods: {
        fetchUsers(){
            console.log('TESTING')
            axios.get('http://localhost:5000/users')
                .then((response) => {
                    console.log(response);
                    this.userList = response.data.data;
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        
    }

}
</script>
