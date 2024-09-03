<script setup>
import {ref} from "vue";
//表单数据模型
const tableData = ref([])
import {categoryListServiceApi} from "@/api/categoryService.js";
const getCategoryList = async ()=>{
  let axiosResponse = await categoryListServiceApi();
  tableData.value = axiosResponse.data
  console.log(axiosResponse.data)
}
getCategoryList()
</script>

<template>
  <el-card style="width: 100%;min-height: 100vh">
    <template #header>
      <div style="display: flex;justify-content: space-between">
        <span>文章分类</span>
        <el-button type="primary">添加分类</el-button>
      </div>
    </template>
    <el-table :data="tableData" style="width: 100%" :header-cell-style="{ color: '#0f0e0e' }">
      <el-table-column prop="id" label="序号" width="100" />
      <el-table-column prop="categoryName" label="分类名称" />
      <el-table-column prop="categoryAlias" label="分类别名" />
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column prop="updateTime" label="上次更改时间" />
      <el-table-column  label="操作" width="100"/>
      <template #empty>
        <el-empty description="没有数据" />
      </template>
    </el-table>

  </el-card>
</template>

<style scoped>
</style>