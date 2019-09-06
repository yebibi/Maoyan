<template>
  <div>
    <v-header>{{this.$route.params.name}}</v-header>
    <div class="body">
      <div class="body-wrap">
        <div class="cinema-wrap">
          <div class="cinema-block">
            <div class="cinema-info" v-for="item in cinemadetail" :key="item.id">
              <div class="title line-ellipsis">{{item.nm}}</div>
              <div class="location line-ellipsis">{{item.addr}}</div>
              
              <div class="location-icon">
                <router-link to="/mapPage">
                <img src="data:image/png;base64,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" alt="">
                </router-link>
              </div>
              
            </div>
            <div>
              <div>
                <div class="cinema-nav swiper-container swiper-container-horizontal">
                  <div class="post-bg" style="background-image: url(&quot;//p0.meituan.net/148.208/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg&quot;);"></div>
                  <div class="post-bg-filter">
                    
                  </div>
                </div>
                <div class="movie-info">
                  <div class="movie-title line-ellipsis">
                      <span class="title">扫毒2天地对决</span>
                      <span class="grade">
                        <span>9.0<span class="small">分</span></span>
                      </span>
                    </div>
                    <div class="movie-desc line-ellipsis">100分钟 | 剧情 | 刘德华,古天乐,苗侨伟</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="no-sell-cinema"></div>
        <div class="nav-wrap">
          <div class="nav-block mb-line-t">
            <div class="nav-bar mb-line-b">
              <div class="nav-bar-wrap">
                <div class="nav-item">
                  <span class="date-title">今天7月14日</span>
                </div>
                <div class="nav-item">
                  <span class="date-title">明天7月15日</span>
                </div>
                <div class="nav-item">
                  <span class="date-title">后天7月16日</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="seat-wrap">
          <div class="discount-block">
            <div class="vip-tips">
              <a href="">
                <div class="label">折扣卡</div>
                <div class="label-text line-ellipsis">购票享低价，首单2张立减12元</div>
                <div class="process">限时15.9元开卡</div>
              </a>
            </div>
          </div>
          <div class="seat-inner-wrap">
            <div class="seat-list">
              <div class="list-wrap">
                <div class="item-outer mb-line-b">
                  <div class="item box-flex">
                    <div class="time-block">
                      <div class="begin">21:25</div>
                      <div class="end">23:05
                        <span class="tui">散场</span>
                      </div>
                    </div>
                    <div class="info-block">
                      <div class="lan">国语 2D</div>
                      <div class="hall">3号厅(冠名低价招商)</div>
                    </div>
                    <div class="price">
                      <div class="sellPr"><span class="d">¥</span><span><span class="stonefont">.</span></span></div>
                      <div class="vipPrice"><span class="icon">折扣卡</span><span class="num">¥14.9</span></div>
                      <div class="extraDesc">折扣卡首单特惠</div>
                    </div>
                    <div class="button-block">
                      <div class="button" data-bid="dp_wx_cinema_show_btn">购票</div>
                    </div>
                  </div>
                </div>
                <div class="item-outer mb-line-b">
                  <div class="item box-flex">
                    <div class="time-block">
                      <div class="begin">21:25</div>
                      <div class="end">23:05
                        <span class="tui">散场</span>
                      </div>
                    </div>
                    <div class="info-block">
                      <div class="lan">国语 2D</div>
                      <div class="hall">3号厅(冠名低价招商)</div>
                    </div>
                    <div class="price">
                      <div class="sellPr"><span class="d">¥</span><span><span class="stonefont">.</span></span></div>
                      <div class="vipPrice"><span class="icon">折扣卡</span><span class="num">¥14.9</span></div>
                      <div class="extraDesc">折扣卡首单特惠</div>
                    </div>
                    <div class="button-block">
                      <div class="button" data-bid="dp_wx_cinema_show_btn">购票</div>
                    </div>
                  </div>
                </div>
                 <div class="item-outer mb-line-b">
                  <div class="item box-flex">
                    <div class="time-block">
                      <div class="begin">21:25</div>
                      <div class="end">23:05
                        <span class="tui">散场</span>
                      </div>
                    </div>
                    <div class="info-block">
                      <div class="lan">国语 2D</div>
                      <div class="hall">3号厅(冠名低价招商)</div>
                    </div>
                    <div class="price">
                      <div class="sellPr"><span class="d">¥</span><span><span class="stonefont">.</span></span></div>
                      <div class="vipPrice"><span class="icon">折扣卡</span><span class="num">¥14.9</span></div>
                      <div class="extraDesc">折扣卡首单特惠</div>
                    </div>
                    <div class="button-block">
                      <div class="button" data-bid="dp_wx_cinema_show_btn">购票</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tuan-wrap">
          <div class="gap" style="height: 10px; background-color: #f0f0f0;"></div>
          <div class="tuan-list">
            <div class="tuan-title mb-line-b">影院超值套餐</div>
            <div class="tuan-item mb-line-b">
              <img data-ui-type="image-viewer" src="https://img.meituan.net/maoyaneticketimage/084eaf30de45ddf25160d0e8578df19e36161.jpg@750w_750h_2e">
              <span class="hot-tag ">HOT</span>
              <div class="item-info">
                <div class="title">
                  <span>双人</span>
                </div>
                <div class="sell-num">已售173</div>
                <div class="price">
                  <span class="sell-price">
                    <span>¥</span>
                    <span class="num">31.9</span>
                  </span>
                </div>
                <div class="buy-btn">去购买</div>
              </div>
            </div>
            <div class="tuan-item mb-line-b">
              <img data-ui-type="image-viewer" src="https://img.meituan.net/maoyaneticketimage/084eaf30de45ddf25160d0e8578df19e36161.jpg@750w_750h_2e">
              <span class="hot-tag ">HOT</span>
              <div class="item-info">
                <div class="title">
                  <span>双人</span>
                </div>
                <div class="sell-num">已售173</div>
                <div class="price">
                  <span class="sell-price">
                    <span>¥</span>
                    <span class="num">31.9</span>
                  </span>
                </div>
                <div class="buy-btn">去购买</div>
              </div>
            </div>
            <div class="tuan-item mb-line-b">
              <img data-ui-type="image-viewer" src="https://img.meituan.net/maoyaneticketimage/084eaf30de45ddf25160d0e8578df19e36161.jpg@750w_750h_2e">
              <span class="hot-tag ">HOT</span>
              <div class="item-info">
                <div class="title">
                  <span>双人</span>
                </div>
                <div class="sell-num">已售173</div>
                <div class="price">
                  <span class="sell-price">
                    <span>¥</span>
                    <span class="num">31.9</span>
                  </span>
                </div>
                <div class="buy-btn">去购买</div>
              </div>
            </div>
            <div class="tuan-item mb-line-b">
              <img data-ui-type="image-viewer" src="https://img.meituan.net/maoyaneticketimage/084eaf30de45ddf25160d0e8578df19e36161.jpg@750w_750h_2e">
              <span class="hot-tag ">HOT</span>
              <div class="item-info">
                <div class="title">
                  <span>双人</span>
                </div>
                <div class="sell-num">已售173</div>
                <div class="price">
                  <span class="sell-price">
                    <span>¥</span>
                    <span class="num">31.9</span>
                  </span>
                </div>
                <div class="buy-btn">去购买</div>
              </div>
            </div>
            <div class="tuan-item mb-line-b">
              <img data-ui-type="image-viewer" src="https://img.meituan.net/maoyaneticketimage/084eaf30de45ddf25160d0e8578df19e36161.jpg@750w_750h_2e">
              <span class="hot-tag ">HOT</span>
              <div class="item-info">
                <div class="title">
                  <span>双人</span>
                </div>
                <div class="sell-num">已售173</div>
                <div class="price">
                  <span class="sell-price">
                    <span>¥</span>
                    <span class="num">31.9</span>
                  </span>
                </div>
                <div class="buy-btn">去购买</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="overlay"></div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  data(){
    return{
      id:this.$route.params.id,
      cinemadetail:[],
    }
 
  },
  components:{
    'v-header':Header
  },
  created(){
    this.$http.get('https://www.easy-mock.com/mock/5d28a020c26cea5c144e782d/http:/m.maoyan.com/ajax/cinemaList/'+this.id)
    .then(res=>{
      console.log(res);
      this.cinemadetail = res.data.cinemas;
      console.log(this.cinemadetail);
      
    })
  }
}
</script>

