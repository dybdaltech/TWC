<template>
  <div class="Register">
    <Header />
    <div class="container">
        <h3>Send SQL queries here:</h3>
        <textarea v-model="query" name="queryArea" id="queryArea" cols="30" rows="10"></textarea>
        <pre>{{query}}</pre>

        <button v-on:click="sendQuery(query)"> send Query </button>
        <div style="margin-top: 30px;">.</div>
        <h4>Response:</h4>
        <table class="table" style="">
            <thead class="thead-dark">
                <tr>
                    <th>username</th>
                    <th>name</th>
                    <th>email</th>
                    <th>create_ip</th>
                </tr>
            </thead>

            <tr v-for="object in data" :key="object.user_id">
                <td>{{object.accountname}}</td>
                <td>{{object.name}}</td>
                <td>{{object.email}}</td>
                <td>{{object.create_ip}}</td>
                <td>{{object.created, object.last_logon_ip, object.last_login_date, object.verified, object.muted, object.propabtion}}</td>
            </tr>
        </table>
        <pre>{{result}}</pre>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

import Header from '@/components/Header.vue';
import NewUser from '@/components/NewUser.vue'
export default {
  name: 'Admin',
  components: {
    Header,
    NewUser
  },
  data () {
      return {
          query: "",
          result: "",
          data: ""
      }
  },
  methods:{
      sendQuery(queryText){
          let data = JSON.stringify({
              query: this.query
          });

          axios.post('http://localhost:5000/sql/query', data, {
              headers: {
                  'Content-Type':'application/json'
              }
          })
          .then((res) => {
              this.result = res.data;
              this.data = res.data.data;
              console.log(res)
          })
          .catch((err) => {
              console.log(err);
          });
      }
  }
}
</script>
