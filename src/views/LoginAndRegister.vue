<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import {ref} from "vue";
//两表切换
const changeTable = ref(true)
const clearFormData = ()=>{
  changeTable.value = !changeTable.value;
  loginAndRegisterFormDataModel.value.username = '';
  loginAndRegisterFormDataModel.value.password = '';
  loginAndRegisterFormDataModel.value.rePassword = ''
}
//表数据模型
const loginAndRegisterFormDataModel = ref({
  username:'',
  password:'',
  rePassword:'',
  rememberMe: false
})
//自定义规则，验证两次输入密码是否一样
const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== loginAndRegisterFormDataModel.value.password) {
    callback(new Error("两次输入密码不相同"))
  } else {
    callback()
  }
}
//表规则
const rule = ref({
  username:[
    {required: true, message:'请输入用户名', trigger: 'blur'},
    {min: 5,max: 16,message: '5-16个字符', trigger: 'blur'},
  ],
  password:[
    {required: true,message: '请输入密码',trigger: 'blur'},
    {min: 5,max: 16,message: '5-16个字符' ,trigger: 'blur'}
  ],
  rePassword:[
    {required: true, message: '确认密码不能为空', trigger: 'blur'},
    {validator: validatePass,trigger: 'blur'}
  ]
})
//登录事件
import router from "@/route/index.js";
import {loginServiceApi} from "@/api/userService.js";
//登录后返回jwt_token，使用pinia记录
import {useTokenStore} from "@/stores/token.js";
const token = useTokenStore()
const loginEvent = async ()=>{
  let axiosResponse = await loginServiceApi(loginAndRegisterFormDataModel.value.username
      ,loginAndRegisterFormDataModel.value.password
      ,loginAndRegisterFormDataModel.value.rememberMe);
  if (axiosResponse.code === 0){
    token.setToken(axiosResponse.data)
    setTimeout(()=>{
      router.push("/layout")
    })
  }
}
//注册事件
import {registerServiceApi} from "@/api/userService.js";
const registerEvent = async ()=>{
  let axiosResponse = await registerServiceApi(loginAndRegisterFormDataModel.value.username,loginAndRegisterFormDataModel.value.password);
  if (axiosResponse.code === 0){
    clearFormData()
  }
}
</script>

<template>
  <el-row>
    <el-col :span="12">
      <div class="col-1">col-1</div>
    </el-col>
    <el-col :span="6" :offset="3">
      <!--      注册表-->
      <el-form v-show="!changeTable" :model="loginAndRegisterFormDataModel" :rules="rule">
        <el-form-item><h1>注册</h1></el-form-item>
        <el-form-item prop="username">
          <el-input :prefix-icon="User" placeholder="请输入用户名" v-model="loginAndRegisterFormDataModel.username" clearable></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input :prefix-icon="Lock" type="password" placeholder="请输入密码" v-model="loginAndRegisterFormDataModel.password" clearable></el-input>
        </el-form-item>
        <el-form-item prop="rePassword">
          <el-input :prefix-icon="Lock" type="password" placeholder="再次输入密码" v-model="loginAndRegisterFormDataModel.rePassword" clearable></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" auto-insert-space @click="registerEvent">注册</el-button>
        </el-form-item>
        <el-link type="info" :underline="false" @click="clearFormData">
          < 返回
        </el-link>
      </el-form>
      <!--      登录表-->
      <el-form v-show="changeTable" :model="loginAndRegisterFormDataModel" :rules="rule">
        <el-form-item><h1>登录</h1></el-form-item>
        <el-form-item prop="username">
          <el-input :prefix-icon="User" placeholder="请输入用户名" v-model="loginAndRegisterFormDataModel.username" clearable></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input :prefix-icon="Lock" type="password" placeholder="请输入密码" v-model="loginAndRegisterFormDataModel.password" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="loginAndRegisterFormDataModel.rememberMe">记住我(2分钟)</el-checkbox>
          <el-link type="primary">忘记密码</el-link>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" auto-insert-space @click="loginEvent">登录</el-button>
        </el-form-item>
        <el-link type="info" :underline="false" @click="clearFormData">
          注册 >
        </el-link>
      </el-form>
    </el-col>
  </el-row>
</template>

<style scoped>
.col-1 {
  background-color: aqua;
  height: 100vh;
}
.col-2 {
  background-color: pink;
}
</style>