<style scoped>
.body .body-wrap {
    margin-bottom: 25px;
}
body {
    font-size: 14px;
    color: #777;
}
.body .body-wrap>div {
    background-color: #fff;
}
.cinema-block .cinema-info {
    position: relative;
    padding: 15px 100px 15px 15px;
}
.cinema-block .cinema-info .title {
    font-size: 17px;
    line-height: 24px;
    font-weight: 700;
    color: #333;
}
.line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.cinema-block .cinema-info .location {
    margin-top: 2px;
    font-size: 13px;
    line-height: 18.5px;
    color: #999;
}
.cinema-block .cinema-info .location-icon {
    position: absolute;
    right: 0;
    top: 50%;
    width: 70px;
    height: 31px;
    transform: translateY(-50%);
    border-left: 1px solid #d8d8d8;
    text-align: center;
}
.cinema-block .cinema-nav {
    padding: 20px 15px 20px 5px;
    transform: translateZ(0);
}
.swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
.cinema-block .cinema-nav .post-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    overflow: hidden;
    filter: blur(30px);
    background-position-y: 40%;
}
.cinema-block .cinema-nav .post-bg-filter {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #40454d;
    opacity: .55;
}
.swiper-slide, .swiper-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
}
.cinema-block .movie-info .movie-title {
    height: 24px;
    line-height: 24px;
    font-size: 17px;
    color: #333;
    font-weight: 700;
}
.cinema-block .movie-info .movie-title .grade {
    color: #ffb400;
    font-size: 16px;
}
.cinema-block .movie-info .movie-desc {
    margin-top: 2px;
    height: 18.5px;
    line-height: 18.5px;
    font-size: 13px;
    color: #999;
}
.body .nav-wrap, .fixed .topbar {
    position: relative;
}
.discount-block {
    padding-top: 1px;
}
.vip-tips {
    background-color: #fff5ea;
}
.discount-tips, .vip-tips {
    margin-top: -1px;
}
.discount-tips, .vip-tips {
    padding: 0 15px;
    height: 42px;
    line-height: 42px;
}
.vip-tips .label {
    background-color: #ff941a;
}
.discount-tips .label, .vip-tips .label {
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    display: inline-block;
    border-radius: 2px;
    font-size: 10px;
    line-height: 15px;
    height: 15px;
    width: 34px;
    text-align: center;
    color: #fff;
    margin-top: 13px;
    margin-right: 10px;
}
.vip-tips .label-text {
    color: #fa9600;
}
.discount-tips .label-text, .vip-tips .label-text {
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    font-size: 12px;
}
.discount-tips .process, .vip-tips .process {
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    line-height: 42px;
    color: #999;
    font-size: 12px;
}
.seat-inner-wrap {
    min-height: 40px;
}
.seat-inner-wrap, .seat-list .list-wrap .item .time-block {
    position: relative;
}

