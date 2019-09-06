<template>
  <div>
    <v-header>
      <router-link to="/moviepage">
          <a class="navbar-back" href="javascript:history.back();"></a>
      </router-link>
        {{this.$route.params.name}}
    </v-header>
    <div class="body">
      <div class="movie-detail" >
        <div class="movie-filter"></div>
        <div class="poster-bg" style="background-image:url(//p0.meituan.net/71.100/moviemachine/7b9b0725ab5feae642e1fbba9fbb90fe3702078.jpg)"></div>
        <div class="detail box-flex">
          <div class="poster">
            <img :src="movieinfo.img">
          </div>
          <div class="content flex" >
            <div class="title middle line-ellipsis">{{movieinfo.nm}}</div>
            <div class="title-en-name line-ellipsis">{{movieinfo.enm}}</div>
            <div class="score line-ellipsis" v-if="movieinfo.sc">{{movieinfo.sc}}
              <span class="snum">({{movieinfo.snum}}人评)</span>
            </div>
            <div class="score line-ellipsis" v-else>{{movieinfo.wish}}人想看
              
            </div>
            <div class="type line-ellipsis">
              <span>{{movieinfo.cat}}</span>
              <div class="type-group">
                <img style="width: 42px;" class="sd-imax" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAeCAYAAADTsBuJAAAD+0lEQVRoge2aPUwUQRSAPy4YiZh4DbT8VJhIvA4KkyOhBq+Uyi2gFlssPAtoPW01cWm0RaxVTCi0EkOhFXe0WoiJGhJJ1uK9cefW/ZnF3K3R/ZLNDDNvfnhv5s3bvRkIggBgGLgIjACDlPSSE+AT8B74NhAEwXngCnCm0Gn9f/wAdgeBKf5O5T8regI9Ygi4DIwCUxXE7ZT0j2PgneZHKpQ+vwiONR2sFDqNEkoDFExpgIJx9f+TwDJwySprA0+A11bZCjCR0EcbeAp8zDnHKDWgBfj6oH/XgC3Np9EAVoE9TaNUtR+AJrCTMP4R4GkaZUv7iWvfhcsOmAQ2EOW/QZT+BlH0GjBtyU6o3L71gIRcC8B9YN5hzDSqQB0Yt8pqWtZ0aN9S2VpCfUPr68QbaE+fq4QLINr/VcQwO1mTcdkBS8A54B7w3CpfRHbFIqGiDU9i8tPALeAGshsOHMbOywVkVfoJ9Q1gLKMPo/RXiCLHgU6MzJzW2+PNIf/foZZn4rIDZoDvdCsfQtcz7DIQYqR1zS86tsnLF9J3QdyKtqkhL0mbhK7MS5D1dLwWYiTbdTWId02/4WKAReBaTPmspnl8+r7Kz2YJnpIWssIbMXVziFvZTGlvDOQjykxbyeYMuaCyW5q/qXVO5I2C5hGXtIG4n4/A45x9tBGX1gt8TeNWuqdpM6FtFTHcIaHv9hGDerEtpH4T2TV1JMjICgK6OK0BTDS0Tf6ophe+39BBFFJHVrxhHLiO+PVOQtsGsoJtBfqaeiljbiXknchrgDXEJd1CIiFzCOdhMqd8XpqaelbZaqQurZ1vlXUQo0WjLkPVkrfPA2eyDDCMRC+jkfJ9wpWS1wATyKHeKzqI0q4THo4e8gFsJ6HNHGF09BkIrKeu5XFuzfj9O3SfB85khaGTSOTSRsIrm2+I+4kaJ415lX+Ro81paAIvEaUc8btrieJpeo/46GVVZVYjZXXE2E0tayChaYvsiAvINsA+slonkJ1gx/tGmW2XgVR+RfvLe3DnZYcwgjnSvJ8gW0V2yyHJSqsiC9DTfmrAXcTteJach0RAN3QOmbvB5UXsgXa4jvj9AySMNJ8cHsa0WbLyxoWNIspf488/R7jQBB4RuogkPE3TdkiL0AAm5DRtO5bcEbIL3iKGGifjfcDFAM8Rd7OMvJTNaHkbUX70LRi6DdBGFL5t9dUPfMQIVdKVa1Z92mrtIGdIXeXGkGgrrs0eYvDbOoe4d5JfDARBsJAmEMMw/VHiv/qTpGEBTvc5ul8r+L+g/D2gYEoDFExpgIKpIDe1SvrLWU1PKsg1uZL+MUT4a9yn8mpicfwAdgf0cu555IpieTm395jLuR+Arz8BrLjpSMoYSlEAAAAASUVORK5CYII=">
              </div>
            </div>
            <div class="src line-ellipsis">{{movieinfo.src}}/{{movieinfo.episodeDur}}分钟</div>
            <div class="pubDesc line-ellipsis">{{movieinfo.pubDesc}}</div>
          </div>
        </div>
        <router-link :to="this.$route.path+'/moviedetail'">
        <div class="arrow-g">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAYAAAAfD8YZAAAAAXNSR0IArs4c6QAAAS5JREFUOBGVkktuwkAMhpOoJ+hhSouE2HbDgiVCNCAOVtQHnINHhbgMJ6g6/f9gR848kmDJeOzxZ3scskzEOfcKXUMLjXXZByYQhJlqMvz3PM//1E9Z7fJoEp5wXvWZoILRZQtg7xVYdhXQzuR2XoEB/NYCOSkVdKI/g441BnuBbmI7aMAE7ilgxyaboYOD4RMO9EWiTwhgJksBLtEvUNolRmGvwJG+yDNsXSB4s2aplR3M4Y80BnuGfiQ7m0Q2qP6JJvaLc/VpTKx5lPe9IfpibviMb+4lOXYXyGLRsRPgSTsSpASdW8Av+YQ3Er+NzgIuELdvZMcAZIUaBsgpCA55IZIEeV+NLSC32hskXCTAH9xFRyWkUsgSrhqAJfjpL8fch0dMMIGWMkmYEIn8Az5Wgp5LHlhmAAAAAElFTkSuQmCC">
        </div>
        </router-link>
      </div>
      <div id="showDays">
          <ul id="timeline" class="mb-line-b">
          
          <li  class="showDay" :class="{chosen : show==1}" @click="show1()">
              2019-08-01
            </li>

          <li  class="showDay" :class="{chosen : show==2}" @click="show2()">
              2019-08-02
              </li>

          <li  class="showDay" :class="{chosen : show==3}" @click="show3()">
              2019-08-03
              </li>

          <li  class="showDay" :class="{chosen : show==4}" @click="show4()">
              2019-08-04
              </li>

          <li class="showDay" :class="{chosen : show==5}" @click="show5()">
              2019-08-05
              </li>
         <li  class="showDay" :class="{chosen : show==6}" @click="show6()">
              2019-08-07
        </li>
        <li  class="showDay" :class="{chosen : show==7}" @click="show7()">
              2019-08-08
        </li>

       </ul>
      </div>
      <div class="nav-wrap filter-nav-wrap">
        <div class="tab mb-line-b">
          <div class="item" data-tab=".region">全城<span class="drop"></span></div>
          <div class="item" data-tab=".region">品牌<span class="drop"></span></div>
          <div class="item" data-tab=".region">特色<span class="drop"></span></div>
        </div>
        <!-- <div class="close-tab">
          <div class="tab-content">
            <div class="page special"></div>
            <div class="page brand"></div>
            <div class="page region"></div>
          </div>
        </div> -->
      </div>
      <div class="blacker"></div>
      <v-cinemalist :date="date"></v-cinemalist>
    </div>
  </div>
