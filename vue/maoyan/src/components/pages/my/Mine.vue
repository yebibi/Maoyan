<template>
  <div>
    <v-header>猫眼电影</v-header>
    <v-login></v-login>
  </div>
</template>

<script>
import Login from '@/components/pages/my/Login'
import Header from '@/components/Header'
export default {
  components:{
    'v-header':Header,
    'v-login':Login
  }
}
</script>

<style>

</style>
