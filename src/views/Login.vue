<template>
    <div class="body">
        <div class="container">
            <div class="form-box" :style="{ transform: turn }">

                <div class="register-box" :class="{ hidden: isHidden }">
                    <h1>register</h1>
                    <input placeholder="请输入用户账号" type="text" v-model="registerUser.username"/>
                    <input placeholder="请输入用户密码" type="password" v-model="registerUser.password"/>
                    <input placeholder="再次确认密码" type="password" v-model="registerUser.affirmPassword"/>
                    <div :class="{ 'trickle': beginTrickle }">
                        <input type="checkbox" v-model="isChecked" class="special"/>
                        <span>我已同意
            <router-link to="">《服务条款》</router-link>
            和<router-link to="">《服务条款》</router-link>
          </span>
                    </div>
                    <button @click="register">注册</button>
                </div>

                <div class="login-box" :class="{ hidden: !isHidden }">
                    <h1>login</h1>
                    <input placeholder="请输入用户账号" v-model="loginUser.username"/>
                    <input placeholder="请输入用户密码" type="password" v-model="loginUser.password"/>
                    <div :class="{ 'trickle': beginTrickle }">
                        <input type="checkbox" v-model="isChecked" class="special"/>
                        <span>我已同意
            <router-link to="">《服务条款》</router-link>
            和<router-link to="">《服务条款》</router-link>
          </span>
                    </div>
                    <button @click="login">登录</button>
                </div>
            </div>

            <div class="con-box left">
                <img src="" alt="图片无法显示"/>
                <p>已有账号</p>
                <button id="login" @click="toLogin">去登录</button>
            </div>

            <div class="con-box right">
                <img src="" alt="图片无法显示"/>
                <p>没有账号?</p>
                <button id="register" @click="toRegister">去注册</button>
            </div>
        </div>

        <div class="xtx-login-footer">
            <div class="copyright">
                <p>
                    <a href="javascript:;">关于我们</a>
                    <a href="javascript:;">帮助中心</a>
                    <a href="javascript:;">售后服务</a>
                    <a href="javascript:;">配送与验收</a>
                    <a href="javascript:;">商务合作</a>
                    <a href="javascript:;">搜索推荐</a>
                    <a href="javascript:;">友情链接</a>
                </p>
                <p>CopyRight &copy; 绿优选</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'

let isHidden = ref(true)
let turn = ref("translateX(0%)")
let isChecked = ref(false)
let beginTrickle = ref(false)
let loginUser = reactive({username: "", password: ""})
let registerUser = reactive({username: "", password: "", affirmPassword: ""})

function toRegister() {
    turn.value = 'translateX(80%)';
    isHidden.value = !isHidden.value
}

function toLogin() {
    turn.value = 'translateX(0%)';
    isHidden.value = !isHidden.value
}

function register() {
    if (registerUser.password == registerUser.affirmPassword) {
        if (!isChecked.value) {
            beginTrickle.value = true
            setTimeout(() => {
                beginTrickle.value = false
            }, 1000)
        } else {
            //发送注册请求
        }
    } else {
        alert("密码不一致！")
    }
}

function login() {
    if (!isChecked.value) {
        beginTrickle.value = true
        setTimeout(() => {
            beginTrickle.value = false
        }, 1000)
    } else {
        //发送登录请求
    }
}

</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.body {
  height: 100vh;
  display: flex;
  flex-flow: column;
  position: relative;
  justify-content: center;
  align-items: center;
  background: linear-gradient(200deg, #f3e7e9, #e3eeff);
}

.container {
  background-color: #fff;
  width: 650px;
  height: 415px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  position: relative;
}

.form-box {
  position: absolute;
  top: -10%;
  left: 5%;
  background-color: rgb(67, 151, 82);
  width: 320px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transition: 0.5s ease-in-out;
}

.register-box,
.login-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.hidden {
  display: none;
  transition: 0.5s;
}

h1 {
  text-align: center;
  margin-bottom: 25px;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 5px;
}

input:not(.special) {
  background-color: transparent;
  width: 70%;
  color: #fff;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 10px 0;
  text-indent: 10px;
  margin: 8px 0;
  font-size: 14px;
  letter-spacing: 2px;

  &::placeholder {
    color: #fff;

    &:focus {
      color: #a262ad;
      outline: none;
      border-bottom: 1px solid #a262ad80;
      transition: 0.5s;

      &::placeholder {
        opacity: 0;
      }
    }
  }
}

.special {
  width: 20px;
  height: 20px;
  vertical-align: bottom;
}

.form-box button {
  width: 70%;
  margin-top: 35px;
  background-color: #f6f6f6;
  outline: none;
  border-radius: 8px;
  padding: 13px;
  color: #a262ad;
  letter-spacing: 2px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #a262ad;
    color: #f6f6f6;
    transition: background-color 0.5s ease;
  }
}

// .form-box button
.con-box {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &.left {
    left: -2%;
  }

  &.right {
    right: -2%;
  }

  h2 {
    color: #8e9aaf;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: 3px;
    text-align: center;
    margin-bottom: 4px;
  }

  p {
    font-size: 12px;
    letter-spacing: 2px;
    color: #8e9aaf;
    text-align: center;
  }

  span {
    color: #d3b7d8;
  }

  img {
    width: 200px;
    height: 150px;
    opacity: 0.9;
    margin: 40px 0;
  }

  button {
    margin-top: 3%;
    background-color: #fff;
    color: #a262ad;
    border: 1px solid #d3b7d8;
    padding: 6px 10px;
    border-radius: 5px;
    letter-spacing: 1px;
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: #d3b7d8;
      color: #fff;
    }
  }

}


.xtx-login-footer {
  position: absolute;
  bottom: 0;

  .copyright {
    height: 115px;
    padding-top: 40px;
    text-align: center;
    color: #999;
    font-size: 15px;

    p {
      line-height: 1;
      margin-bottom: 20px;
    }

    a {
      color: #999;
      line-height: 1;
      padding: 0 10px 0 6px;
      border-right: 1px solid #999;

      &:last-child {
        border-right: none;
      }
    }
  }
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}

.trickle {
  margin: 0;
  animation: shake 0.5s infinite;
}
</style>
