<script setup>
import {
  Edit,
  Delete
} from '@element-plus/icons-vue'
import {ref} from "vue";
//表单数据模型
const tableData = ref([])
import {categoryListServiceApi} from "@/api/categoryService.js";
const getCategoryList = async ()=>{
  let axiosResponse = await categoryListServiceApi();
  tableData.value = axiosResponse.data
}
//定义变量，控制标题的展示
const title = ref('')
//获取分类
getCategoryList()
//添加类别弹窗
const eldialog = ref(false)
//添加类别按钮
const addButton = ()=>{
  title.value = '添加分类'
  eldialog.value = true
}
//添加文章分类数据模型
const categoryFromData = ref({
  id: null,
  categoryName: '',
  categoryAlias: ''
})
//清空数据模型方法
const clearCategoryFromData = ()=>{
  categoryFromData.value.id = null
  categoryFromData.value.categoryName = ''
  categoryFromData.value.categoryAlias = ''
}
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
//添加文章事件
import {addCategoryServiceApi} from "@/api/categoryService.js";
const addCategoryEvent = async ()=>{
  await addCategoryServiceApi(categoryFromData.value)
  //添加完成后再次获取数据
  await getCategoryList()
  //添加完成清空数据
  clearCategoryFromData()
  eldialog.value = false
}
//展示编辑框
const showDialog = (row)=>{
  eldialog.value = true
  title.value = '编辑分类'
  categoryFromData.value.id = row.id
  categoryFromData.value.categoryName = row.categoryName
  categoryFromData.value.categoryAlias = row.categoryAlias
}
//类别信息编辑事件
import {updateCategoryServiceApi} from "@/api/categoryService.js";
const updateCategoryEvent = async ()=>{
  await updateCategoryServiceApi(categoryFromData.value);
  //添加完成后再次获取数据
  await getCategoryList()
  //添加完成清空数据
  clearCategoryFromData()
  eldialog.value = false
}
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
      <el-table-column  label="操作" width="100">
        <template #default = {row}>
          <el-button :icon="Edit" circle type="primary" @click="showDialog(row)"></el-button>
          <el-button :icon="Delete" circle type="danger"></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据" />
      </template>
    </el-table>
<!--    添加文章类别弹窗-->
    <el-dialog v-model="eldialog" :title="title">
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
        <el-button type="primary" @click="title === '添加分类' ? addCategoryEvent() : updateCategoryEvent() ">确认</el-button>
      </template>
    </el-dialog>
  </el-card>
</template>

<style scoped>
</style>