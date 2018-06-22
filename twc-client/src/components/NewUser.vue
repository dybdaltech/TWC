<template>
    <div>
        <div class="form-control">
            <input type="text" v-model="accountName" placeholder="Account name">
            <input type="text" name="Iname" id="IName" v-model="name" placeholder="Your name">
            <input type="email" name="Iemail" id="Iemail" v-model="email" placeholder="E-mail">
            <input type="password" name="IPassword" id="IPassword" placeholder="Password" v-model="password" >
            <input type="password" name="IPasswordCheck" id="IPasswordCheck" placeholder="Retype password" v-model="password" >
            <button v-on:click="createUser(accountName, name, email, create_ip, createDate)">SUBMIT</button>
        </div>
        <p>{{password}}</p>
    </div>
    
</template>
<script>
import axios from 'axios';
import cryptoJS from 'crypto-js'
export default {
    name: 'NewUser',
    data() {
        return{
            accountName: "",
            name: "",
            email:"", 
            create_ip:"172.19.20.20",
            createDate:"",
            newUserResult: "",
            password: ""
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
            })
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

    /*
// Encrypt
var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');
 
// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
var plaintext = bytes.toString(CryptoJS.enc.Utf8);

    */
}
</script>
