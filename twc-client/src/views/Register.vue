<template>
  <div class="Register">
    <Header />
    <NewUser />
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
    Header,
    NewUser
  },
  data () {
      return {
          query: "",
          result: "",
          data: ""
      }
  }
}
</script>
