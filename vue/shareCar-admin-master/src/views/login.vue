<template>
  <div class="hello">
   <h1>共享汽车管理系统</h1>
    <error-msg :msg="msg" ref="msg"></error-msg>
    <div class="landing">
      <div class="title">登录</div>
      <div class="login">
        <div class="item">
          <label>用户名</label>
          <i-input :form="form" :deleteBoolArr="deleteBoolArr" str="user" place="请输入用户名" v-model="user_name"></i-input>
        </div>
        <div class="item">
          <label>密码</label>
          <i-input :form="form" inputType="password" :deleteBoolArr="deleteBoolArr" str="pwd" place="请输入密码" v-model="p_word"></i-input>
        </div>
      </div>
      <div class="main-btn" @click="login"><router-link to="/main">登录</router-link></div>
    </div>
    <div class="links">
      <router-link to="/register">
        新用户注册
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      
      form: {
        user: '',
        pwd: ''
      },
      msg: '',
      msgDisplay: false,
      rule: {
        user: [
          { required: true, message: '用户名不得为空' }
        ],
        pwd: [
          { required: true, message: '密码不得为空' }
        ]
      },
      deleteBoolArr: {
        user: false,
        pwd: false
      }
    }
  },
  methods: {
    login () {
        if(this.form.user!=="yebin"||this.form.pwd!=="123456"){
            alert("用户名或密码错误")
        }
        
      let _this = this
      if (!this.validate()) return
      this.validate()
      // 登陆，是否需要加密信息
      this.$XHRpost('user/login', {
        username: this.form.user,
        password: this.form.pwd
      }, function (data) {
        _this.errorMsg(data.message)
        if (data.success) {
          // 跳转
          if (data.success) {
            // 储存用户名和密码
            _this.errorMsg('登录成功')
            // 跳转
          } else {
            _this.errorMsg(data.message)
          }
        } else {
             _this.errorMsg('登录失败，请稍后再试')
        }
      })
    }
  }
}
</script>
<style>
html,
body {
  padding: 0;
  margin: 0;
  background:#f5f5f5;
}

.msg {
  background: #000;
  color: #fff;
  text-align: center;
  line-height: 1.6rem;
  padding: 0.4rem 0;
  position: fixed;
  width: 70%;
  top: 45%;
  left: 15%;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.3rem #d8d6d4;
  z-index: 99999;
}

.fade-enter-active {
  transition: all 0.2s ease;
}

.fade-leave-active {
  transition: all 0.1s;
}

.fade-enter,
.fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

input {
  outline: none;
}

@media screen and (max-width: 720px) {
  html {
    font-size: 12px !important;
  }
}
@media screen and (min-width: 720px) {
  html {
    font-size: 12px !important;
  }

  .landing,
.links {
    max-width: 400px;
  }

  .landing {
    padding: 0 0 2rem !important;
  }

  .msg {
    max-width: 200px;
    left: calc(50% - 100px);
  }
}
.landing {
  background: #fff;
  border-radius: 5px;
  width: 90%;
  margin: calc(40vh - 7rem) auto 0;
  padding-bottom: 1.4rem;
}
.landing .title {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  color: #ff5a60;
  background: #fdfbfb;
  line-height: 3.2rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.landing .login {
  padding: 0 1rem;
}
.landing .login .item {
  line-height: 3.2rem;
  padding: 0.6rem 0 0 0.7rem;
  font-size: 0;
  border-bottom: 1px solid #ddd;
}
.landing .login .item .imgCode {
  width: 6.8rem;
  height: 2.4rem;
  vertical-align: middle;
  margin-right: 0;
}
.landing .login .item label {
  font-size: 1.1rem;
  color: #666;
  height: 2.4rem;
  line-height: 2.4rem;
  vertical-align: middle;
  display: inline-block;
  width: 24%;
}
.landing .login .item input {
  border: none;
  font-size: 1.1rem;
  height: 2.4rem;
  line-height: 2.4rem;
  width: calc(100% - 1.2rem);
  vertical-align: middle;
}
.landing .login .item .close {
  width: 1.2rem;
  height: 1.2rem;
  vertical-align: middle;
}
.landing .main-btn {
  line-height: 2.8rem;
  text-align: center;
  background: #ff5a60;
  color: #fff;
  border-radius: 0.2rem;
  font-size: 1.1rem;
  display: block;
  width: 90%;
  margin: 1.4rem auto 0;
}

.links {
  width: 90%;
  margin: 0 auto;
  text-align: right;
  line-height: 3.2rem;
}
.links a {
  padding: 0 1rem;
  color: #fff;
  text-decoration: none;
}

.default-input {
  display: inline-block;
  width: 76%;
}
h1{
    font-size: 50px;
    color:black;
    position: absolute;
    top: 200px;
    left: 675px;
}
</style>
