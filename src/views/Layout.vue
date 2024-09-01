<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { ArrowDown } from '@element-plus/icons-vue'
import avatar from '@/assets/default.png'
// 用户条目点击事件
import router from "@/route/index.js";
const handleCommand = (command)=>{
  if (command === 'logout'){
    router.push('/')
  }else {
    router.push('/user/' + command)
  }

}
</script>

<template>
  <div class="common-layout">
  <el-container>
<!--    左边菜单栏-->
    <el-aside style="background-color: gray; height: 100vh;width: 200px">
      <el-menu
          active-text-color="gold"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          text-color="#fff"
          router
      >

        <el-menu-item index="/article/category">
          <el-icon><icon-menu /></el-icon>
          <span>文章分类</span>
        </el-menu-item>
        <el-menu-item index="/article/manage">
          <el-icon><setting /></el-icon>
          <span>文章管理</span>
        </el-menu-item>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><location /></el-icon>
            <span>个人中心</span>
          </template>
          <el-menu-item index="/user/info">基本资料</el-menu-item>
          <el-menu-item index="/user/avatar">更换头像</el-menu-item>
          <el-menu-item index="/user/resetpassword">重置密码</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
<!--    右边主内容区-->
    <el-main style="margin: 0;padding: 0">
      <div class="common-layout">
        <el-container style="height: 100vh">
<!--          右边主内容区头部-->
          <el-header class="header">
            <div>欢迎你：</div>
            <el-dropdown @command="handleCommand">
    <span class="avatar">
      <el-avatar :src="avatar"/>
    </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="info">基本资料</el-dropdown-item>
                  <el-dropdown-item command="avatar">更换头像</el-dropdown-item>
                  <el-dropdown-item command="resetpassword">重置密码</el-dropdown-item>
                  <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-header>
<!--          中间区域-->
          <el-main>
            <router-view/>
          </el-main>
<!--          底部区域-->
          <el-footer style="background-color: pink">文章系统 ©2024 Created by 欧树波</el-footer>
        </el-container>

      </div>

    </el-main>
  </el-container>
  </div>
</template>

<style scoped>
.header{
  display: flex;
  justify-content: space-between;
  background-color: pink;
  align-items: center;
}
.header .avatar:focus{
  outline: none;
}
</style>