</template>

<script>
import CinemaList from '@/components/pages/cinema/CinemaList'
import Header from '@/components/Header'
export default {
  data(){
      return{
          id:this.$route.params.id,
          movieinfo:[],
          date:'2019-08-01',
          show:1,
      }
  },
  components:{
    'v-header':Header,
    'v-cinemalist':CinemaList
  },
  methods:{
   show1(){
       this.show=1;
   },
   show2(){
        this.show=2;
   },
   show3(){
        this.show=3;
   },
   show4(){
        this.show=4;
   },
   show5(){
        this.show=5;
   },
   show6(){
        this.show=6;  
   },
   show7(){
        this.show=7;
   },
  },
  created(){
      this.$http.get('https://www.easy-mock.com/mock/5d28a020c26cea5c144e782d/http:/m.maoyan.com/ajax/detailmovie/'+this.id).then(res=>{
          console.log(res);
          this.movieinfo = res.data.detailMovie;
        //   console.log(this.movieinfo.nm);
          
      })
        window.onload  = function(){
          var oUl = document.getElementById('timeline')
          var oLi = oUl.getElementsByTagName('li')
          oUl.addEventListener('click',(e)=>{
            var target = e.target||e.srcElement;
            this.date = e.target.innerHTML;
            console.log(this.date);
            

          })
        }
  }
}
</script>

