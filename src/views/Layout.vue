<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { ArrowDown } from '@element-plus/icons-vue'
import avatar from '@/assets/default.png'
</script>

<template>
  <div class="common-layout">
  <el-container>
    <el-aside style="background-color: gray; height: 100vh;width: 200px">
      <el-menu
          active-text-color="gold"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          text-color="#fff"
      >

        <el-menu-item index="1">
          <el-icon><icon-menu /></el-icon>
          <span>文章分类</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><setting /></el-icon>
          <span>文章管理</span>
        </el-menu-item>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><location /></el-icon>
            <span>个人中心</span>
          </template>
          <el-menu-item index="3-1">基本资料</el-menu-item>
          <el-menu-item index="3-2">更换头像</el-menu-item>
          <el-menu-item index="3-3">重置密码</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-main style="margin: 0;padding: 0">
      <div class="common-layout">
        <el-container>
          <el-header class="header">
            <div>欢迎你：</div>

            <el-dropdown>
    <span class="avatar">
      <el-avatar :src="avatar"/>
    </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>基本资料</el-dropdown-item>
                  <el-dropdown-item>更换头像</el-dropdown-item>
                  <el-dropdown-item>重置密码</el-dropdown-item>
                  <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-header>
          <el-main>Main</el-main>
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