<template>
  <div>
     <v-header>猫眼电影</v-header> 
     <div class="search-wrapper">
     <div class="search-header">
    
        <div class="input-wrapper">
         <img src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/search.png" alt="" class="search-icon">
         <input type="text" class="search-input" placeholder="搜电影、搜影院">
         <img src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/close.png" display="none" alt="" class="del-input">
       </div>


       <div class="concel">取消</div>
     </div>
     </div>
  </div>
 
</template>

<script>
import Header from '@/components/Header'
export default {
  components:{
    'v-header':Header
  }
}
</script>

<style scoped>
.search-wrapper {
    background-color: #f5f5f5;
    height: 100vh;
}
.search-header .search-icon {
    width: 15px;
    height: 15px;
    margin-right: 6px;
    float: left;
    position: relative;
    top: 6px;
}
a, img {
    display: block;
}
img, legend {
    border: 0;
}
.search-header .search-input {
    -webkit-box-flex: 1;
    flex: 1;
    border: none;
    font-size: 13px;
    color: #333;
    line-height: 20px;
    padding: 4px 0;
    width: calc(100% - 40px);
}
button, input, select, textarea {
    outline: 0;
    resize: none;
}
.search-header .del-input {
    width: 15px;
    height: 15px;
    float: right;
    top: 6px;
}
.hot-search, .result .movie .detail-section, .search-header, .search-header .del-input {
    position: relative;
}
.search-header .input-wrapper {
    padding: 0 10px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    background-color: #fff;
    -webkit-box-flex: 1;
    flex-grow: 1;
}
.search-header .cancel {
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    font-size: 16px;
    color: #f03d37;
}
.search-header {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 8px 0 8px 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
    z-index: 1;
}
.search-header {
  position: relative;
}
</style>
