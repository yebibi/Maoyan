<template>
  <div>
    <nav-bar title="城市管理"></nav-bar>
    <Form :label-width="80">
      <Row :gutter="16">
        <Col span="6">
          <!-- <Form-item label="城市">
            <Cascader :data="cityObj" change-on-select @on-change="handleChange"></Cascader>
            
          </Form-item> -->
        <i-select :model.sync="model1" style="width:200px">
            <i-option v-for="item in cityList" :value="item.value" key="item.id" v-model="item.label "></i-option>
        </i-select>
        </Col>
        <Col span="4" offset="4">
          <Button type="info" @click.native="getCityList">查询</Button>
          <Button type="success" @click.native="clearForm">清空</Button>
        </Col>
        <Col span="4" offset="3">
          <Button type="warning" @click.native="showAdd = true">新增</Button>
          <Button type="warning">导出</Button>
        </Col>
      </Row>
    </Form>
    <Modal v-model="showAdd" title="新增城市" @on-ok="addCity">
      <Form :label-width="80" >
        <Form-item label="城市">
          <Input v-model="name" placeholder="请输入"></Input>
        </Form-item>
        <!-- <Form-item label="城市">
          <Cascader :data="cityObj" change-on-select @on-change="handleChangeAdd"></Cascader>
        </Form-item> -->
        <Form-item label="县以下区域">
          <Input v-model="region" placeholder="请输入"></Input>
        </Form-item>
      </Form>
    </Modal>
    <Table stripe :columns="columns1" :data="dataTable"></Table>
    <Page class-name="pageBox" :total="pageObj.total" @on-change="nextPage" show-elevator></Page>
    <div class="clear"></div>
  </div>
</template>

<script>
  // import GX from '../../utils/gx.js'
  import navBar from '../../components/common/navBar'
  export default {
    data () {
      return {
        name:"",
        region:"",
         cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                  
                ],
        columns1: [
          {
            title: '序号',
            key: 'id',
            sortable: true
          },
          {
            title: '城市',
            key: 'city',
            sortable: true
          },
          {
            title: '县',
            key: 'county',
            sortable: true
          },
          {
            title: '县以下区域',
            key: 'region',
            sortable: true
          },
          {
            title: '操作人',
            key: 'operator',
            sortable: true
          },
          {
            title: '操作日期',
            key: 'operate_time',
            sortable: true
          },
           {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render (row, column, index) {
                            return `<i-button type="primary" size="small" @click="show(${index})">查看</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`;
                        }
                    }
        ],
        dataTable: [
          
        ],
        pageObj: {
          total: 1
        },
        formData: {
          city_id: '',
          limit: 20,
          page: 1
        },
        addData: {
          city_id: '',
          region: ''
        },
        cityObj: [],
        showAdd: false
      }
    },
    mounted () {
    
      // GX.getJson('/backend/regions/transform', {}, (res) => {
      //   if (res.result === 0) {
      //     this.cityObj = res.content
      //   }
      // })
      
      
    },
    methods: {
    
      clearForm(){
        this.dataTable=""
      },
      getCityList () {
          // console.log(item.label);
        this.dataTable=[{
            id:1,
            city:"北京",
            county:"朝阳",
            region:"某地",
            operator:"小明",
            operate_time:"2019-5-1",
          
          },
          {
            id:2,
            city:"北京",
            county:"东城",
            region:"某地",
            operator:"小红",
            operate_time:"2018-6-1",
          
          },
          {
            id:3,
            city:"北京",
            county:"顺义",
            region:"某地",
            operator:"小张",
            operate_time:"2019-5-10",
          
          }]
        // GX.getJson('/backend/cities', this.formData, (res) => {
        //   if (res.result === 0) {
        //     this.dataTable = res.content.data
        //     this.pageObj.total = res.content.total
        //     this.pageObj.current_page = res.content.current_page
        //     this.pageObj.per_page = parseInt(res.content.per_page)
        //   } else {
        //     this.$Message.warning(res.message)
        //   }
        // })
      
     
      
        
        // })
      },
      addCity () {
        if(this.name === "" ||this.region===""){
          alert("请填写完整信息")
        }else{
          alert("添加成功")
           this.dataTable.push({
            id:this.dataTable.length+1,
            city:this.name,
            county:this.region,
            region:"某地",
            operator:"小李",
            operate_time:"2019-5-10",
           })
        }
      //   if (this.addData.city_id === '') {
      //     this.$Message.warning('请选择城市')
      //     return
      //   }
      //   console.log(this.addData)
      // },
      // clearForm () {
      //   this.dataTable = ''
      // },
      // nextPage (page) {
      //   this.formData.page = page
      //   this.getCarList()
      // },
      // handleChange (value, selectedData) {
      //   this.formData.city_id = selectedData.pop().value
      // },
      // handleChangeAdd (value, selectedData) {
      //   this.addData.city_id = selectedData.pop().value
      // },
      // show (index) {
      //           this.$Modal.info({
      //               title: '用户信息',
      //               content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
      //           })
      //       },
      //       remove (index) {
      //           this.data6.splice(index, 1);
      //       }
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
