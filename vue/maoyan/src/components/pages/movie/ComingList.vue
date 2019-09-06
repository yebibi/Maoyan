<template>
  <div>
     <v-header>猫眼电影</v-header>
     <v-tabbar></v-tabbar>
    <section  class="movie singleton page active" style="height: 623px;">
	<div class="page-wrap">
		<div class="swiper-header movie-ad" style="display: none;">
		</div>
		<div class="tab-block">
			<div class="tab-content">
				<div class="page n-hot">
					<div class="list-wrap" style="margin-top: 0px;">
					</div>
					<div class="more"></div>
				</div>
				<div class="page f-hot active">
					<div class="list-wrap" style="margin-top: 0px;">
						<div class="most-expected">
							<p class="title">近期最受期待</p>
							<div class="most-expected-list">
  
    <div class="expected-item"  v-for="item in MostwantList" :key="item.id">
      <div class="poster default-img-bg">
        <img :src="item.img" onerror="this.style.visibility='hidden'">
        <span class="wish-bg"></span>
        <span class="wish"><span class="wish-num">{{item.wish}}</span>人想看</span>
        <div class="toggle-wish">
          <span></span>
        </div>
      </div>
      <h5 class="name line-ellipsis">{{item.nm}}</h5>
      <p class="date">{{item.comingTitle}}</p>
    </div>
    </div>
	</div>
	<div class="coming-list"> 
  <div v-for="item in ComingList" :key="item.id">
    <p class="group-date">{{item.comingTitle}}</p>
     
      <div class="item">
  <div class="main-block">
    <div class="avatar" sort-flag="">
      
      <div class="default-img-bg">
        <img :src="item.img" onerror="this.style.visibility='hidden'">		
      </div>
    </div>
    <router-link tag="div" :to = "/movieinfo/+item.nm+'/'+item.id">
    <div class="mb-outline-b content-wrapper">

      
      <div class="column content">
        <div class="box-flex movie-title">
          <div class="title line-ellipsis ">{{item.nm}}</div>
          
          
        </div>

        <div class="detail column">
          
            
              <div class="wantsee line-ellipsis">
                <span class="person">{{item.wish}}</span>
                <span class="p-suffix">人想看</span>
              </div>							
            	
          

           
            <div class="actor line-ellipsis">{{item.star}}</div>
          

          
            <div class="actor line-ellipsis">{{item.rt}}</div>
          
                
          
        </div>
      </div>

      <div class="button-block">
        
          <div class="btn toggle-wish-btn">
            <span class="fix">想看</span>
          </div>
      </div>
      </div>
      </router-link> 
    </div>
    </div>
  </div>
</div>

     
  </div>
 
 
					<div class="more"></div>
				</div>
			</div>
		</div>
	</div>
</section>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Tabbar from '@/components/Tabbar'
export default {
  data(){
    return{
      MostwantList:[],
      ComingList:[]
    }
  },
  components:{
    'v-header':Header,
    'v-tabbar':Tabbar
  },
  created(){
    this.$http.get('https://www.easy-mock.com/mock/5d28a020c26cea5c144e782d/http:/m.maoyan.com/ajax/mostExpected')
    .then(res=>{
      console.log(res);
      this.MostwantList = res.data.coming; 
    })
    this.$http.get('https://www.easy-mock.com/mock/5d28a020c26cea5c144e782d/http:/m.maoyan.com/ajax/comingList')
    .then(res=>{
      console.log(res);
      this.ComingList = res.data.coming; 
    })
  }
}
</script>

<style scoped>
.page.singleton, .page.singleton-notab {
    overflow: hidden;
    /* -webkit-overflow-scrolling: touch; */
}
.page.singleton {
    /* -webkit-transform: none!important; */
    transform: none!important;
}

