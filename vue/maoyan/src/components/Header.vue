<template>
   <div class="navbar">
      <!-- <div v-if=" path='/moviepage'"> -->
        <h1 class="nav-header">
          <slot></slot>
        </h1>
      <!-- </div> -->
      <!-- <div v-else-if="path='/cinema'">
        <h1 class="nav-header">影院</h1>
      </div>
      <div v-else>
        <h1 class="nav-header">我的</h1>
      </div> -->
      
    </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar h1.nav-header {
    display: block;
    -webkit-box-flex: 1;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 50px;
    margin: 0 52.5px 0 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    margin: 0;
}
.navbar {
    height: 50.5px;
    color: #fff;
    background: #e54847;
    border-bottom: 1px solid #e54847;
    display: -webkit-box;
    display: -ms-flexbox;
    position: relative;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    
}
</style>