.seat-list .list-wrap .item-outer {
    padding: 17px 0;
    margin-left: 12.5px;
}

.seat-list .list-wrap .item {
    padding-right: 12.5px;
}
.box-flex {

    display: flex;
}
.seat-inner-wrap, .seat-list .list-wrap .item .time-block {
    position: relative;
}
.seat-list .list-wrap .item .time-block .begin {
    font-size: 20px;
    color: #333;
    line-height: 1;
    white-space: nowrap;
}
.seat-list .list-wrap .item .time-block .end {
    margin-top: 10px;
    color: #999;
    font-size: 11px;
    line-height: 1;
    white-space: nowrap;
}
.seat-list .list-wrap .item .time-block .end>.tui {
    margin-left: 4px;
    display: inline-block;
    transform: translateY(-.5px);
}
.seat-list .list-wrap .item .info-block {
    margin-left: 17px;
    -webkit-box-flex: 1;
    flex: 1;
    overflow-x: hidden;
}
.seat-list .list-wrap .item .info-block .lan {
    margin-top: 2px;
    line-height: 18px;
    font-size: 13px;
    color: #333;
    white-space: normal;
}
.seat-list .list-wrap .item .info-block .hall {
    margin-top: 7px;
    font-size: 11px;
    color: #999;
    white-space: normal;
}
.seat-list .list-wrap .item .price {
    -webkit-box-flex: 0;
    flex: 0 1 auto;
    width: 130px;
    margin-left: 5px;
}
.seat-list .list-wrap .item .price .sellPr {
    display: inline-block;
    line-height: 1;
    color: #f03d37;
    margin-top: 1px;
    font-size: 19px;
}
.vipPrice {
    display: inline-block;
    line-height: 15px;
    height: 15px;

    transform: scale(.8);
    transform-origin: left;
    margin-right: -16px;
    border: 1px solid #ff9000;
    border-radius: 2px;
    font-size: 12px;
}
.seat-list .list-wrap .item .price .sellPr .d {
    font-size: 11px;
}
.stonefont {
    font-family: 'stonefont';
}
.vipPrice .icon, .vipPrice .num {
    display: inline-block;
    padding: 0 2px;
}

