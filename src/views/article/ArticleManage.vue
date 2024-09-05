<script setup>
import {ref} from "vue";
//文章搜索条件数据模型
const searchArticleDataModel = ref({
  categoryId: null,
  state:null
})
//后端获得的类比信息列表
const articleCategoryData = ref()
//调用获得用户的文章类别方法
import {categoryListServiceApi} from "@/api/categoryService.js";
import {Delete, Edit} from "@element-plus/icons-vue";
const getArticleCategoryData = async ()=>{
  let axiosResponse = await categoryListServiceApi();
  articleCategoryData.value = axiosResponse.data
}
getArticleCategoryData()
//重置文章搜索条件数据模型按钮
const resetSearchArticleDataModel = ()=>{
  searchArticleDataModel.value.categoryId = null
  searchArticleDataModel.value.state = null
}
//展示区表格数据模型
const tableData = ref([])
</script>

<template>
  <el-card style="width: 100%;min-height: 100vh">
<!--    头部-->
    <template #header>
      <div style="display: flex;justify-content: space-between">
        <span>文章分类</span>
        <el-button type="primary">添加文章</el-button>
      </div>
    </template>
<!--    头部下面的条件搜索表单-->
    <el-form :inline="true" v-model="searchArticleDataModel">
      <el-form-item label="文章分类">
        <el-select
            placeholder="请选择"
            clearable
            style="width: 150px"
            v-model="searchArticleDataModel.categoryId"
        >
          <el-option v-for="item in articleCategoryData"
                     :key="item.id"
                     :label="item.categoryName"
                     :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="发布状态">
        <el-select
            placeholder="请选择"
            clearable
            style="width: 150px"
            v-model="searchArticleDataModel.state"
        >
          <el-option label="已发布" value="已发布" />
          <el-option label="草稿" value="草稿" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click="resetSearchArticleDataModel">重置</el-button>
      </el-form-item>
    </el-form>
<!--    展示数据的表格-->
    <el-table  :data="tableData" style="width: 100%" :header-cell-style="{ color: '#0f0e0e' }">
      <el-table-column prop="id" label="文章标题" />
      <el-table-column prop="categoryName" label="分类" />
      <el-table-column prop="categoryAlias" label="发表时间" />
      <el-table-column prop="createTime" label="状态" />
      <el-table-column  label="操作" width="100">
        <template #default = {row}>
          <el-button :icon="Edit" circle type="primary" ></el-button>
          <el-button :icon="Delete" circle type="danger" ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据" />
      </template>
    </el-table>
  </el-card>

</template>

<style scoped>
</style>