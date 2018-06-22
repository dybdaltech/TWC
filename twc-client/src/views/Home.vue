<template>
  <div class="home">
    <Header />
    <div class="main container">
      <h1>Project TWC</h1>
      <p>A project to learn CRUD with Postgresql.</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Users from '@/components/Users.vue'
import NewUser from '@/components/NewUser.vue'
import Header from '@/components/Header.vue';
export default {
  name: 'home',
  components: {
    Users,
    NewUser,
    Header
  }
}
</script>
