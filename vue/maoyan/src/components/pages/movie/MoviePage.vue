<template>
<div class="container">
  <v-header>猫眼电影</v-header>
  <v-tabbar></v-tabbar>
  <v-bottomnav></v-bottomnav>
   <div class="page-wrap">
  
    <div class="list-wrap" style="margin-top: 0px;"> 
	<div class="item" v-for="item in movieList" :key="item.movieIds">
  <router-link :to="/movieinfo/+(item.nm)+'/'+(item.id)" tag="div">
  <div class="main-block">
    <div class="avatar" sort-flag="">
      
      <div class="default-img-bg">
        <img :src="item.img">		
      </div>
    </div> 
    <div class="mb-outline-b content-wrapper">

      
      <div class="column content">
        <div class="box-flex movie-title">
          <div class="title line-ellipsis v3dimax_title">{{item.nm}}</div>
          
            <span class="version v3d imax"></span>
          
          
        </div>

        <div class="detail column">
          
            <div class="select" v-if="item.sc">
               <div class="score line-ellipsis" > 
                <span class="score-suffix">观众评</span>
                <span class="grade">{{item.sc}}</span>
              </div>
            </div>
            <div class="selec" v-else>
               <div class="score line-ellipsis" > 
                <span class="grade">{{item.wish}}</span>
                <span class="score-suffix">想看</span>
              </div>
            </div>
             
            
          

           
            <div class="actor line-ellipsis">{{item.star}}</div>
          

          
                
           
            <div class="show-info line-ellipsis">{{item.showInfo}}</div>
          
        </div>
      </div>

      <div class="button-block">
        <div class="select" v-if="item.sc">
          <div class="btn normal"><span class="fix" >购票</span></div>
        </div>
        <div class="select " v-else>
          <div class="btn normal change"><span class="fix ">预售</span></div>
        </div>
          
        
      </div>
    
    </div>
  </div>
  </router-link>
</div>

 
  </div>
  </div>
</div>
  
 
</template>

<script>
import BottomNav from '@/components/BottomNav'
import Header from '@/components/Header'
import Tabbar from "../../Tabbar";
export default {
  data(){
    return{
      movieList:[],
    }
  },
  components: {
    "v-tabbar": Tabbar,
    'v-header':Header,
    'v-bottomnav':BottomNav
  },
  created(){
    this.$http.get('https://www.easy-mock.com/mock/5d28a020c26cea5c144e782d/http:/m.maoyan.com/ajax/movieOnInfoList')
    .then(res=>{
      console.log(res);
      this.movieList = res.data.movieList; 
    })
}
}
</script>

<style scoped>
body {
    height: 100%;
    font-size: 14px;
    color: #777;
    font-family: PingFangSC-Regular,Hiragino Sans GB,sans-serif;
    -webkit-font-smoothing: antialiased;
}
.container{
  height: 100%;
  overflow: hidden;
}
v-tabbar{
  z-index: 999;
}
div{
  display: block;
}
.page-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
}
.list-wrap {
    background-color: #f5f5f5;
}
.item {
    padding-left: 15px;
    background-color: #fff;
}
.main-block {
    position: relative;
    width: 100%;
}
.avatar {
    width: 64px;
    height: 90px;
    position: relative;
    margin-top: 12px;
    float: left;
}
.default-img-bg {
    background-color: #e1e1e1;
    background-size: 100% 100%;
}
.content-wrapper {
    padding: 12px 14px 12px 0;
    margin-left: 74px;
    height: 90px;
    max-height: 90px;
    position: relative;
    width: 255px;
    border-bottom: 1px solid #e6e6e6;
}
.mb-outline-b {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFW…I/PoL90/MAAAAZSURBVHjaYvr//z8DCLM8evToPwMQAAQYAGuLCaa37ZaAAAAAAElFTkSuQmCC) 0 bottom repeat-x;
}
.avatar img {
    background-color: transparent;
    height: 90px;
}
 .content {
    padding-right: 5px;
    margin-right: 48px;
    overflow: hidden;
}
.movie-title {
    max-height: 24px;
    margin-bottom: 7px;
    line-height: 24px;
    overflow: hidden;
}
.box-flex {
    display: flex;
}
.list-wrap .item .title {
    font-size: 17px;
    color: #333;
    font-weight: 700;
    padding-right: 5px;
    flex-shrink: 1;
}
.line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.version {
    background-size: contain;
    background-repeat: no-repeat;
    height: 14px;
    display: inline-block;
    margin-top: 5px;
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    margin-right: 3px;
}
.version.v3d.imax {
    width: 43px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAcCAYAAAD7lUj9AAAAAXNSR…pZ7dAhhqXuv1bz4Acb/GsYUfmFfmI0dGDh/rBU6SdGfwHhesSi+VnXOAAAAABJRU5ErkJggg==);
}
.list-wrap .item .detail {
    box-sizing: border-box;
    line-height: 1;
    overflow: hidden;
}
.list-wrap .item .detail .actor, .list-wrap .item .detail .score,  .list-wrap .item .detail .show-date,  .list-wrap .item .detail .show-info {
    font-size: 13px;
    color: #666;
}
.grade {
    font-weight: 700;
    color: #faaf00;
    font-size: 15px;
}
.button-block {
    font-size: 12px;
    position: absolute;
    right: 14px;
    top: 0;
    bottom: 0;
    height: 27px;
    margin: auto;
}
.button-block .btn {
    width: 47px;
    height: 27px;
    line-height: 28px;
    text-align: center;
    box-sizing: border-box;
    background-color: #f03d37;
    color: #fff;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 12px;
    cursor: pointer;
}
.detail>div+div {
    margin-top: 6px;
    line-height: 15px;
}
.change{
  background-color: #3c9fe6 !important ;
}
</style>
