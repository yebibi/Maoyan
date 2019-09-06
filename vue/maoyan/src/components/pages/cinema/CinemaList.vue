<template>
  <div class="cinema-list" style="margin-bottom:55px">
      <div class="list-wrap-cinema" style="margin-top: 0px; min-height: 627px;" >
       
        <div class="item mb-line-b" v-for="item in cinemaList" :key="item.id">
           <router-link :to="'/cinemadetail/'+(item.nm)+'/'+(item.id)" tag="div">
          <div class="title-block box-flex middle">
            <div class="title line-ellipsis">
              <span>{{item.nm}}</span>
              <span class="price-block">
                <span class="price">{{item.sellPrice}}</span>
                <span class="q">元起</span>
              </span>
            </div>
            <div class="location-block box-flex">
              <div class="flex line-ellipsis">{{item.addr}}</div>
              <div class="distance">{{item.distance}}</div>
            </div>
            <div class="flex"></div>
            <div class="label-block">
              <div class="allowRefund"> 退</div>
              <div class="endorse">改签</div>
              <div class="snack">小吃</div>
              <div class="vipTag">折扣卡</div>
            </div>
            <div class="discount-block">
              <div>
                <div class="discount-label normal card">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="">
                </div>
                <div class="discount-label-text">{{item.promotion.cardPromotionTag}}</div>
              </div>
            </div>
          </div>
          </router-link>
        </div>
     
      </div>
    </div>
</template>

<script>
export default {
   data(){
    return{
      cinemaList:[],
    }
    
  },
  props:['date'],
   created(){
    this.$http.get('https://www.easy-mock.com/mock/5d28a020c26cea5c144e782d/http:/m.maoyan.com/ajax/'+this.date)
    .then(res=>{
      console.log(res);
      this.cinemaList = res.data.cinemas; 
      console.log(this.date);
      
    })
  }
}
</script>

<style scoped>
.cinema-list{
  width: 358px;
}
.container .cinema-list {
    margin-top: 0;
}
.cinema-list .list-wrap-cinema {
    background-color: #fff;
}
.cinema-list .list-wrap-cinema  .item {
    padding: 13px 15px 13px 0;
    margin-left: 15px;
    background-color: #fff;
    position: relative;
    overflow: hidden;
}
.cinema-list .list-wrap-cinema .title-block {
    display: block;
}
.cinema-list .list-wrap-cinema .title-block .title {
    height: 23px;
    line-height: 23px;
    font-size: 16px;
    color: #000;
}
.cinema-list .location-block, .cinema-list .price-block, .cinema-list .title-block {
    line-height: 1.5;
}
.line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.cinema-list .list-wrap-cinema .price-block {
    padding-top: 9px;
    padding-left: 3px;
}
.cinema-list .list-wrap .title-block .title {
    height: 23px;
    font-size: 16px;
    color: #000;
}
.cinema-list .list-wrap-cinema .price-block .price {
    font-size: 18px;
}
 .cinema-list .list-wrap-cinema .price-block .price {

    color: #f03d37;
}
.cinema-list .list-wrap-cinema .price-block .q {
    margin-left: 3px;
}
 .cinema-list .list-wrap-cinema .price-block .q {
    font-size: 11px;
    color: #f03d37;
}
.cinema-list .list-wrap-cinema .location-block {
    margin-top: 6px;
    font-size: 13px;
    color: #666;
}
.flex {
    -webkit-box-flex: 1;
    flex: 1;
}
.line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.cinema-list .list-wrap-cinema .location-block .distance, .cinema-list .list-wrap-cinema .location-block .region {
    margin-left: 5px;
}
.cinema-list .list-wrap-cinema .title-block .label-block {
    height: 17px;
    line-height: 17px;
    margin-top: 4px;
    margin-bottom: 4px;
    overflow: hidden;
    font-size: 0;
    flex-shrink: 0;
}
.cinema-list .list-wrap-cinema .title-block .label-block div.allowRefund, .cinema-list .list-wrap-cinema .title-block .label-block div.endorse, .cinema-list .list-wrap-cinema .title-block .label-block div.hallType, .cinema-list .list-wrap-cinema .title-block .label-block div.sell {
    color: #589daf;
    border: 1px solid #589daf;
}
.cinema-list .list-wrap-cinema .title-block .label-block>div {
    position: relative;
    display: inline-block;
    padding: 0 3px;
    height: 15px;
    line-height: 15px;
    border-radius: 2px;
    font-size: .6rem;
}
.cinema-list .list-wrap-cinema .title-block .label-block>div+div {
    margin-left: 5px;
}
.list-wrap-cinema .title-block .label-block div.snack, .cinema-list .list-wrap-cinema .title-block .label-block div.vipTag {
    color: #f90;
    border: 1px solid #f90;
}
.cinema-list .discount-block {
    color: #999;
    margin-bottom: 4px;
}
.cinema-list .discount-block .discount-label {
    width: 15px;
    height: 14px;
    position: relative;
    top: 3px;
}
.discount-label {
    display: inline-flex;
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
.cinema-list .discount-block .discount-label-text {
    margin-left: 0;
    font-size: 11px;
}
.discount-label-text {
    display: inline-block;
}
.box-flex {
    display: flex;
}
.mb-line-b{
  border-bottom: 1px solid #e6e6e6;
}
</style>
