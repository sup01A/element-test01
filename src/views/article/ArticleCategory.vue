<script setup>
import {ref} from "vue";
//表单数据模型
const tableData = ref([])
import {categoryListServiceApi} from "@/api/categoryService.js";
const getCategoryList = async ()=>{
  let axiosResponse = await categoryListServiceApi();
  tableData.value = axiosResponse.data
}
//获取分类
getCategoryList()
//添加类别弹窗
const eldialog = ref(false)
//添加类别按钮
const addButton = ()=>{
  eldialog.value = true
}
//添加文章分类数据模型
const categoryFromData = ref({
  categoryName: '',
  categoryAlias: ''
})
//添加文章分类数据模型规则
const categoryFromDataRules = ref({
  categoryName:[
    {required: true, message: '请输入类别名称',trigger: 'blur'},
    {min: 1,max: 10,message: '1-10个字符', trigger: 'blur'},
  ],
  categoryAlias:[
    {required: true, message: '请输入类别别名',trigger: 'blur'},
    {min: 1,max: 10,message: '1-10个字符', trigger: 'blur'},
  ]
})
</script>

<template>
  <el-card style="width: 100%;min-height: 100vh">
    <template #header>
      <div style="display: flex;justify-content: space-between">
        <span>文章分类</span>
        <el-button type="primary" @click="addButton">添加分类</el-button>
      </div>
    </template>
<!--    表格展示区-->
    <el-table :data="tableData" style="width: 100%" :header-cell-style="{ color: '#0f0e0e' }">
      <el-table-column prop="id" label="序号" width="100" />
      <el-table-column prop="categoryName" label="分类名称" />
      <el-table-column prop="categoryAlias" label="分类别名" />
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column prop="updateTime" label="上次更改时间" />
      <el-table-column  label="操作" width="150">
        <el-button type="primary" size="small">编辑</el-button>
        <el-button type="danger" size="small">删除</el-button>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据" />
      </template>
    </el-table>
<!--    添加文章类别弹窗-->
    <el-dialog v-model="eldialog" title="添加类别">
      <el-form :model="categoryFromData" :rules="categoryFromDataRules">
        <el-form-item prop="categoryName" label="名称">
          <el-input placeholder="请输入类别名称" v-model="categoryFromData.categoryName" minlength="1" maxlength="10"></el-input>
        </el-form-item>
        <el-form-item prop="categoryAlias" label="别名">
          <el-input placeholder="请输入类别别名" v-model="categoryFromData.categoryAlias" minlength="1" maxlength="10"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button type="info" @click="eldialog = false">取消</el-button>
        <el-button type="primary" >添加</el-button>
      </template>
    </el-dialog>
  </el-card>
</template>

<style scoped>
</style>