.page.active {
    display: block;
}
.page.singleton .page-wrap, .page.singleton-notab .page-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
}
.page, .fixed .movie-detail {
    display: none;
}
.page {
    position: absolute;
}
.page, nav {
    width: 100%;
}
.page.active {
    display: block;
}
.tab-content .list-wrap {
    background-color: #f5f5f5;
}
.more {
    line-height: 40px;
    height: 40px;
    text-align: center;
}
.tab-content .list-wrap {
    background-color: #f5f5f5;
}
.tab-content .list-wrap .most-expected {
    padding: 12px 0 12px 15px;
    background-color: #fff;
    margin-bottom: 10px;
}
.tab-content .list-wrap .coming-list {
    background-color: #fff;
}
.tab-content .list-wrap .most-expected .title {
    margin: 0 0 12px;
    font-size: 14px;
    color: #333;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.tab-content .list-wrap .most-expected-list {
    overflow: scroll;
    white-space: nowrap;
}
.tab-content .list-wrap .expected-item {
    display: inline-block;
    width: 85px;
    overflow: hidden;
    margin-right: 10px;
}
.tab-content .list-wrap .coming-list .group-date {
    padding: 12px 15px 0;
    margin: 0;
    font-size: 14px;
    color: #333;
}
.tab-content .list-wrap .item {
    padding-left: 15px;
    background-color: #fff;
}
.tab-content .list-wrap .item .main-block {
    position: relative;
    width: 100%;
}
.tab-content .list-wrap .most-expected-list {
    overflow: scroll;
    white-space: nowrap;
}
.tab-content .list-wrap .expected-item {
    display: inline-block;
    width: 85px;
    overflow: hidden;
    margin-right: 10px;
}
.tab-content .list-wrap .expected-item .poster {
    width: 85px;
    height: 115px;
    position: relative;
    margin-bottom: 6px;
}
.default-img-bg {
    background-color: #e1e1e1;
    background-size: 100% 100%;
}
.tab-content .list-wrap .expected-item .name {
    margin: 0 0 3px;
    font-size: 13px;
    color: #222;
}
.line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
h5 {
    display: block;
    /* font-size: 0.83em; */
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.tab-content .list-wrap .expected-item .date {
    margin: 0;
    font-size: 12px;
    color: #999;
}
.tab-content .list-wrap .expected-item .poster img {
    height: 100%;
}
a, img {
    display: block;
}
img {
    width: 100%;
}
img, legend {
    border: 0;
}
.tab-content .list-wrap .expected-item .poster .wish-bg {
    display: inline-block;
    width: 100%;
    height: 35px;
    position: absolute;
    bottom: 0;
    /* background-image: -webkit-linear-gradient(top,rgba(77,77,77,0),#000); */
    background-image: linear-gradient(-180deg,rgba(77,77,77,0),#000);
}
.tab-content .list-wrap .expected-item .poster .wish {
    position: absolute;
    left: 4px;
    bottom: 2px;
    color: #faaf00;
    font-size: 11px;
    font-weight: 600;
}
.tab-content .list-wrap .expected-item .poster .toggle-wish {
    width: 28px;
    line-height: 28px;
    background: rgba(61,63,71,.6);
    text-align: center;
    border-bottom-right-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
}
.tab-content .list-wrap .expected-item .poster .wish {
    position: absolute;
    left: 4px;
    bottom: 2px;
    color: #faaf00;
    font-size: 11px;
    font-weight: 600;
}
.tab-content .list-wrap .expected-item .poster .toggle-wish[data-wishst="0"] span {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAABGdBTUEAALGPC/xhBQAAAytJREFUWAnVmLtrFFEUh3cWFAtRE5FEEUREsFAkooUIgl3+CUEU7LVR1LBIMERCLFLZRG1CrFJYpLBQENRGC4n4wBeKRUQ2PlAQX+v3m70z7MzemZ3HZp05cPbce86553w7O7Mzc51KjDQaDYfwDvSAseux69Cv6Ef0LXoHXXAc5y82UqhVJbgLPYhuQTega9DPaB19ht6VpVYDaxUBWYUGewkcQzdbE4LOJabXaHQ76G7OqHWI0RG0v+mJ/XxPdJpaD2xZbcAUX0XiSXS/bUEH3yPil2imL1Chln6RE+huzVPKffJV60frugAwDfoI1tBtrUkpx4vknzVrLmAHU65vTX/F5DzQnzynDwzsCpwX0e1eMIfV+S3ReZpXXlDgFNC/VEgXgifHGXQDVvUE2g1Y1RKT2FxxgTm6cg4bXxHNsGH0j/DhIlKGmFzGKuSbCAyFgkWcDsG6UaeE/m/LIvsEvKcstGIV8ECJgAcErJtFWaRPwCvLQitWAbv3/ZJALwlYj3ZlkbqA9YBRFnkp4HtloRWrgJ+g/uNbgeHF+LTKY5tebWYLDOqhzYpVR1hyE33njor5ITYxNp/WIP/DeBINvI4ooQAipknD6D9eVnC8JjCOxr799vgLiGXcsLmtvVPCnRB4yGDanRTjQ2/PYvIlACwvCTcwM37G/xvMGJYAQRuwoiRex8wFMns7mTMMbV2twMpiwVXMfNuK5XfMm97WTpHAJvsy9pZ15fI41Us9IyUWmG+qPa4ptBe3b/WYMj2zAWsVBfQfPYEGrlbFuiiqPWF6xZaNPcLeSgr9ZjyGLni+LlrVHDM9OpZNBKwqFPyJGUWfa94lUa1RUztRSX9vLVE2SewNrMboaG9NuiYi7w3+M8B+i4hb3amBVQXotRjdxpPsHWtJWLQHfBrYL+FAp3kmYBUFWnu/2u1Mu03wgTXajaxjU0tmYHUCehAj6H7NE4ggBSvoTJL4orNVp/Eifm1eJ/lplXMuD6wYcgGrAAA6H0fQ75pHiGIjJjciJZk7N7DaAKIrvobarnj5aiaHYT7JdQ6HW5sL8Sj+nSb2GHsF2EwXWLi+5v8ArR6xIZ+h44wAAAAASUVORK5CYII=);
}
.tab-content .list-wrap .expected-item .poster .toggle-wish span {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-size: 100%;
    background-repeat: no-repeat;
}
.item .avatar {
    width: 64px;
    height: 90px;
    position: relative;
    margin-top: 12px;
    float: left;
}
.tab-content .list-wrap .item .content-wrapper {
    padding: 12px 14px 12px 0;
    margin-left: 74px;
    height: 90px;
    max-height: 90px;
    position: relative;
}
.default-img-bg {
    background-color: #e1e1e1;
    background-size: 100% 100%;
}
.tab-content .list-wrap .item .avatar img {
    background-color: transparent;
    height: 90px;
}
.tab-content .list-wrap .item .content {
    padding-right: 5px;
    margin-right: 48px;
    overflow: hidden;
}
.tab-content .list-wrap .item .button-block {
    font-size: 12px;
    position: absolute;
    right: 14px;
    top: 0;
    bottom: 0;
    height: 27px;
    margin: auto;
}
.tab-content .list-wrap .item .movie-title {
    max-height: 24px;
    margin-bottom: 7px;
    line-height: 24px;
    overflow: hidden;
}
.tab-content .list-wrap .item .detail {
    box-sizing: border-box;
    line-height: 1;
    overflow: hidden;
}
.tab-content .list-wrap .item .name, .tab-content .list-wrap .item .title {
    font-size: 17px;
    color: #333;
    font-weight: 700;
    padding-right: 5px;
    flex-shrink: 1;
}
.tab-content .list-wrap .item .detail .actor, .tab-content .list-wrap .item .detail .score, .tab-content .list-wrap .item .detail .show-date, .tab-content .list-wrap .item .detail .show-info {
    font-size: 13px;
    color: #666;
}
.tab-content .list-wrap .item .button-block .btn.toggle-wish-btn[data-wishst="0"] {
    background-color: #faaf00;
    border: none;
    color: #fff;
}
.tab-content .list-wrap .item .button-block .btn {
    width: 47px;
    height: 27px;
    line-height: 28px;
    text-align: center;
    box-sizing: border-box;
    /* background-color: #f03d37; */
    color: #fff;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 12px;
    cursor: pointer;
}
.tab-content .list-wrap .item .detail .wantsee .person {
    color: #faaf00;
    font-size: 15px;
    font-weight: 600;
}
.tab-content .list-wrap .item .detail .wantsee .p-suffix {
    font-size: 13px;
    margin-left: -2px;
    display: inline-block;
    color: #666;
}
.tab-content .list-wrap .item .detail>div+div {
    margin-top: 6px;
    line-height: 15px;
}
.page .active{
  width: 358px;
}
</style>