<style scoped>
a {
    cursor: pointer;
}
a {
    background-color: transparent;
}
.navbar-back:after {
    top: 16px;
    left: 12px;
    width: 13px;
    height: 13px;
    position: absolute;
    border: 2px solid #FFF;
    border-width: 0 0 2px 2px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}
.navbar .city:after, .navbar-back:after {
    content: '';
}
.body .movie-detail {
    height: 188px;
    position: relative;
    cursor: pointer;
}
.body .movie-detail .movie-filter {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: #333;
}
.body .movie-detail .poster-bg {
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    position: absolute;
    -webkit-filter: blur(1.2rem);
    filter: blur(1.2rem);
    background-size: cover;
    background-repeat: no-repeat;
    opacity: .55;
}
.body .movie-detail .detail {
    height: 150px;
    padding: 19px 30px 19px 15px;
}
.box-flex {
    display: flex;
}
.body .movie-detail .arrow-g {
    position: absolute;
    width: 10px;
    right: 15px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
.body .movie-detail .detail .poster img {
    width: 110px;
    height: 150px;
    box-sizing: border-box;
}
a, img {
    display: block;
}
img, legend {
    border: 0;
}
.body .movie-detail .detail .content {
    overflow-x: hidden;
    margin-left: 12.5px;
    line-height: 1;
    color: #fff;
}
.flex {
    flex: 1;
}
.body .movie-detail .detail .content .title {
    font-size: 20px;
    margin-top: 2px;
    font-weight: 700;
    overflow: hidden;
}
.body .movie-detail .detail .content .pubDesc, .body .movie-detail .detail .content .snum, .body .movie-detail .detail .content .src, .body .movie-detail .detail .content .title-en-name, .body .movie-detail .detail .content .type {
    margin-top: 10px;
    font-size: 12px;
    color: #fff;
    opacity: .8;
}
.line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.body .movie-detail .detail .content .score {
    font-size: 18px;
    font-weight: 700;
    color: #fc0;
    margin-top: 11px;
}
.body .movie-detail .detail .content .score {
    /* font-size: 18px; */
    font-weight: 700;
    /* color: #fc0; */
    margin-top: 11px;
}
.body .movie-detail .detail .content .type>span, .mew-desc img {
    vertical-align: top;
}
.body .movie-detail .detail .content .type .type-group {
    display: inline-block;
    width: 42px;
    opacity: .85;
}
a, img {
    display: block;
}
.body .movie-detail .arrow-g {
    position: absolute;
    width: 10px;
    right: 15px;
    top: 50%;
    /* -webkit-transform: translateY(-50%); */
    transform: translateY(-50%);
}
#showDays {
    width: 100%;
    background-color: #fff;
}
#showDays, #showDays #timeline {
    overflow-x: scroll;
    height: 45px;
}
#showDays #timeline {
    padding: 0;
    margin: 0;
    white-space: nowrap;
}
#showDays #timeline .showDay.chosen {
    border-bottom: 2px solid #f03d37;
    color: #f03d37;
}
#showDays #timeline .showDay {
    position: relative;
    display: inline-block;
    width: 115px;
    line-height: 43px;
    margin-left: 4.5px;
    font-size: 14px;
    text-align: center;
    list-style: none;
    color: #666;
}
.nav-wrap.filter-nav-wrap {
    width: 100%;
    height: 40px;
    z-index: 10;
    background-color: #fff;
}
.body .nav-wrap, .fixed .topbar {
    position: relative;
}
.nav-wrap.filter-nav-wrap .tab {
    /* display: -webkit-box; */
    display: flex;
}
.nav-wrap.filter-nav-wrap .tab .item {
    -webkit-box-flex: 1;
    flex: 1;
    text-align: center;
    line-height: 40px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    font-size: 13px;
    text-overflow: ellipsis;
}
.nav-wrap.filter-nav-wrap .tab .item .drop {
    display: inline-block;
    position: absolute;
    top: 18px;
    width: 0;
    height: 0;
    margin-left: 4px;
    border: 4px solid transparent;
    border-top-color: #b0b0b0;
}
.close-tab {
    position: relative;
    width: 100%;
    background: #fff;
    z-index: 100;
    overflow: scroll;
    display: none;
}
.close-tab .tab-content {
    font-size: 15px;
}
img{
  width: 100%;
}
</style>
