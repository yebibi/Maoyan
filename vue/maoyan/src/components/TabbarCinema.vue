<template>
    <div>
      <div class="topbar">
      <div class="gray-bg topbar-bg ">
    <div class="city-entry">
        <router-link to= "/cityList" tag = "div">
         <span class="city-name">南昌</span><i class="city-entry-arrow"></i>
        </router-link>
     
    </div>
    <div class="search-entry search-input" data-type="cinema">
        
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwFJREFUSA3FVs1qU0EUTibBRQiCRF3UB3BTcFHwJ0XRJ+gDhDaQ5vcJ3PgCfYL80AYSyQP4BIKQiosuhLoQXOjCbqQIJUgoyY3fdzNnmCRzk3uvBQfmzrlzzvm+OTNzz7mJxH9qyTC83W733mQyeTKbzbbQc8lk8hL9Ip1OfyqVSr/CYCzbBBKDQHU6nX2MZfQ8HNWyM949LOAU/bharb7F6DlsnFNOYhDmp9NpGx7bTi/35HkqlaphAadu9eLsCjFIS57nNRHlLct0AnmIiL5ivETPQf8Q4y56Gt1v0F8rpRog78pc0LhATFJEemIZXwHoKJvNNguFwm9r3hcHg8Gd0WjUwEJfY+K26BH54SZyQ8ztBcB7K9IzAO01Go2fAhg0NpvNB9C9Q9+hjY781bpt9y8MyBTP1CZFpC/CkJKIdrSHyMUmiKPxXBeSJvOb2mq1DiDLRbqCvFer1f7QIGzT9nuwpz/bNnZxfy6uPv0VYWvKouKZho1UfGTUkR/JOyI3uDIno2JygMEzPTHhRRJlnFH78yvglueJ78JRzEhQyFkMXbfX5Rg0p/2HWi/4K+YKq9qSWf2dymvs0cax8W1AEuesCSaHm2gGZwnfYCuszhhh1l6EMYohGJwlfANF4gt5w+qYBv+52Tg2vg2sWNowIVVll2nQNogqa3/mcDZP48/frKdiPcWqpKKkmXstfWRR+/uFg7hB9VpSpikMTPg690YmpR/834gjiI9FXh79IoEzUUibn6GUtHnG3Bslbbbb7QxIfwDjriY5r9frj0Aux7jALSnTYxGH0bXW7gDkQ9jIdaRfLFLCfEefUXA1UxapvKl6bBF1EXUZAa0sYIFYyBFt7D8QHBu/kuebyFeINXnsf65KpfIR94WXqrSO3ElMB33hDrBNh5DX/mVCf4It7ctFwntyE3kgsbXaRL/fvz8ejx8DMPR/9SbyUMT2IqLIa8mjAMWxdZB/y2QyT80/cRzQMD78lNDKOHOa84fwZbFYtCtiGJj4Noy81+uZcvkXH+aXwmK6+EsAAAAASUVORK5CYII=">
      <router-link to="/search" tag = "div">
        <span>搜影院</span>  
      </router-link>
   
    </div> 
  </div> 
    </div>
    <div class="nav-wrap filter-nav-wrap">
      <div class="tab mb-line-b">
        <div class="item-cinema">全城
          <span class="drop"></span>
        </div>
        <div class="item-cinema">品牌
           <span class="drop"></span>
        </div>
        <div class="item-cinema">特色
           <span class="drop"></span>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.topbar {
    border-bottom: 1px solid #e6e6e6;
    height: 44px;
}
.gray-bg {
    background: #f5f5f5;
}
.topbar-bg {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 44px;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.city-entry {
    padding-left: 15px;
    font-size: 15px;
    color: #666;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.topbar .search-input {
    -webkit-box-flex: 1;
    flex-grow: 1;
}
.search-input {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    height: 28px;
    font-size: 13px;
    color: #b2b2b2;
    margin-left: 18px;
    border: .5px solid #e6e6e6;
    border-radius: 5px;
    margin-right: 15px;
}
.search-input, .white-bg {
    background-color: #fff;
}
.city-entry .city-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 19.2vw;
}
.city-entry {
    padding-left: 15px;
    font-size: 15px;
    color: #666;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.city-entry-arrow {
    margin-right: 5px;
    width: 0;
    height: 0;
    border: 4px solid #b0b0b0;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    display: inline-block;
    margin-left: 4px;
    margin-top: 5px;
}
.search-input img {
    width: 14px;
    height: 14px;
    margin-left: 3px;
    margin-right: 4px;
}
a, img {
    display: block;
}
.nav-wrap.filter-nav-wrap {
  
    width: 100%;
    height: 40px;
    z-index: 10;
    background-color: #fff;
}
.container .nav-wrap, .fixed .topbar {
    position: relative;
}
.nav-wrap.filter-nav-wrap .tab {
    width: 358px;
    display: flex;
    
}

.nav-wrap.filter-nav-wrap .tab .item-cinema {
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

.nav-wrap.filter-nav-wrap .tab .item-cinema .drop {
    display: inline-block;
    position: absolute;
    top: 18px;
    width: 0;
    height: 0;
    margin-left: 4px;
    border: 4px solid transparent;
    border-top-color: #b0b0b0;
}
.nav-wrap.filter-nav-wrap .tab .item-cinema {
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
</style>
