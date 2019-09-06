<template>
 
    
<div class="container">
   <v-header>影院</v-header>
   <v-tabbarcinema></v-tabbarcinema>
   <v-cinemalist></v-cinemalist>
   <v-bottomnav></v-bottomnav>
  </div>
 
 
</template>

<script>
import BottomNav from '@/components/BottomNav'
import Header from '@/components/Header'
import TabbarCinema from '@/components/TabbarCinema'
import CinemaList from '@/components/pages/cinema/CinemaList'
export default {
 
  components:{
      'v-tabbarcinema':TabbarCinema,
      'v-header':Header,
      'v-cinemalist':CinemaList,
      'v-bottomnav':BottomNav
    },
 
};
</script>

<style scoped>


</style>
