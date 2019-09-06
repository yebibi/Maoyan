<template>
  <div>
    <Row :gutter="16">
      <Col span="24" class="first-title">会员详情</Col><br/> 
      <Col span="24" class="small-title">基本信息</Col><br/>
      <Col span="6">
          <div>头像：<img :src="dataObj.face"></div>
      </Col>
      <Col span="6">
          <div>性别：{{dataObj.sex}}</div>
      </Col>
      <Col span="6">
          <div>电话：{{dataObj.phone}}</div>
      </Col>
      <Col span="6">
          <div>出生年月：{{dataObj.birthday}}</div>
      </Col>
    </Row><br/>
    <Row :gutter="16">
      <Col span="6">
          <div>注册时间：{{dataObj.reg_date}}</div>
      </Col>
      <Col span="6">
          <div>用户状态：{{dataObj.user_state}}</div>
      </Col>
      <Col span="6">
          <div>绑定微信号：{{dataObj.weixin}}</div>
      </Col>
      <Col span="6">
          <div>押金状态: {{dataObj.deposit_state}}</div>
      </Col>
    </Row><br/>
    <Row :gutter="16">
      <Col span="6">
          <div>余额：{{dataObj.money}}</div>
      </Col>
      <Col span="6">
          <div>押金：{{dataObj.deposit}}</div>
      </Col>
      <Col span="6">
          <div>订单数：{{dataObj.orders_count}}</div>
      </Col>
      <Col span="6">
          <div>信用值：{{dataObj.credit_score}}</div>
      </Col>
    </Row><br/>
    <Row>
      <Col span="6">违章记录：{{dataObj.peccancy_count}}</Col>
    </Row><br/>
    <Row>
      <Col span="24" class="small-title">认证信息</Col><br/>
      <Col span="6">
          <div>认证状态：{{dataObj.verify_state}}</div>
      </Col>
      <Col span="6">
          <div>认证姓名：{{dataObj.username}}</div>
      </Col>
      <Col span="6">
          <div>身份证号：{{dataObj.id_card}}</div>
      </Col>
      <Col span="6">
          <div>身份证有效期：{{dataObj.id_card_expire}}</div>
      </Col>
    </Row><br/>
    <Row>
      <Col span="6">
          <div>驾驶证有效期：{{dataObj.driver_license_expire}}</div>
      </Col>
      <Col span="6">
          <div>驾驶证类型：{{dataObj.driver_license_type}}</div>
      </Col>
    </Row><br/>
    <Row>
      <!-- <Col span="24">认证图片：<img v-for="item in verify_images" :src="item"></Col> -->
    </Row><br/>
    <Row>
      <Col span="24">审核备注：{{dataObj.verify_remark}}</Col>
    </Row>
  </div>
</template>

<script>
  import GX from '../../utils/gx.js'
  export default {
    data () {
      return {
        userId: '',
        dataObj: {
          sex:"男",
          phone:'18174019119',
          birthday:"1996-12-28",
          reg_date:"2015-01-01",
          user_state:"良好",
          weixin:"buzaikuailele",
          deposit_state:"为退还",
          money:"100",
          deposit:"200",
          orders_count:"50",
          credit_score:"80",
          peccancy_count:"无",
       
          verify_state:"已认证",
          username:"叶某人",
          id_card:"362329199701203032",
          id_card_expire:"2022-01-01",
          driver_license_expire:"2025-02-02",
          driver_license_type:"c1",
          verify_remark:"无"
        }
      }
    },
    mounted () {
      this.userId = window.location.href.split('/').pop()
      this.getmemberDetail()
    },
    methods: {
      getmemberDetail () {
        GX.postJson('/backend/user/detail', {user_id: this.userId}, (res) => {
          if (res.result === 0) {
            this.dataObj = res.content
          } else {
            this.$Message.warning(res.content.message)
          }
        })
      }
    }
  }
</script>

<style>
  .first-title {
    color: #5cadff;
    font-size: 16px;
    height: 45px;
    line-height: 45px;
    border-bottom: 3px solid #ebebeb;
  }
  .small-title {
    height: 40px;
    line-height: 40px;
    margin: 10px 0px;
    background-color: #f4f4f4;
    font-weight: bold;
    color: #666;
  }
</style>
