<template>
  <div class="container">
    <div id="login">
      <dl class="list">
          <dd class="nav">
              <ul class="taba taban samfix noslide" data-com="tab">
                  <li class="active" tab-target="normal-login-form" gaevent="imt/login/tab/normal">
                    <a class="react">美团账号登录</a>
                  </li>
                  <li tab-target="quick-login-form" gaevent="imt/login/quickBuy/">
                    <a class="react">手机验证登录</a>
                  </li>
                    <div class="slide" style="left: 20px; width: 355px;"></div>
               </ul>
          </dd>
      </dl>
      <form id="normal-login-form" action="//i.meituan.com/account/login2" autocomplete="off" method="post" style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);">
            <dl class="list list-in"><dd class="visibale"><dl>
                <dd class="dd-padding kv-line-r">
                    <img class="login-icon" src="https://ms0.meituan.net/touch/img/account/login/icon_login_user@2x.png">
                        <input id="username" class="input-weak J-login-name J-input J-account" type="text" placeholder="账户名/手机号/Email" name="email" value="" required="">
                    <div class="to-del J-to-del" style="display: none"></div>
                </dd>
                <ul class="tel-select J-select-user J-select" style="display: none">
                </ul>
                <dd class="dd-padding kv-line-r">
                    <img class="login-icon" src="https://ms0.meituan.net/touch/img/account/login/icon_login_password@2x.png">
                    <input id="password" class="input-weak J-input" type="password" placeholder="请输入您的密码" name="password" required="">
                    <div class="to-del J-to-del" style="display: none"></div>
                </dd>
            </dl></dd></dl>

            <div class="btn-wrapper">
<button type="submit" gaevent="imt/login/normal" class="btn btn-larger btn-block disabled mj_login login-btn">登录</button>
            </div>
            <input type="hidden" name="touchEvents">
            <input type="hidden" name="extraFingerPrint">
            <div class="forget">
                <a class="link" href="https://passport.meituan.com/useraccount/retrievepassword">忘记密码</a>
            </div>
            <input type="hidden" name="requestCode">
            <input type="hidden" name="responseCode">
        </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
dl.list:first-child {
    margin: 0;
    border-top: 0;
}
dl {
    display: block;
    margin-block-start: 50px;
    margin-block-end: 50px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
dl.list dt:last-child, dl.list dd:last-of-type {
    border-bottom: 0;
}
dl.list dt, dl.list dd {
    margin: 0;
    /* border-bottom: 1px solid #d6d6d6; */
    overflow: hidden;
    font-size: inherit;
    font-weight: 400;
    position: relative;
}
.nav {
    text-align: center;
}
.taba {
    display: -webkit-box;
    display: -ms-flexbox;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    border-bottom: 4px solid #d6d6d6;
}
ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.taba li {
    display: block;
    text-align: center;
    -webkit-box-flex: 1;
    /* -ms-flex: 1; */
    position: relative;
}
.taba .slide {
    position: absolute;
    bottom: -4px;
    border-bottom: 4px solid #df2d2d;
    /* -webkit-transition: left .2s ease-in; */
}
form {
    display: block;
    margin-top: 0;
}
body {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1;
    color: #333;
    background-color: #f8f8f8;
}
dl.list:first-child {
    margin: 0;
    border-top: 0;
}
.btn-wrapper {
    margin: 14px 10px;
}
.btn-larger {
    height: 47px;
    line-height: 47px;
    font-size: 20px;
}
.btn-block {
    display: block;
    width: 100%;
}
.btn {
    /* display: inline-block; */
    margin: 0;
    text-align: center;
    /* height: .6rem; */
    padding: 0 16px;
    border-radius: 3px;
    color: #fff;
    border: 0;
    background-color: #df2d2d;
    /* font-size: .28rem; */
    vertical-align: middle;
    /* line-height: .6rem; */
    box-sizing: border-box;
    cursor: pointer;
    /* -webkit-user-select: none; */
}
input[type="hidden" i] {
    display: none;
    -webkit-appearance: initial;
    background-color: initial;
    cursor: default;
    padding: initial;
    border: initial;
}
.forget {
    display: none;
}
a {
    color: #df2d2d;
    text-decoration: none;
    outline: 0;
}
input, button, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
dl.list dd dl {
    margin: 0;
    margin-bottom: -1px;
    padding-left: 10px;
    border: 0;
}


dl.list dd dl>.dd-padding, dl.list dd dl dd>.react, dl.list dd dl>dt {
    padding-left: 0;
}
dl.list .dd-padding, dl.list dt, dl.list dd>.react {
    padding: 14px 10px;
}
.login-icon {
    display: none;
}

img {
    vertical-align: middle;
    border: 0;
}
dl.list dd>.input-weak {
    width: 100%;
    display: block;
}
input.input-weak, textarea.input-weak {
    border: 0;
    height: 30px;
    margin: -7.5px 0;
    text-indent: 5px;
    line-height: 1;
    font-size: 15px;
    border-radius: 3px;
    padding: 0;
}
.btn-larger {
    height: 47px;
    line-height: 47px;
    font-size: 20px;
}
.btn-block {
    display: block;
    width: 100%;
}
</style>
