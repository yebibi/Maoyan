<template>
  <div>
    <Form  :label-width="80">
      <Row :gutter="16">
        <Col span="6">
          <Form-item label="车牌号">
            <Input placeholder="请输入" v-model="car_num"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="维保类型">
            <Select placeholder="请选择">
              <Option value="0">清洗</Option>
              <Option value="1">保养</Option>
              <Option value="2">维修</Option>
              <Option value="3">保险</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="维保状态">
            <Select placeholder="请选择">
              <Option value="0">待维保</Option>
              <Option value="1">正在维保</Option>
              <Option value="2">已取消</Option>
              
            </Select>
          </Form-item>
        </Col>
        <Col span="3">
            <div>
              <Button type="info" @click="getCarList">查询</Button>
              <Button type="success"@click="clear">清空</Button>
            </div>
        </Col>
        <Col span="3">
          <Button type="warning" @click.native="showAdd = true">新增</Button>
          <Button type="warning">导出</Button>
        </Col>
      </Row>
      <Row :gutter="16">
        <Col span="6">
          <Form-item label="维保性质">
            <Select placeholder="请选择">
              <Option value="0">清洗</Option>
              <Option value="1">保养</Option>
              <Option value="2">维修</Option>
              <Option value="3">保险</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="省市">
            <Select placeholder="请选择">
              <Option value="1">北京市</Option>
              <Option value="2">上海市</Option>
              <Option value="3">深圳市</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="车型">
            <Select placeholder="请选择">
              <Option value="0">豪华型</Option>
              <Option value="1">非豪华型</Option>
              <Option value="2">电动车型</Option>
            
            </Select>
          </Form-item>
        </Col>
      </Row>
    </Form>
    <Table stripe :columns="columns1" :data="dataTable"></Table>
    <Page class-name="pageBox" :total="pageObj.total" :current="pageObj.current_page" :page-size="pageObj.per_page" show-elevator></Page>
    <div class="clear"></div>
  </div>
</template>

<script>
  import GX from '../../utils/gx.js'
  export default {
    data () {
      return {
        car_num:"",
        columns1: [
         
          {
            title: '单号',
            key: 'id',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '车牌号',
            key: 'birthday',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '车型',
            key: 'phone',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '城市',
            key: 'deposit_state',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '维保类型',
            key: 'username',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '维保地点',
            key: 'verify_state',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '维保状态',
            key: 'user_state',
            width: 120,
            align: 'center',
            sortable: true
          },
          {
            title: '维保性质',
            key: 'username',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '维保费用(元)',
            key: 'orders_count',
            width: 120,
            align: 'center',
            sortable: true
          },
          {
            title: '维保时间',
            key: 'credit_score',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '维保人员',
            key: 'reg_date',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '操作',
            key: 'action',
            width: 100,
            align: 'center',
            fixed: 'right',
            render (h, params) {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'ios-eye',
                    size: '22'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  onClick () {
                    console.log('fsdfsdf')
                  }
                })
              ])
            }
          }
        ],
        dataTable: [],
        pageObj: {
          total: 1,
          current_page: 1,
          per_page: 20
        }
      }
    },
    mounted () {
      // this.getCarList()
    },
    methods: {
      clear(){
        this.dataTable=""
      },
      getCarList () {
       if(this.car_num===""){
         alert("请输入车牌号")
       }else if(this.car_num==="123456"){
         this.dataTable=[{
            
             id:"001",
             birthday:"123456",
             phone:"豪华型",
             deposit_state:"北京",
             username:"清洗",
             verify_state:"xx地",
             user_state:"待维保",
             orders_count:"100",
             credit_score:"30分钟",
             reg_date:"小军",
            
         }]
       
       }else{
         alert("未查询到数据")
       }
        this.car_num=""
      }
      
     
    }
  }
</script>

<style>
  .pageBox {
    margin-top: 20px;
    float: right;
    margin-right: 20px;
  }
  .clear {
    clear: both;
  }
</style>
