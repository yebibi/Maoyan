<template>
  <div>
    <nav-bar title="订单列表"></nav-bar>
    <Form :label-width="80">
      <Row :gutter="16">
        <Col span="4">
          <Form-item label="订单编号">
            <Input placeholder="请输入" v-model="formData.orderNo"></Input>
          </Form-item>
        </Col>
        <Col span="4">
          <Form-item label="城市">
            <Select placeholder="请选择" v-model="formData.city_id">
              <Option value="beijing">北京市</Option>
              <Option value="shanghai">上海市</Option>
              <Option value="shenzhen">深圳市</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="4">
          <Form-item label="车牌号">
            <Input placeholder="请输入" v-model="formData.plate"></Input>
          </Form-item>
        </Col>
        <Col span="4">
          <Form-item label="车型">
            <Select placeholder="请选择" v-model="formData.car_type_id">
              <Option value="beijing">豪华品牌车型</Option>
              <Option value="shanghai">非豪华品牌合资车型</Option>
              <Option value="shenzhen">安静低调的电动车</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="4">
          <Form-item label="手机号">
            <Input placeholder="请输入" v-model="formData.phone"></Input>
          </Form-item>
        </Col>
        <Col span="2">
          <Form-item label="开始时间">
            <Date-picker type="date" placeholder="选择日期" v-model="formData.start_time"></Date-picker>
          </Form-item>
        </Col>
        <Col span="2">
          <Form-item label="结束时间">
            <Date-picker type="date" placeholder="选择日期" v-model="formData.end_time"></Date-picker>
          </Form-item>
        </Col>
        </Row>

        <Row>
          <Col span="4">
            <Form-item label="取车网点">
              <Select placeholder="请选择" v-model="formData.startGarageID">
                <Option value="beijing">北京市</Option>
                <Option value="shanghai">上海市</Option>
                <Option value="shenzhen">深圳市</Option>
              </Select>
            </Form-item>
          </Col>
          <Col span="4">
            <Form-item label="还车网点">
              <Select placeholder="请选择" v-model="formData.endGarageID">
                <Option value="beijing">北京市</Option>
                <Option value="shanghai">上海市</Option>
                <Option value="shenzhen">深圳市</Option>
              </Select>
            </Form-item>
          </Col>
          <Col span="4">
            <Form-item label="订单状态">
              <Select placeholder="请选择" v-model="formData.orderStateID">
                <Option value="beijing">未确认</Option>
                <Option value="shanghai">已确认</Option>
                <Option value="shenzhen">已取消</Option>
              </Select>
            </Form-item>
          </Col>
          <Col span="4">
            <Form-item label="支付状态">
              <Select placeholder="请选择" v-model="formData.payment">
                <Option value="beijing">待支付</Option>
                <Option value="shanghai">已支付</Option>
                <Option value="shenzhen">已取消</Option>
              </Select>
            </Form-item>
          </Col>
          <Col span="4" :offset="2">
            <Button type="info"@click.native="clear" >清空</Button>
            <Button type="success" @click.native="getCityList">搜索</Button>
            <Button type="warning">导出</Button>
          </Col>
      </Row>
    </Form>
    <Table stripe :columns="columns1" :data="dataTable"></Table>
    <Page class-name="pageBox" :total="pageObj.total" :page-size="formData.limit" @on-change="nextPage" show-elevator></Page>
    <div class="clear"></div>
  </div>
</template>

<script>
  import GX from '../../utils/gx.js'
  import navBar from '../../components/common/navBar'
  export default {
    data () {
      return {
        columns1: [
          {
            title: '序号',
            key: 'id',
            sortable: true
          },
          {
            title: '订单号',
            key: 'orderNo',
            sortable: true
          },
          {
            title: '城市',
            key: 'city',
            sortable: true
          },
          {
            title: '车牌号',
            key: 'plate',
            sortable: true
          },
          {
            title: '车型',
            key: 'car_type',
            sortable: true
          },
          {
            title: '手机号',
            key: 'phone',
            sortable: true
          },
          {
            title: '取车网点名称',
            key: 'start_garage',
            sortable: true
          },
          {
            title: '还车网点名称',
            key: 'end_garage',
            sortable: true
          },
          {
            title: '订单状态',
            key: 'order_state',
            sortable: true
          },
          {
            title: '订单金额',
            key: 'totalMoney',
            sortable: true
          },
          {
            title: '支付状态',
            key: 'payment',
            sortable: true
          },
          {
            title: '已抵扣金额',
            key: 'discountMoney',
            sortable: true
          },
          {
            title: '时长',
            key: 'usingLength',
            sortable: true
          },
          {
            title: '开始时间',
            key: 'startTime',
            sortable: true
          },
          {
            title: '结束时间',
            key: 'endTime',
            sortable: true
          },
          {
            title: '操作',
            key: 'action',
            fixed: 'right',
            render (h, params) {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      window.location.href = '/order/detail/' + params.row.id
                    }
                  }
                }, '详情'),
                h('Icon', {
                  props: {
                    type: 'trash-a',
                    size: '22'
                  }
                })
              ])
            }
          }
        ],
        dataTable: [],
        pageObj: {
          total: 1
        },
        formData: {
          page: 1,
          limit: 20,
          city_id: '',
          endGarageID: '',
          end_time: '',
          orderNo: '',
          orderStateID: '',
          phone: '',
          plate: '',
          startGarageID: '',
          start_time: ''
        }
      }
    },
    mounted () {
      // this.getCityList()
    },
    methods: {
      getCityList () {
        if(this.formData.orderNo===""){
          alert("请输入订单编号")
        }if(this.formData.orderNo==="001"){
          this.dataTable=[{
            id:"1",
            orderNo:"001",
            city:"北京",
            plate:"123456",
            car_type:"豪华车型",
            phone:"18174019119",
            start_garage:"aaa",
            end_garage:"ccc",
            order_state:"已确认",
            totalMoney:"已支付",
            payment:"20",
            discountMoney:"15",
            usingLength:"20分钟",
            startTime:"10：30",
            endTime:"10：50",
          }]
        }if(this.formData.orderNo!=="001"){
          alert("未查询到数据")
        }
        this.formData.orderNo=""
        // GX.getJson('/backend/orders', this.formData, (res) => {
        //   if (res.result === 0) {
        //     this.dataTable = res.content.data
        //     this.pageObj.total = res.content.total
        //     this.pageObj.current_page = res.content.current_page
        //     this.pageObj.per_page = parseInt(res.content.per_page)
        //   } else {
        //     this.$Message.warning(res.content.message)
        //   }
        // })
      },
      clear(){
        this.dataTable =  ''
      },
      nextPage (page) {
        this.formData.page = page
        this.getCityList()
      }
    },
    components: {
      navBar
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
