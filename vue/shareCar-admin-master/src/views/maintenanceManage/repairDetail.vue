<template>
  <div>
    <Row :gutter="16">
      <Col span="24" class="first-title">车辆维修详情</Col><br/> 
      <Col span="24" class="small-title">车辆基本信息</Col><br/>
      <Col span="6">
          <div>车牌号：{{dataObj.id}}</div>
      </Col>
      <Col span="6">
          <div>车型：{{dataObj.type}}</div>
      </Col>
      <Col span="6">
          <div>车架号：{{dataObj.number}}</div>
      </Col>
      <Col span="6">
          <div>发动机号：{{dataObj.startnumber}}</div>
      </Col>
    </Row><br/>
    <Row :gutter="16">
      <Col span="6">
          <div>座位数：{{dataObj.sitnumber}}</div>
      </Col>
      <Col span="6">
          <div>城市：{{dataObj.city}}</div>
      </Col>
      <Col span="6">
          <div>颜色：{{dataObj.color}}</div>
      </Col>
      <Col span="6">
          <div>检验有效期: {{dataObj.time}}</div>
      </Col>
    </Row><br/>
    <Row :gutter="16">
      <Col span="6">
          <div>交强险保险公司：{{dataObj.company}}</div>
      </Col>
      <Col span="6">
          <div>交强保单号：{{dataObj.order}}</div>
      </Col>
      <Col span="6">
          <div>投保日期：{{dataObj.data}}</div>
      </Col>
      <Col span="6">
          <div>有效保险期：{{dataObj.canusedata}}</div>
      </Col>
    </Row><br/>
    <Row>
      <Col span="6">商业险保险公司：{{dataObj.sCompany}}</Col>
      <Col span="6">商业保单号：{{dataObj.sOrder}}</Col>
      <Col span="6">
          <div>投保日期：{{dataObj.tData}}</div>
      </Col>
      <Col span="6">
          <div>有效保险期：{{dataObj.yData}}</div>
      </Col>
    </Row><br/>
    <Row>
      <Col span="6">
          <div>发动机状态：{{dataObj.start_state}}</div>
      </Col>
      <Col span="6">
          <div>车门状态：{{dataObj.door_state}}</div>
      </Col>
      <Col span="6">灯光：{{dataObj.light}}</Col>
    </Row><br/>
    <Row>
      <Col span="24" class="small-title">维修记录</Col><br/>
    </Row>
    <Row>
      <Table stripe :columns="columns1" :data="dataTable"></Table>
    </Row>
  </div>
</template>

<script>
  import GX from '../../utils/gx.js'
  export default {
    data () {
      return {
        columns1: [
          {
            title: '日期',
            key: 'id',
            width: 120,
            align: 'center'
          },
          {
            title: '故障类型',
            key: 'birthday',
            width: 120,
            align: 'center'
          },
          {
            title: '维修地点',
            key: 'phone',
            width: 140,
            align: 'center'
          },
          {
            title: '维修性质',
            key: 'deposit_state',
            width: 120,
            align: 'center'
          },
          {
            title: '维修费用',
            key: 'username',
            width: 120,
            align: 'center'
          },
          {
            title: '维修时间',
            key: 'verify_state',
            width: 120,
            align: 'center'
          },
          {
            title: '相关证明图片',
            key: 'user_state',
            width: 150,
            align: 'center'
          },
          {
            title: '备注信息',
            key: 'orders_count',
            width: 150,
            align: 'center'
          },
          {
            title: '负责人',
            key: 'credit_score',
            width: 120,
            align: 'center'
          }
        ],
        userId: 'DE018640-DCEE-C7B3-453F-CFE484DBFDF8',
        dataObj: {
          id:"123456",
          type:" 豪华车型",
          number:"12",
          startnumber:"S123",
          sitnumber:"4",
          city:"北京",
          color:"红色",
          time:"2019-5-19",
          company:"xxx保险公司",
          order:"12",
          data:"2018-01-01",
          canusedata:"2018-02-30",
          sCompany:"xxx商业保险公司",
          sOrder:"111",
          tData:"2018-02-19",
          yData:"2020-02-19",
          start_state:"良好",
          door_state:"良好",
          light:"良好",
        }
      }
    },
    mounted () {
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
