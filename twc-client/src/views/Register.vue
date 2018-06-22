<template>
  <div class="Register">
    <Header />
      <div class="container">
        <h2>Register as a user</h2>
        <p>The more the merrier! I've personally made sure all your information is kept secure and not used for anything other than TWC</p>
        <form>
          <div class="form-group">
            <label for="accountName">User name</label>
            <input class="form-control" type="text" v-model="accountName" placeholder="User name">
          </div>
          <div class="form-group">
            <label for="IName">Name</label>
            <input class="form-control" type="text" name="Iname" id="IName" v-model="name" placeholder="Your name">
          </div>
          <div class="form-group">
            <label for="Iemail">Email address</label>
            <input class="form-control" type="email" name="Iemail" id="Iemail" v-model="email" placeholder="E-mail">
            <small class="form-text text-muted">Only used for password reset</small>
          </div>
          <div class="form-group">
            <label for="IPassword">Password</label>
            <input  class="form-control"  type="password" name="IPassword" id="IPassword" placeholder="Password" v-model="password" >
            <small class="form-text text-muted">Minimum 16 characters, 1 of each: Special, Capital letter and a number</small>
          </div>
          <div class="form-group">
            <input class="form-control" type="password" name="IPasswordCheck" id="IPasswordCheck" placeholder="Retype password" v-model="passwordCheck" >
            <div  v-if="passwordIsSame = false" class="alert alert-danger">Passwords are not the same</div>
          </div>
          <button :disabled="pressed" v-on:click="createUser(accountName, name, email, create_ip, createDate); pressed = true">SUBMIT</button>
        </form>      
      </div>
    </div>
</template>
<script>
// @ is an alias to /src
import axios from 'axios';

import Header from '@/components/Header.vue';
import NewUser from '@/components/NewUser.vue'

export default {
  name: 'Register',
  components: {
    Header
  },
    data() {
        return{
            accountName: "",
            name: "",
            email:"", 
            create_ip:"172.19.20.20",
            createDate:"",
            newUserResult: "",
            password: "", passwordCheck: "", passwordIsSame: false, pressed: false
        }
    },
    created(){
        this.getIP();
        this.createDate = new Date();
    },

    methods:{
        createUser(accountName, name, email, create_ip, createDate) {
            /* TODO */
            let data = JSON.stringify({
                accountname: this.accountName,
                name: this.name,
                email: this.email,
                create_ip: this.create_ip,
                createDate: this.createDate
            });
            if (this.password == this.passwordCheck) {
              //Do nothing
              this.passwordIsSame = true
            } else {
              return
            }
            console.log('err');
            axios.post('http://localhost:5000/user/new', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then((res) => {
                this.newUserResult = res
            })
            .catch((err) => {
                console.log(err)
            });
            /*
                TODO
                Move this part over to back-end. SSL Certificate will ensure the password travels safely to the back end service.
            */
           
            let encrypted = cryptoJS.AES.encrypt(this.password, this.email);
            axios.post('http://localhost:5000/user/new/password', {
                userID: this.email,
                password: encrypted
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.error(err);
            })
            
        },

        getIP(){
            axios.get('https://api.ipify.org?format=json')
                .then((res) => {
                    console.log(res.data.ip);
                    this.create_ip = res.data.ip;
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }
}
</script>
