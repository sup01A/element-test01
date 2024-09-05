<script setup>
import {ref} from "vue";
//调用获得用户的文章类别方法
import {categoryListServiceApi} from "@/api/categoryService.js";
import {Delete, Edit} from "@element-plus/icons-vue";
//后段获取文章数据
import {getArticleListBySearchCondition} from "@/api/articleService.js";
//文章搜索条件数据模型
const searchArticleDataModel = ref({
  pageNum: 1,
  pageSize: 5,
  categoryId: null,
  state:null
})
//后端获得的类别信息列表
const articleCategoryData = ref([])

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
//后端获取文章总条数
const total = ref()
const tableData = ref([])
const getTableData = async ()=>{
  let axiosResponse = await getArticleListBySearchCondition(searchArticleDataModel.value);
  tableData.value = axiosResponse.data.items
  total.value = axiosResponse.data.total
}
getTableData()
//分页条变化事件
const handlePaginationChange = ()=>{
  getTableData()
}
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
      <el-table-column prop="title" label="文章标题" />
      <el-table-column prop="categoryId" label="分类" />
      <el-table-column prop="createTime" label="发表时间" />
      <el-table-column prop="state" label="状态" />
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
<!--    分页导航条-->
    <el-pagination
        v-model:current-page="searchArticleDataModel.pageNum"
        v-model:page-size="searchArticleDataModel.pageSize"
        :page-sizes="[5, 10, 15, 20]"
        :background="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handlePaginationChange"
        @current-change="handlePaginationChange"
        style="justify-content: flex-end;margin-top: 20px"

    />
  </el-card>

</template>

<style scoped>
</style>