.vipPrice .icon {
    color: #fff;
    background-color: #f90;
}
.seat-list .list-wrap .item .price .extraDesc {
    margin-top: 5px;
    display: block;
    font-size: 11px;
    color: #999;
}
.seat-list .list-wrap .item .button-block {
    width: 45px;
    margin-left: 2px;
    position: relative;
}
.seat-list .list-wrap .item .button-block .button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 27px;
    line-height: 28px;
    font-size: 12px;
    background-color: #f03d37;
    color: #fff;
    border-radius: 4px;
    text-align: center;
}
.nav-block .nav-bar .nav-item:first-child {
    margin-left: 15px;
}
.nav-block .nav-bar .nav-item {
    display: inline-block;
    line-height: 45px;
    height: 45px;
    text-align: center;
    font-size: 14px;
    color: #666;
}
.cinema-block .cinema-nav .post-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    overflow: hidden;
    filter: blur(30px);
    background-position-y: 40%;
}
.cinema-block .cinema-nav {
    padding: 20px 15px 20px 5px;

    transform: translateZ(0);
}
.swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
.cinema-block .movie-info {
    padding: 11px 15px;
    text-align: center;
}
/* .nav-block .nav-bar .nav-bar-wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -20px;
    padding-bottom: 20px;
    overflow: auto;
} */
.discount-tips a, .vip-tips a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    color: #777;
}
a {
    text-decoration: none;
}
a {
    cursor: pointer;
}
.tuan-wrap .tuan-list .tuan-title {
    line-height: 45px;
    height: 45px;
    font-size: 15px;
    color: #666;
}
.tuan-wrap .tuan-list .tuan-item {
    cursor: pointer;
    position: relative;
    width: 100%;
    padding: 13px 0;
    overflow: hidden;
}
.tuan-wrap .tuan-list .tuan-item img {
    display: inline-block;
    width: 92px;
    height: 92px;
    float: left;
}
img, legend {
    border: 0;
}
.tuan-wrap .tuan-list .tuan-item .hot-tag {
    position: absolute;
    left: 0;
    top: 13px;
    display: inline-block;
    height: 18px;
    line-height: 18px;
    background-color: #fa5939;
    font-size: 12px;
    padding: 0 5px;
    color: #fff;
    border-bottom-right-radius: 2px;
}
.tuan-wrap .tuan-list .tuan-item .item-info {
    position: relative;
    margin: 0 15px 0 102px;
    height: 92px;
    overflow: hidden;
}
.tuan-wrap .tuan-list .tuan-item .item-info .title {
    font-size: 14px;
    line-height: 18px;
    color: #333;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.tuan-wrap .tuan-list .tuan-item .item-info .sell-num {
    display: inline-block;
    position: absolute;
    bottom: 34px;
    right: 0;
    line-height: 16px;
    height: 16px;
    font-size: 12px;
    color: #999;
}
.tuan-wrap .tuan-list .tuan-item .item-info .price {
    position: absolute;
    bottom: 0;
    left: 0;
}
.tuan-wrap .tuan-list .tuan-item .item-info .price .sell-price {
    color: #f03d37;
    display: inline-block;
}
.tuan-wrap .tuan-list .tuan-item .item-info .price .sell-price span {
    font-size: 14px;
}
.tuan-wrap .tuan-list .tuan-item .item-info .price .sell-price .num {
    font-size: 17px;
}
.tuan-wrap .tuan-list .tuan-item .item-info .buy-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    display: inline-block;
    padding: 0 8px;
    height: 27px;
    line-height: 27px;
    font-size: 12px;
    border-radius: 3px;
    color: #fff;
    background-color: #f03d37;
}
.tuan-wrap .tuan-list .tuan-item .item-info .title span {
    display: inline-block;
    vertical-align: top;
    margin-top: 1px;
    margin-right: 7px;
    padding: 0 4px;
    font-size: 10px;
    line-height: 15px;
    height: 15px;
    background: #f90;
    border-radius: 2px;
    color: #fff;
}

.cinema-block .cinema-info .location-icon img {
    display: inline-block;
    width: 19px;
    height: 22px;
    margin-top: 5px;
}
</style>
